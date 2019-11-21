var ws = null;
var editor = null;
var connectButton = null;
var disconnectButton = null;
var sendButton = null;

var commons = [
	{
		name: 'pm',
		content: '{"aid": "peek_message"}'
	},
	{
		name: '登录',
		content: { "aid": "req_login", "bid": "S上期技术", "user_name": "abcd", "password": "1234" }
	},
	{
		name: '下单',
		content: {
			aid: "insert_order", // 下单请求
			exchange_id: "SHFE",
			instrument_id: "rb1901",
			volume_condition: "ANY",
			time_condition: 'GFD',
			hedge_flag: "SPECULATION",
			user_id: '022631',
			limit_price: 4233,
			order_id: 'abcdefg',
			direction: "BUY",
			offset: "CLOSE", // OPEN | CLOSE | CLOSETODAY
			volume: 1,
			price_type: "LIMIT",
		}
	},
	{
		name: '撤单',
		content: {
			aid: "cancel_order", // 撤单请求
			order_id: 'abcdefg',
			user_id: '022631'
		}
	},
]

$(function () {
	editor = ace.edit("editor");
	editor.getSession().setMode('ace/mode/json');
	connectButton = document.querySelector('#connectButton');
	disconnectButton = document.querySelector('#disconnectButton');
	sendButton = document.querySelector('#sendButton');
	connectButton.onclick = function () {
		var url = document.querySelector('#serverUrl').value;
		ws = new WebSocket(url);
		ws.onopen = function () {
			document.querySelector('#status').innerText = ' OPENED';
		}
		ws.onclose = function () {
			document.querySelector('#status').innerText = ' CLOSED';
		}
	}
	disconnectButton.onclick = function () {
		ws.close();
	}
	sendButton.onclick = function () {
		if (ws && ws.send) {
			ws.send(editor.getSession().getValue().trim());
		} else {
			document.querySelector('#status').innerText = url + ' CLOSED';
		}
	}
	initCommons();
});

var initCommons = function () {
	var table = document.querySelector('table#commons tbody');
	for (var i = 0; i < commons.length; i++) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		td1.innerText = commons[i].name;
		var td2 = document.createElement('td');
		td2.innerText = typeof commons[i].content == 'string' ? commons[i].content : JSON.stringify(commons[i].content, null, ' ');
		td2.contentEditable = 'true';
		var td3 = document.createElement('td');
		var btn = document.createElement('button');
		btn.innerText = 'send';
		btn.onclick = function (event) {
			var s = event.target.parentNode.previousSibling.innerText;
			ws.send(s);
		}
		td3.appendChild(btn);
		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)
		table.appendChild(tr);
	}
}
