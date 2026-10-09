document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const tableBody = document.getElementById('student-table-body');
    const errorMsg = document.getElementById('errorMsg');

    // 1. Fetching predefined student data from data.json
    fetch('./data.json')
        .then(response => {
            if(!response.ok) throw new Error("Local JSON file not found.");
            return response.json();
        })
        .then(data => {
            data.forEach(student => displayStudent(student));
        })
        .catch(error => console.log('JSON Fetch Info: ' + error.message));

    // 2. Load existing students from Local Storage
    const savedMCAStudents = JSON.parse(localStorage.getItem('mcaStudentsData')) || [];
    savedMCAStudents.forEach(student => displayStudent(student));

    // 3. Handle Form Submission
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Rokna taaki page refresh na ho

        // Get Input Values
        const rollNo = document.getElementById('rollNo').value.trim();
        const name = document.getElementById('studentName').value.trim();
        const semester = document.getElementById('semester').value;
        const ds = parseInt(document.getElementById('dsMarks').value);
        const java = parseInt(document.getElementById('javaMarks').value);
        const dbms = parseInt(document.getElementById('dbmsMarks').value);

        // Validation for Marks
        if (ds > 100 || java > 100 || dbms > 100 || ds < 0 || java < 0 || dbms < 0) {
            errorMsg.style.display = 'block';
            return;
        }
        errorMsg.style.display = 'none';

        // Calculation Logic
        const totalMarks = ds + java + dbms;
        const percentage = (totalMarks / 300) * 100;
        
        // MCA Passing Criteria: 40% overall & min 40 in each subject
        let resultStatus = 'Fail';
        if (percentage >= 40 && ds >= 40 && java >= 40 && dbms >= 40) {
            resultStatus = 'Pass';
        }

        // Student Object Creation
        const newStudent = {
            roll_no: rollNo,
            Name: name,
            Semester: semester,
            Total: totalMarks,
            Percentage: percentage.toFixed(2),
            Status: resultStatus
        };

        // Save to Local Storage
        savedMCAStudents.push(newStudent);
        localStorage.setItem('mcaStudentsData', JSON.stringify(savedMCAStudents));

        // Display Data dynamically
        displayStudent(newStudent);

        // Clear Form
        studentForm.reset();
    });

    // 4. Function to render rows in HTML Table
    function displayStudent(student) {
        const row = document.createElement('tr');
        
        let statusClass = student.Status === 'Pass' ? 'status-pass' : 'status-fail';

        row.innerHTML = `
            <td>${student.roll_no}</td>
            <td>${student.Name}</td>
            <td>${student.Semester}</td>
            <td>${student.Total ? student.Total : '-'}</td>
            <td>${student.Percentage ? student.Percentage + '%' : '-'}</td>
            <td class="${statusClass}">${student.Status ? student.Status : '-'}</td>
        `;
        tableBody.appendChild(row);
    }
});