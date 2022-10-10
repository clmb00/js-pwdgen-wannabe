const userName = prompt("Qual'è il tuo nome?");
const userSurname = prompt("Qual'è il tuo cognome?");
const userColor = prompt("Qual'è il tuo colore preferito?");
let randomNumber = Math.floor(Math.random() * 100);

const newPassword = `
	${userName}${userSurname}${userColor}${randomNumber}
`;

document.getElementById('textblock').innerHTML = newPassword;