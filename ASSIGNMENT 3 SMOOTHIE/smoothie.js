// smoothie.js

// Smoothie class to store smoothie details
class Smoothie {
    constructor(base, fruits, extras, sweetener) {
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;
        this.sweetener = sweetener;
    }

    describeSmoothie() {
        return `Your Smoothie: 
        Base: ${this.base},
        Fruits: ${this.fruits.join(", ")},
        Extras: ${this.extras.join(", ")},
        Sweetener: ${this.sweetener}`;
    }
}

// Function to capture form values and create Smoothie object
function orderSmoothie(event) {
    event.preventDefault();
    
    const form = event.target;
    const base = form.base.value;
    const fruits = Array.from(form.querySelectorAll('input[name="fruits"]:checked')).map(input => input.value);
    const extras = Array.from(form.querySelectorAll('input[name="extras"]:checked')).map(input => input.value);
    const sweetener = form.querySelector('input[name="sweetener"]:checked').value;
    
    const smoothie = new Smoothie(base, fruits, extras, sweetener);
    displaySmoothie(smoothie);
}

// Function to display the smoothie description on the page
function displaySmoothie(smoothie) {
    const smoothieDescription = document.getElementById('smoothieDescription');
    smoothieDescription.innerHTML = smoothie.describeSmoothie();
}

// Attach event listener to the form submit button
const smoothieForm = document.getElementById('smoothieForm');
smoothieForm.addEventListener('submit', orderSmoothie);
