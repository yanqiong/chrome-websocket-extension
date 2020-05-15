var az_worker = new Worker('worker.js');
az_worker.onmessage = function(event) {
  // const tr = document.createElement("tr")
	// const td_dt = document.createElement("td")
	// const td_m = document.createElement("td")
	// const td_c = document.createElement("td")
	// tr.appendChild(td_dt)
	// tr.appendChild(td_m)
	// tr.appendChild(td_c)
	// td_dt.textContent = event.data[0]
	// td_m.textContent = event.data[1]
	// if (Array.isArray(event.data[2])) {
	// 	$(td_c).tree({
	// 		data: eval(`(event.data[2])`),
	// 		autoOpen: false
	// 	})
	// } else {
	// 	td_c.textContent = event.data[2]
	// }
	// tbody.appendChild(tr)
};

const tbody = document.querySelector("table tbody")
$(function () {
	var reader = new FileReader();
	reader.onload = function(e) {
		var contents = e.target.result;
		az_worker.postMessage(contents);
	}
	reader.onabort = function(e) {
		console.error("abort event", e)
	}
	reader.onerror = function(e) {
		console.error("error event", e)
	}
	reader.onprogress = function(e) {
		var s = document.querySelector(".progress .number")
		s.textContent = (e.loaded / e.total * 100).toFixed(2)
	}

	var fileChooser = document.querySelector("input#myInput");
	fileChooser.addEventListener('change', function (evt) {
		document.querySelector(".progress .number").textContent = 0
		$(tbody).empty()
		var f = evt.target.files[0];
		if(f) { reader.readAsText(f) }
	});
})
