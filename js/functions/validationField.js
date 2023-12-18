import { tickets } from "../mock/tickets.js";
import { buttonTicket, inputAmount, inputPlace } from "../variables/variables.js";

export function validationField() {
    let checkField = inputAmount.value;

    if (checkField == "" && checkField <= 0) {
        buttonTicket.setAttribute("disabled", true);
    } else {
        buttonTicket.removeAttribute("disabled");
    }

    if (checkField <= 0) {
        buttonTicket.setAttribute("disabled", true);
    }

    tickets.forEach(ticket => {
        if (inputPlace.value == ticket.idTicket && inputAmount.value > ticket.amountTicket) {
            buttonTicket.setAttribute("disabled", true);
        }
    });

}

inputAmount.addEventListener("input", validationField);