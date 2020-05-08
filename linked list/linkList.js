const createList = value => {
    return createNode(value)
}
const appendList = (list, value) => {
    const node = createNode(value)
    let x = list
    while (x.next) {
        x = x.next
    }
    x.next = node
    return node
}
const createNode = value => {
    return {
        data: value,
        next: null
    }
}
const removeFromList = (list, node) => {
    let x = list
    let p = node
    while (x !== node) {
        p = x
        x = x.next
    }
    p.next = x.next
}
//     if(list === node){
//         list = node.next
//     }else{
//         if(list.next.next === node){
//             list.next.next = node.next
//         }else{
//             if(list.next.next.next === node){
//                 list.next.next.next = node.next
//             }
//         }
//     }
// }
const travelist = (list, fn) => {
    let x = list
    while (x !== null)
        fn(x)
    x = x.next
}
const list1 = createList(10)
const node1 = appendList(list1, 20)
const node2 = appendList(list1, 30)
console.log("list")
console.log(list1)
console.log("node2")
console.log(node2)
removeFromList(list1, node2)
