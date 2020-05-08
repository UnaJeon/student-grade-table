
var form = document.querySelector("form");
var gradeForm = new GradeForm(form);
var header = document.querySelector("header");
var pageHeader = new PageHeader(header);
var table = document.querySelectorAll(".table")
var gradetable =new GradeTable(table,pElement)
var pElement = document.querySelector("p")
var app = new App(gradetable,pageHeader,gradeForm);

app.start();
