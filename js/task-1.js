function isEnoughCapacity(products, containerSize) {
	let totalProducts = 0
	for (const count of Object.values(products)) {
		totalProducts += count
	}
	return totalProducts <= containerSize
}
