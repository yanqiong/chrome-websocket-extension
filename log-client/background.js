chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        url: 'websocket/index.html'
    });
});