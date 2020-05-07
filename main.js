var form = document.querySelector("form");
var gradeForm = new GradeForm(form);
var header = document.querySelector("header");
var pageHeader = new PageHeader(header);
var table = document.querySelectorAll(".table")
var gradetable =new GradeTable(table)
var app = new App(gradetable,pageHeader);

app.start();
