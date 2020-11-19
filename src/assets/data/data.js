let employees = [
  {
    name: "Employee One",
    age: 40,
    email: "one@gmail.com",
    departments: ["Computer", "Physics"],
  },
  {
    name: "Employee Two",
    age: 10,
    email: "Two@gmail.com",
    departments: ["Computer"],
  },
  {
    name: "Employee Three",
    age: 10,
    email: "Three@gmail.com",
    departments: ["Physics", "Chemistry"],
  },
  {
    name: "Employee Four",
    age: 60,
    email: "Four@gmail.com",
    departments: ["Chemistry", "Physics"],
  },
  {
    name: "Employee Five",
    age: 70,
    email: "Five@gmail.com",
    departments: ["Computer", "Physics", "Chemistry"],
  },
  {
    name: "Employee Six",
    age: 70,
    email: "Six@gmail.com",
    departments: ["Computer", "Physics"],
  },
];

/*
Question
-------------------------------------------------------
This is the data that you are given. Now you have to design a web page that shows the data. (design given on the pdf)
1. When the page loads, it should automatically do the followings.
    => Shows the total Number of employees in the header replacing "<total_no_of_employees>"
    => The department dropdown should be auto populated without selecting anything. The options values should be takes from the above object. 
       Which means making any changes to the given array keeping the type intact should populate the dropdown. You can not show duplicate values here.
    => The SORT BY dropdown should have the options "name(a-z)","name(z-a)", "age","email". "name(a-z)" should be selected by default.
    => The table should load all the records present in the above array sorted by NAME(A-Z). Employee Name, Age, Email and Number of Departments.
    => Hovering over the no in the "Number of Departments" column, should show the departments in a comma separated values on a tooltip.

2. Events :
    => When the user clicks the search button, the table should show the data that matches the selected department (if selected)
       and whatever we have in the NAME / EMAIL text box, sorted by the sort dropdown.

*/
