// 拼接+拆分链表，空间复杂度O(1)
var copyRandomList = function (head) {
	if (!head) return head
	let node = head

	// 复制节点，将新节点放到原节点后面
	while (node) {
		node.next = new Node(node.val, node.next)
		node = node.next.next
	}

	node = head
	// 构建新节点的random指向
	while (node) {
		if (node.random !== null) node.next.random = node.random.next
		node = node.next.next
	}

	// 拆分链表
	let newNode = head.next,
		res = newNode
	node = head
	while (node.next && newNode.next) {
		node.next = node.next.next
		newNode.next = newNode.next.next
		node = node.next
		newNode = newNode.next
	}
	node.next = null

	// 返回新链表的头结点
	return res
}
