let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = []

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    total.push(count)
    count = 0
}

function totalSum() {
    let sum = 0
    for (let i = 0; i < total.length; i++) {
        sum += total[i]
    }
    totalEl.textContent = sum
    return (totalEl.textContent);
}

function clearAll() {
    saveEl.textContent = ""
    totalEl.textContent = ""
    countEl.textContent = 0
    count = 0
    total = []
}
