import { tickets } from "../mock/tickets.js";
import { inputPlace, inputAmount, listMenuTicket, divMensageErro } from "../variables/variables.js";

// Purchase the ticket
export function buyTicket(event) {
    event.preventDefault();

    let htmlList = "";

    tickets.forEach(ticket => {
        let totalquantityTicket = ticket.amountTicket;
        let quantityTicketWithdrawal = totalquantityTicket - (inputAmount.value);
        let updateQuantityArrayTicket = quantityTicketWithdrawal;

        if (ticket.idTicket == inputPlace.value) {
            ticket.amountTicket = updateQuantityArrayTicket;
        }

        if (ticket.amountTicket < 0) {
            ticket.statusTicket = false;
            ticket.amountTicket = 0;
        }

        if (ticket.statusTicket == false) {
            let textChairsClient = inputAmount.value > 1 ? "cadeiras" : "";
            let textChairsServer = ticket.amountTicket <= 1 ? "cadeira" : "";

            divMensageErro.innerHTML = `
                Não podemos oferecer ${inputAmount.value} ${textChairsClient}, desta forma, você confirmou apenas ${totalquantityTicket} ${textChairsServer} na região (${ticket.titleTicket})!
            `;
        }

        if (totalquantityTicket == 0) {
            divMensageErro.innerHTML = `
                Não temos cadeiras disponíveis na região ${ticket.titleTicket}
            `;
        }

        htmlList += `
            <li class="content__menu-item">
                ${ticket.titleTicket}
                <span class="content__menu-span">
                    ${ticket.amountTicket}
                </span>
            </li>`;
                
        listMenuTicket.innerHTML = htmlList;
    });

    inputAmount.value = "";
}