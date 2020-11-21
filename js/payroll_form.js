const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});

const day = document.querySelector("#day");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const dateError = document.querySelector(".date-error");
[day, month, year].forEach((item) =>
  item.addEventListener("input", function () {
    if (month.value == 1) {
      if (isLeapYear(year.value)) {
        if (day.value > 29) {
          dateError.textContent = "Date is Invalid!";
        } else dateError.textContent = "";
      } else {
        if (day.value > 28) {
          dateError.textContent = "Date is Invalid!";
        } else dateError.textContent = "";
      }
    }
    if (
      month.value == 3 ||
      month.value == 5 ||
      month.value == 8 ||
      month.value == 10
    ) {
      if (day.value > 30) {
        dateError.textContent = "Date is Invalid!";
      } else dateError.textContent = "";
    }
  })
);

function save() {
  try {
    var name = document.querySelector("#name").value;
    var salary = document.querySelector("#salary").value;
    var gender = document.querySelector("input[name=gender]:checked").value;
    var year = document.querySelector("#year").value;
    var month = document.querySelector("#month").value;
    var day = document.querySelector("#day").value;
    var startDate = new Date(year, month, day);
    let department = new Array();
    const images = document.getElementsByName("profile");
    let profilePic=images[0];
    for(let i=0;i<images.length;i++){
        if(images[i].checked)
            profilePic=images[i].value;
    }
    var note = document.getElementById("notes").value;
    const departmentForm = document.getElementsByClassName("checkbox");
    for (let i = 0; i < departmentForm.length; i++) {
      if (departmentForm[i].checked) department.push(departmentForm[i].value);
    }
    var employee = new EmployeePayrollData(
      name,
      salary,
      gender,
      startDate,
      department,
      note,
      profilePic
    );
    alert(employee);
  } catch (error) {
    alert(error);
  }
}

const isLeapYear = (year) => {
  let result = false;
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        result = true;
      }
    } else {
      result = true;
    }
  }
  return result;
};
