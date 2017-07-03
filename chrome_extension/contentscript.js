function injectFile(fileName) {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(fileName);
    (document.head || document.documentElement).appendChild(s);
    s.onload = function () {
        s.parentNode.removeChild(s);
    };
}

injectFile('inject_files/page_handler.js');