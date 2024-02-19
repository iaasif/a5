// function getId(id) {
//     const getId = document.getElementById(id);
//     return getId;
// }

// console.log("getId()");
// const x = getId("A1");
// document.addEventListener("click", newfun);

// seat left 




const btns = document.querySelectorAll(".booking-btn");
// console.log(btns);



let selectedTicket = 0;

for (let singleBtn of btns) {
    singleBtn.addEventListener("click", function () {
        if (selectedTicket < 4) {
            const isDisabled = singleBtn.getAttribute("disabled");
            if (!isDisabled) {
                const ticket = singleBtn.innerText;
                console.log("ticket " + ticket);
                console.log("singlebtn " + singleBtn);
                singleBtn.setAttribute("disabled", true);
                selectedTicket++;
                console.log("selected ticket " + selectedTicket);
                seatLeft();



                const addedSeatSeaction = document.getElementById('added-seat-seaction');
                // const newDiv = document.createElement('div');
                // addedSeatSeaction.append(newDiv)

                console.log(addedSeatSeaction);


                function seatAdded() {
                    // addedSeatSeaction.innerHTML = "<h4> ${ticket}</h4> <h4>Economoy</h4> <h4>550</h4> "
                    const h4Element = document.createElement('h4');
                    h4Element.textContent = ticket;
                    addedSeatSeaction.appendChild(h4Element);

                    const pElemetn = document.createElement('p');
                    pElemetn.textContent = "Economy";
                    addedSeatSeaction.appendChild(pElemetn);

                    const h4Element2 = document.createElement('h4');
                    h4Element2.textContent = parseInt(550);
                    addedSeatSeaction.appendChild(h4Element2);


                }


                // newDiv.appendChild(seatAdded());
                seatAdded()

                // const h4 = document.createElement("h4");
                // addedSeatSeaction.innerHTML = h4;

                // addedSeatSeaction.innerHTML = h4;
                // addedSeatSeaction.innerHTML = h4;


            }
            else {
                alert("can't select more than 4 ticket");
            }

        }
        // singleBtn.classList.add("bg-[#1DD100]");    
    });

}


function seatLeft() {
    let seatLeftElement = document.getElementById("seat-left");
    let seatLeft = seatLeftElement.innerText
    console.log(seatLeft);
    seatLeft = seatLeft - 1;
    console.log(seatLeft);
    seatLeftElement.innerText = seatLeft;
}






