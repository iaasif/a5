// function getId(id) {
//     const getId = document.getElementById(id);
//     return getId;
// }

// console.log("getId()");
// const x = getId("A1");
// document.addEventListener("click", newfun);\


const seatLeftElement = document.getElementById('seat-left');
const seatLeft = seatLeftElement.innerText;

console.log(seatLeft);


const btns = document.querySelectorAll(".booking-btn");
console.log(btns);


let selectedTicket = 0;

for (let singleBtn of btns) {
    singleBtn.addEventListener("click", function () {
        if (selectedTicket < 4) {
            const isDisabled = singleBtn.getAttribute("disabled");
            if (!isDisabled) {
                const ticket = singleBtn.innerText;
                console.log(ticket);
                singleBtn.setAttribute("disabled", true);
                selectedTicket++;
            }
            else {
                alert("can't selet more than 4 ticket");
            }
        }
    });
}