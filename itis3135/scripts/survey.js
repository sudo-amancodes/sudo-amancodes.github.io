const addCourse = () => {
    const coursesDiv = document.getElementById('courses');
    const courseInputs = coursesDiv.querySelectorAll('input[type="text"]');
    
    if (courseInputs.length >= 7) {
        alert("You can't add more than 7 courses.");
        return;
    }

    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.required = true;
    newCourseInput.placeholder = "ITSC-3135";

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        coursesDiv.removeChild(newCourseInput);
        coursesDiv.removeChild(deleteButton);
    });

    coursesDiv.appendChild(newCourseInput);
    coursesDiv.appendChild(deleteButton);
}

const removeCourse = () => {
    const coursesDiv = document.getElementById('courses');
    const courseInputs = coursesDiv.querySelectorAll('input[type="text"]');
    if (courseInputs.length > 1) {
        coursesDiv.removeChild(courseInputs[courseInputs.length - 1]);
        coursesDiv.removeChild(coursesDiv.lastElementChild);
    }
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').files[0];
    const imageCaption = document.getElementById('imageCaption').value;
    const personal = document.getElementById('personal').value;
    const professional = document.getElementById('professional').value;
    const academic = document.getElementById('academic').value;
    const webdev = document.getElementById('webdev').value;
    const primary = document.getElementById('primary').value;
    const courses = document.querySelectorAll('#courses input[type="text"]');
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;

    // Create a dynamic HTML structure using the received data
    const output = document.getElementById('output');
    output.innerHTML = `
    <main>
        <h2>
            Introduction
        </h2>
        <img src="${URL.createObjectURL(image)}" width="500" alt=${imageCaption}>
        <p>
            <b>Personal Background:</b> ${personal}
        </p>
        <p>
            <b>Professional Background:</b> ${professional}
        </p>
        <p>
            <b>Academic Background:</b> ${academic}
        </p>
        <p>
            <b>Background in this Subject:</b> ${webdev}
        </p>
        <p>
            <b>Primary Computer Platform:</b> ${primary}
        </p>
        <p>
            <b>Courses I'm Taking & Why:</b>
        </p>
        <ul>
            ${Array.from(courses).map(course => `<li><b>${course.value}</b> - Explanation</li>`).join('')}
        </ul>
        <p>
            <b>Funny/Interesting Item to Remember me by:</b> ${funnyThing}
        </p>
        <p>
            <b>I'd also like to Share:</b> ${anythingElse}
        </p>
    </main>
    `;

    const form = document.getElementById('form');
    form.style.display = 'none';
    const resetButton = document.getElementById('resetButton');
    resetButton.style.display = 'block';
});

function resetForm() {
    const form = document.getElementById('form');
    form.style.display = 'block';

    const output = document.getElementById('output');
    output.innerHTML = '';

    const resetButton = document.getElementById('resetButton');
    resetButton.style.display = 'none';
}