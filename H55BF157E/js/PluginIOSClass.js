document.addEventListener("plusready", function () {
    var _BARCODE = 'PluginIOSClass',
        B = window.plus.bridge;
    var PluginIOSClass =
        {
            ezFunction: function (Argus1, Argus2, Argus3, Argus4, successCallback, errorCallback) {
                var success = typeof successCallback !== 'function' ? null : function (args) {
                        successCallback(args);
                    },
                    fail = typeof errorCallback !== 'function' ? null : function (code) {
                        errorCallback(code);
                    };
                callbackID = B.callbackId(success, fail);

                return B.exec(_BARCODE, "ezFunction", [callbackID, Argus1, Argus2, Argus3, Argus4]);
            }
        };
    window.plus.PluginIOSClass = PluginIOSClass;
}, true);

