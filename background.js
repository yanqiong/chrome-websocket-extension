chrome.browserAction.onClicked.addListener(function (tab) {
    let tab2 = chrome.tabs.create({
        url: 'web/index.html'
    });
});