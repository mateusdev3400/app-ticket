import { tickets } from "../mock/tickets.js";

// Return the total number of available chairs
export function totalAvailableChair() {
    let quantityTotalChair = 0;

    tickets.find(ticket => {
        quantityTotalChair += ticket.amountTicket;
    })

    return quantityTotalChair;
}