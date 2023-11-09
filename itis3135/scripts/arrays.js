let person = [];
let salaries = [];

const addSalary = () => {
    const name = document.getElementById('employeeSelect').value;
    const salary = prompt(`Enter salary for ${name}`);
    
    if (salary && !isNaN(salary)) {
        person.push(name);
        salaries.push(Number(salary));
        displaySalary();
    } else {
        alert('Please enter a valid numeric salary.');
    }
};

const displayResults = () => {
    const averageSalary = salaries.reduce((acc, val) => acc + val, 0) / salaries.length;
    const highestSalary = Math.max(...salaries);
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Results</h2>
                            <p>Average Salary: ${averageSalary.toFixed(2)}</p>
                            <p>Highest Salary: ${highestSalary}</p>`;
};

const displaySalary = () => {
    const resultsTable = document.getElementById('results_table');
    resultsTable.innerHTML = `<tr><th>Name</th><th>Salary</th></tr>`;
    
    for (let i = 0; i < person.length; i++) {
        resultsTable.innerHTML += `<tr><td>${person[i]}</td><td>${salaries[i]}</td></tr>`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const nameField = document.getElementById('employeeSelect');
    nameField.focus();
});