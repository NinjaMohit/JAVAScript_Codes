const button = document.querySelector("#b1");
const button2 = document.querySelector("#b2");
const button3 = document.querySelector("#b3");

const span1 = document.querySelector("#display1")
const span2 = document.querySelector("#display2")


const select = document.querySelector("#s1");

select.addEventListener("change", () => {
    alert(this.value);
})

// limit.addEventListener("change", () => {
//     consol.log(this.value);
// })

const limit = parseInt(document.querySelector("#s1").value);
let winner = false;


let one = 0;
button.addEventListener("click", function () {
    if (!winner) {
        if (limit !== one) {
            one += 1;
            span1.textContent = one;
        }
        else {
            winner = true;
        }

    }

})

let two = 0;
button2.addEventListener("click", function () {
    if (!winner) {
        if (limit !== two) {
            two += 1;
            span2.textContent = two;
        }
        else {
            winner = true;
        }

    }

})