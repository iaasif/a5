

// seatAdded();
const addedSeatSeaction = document.getElementById('added-seat-seaction');
console.log(addedSeatSeaction);
function seatAdded() {
    addedSeatSeaction.innerHTML = "<h4> ${ticket}</h4>
        < h4 > Economoy</ >
            <h4>550</h4> ";
}

seatAdded();


const h4 = document.createElement('h4');
h4.innerHTML = ticket;



const addedSeat =
    `
<h4>${ticket}</h4>
<h4>Economoy</h4>
<h4>550</h4> )`;

console.log(addedSeat);


addedSeatSeaction.append(addedSeat);