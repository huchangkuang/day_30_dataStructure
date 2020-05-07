const divScreen = document.querySelector("#screen")
const btnGetNumbers = document.querySelector("#getNumbers")
const btnCallNumbers = document.querySelector("#callNumbers")
const newNumber = document.querySelector("#newNumber")
const spanQueue = document.querySelector("#queue")
let n = 0;
let queue = []
btnGetNumbers.onclick = () => {
    n += 1
    queue.push(n)
    newNumber.innerText = n
    spanQueue.innerText = JSON.stringify(queue)
}
btnCallNumbers.onclick = () => {
    if (queue.length === 0) {
        alert("当前无排队人员")
        return
    }
    const m = queue.shift()
    divScreen.innerText = `请 ${m} 号就餐`
    spanQueue.innerText = JSON.stringify(queue)
}