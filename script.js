let text = document.querySelector("textarea")
let total = document.querySelector(".total")
let remaining = document.querySelector(".remaining")
let max = 50
text.addEventListener("input", () => {
    let str = text.value
    let len = str.length  
    total.innerHTML = len
    remaining.innerHTML = max-len
})
