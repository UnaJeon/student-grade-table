var header = document.querySelectorAll("header");
var pageHeader = new PageHeader(header);
var table = document.querySelectorAll(".table")
var gradetable =new GradeTable(table)
var app = new App(gradetable,pageHeader);

app.start();
