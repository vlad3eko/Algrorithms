let graph = {
	a: ['b', 'c'],
	b: ['f'],
	c: ['d', 'e'],
	d: ['f'],
	e: ['f'],
	f: ['g']
}

function breadSearch(graph, start, end) {
	let queue = []
	queue.push(start)
	while (queue.length > 0) {
		const current = queue.shift()
		if (!graph[current]) {
			graph[current] = []
		}
		if(graph[current].includes(end)) {
			return true
		} else {
			queue = [...queue, ...graph[current]]
		}
	}
}

console.log(breadSearch(graph, 'a', 'g'))