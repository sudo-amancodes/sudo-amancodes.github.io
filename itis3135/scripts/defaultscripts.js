const getCurrentData = () => {
    const current = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    const hour = current.getHours();
    const minute = current.getMinutes();
    const ampm = hour >= 12 ? 'pm' : 'am';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute < 10 ? '0' + minute : minute;
    return `${formattedHour}:${formattedMinute}${ampm} on ${current.toLocaleDateString('en-US', options)}`;
}

const dt_element = document.getElementById('date-time');

dt_element.textContent = `Today is ${getCurrentData()}`;


document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const feeling = document.getElementById('feeling').value;

    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = `<p>Waghchoure Corporation welcomes you, ${name}!</p><p>We're glad you are doing ${feeling}!</p>`;
});

const favoritenum = () => {
    const userInput = document.getElementById('number').value;

    const number = Math.abs(Math.round(parseFloat(userInput)));

    const gons = ["henagon", "bigon", "trigon", "quadrilateral","petagon", "hexagon","heptagon", "octagon", "enneagon", "decagon"];

    if (number>=0 && number<11) {
        alert(`The polygon with ${number} sides is called a ${gons[number-1]}.`);
    } else {
        alert("Please enter a number between 0 and 10."); 
    }
}

let sleeping = false;
const insult = () => {
    if (sleeping == false){
        alert("You must be a magician, because whenever I look at you, everyone else disappears.");
    }
    else{
        alert('Wallaby is Asleep');
    }
}

const feed = () => {
    if (sleeping == false){
    alert("Grrr, You're providing a feast!");
    }
    else{
        alert('Wallaby is Asleep');
    }
}

const sleep = () =>{
    if (sleeping == false){
            sleeping = true;
            alert("Time to get some rest and recharge!");
    }
    else{
        alert('Wallaby is Already Asleep');
    }
}

const wakeup = () => {
    if (sleeping == true){
        alert("Ahh, that was a great nap");
        sleeping = false;

    }
    else{
        alert('Wallaby is Already Awake');
    }
}

const entertain = () => {
    if (sleeping == false){
        alert("Get ready for some fun and entertainment!");
    }
    else{
        alert('Wallaby is Asleep');
    }
}