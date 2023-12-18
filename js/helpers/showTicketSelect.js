import { tickets } from "../mock/tickets.js";
import { inputPlace } from "../variables/variables.js";

export function showTicketSelect() {
    let htmlList = "";
    
    tickets.forEach(ticket => {
        htmlList += `
            <option value="${ticket.idTicket}">${ticket.titleTicket}</option>
        `;
    });

    inputPlace.innerHTML = htmlList;
}