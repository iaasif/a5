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
                // if (selectedTicket >= 1) {
                //     let nextBtnElement = document.getElementById("next");
                //     // nextBtnElement.classList.remove("disabled");
                //     console.log("here" + nextBtnElement.classList);
                // }
                // else {
                //     return;
                // }



                const addedSeatSeaction = document.getElementById('added-seat-seaction');
                // const newDiv = document.createElement('div');
                // addedSeatSeaction.append(newDiv)

                // console.log(addedSeatSeaction);


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
                let btnSeatElement = document.getElementById("btn-seat");
                btnSeatElement.innerText = selectedTicket;


                // let btnSeat = parseInt(btnSeatElement.innerText);
                // console.log(btnSeatElement.innerText);


                // btnSeat= 
                // console.log("btn seat "+ btnSeat);

                // const h4 = document.createElement("h4");
                // addedSeatSeaction.innerHTML = h4;

                // addedSeatSeaction.innerHTML = h4;
                // addedSeatSeaction.innerHTML = h4;


            }
            else {
                alert("can't select more than 4 ticket");
            }

            couponApply = document.getElementById("cupon-apply");

            couponApply.addEventListener("click", function () {
                let price = selectedTicket * 550;
                console.log("price " + price);

                priceId = document.getElementById("price-id");
                priceId.innerText = price;
                // done


                let cupon15 = "NEW15";
                let cupon20 = "Couple 20";
                let couponInputElement = document.getElementById("coupon-input");
                console.log("a" + couponInputElement.value);

                // console.log(couponInputElement);


                grandTotalElement = document.getElementById("Grand-total");
                let grandTotal = parseInt(grandTotalElement.innerText);
                // console.log(grandTotalElement);
                // console.log(grandTotalElement.innerText+2);
                console.log("grandTotal" + grandTotal);


                if (couponInputElement.value === cupon15) {
                    grandTotal = (price - (price * 0.15));
                    grandTotalElement.innerText = grandTotal;
                }
                else if (couponInputElement.value === cupon20) {
                    grandTotal = (price - (price * 0.20));
                    grandTotalElement.innerText = grandTotal;
                }
                else {
                    grandTotalElement.innerText = price;
                }


            })




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

// next button function 
// const nextBtn = document.getElementById("next");
// console.log(nextBtn);

// nextBtn.document.addEventListener('click', function () {
//     console.log("clicked");

//     let success = document.getElementById("success");

//     success.classList.remove("hidden");
//     console.log(success.classList);
//     let upperSection = document.getElementById("upper-section");
//     console.log(upperSection);
//     upperSection.classList.add("hidden");



// })




// next button function 
couponApply.classList.add("hidden");
couponInputElement.classList.add("hidden");
function nextBtn() {
    let upperSection = document.getElementById("upper-section");
    console.log(upperSection.classList);
    upperSection.classList.add("hidden");

    let success = document.getElementById("success");
    console.log(success);
    success.classList.remove("hidden");
    console.log(success.classList);
}


