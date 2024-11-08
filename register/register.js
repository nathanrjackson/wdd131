import { participantTemplate, successTemplate } from "./Templates.mjs"

let participantCount = 1
const addButtonElement = document.querySelector("#add")
const submitButton = document.querySelector("#submitButton")
const summary = document.querySelector("#summary")

const info = {
    adult_name: "",
    participant_count: "",
    fee_total: "",
}

function addParticipant() {
    participantCount++
    const html = participantTemplate(participantCount)
    addButtonElement.insertAdjacentHTML("beforebegin", html)
}

function submitForm(event) {
    event.preventDefault();
    
    info.participant_count = participantCount
    
    const feeTotal = totalFees()
    info.fee_total = feeTotal
    
    const adultName = document.querySelector("#adult_name").value
    info.adult_name = adultName
    
    const form = document.querySelector("form")
    form.classList.add("hide")
    
    summary.innerHTML = successTemplate(info)
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    const values = feeElements.map(input => input.valueAsNumber)
    const total = values.reduce((acc, num) => acc + num, 0)

    // once you have your total make sure to return it!
    return total
}

addButtonElement.addEventListener("click", addParticipant)
submitButton.addEventListener("click", submitForm)