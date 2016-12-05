; (function (win) {
    win.openNativeApp = function (agreement, download) {

        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = agreement
        document.body.appendChild(iframe)
        setTimeout(function () {
            document.body.removeChild(iframe)
            location.href = download
        }, 2000)
    }
})(window)