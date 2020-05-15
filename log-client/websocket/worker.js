let str = ''
self.onmessage = function(event) {
  str = event.data
  let lines = str.split("\n")
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i]
		if (line.length == 0) continue
		if (lines[i+1] == ",{}]}") {
			line += ",{}]}"
			i++
		}
		let message = []
		if (line.startsWith("20")) {
      message[0] = line.slice(0,23)
		} else {
      message[0] = ''
    }
		if (line.indexOf("message") < 0) {
			message[1] = "logger"
      message[2] = line.slice(26)
      console.log(`%c ${message[0]} %c${message[1]}`, 'background: #222; color: #ddd', 'background: #222; color: pink')
      console.log(message[2])
		} else {
			line = line.slice(line.lastIndexOf(" - ") + 3)
			let left =  line.indexOf("{")
			let module = line.slice(0, left-2)
			line = line.slice(left)
			line = line.replace(/nan/g, "null")
			line = line.replace(/False/g, "false")
			line = line.replace(/True/g, "true")
			line = line.replace(/None/g, "true")
      message[1] = module
      let data = eval(`(${line})`)
      console.log(`%c ${message[0]} %c${message[1]}`, 'background: #222; color: #ddd', 'background: #222; color: #bada55')
      console.log(data)
      if (data.aid == "rtn_data") {
        data.data = merge_data(data.data)
      }
      message[2] = get_data(data)
    }
    postMessage(message)
	}
}

function merge_data(data) {
  let target = {}
  for (let i in data) {
    _merge_data(target, data[i])
  }
  return [target]
}

function _merge_data (target, source) {
  for (const property in source) {
    const value = source[property]
    const type = typeof value
    /**
     * 1 'string', 'boolean', 'number'
     * 2 'object' 包括了 null , Array, {} 服务器不会发送 Array
     * 3 'undefined' 不处理
     */
    if (['string', 'boolean', 'number'].includes(type)) {
      target[property] = value === 'NaN' ? NaN : value
    } else if (value === null) {
      delete target[property] // 服务器 要求 删除对象
    } else if (type === 'object') {
      target[property] = target[property] || {}
      _merge_data(target[property], value)
    }
  }
}

function get_data(content) {
  let data = []
	for (let key in content) {
		if (key == "quotes" && Object.keys(content[key]).length > 10) {
			data.push({
				name: "quotes:" + Object.keys(content[key]).length
			})
		} else if (key == "klines") {
			for (let symbol in content[key]) {
				for (let dur in content[key][symbol]) {
					let children = []
					for (let k in content[key][symbol][dur]) {
						if (k == 'data') {
							let keys = Object.keys(content[key][symbol][dur]['data']).sort((a,b) => parseInt(a) - parseInt(b))
							children.push(`data: ${keys[0]} - ${keys[keys.length - 1]}`)
						} else {
							children.push(`${k}: ${content[key][symbol][dur][k]}`)
						}
					}
					data.push({
            name: `klines: ${symbol} ${dur}: `,
            children: children
					})
				}
			}
		} else if (key == "ticks") {
			for (let symbol in content[key]) {
				let children = []
					for (let k in content[key][symbol]) {
						if (k == 'data') {
							let keys = Object.keys(content[key][symbol]['data']).sort((a,b) => parseInt(a) - parseInt(b))
							children.push(`data: ${keys[0]} - ${keys[keys.length - 1]}`)
						} else {
							children.push(`${k}: ${content[key][symbol][k]}`)
						}
					}
					data.push({
						name: `${symbol} ${dur}: `, children
					})
			}
		} else if (typeof(content[key]) === "object") {
			let name = key + ": "
			if (Array.isArray(content[key])) {
				name += `list(${content[key].length})`
      }
      data.push({
        name: name,
        children: get_data(content[key])
      })
		} else {
			data.push({
				name: key + ": " + content[key]
			})
		}
	}
	return data
}
