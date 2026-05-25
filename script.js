// ======================
// LOGIN SYSTEM
// ======================

const loginForm = document.getElementById("loginForm");

if (loginForm)
{
    loginForm.addEventListener("submit", function(e)
    {
        e.preventDefault();

        const studentId =
        document.getElementById("studentId").value;

        const password =
        document.getElementById("password").value;

        if (
            studentId === "STU2024001" &&
            password === "Pass@123"
        )
        {
            localStorage.setItem("loggedIn", "true");

            window.location.href = "dashboard.html";
        }
        else
        {
            document.getElementById("error-message").innerText =
            "Invalid Student ID or Password";
        }
    });
}

// ======================
// LOGOUT
// ======================

function logout()
{
    localStorage.removeItem("loggedIn");
}

// ======================
// STUDENT MANAGEMENT
// ======================

let students =
JSON.parse(localStorage.getItem("students")) || [];

const studentForm =
document.getElementById("studentForm");

if (studentForm)
{
    displayStudents();

    studentForm.addEventListener("submit", function(e)
    {
        e.preventDefault();

        const name =
        document.getElementById("name").value;

        const roll =
        document.getElementById("roll").value;

        const email =
        document.getElementById("email").value;

        const department =
        document.getElementById("department").value;

        const semester =
        document.getElementById("semester").value;

        const student =
        {
            id: Date.now(),
            name,
            roll,
            email,
            department,
            semester
        };

        students.push(student);

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        displayStudents();

        studentForm.reset();
    });
}

// DISPLAY STUDENTS

function displayStudents()
{
    const tableBody =
    document.querySelector("#studentTable tbody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    students.forEach((student) =>
    {
        tableBody.innerHTML += `
        
        <tr>

            <td>${student.name}</td>

            <td>${student.roll}</td>

            <td>${student.email}</td>

            <td>${student.department}</td>

            <td>${student.semester}</td>

            <td>

                <button onclick="editStudent(${student.id})">
                    Edit
                </button>

                <button onclick="deleteStudent(${student.id})">
                    Delete
                </button>

            </td>

        </tr>
        
        `;
    });
}

// DELETE STUDENT

function deleteStudent(id)
{
    students =
    students.filter(student => student.id !== id);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    displayStudents();
}

// EDIT STUDENT

function editStudent(id)
{
    const student =
    students.find(student => student.id === id);

    if (!student) return;

    document.getElementById("name").value =
    student.name;

    document.getElementById("roll").value =
    student.roll;

    document.getElementById("email").value =
    student.email;

    document.getElementById("department").value =
    student.department;

    document.getElementById("semester").value =
    student.semester;

    deleteStudent(id);
}

// ======================
// COURSE MANAGEMENT
// ======================

let courses =
JSON.parse(localStorage.getItem("courses")) || [];

const courseForm =
document.getElementById("courseForm");

if (courseForm)
{
    displayCourses();

    courseForm.addEventListener("submit", function(e)
    {
        e.preventDefault();

        const courseCode =
        document.getElementById("courseCode").value;

        const courseName =
        document.getElementById("courseName").value;

        const faculty =
        document.getElementById("faculty").value;

        const credits =
        document.getElementById("credits").value;

        const schedule =
        document.getElementById("schedule").value;

        const room =
        document.getElementById("room").value;

        const course =
        {
            id: Date.now(),
            courseCode,
            courseName,
            faculty,
            credits,
            schedule,
            room
        };

        courses.push(course);

        localStorage.setItem(
            "courses",
            JSON.stringify(courses)
        );

        displayCourses();

        courseForm.reset();
    });
}

// DISPLAY COURSES

function displayCourses()
{
    const tableBody =
    document.querySelector("#courseTable tbody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    courses.forEach((course) =>
    {
        tableBody.innerHTML += `
        
        <tr>

            <td>${course.courseCode}</td>

            <td>${course.courseName}</td>

            <td>${course.faculty}</td>

            <td>${course.credits}</td>

            <td>${course.schedule}</td>

            <td>${course.room}</td>

            <td>

                <button onclick="editCourse(${course.id})">
                    Edit
                </button>

                <button onclick="deleteCourse(${course.id})">
                    Delete
                </button>

            </td>

        </tr>
        
        `;
    });
}

// DELETE COURSE

function deleteCourse(id)
{
    courses =
    courses.filter(course => course.id !== id);

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

    displayCourses();
}

// EDIT COURSE

function editCourse(id)
{
    const course =
    courses.find(course => course.id === id);

    if (!course) return;

    document.getElementById("courseCode").value =
    course.courseCode;

    document.getElementById("courseName").value =
    course.courseName;

    document.getElementById("faculty").value =
    course.faculty;

    document.getElementById("credits").value =
    course.credits;

    document.getElementById("schedule").value =
    course.schedule;

    document.getElementById("room").value =
    course.room;

    deleteCourse(id);
}