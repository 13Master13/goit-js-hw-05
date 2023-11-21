const sortByDescendingFriendCount = users =>
	users.toSorted((a, b) => b.friends.length - a.friends.length)

const users = [
	{ name: 'John', friends: ['Alice', 'Bob'] },
	{ name: 'Alice', friends: ['John', 'Bob', 'Charlie'] },
	{ name: 'Bob', friends: ['Alice', 'John'] },
]
const sortedUsers = sortByDescendingFriendCount(users)
console.log(sortedUsers)
