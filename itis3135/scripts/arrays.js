let person = ["Sarah Johnson", "Michael Smith", "Jessica Davis", "David Brown"];
let salaries = [1000, 5000, 2340, 1020];


const addElement = () => {
    let current = document.getElementById("employeeSelect");
    current.innerHTML = '';

    for(let i=0; i<person.length; i++){
    let opti = document.createElement("option");
    opti.innerText = person[i];
    current.appendChild(opti);}
}
const addSalary = () => {
    let name = prompt("What is the name of person? ")
    if (typeof(name) == "string"){
        let salary = Number(prompt("What is the salary of the " + name + "? "));
        if(typeof(salary) == "number"){
        person.push(name);
        salaries.push(salary);
        addElement()
    }
        else{
            alert(typeof(salary));
        }
    }
    else{

        alert("Please enter a string...")
    }

};

const displaySalary = () => {
    clearTable()
  for (let i = 0; i < salaries.length; i++) {
    let table = document.getElementById('final_table');
    const tableRow = table.insertRow();
    tableRow.insertCell(0).innerHTML = person[i];
    tableRow.insertCell(1).innerHTML = salaries[i];
    }

};

const clearTable = () => {
    let table = document.getElementById('final_table');
    // Remove all rows except the header
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
};

const displayResults = () => {
    let results = document.getElementById("results");
    results.innerHTML = '';

    let max = [0, null];
    let average = 0
    for(let i=0; i<salaries.length; i++)
    {
        average += salaries[i];
        if (max[0]<salaries[i]){
            max = [salaries[i], person[i]];
        }
    }
    average /= salaries.length

    let title = document.createElement("h2")
    let para = document.createElement("p")
    let para2 = document.createElement("p")
    title.innerHTML = 'Salary Results:';
    para.innerHTML = 'Average: '+ average;
    para2.innerHTML = 'Max: '+ max[0];
    results.appendChild(title);
    results.appendChild(para);
    results.appendChild(para2);
    };

document.body.onload = addElement;