const createTree = (value) => {
    return {
        data: value,
        children: null,
        parent: null
    }
}
const addChild = (node, value) => {
    const newNode = {
        data: value,
        children: null,
        parent: node
    }
    node.children = node.children || []
    node.children.push(newNode)
    return newNode
}
const travel = (tree, fn) => {
    fn(tree)
    if (!tree.children) { return }
    for (let i = 0; i < tree.children.length; i++) {
        travel(tree.children[i], fn)
    }
}
const fn = node => {
    console.log(node.data)
}

const find = (tree, node) => {
    if (tree === node) {
        return
    } else if (tree.children) {
        for (let i = 0; i < tree.children.length; i++) {
            const result = find(tree.children[i], node)
            if (result) { return result }
        } return undefined
    } else { return undefined }
}
const removeNode = (tree, node)=>{
    const siblings = node.parent.children
    let index = 0
    for(let i=1;i<siblings.length;i++){
        index = i
    }
    siblings.splice(index,1)
}
const tree = createTree(10)
addChild(tree, 10)
addChild(tree, 20)
const node2 = addChild(tree, 30)
addChild(node2, 40)
console.log(tree)
travel(tree, fn)
removeNode(tree,node2)