; (function (win) {
    win.openNativeApp = function (agreement, download) {

        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = agreement
        document.body.appendChild(iframe)
        setTimeout(function () {
            console.log('ok')
            location.href = download
        }, 500)
    }
})(window)