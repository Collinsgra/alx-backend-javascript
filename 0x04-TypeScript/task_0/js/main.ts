interface Student {
    firstname : string;
    lastname : string;
    age : number;
    location : string;
}

const student_one : Student = {
    firstname: "Brian",
    lastname: "Kech",
    age: 20,
    location: "Nairobi",
};
const student_two : Student = {
    firstname: "Collins",
    lastname: "Koch",
    age: 22,
    location: "Sotik",
};



const studentsList : Student[] = [student_one, student_two];

function renderTable() {
    const table = document.querySelector('#studentTable tbody');
    studentsList.forEach(element => {

        const row = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = element.firstname;
        const td2 = document.createElement('td');
        td2.textContent = element.location;

        row.appendChild(td1);
        row.appendChild(td2);
        table?.appendChild(row);
    });
}

renderTable();
