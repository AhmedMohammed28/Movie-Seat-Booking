// Load ui stored in local storage
let l = JSON.parse(localStorage.getItem("Movie")); // get the classes of the seats divs
let seats = document.querySelectorAll(".seat"); // select the seats from the DOM
if (l !== null) {
    seats.forEach((seat, index) => {
        seats[index].className = l[index]; // Assign the className from the local Storage to the DOM
    });
    let movie = JSON.parse(localStorage.getItem("name")); // Get the value of the selected movie
    let selectedSeats = document.querySelectorAll(".selected"); //selected seats
    let seatsNumber = document.querySelector(".seat-number");
    seatsNumber.textContent = `${selectedSeats.length - 1}`; // number of selected seats (subtract the seat in the instructions)
    let seatsPrice = document.querySelector(".seat-price");
    seatsPrice.textContent = `${
        Number(selectedSeats.length - 1) * Number(movie)
    }`;
}

// Add event lestener to all seats
seats.forEach((seat, index) => {
    if (index >= 3 && !seat.classList.contains("occupied")) {
        seat.addEventListener("click", bookSeat);
    }
});
document.querySelector("select").addEventListener("change", changeMovie);

// When changing the movie we calculate the number of seats and the price
function changeMovie() {
    let movie = document.querySelector("#movie").value;
    let selectedSeats = document.querySelectorAll(".selected");
    let seatsNumber = document.querySelector(".seat-number");
    seatsNumber.textContent = `${selectedSeats.length - 1}`;
    let seatsPrice = document.querySelector(".seat-price");
    seatsPrice.textContent = `${
        Number(selectedSeats.length - 1) * Number(movie)
    }`;
    // Adding the movie to th local storage
    localStorage.setItem("name", JSON.stringify(movie));

    // save the selected seats to local storage
    seats = document.querySelectorAll(".seat");
    let arr = [];
    seats.forEach((seat) => {
        arr.push(seat.className);
    });
    localStorage.setItem("Movie", JSON.stringify(arr));
}

function bookSeat(e) {
    if (!e.target.classList.contains("selected")) {
        // Add selected class to the selected div then calculate the seats number and the cost
        let movie = document.querySelector("#movie").value;
        e.target.classList.add("selected");
        let selectedSeats = document.querySelectorAll(".selected");
        let seatsNumber = document.querySelector(".seat-number");
        seatsNumber.textContent = `${selectedSeats.length - 1}`;
        let seatsPrice = document.querySelector(".seat-price");
        seatsPrice.textContent = `${
            Number(selectedSeats.length - 1) * Number(movie)
        }`;
        // Adding the movie to th local storage
        localStorage.setItem("name", JSON.stringify(movie));

        // save the selected seats to local storage
        seats = document.querySelectorAll(".seat");
        let arr = [];
        seats.forEach((seat) => {
            arr.push(seat.className);
        });
        localStorage.setItem("Movie", JSON.stringify(arr));
    } else {
        // remove the selected class from the selected div if it has the selected class
        let movie = document.querySelector("#movie").value;
        e.target.classList.remove("selected");
        let selectedSeats = document.querySelectorAll(".selected");
        let seatsNumber = document.querySelector(".seat-number");
        seatsNumber.textContent = `${selectedSeats.length - 1}`;
        let seatsPrice = document.querySelector(".seat-price");
        seatsPrice.textContent = `${
            Number(selectedSeats.length - 1) * Number(movie)
        }`;
        // Adding the movie to th local storage
        localStorage.setItem("name", JSON.stringify(movie));

        // save the selected seats to local storage
        seats = document.querySelectorAll(".seat");
        let arr = [];
        seats.forEach((seat) => {
            arr.push(seat.className);
        });
        localStorage.setItem("Movie", JSON.stringify(arr));
    }
}
