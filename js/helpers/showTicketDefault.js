import { listMenuTicket } from "../variables/variables.js";
import { tickets } from "../mock/tickets.js";

export function showTicketDefault() {
    let htmlList = "";

    tickets.forEach(ticket => {
        htmlList += `
            <li class="content__menu-item">
                ${ticket.titleTicket}
                <span class="content__menu-span">
                    ${ticket.amountTicket}
                </span>
            </li>
        `;
    })
    
    listMenuTicket.innerHTML = htmlList;
}