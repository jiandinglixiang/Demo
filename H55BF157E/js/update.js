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
            "id": 11,
            "title": "Hello H5+(2.0.1)版本更新",
            "ischeck": true,
            "appid": "HelloH5",
            "osType": "Android",
            "isconstraint": false,
            "appType": "houseservice",
            "note": "新增自动升级检测功能\\n新增分享功能演示页面\\n新增推送功能演示页面\\n",
            "url": "http://openbox.mobilem.360.cn/index/d/sid/3277711 ",
            "version": "2.0.2"
        },
        "appid": "HelloH5",
        "iOS": {
            "id": 12,
            "title": "Hello H5+(2.0.1)版本更新",
            "ischeck": true,
            "appid": "HelloH5",
            "osType": "iOS",
            "isconstraint": false,
            "appType": "houseservice",
            "note": "新增自动升级检测功能\\n新增分享功能演示页面\\n新增推送功能演示页面\\n",
            "url": "https://itunes.apple.com/cn/app/养老通/id1133051015?mt=8",
            "version": "2.0.2"
        }
    }
}
 *
 */
(function(w) {
	var servone = localStorage.getItem("__yq__rootServe");
	console.log(servone)
	if(servone === "null" || servone === null) {
		servone = "http://fj.yqinfotech.com/appkinsun/app/frame/updateAppVersion"
	} else {
		servone += "/app/frame/updateAppVersion"
	}
	var server = servone, //获取升级描述文件服务器地址
		keyUpdate = "updateCheck", //取消升级键名
		keyAbort = "updateAbort", //忽略版本键名
		checkInterval = 60*60*1000;
		//升级检查间隔，单位为ms,7天为7*24*60*60*1000=604800000, 如果每次启动需要检查设置值为0

	/**
	 * 准备升级操作
	 * 创建升级文件保存目录
	 */
	function initUpdate() {
		// 在流应用模式下不需要检测升级操作
		if(navigator.userAgent.indexOf('StreamApp') >= 0) {
			return;
		}
		// 打开doc根目录
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
		// 读取本地升级文件
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
		var curVer = plus.runtime.version,
			inf = j[plus.os.name];
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
				// 提示用户是否升级
				if(j[plus.os.name].isconstraint) {
					//强制更新
					plus.nativeUI.alert(inf.note, function(i) {
						plus.runtime.openURL(inf.url);
					}, inf.title, "立即更新");
				} else {
					//提示更新
					plus.nativeUI.confirm(inf.note, function(i) {
						if(0 == i.index) {
							plus.runtime.openURL(inf.url);
						} else if(2 == i.index) {
							//跳过此版本
							plus.storage.setItem(keyAbort, srvVer);
							plus.storage.setItem(keyUpdate, (new Date()).getTime().toString());
						} else {
							plus.storage.setItem(keyUpdate, (new Date()).getTime().toString());
						}
					}, inf.title, ["立即更新", "下次再说"]);
				}

			}else{
				console.log("不需要更新")
			}
		}
	}
    
	/**
	 * 从服务器获取升级数据
	 */
	function getUpdateData(cbk) {
		//		养老通  houseservice安享通 parent孝情通 child家政通 homemaking
		console.log(server)
		mui.ajax(server, {
			data: {
				appType: "child"
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
				}else{
					write=data.resultBody
				}
				cbk(write)
			},
			error: function(xhr, type, errorThrown) {
				console.log("获取升级数据，联网请求失败：" + JSON.stringify(xhr));  
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
		}, 15000)
	} else {
		document.addEventListener("plusready", function() {
			setTimeout(function() {
				initUpdate();
			}, 15000)
		}, false);
	}

})(window);