; (function (win) {
    win.openNativeApp = function (setting) {

        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = setting.schema
        document.body.appendChild(iframe)
        setTimeout(function () {
            document.body.removeChild(iframe)
            location.href = setting.download
        }, 2000)
    }
})(window)