chrome.browserAction.onClicked.addListener(function (tab) {
    let tab2 = chrome.tabs.create({
        url: 'websocket/index.html'
    });
});