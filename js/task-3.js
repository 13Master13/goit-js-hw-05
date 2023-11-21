const profile = {
	username: 'Jacob',
	playtime: 300,
	changeUsername(newName) {
		this.username = newName
	},
	updatePlayTime(hours) {
		this.playtime += hours
	},
	getInfo() {
		return `${this.username} has ${this.playtime} active hours!`
	},
}
