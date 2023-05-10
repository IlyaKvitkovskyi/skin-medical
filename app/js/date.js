
// Current date for post
const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;

document.getElementById('current-date').textContent = formattedDate;
document.getElementById('current-date-2').textContent = formattedDate;
document.getElementById('current-date-3').textContent = formattedDate;