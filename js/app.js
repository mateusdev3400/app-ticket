import { buttonTicket } from "./variables/variables.js";
import { buyTicket } from "./functions/buyTicket.js";
import { totalAvailableChair } from "./functions/totalAvailableChair.js";
import { showTicketSelect } from "./helpers/showTicketSelect.js";
import { showTicketDefault } from "./helpers/showTicketDefault.js";
import { validationField } from "./functions/validationField.js";

totalAvailableChair();

showTicketSelect();
showTicketDefault();

validationField();

buttonTicket.onclick = buyTicket;
