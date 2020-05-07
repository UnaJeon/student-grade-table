class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
   var tbody = document.querySelector(".tbody")
   for (var i=0; i < grades.length; i++){
     var tr =document.createElement("tr");
     var name =document.createElement("td");
     name.textContent =grades[i].name
     var course =document.createElement("td")
     course.textContent = grades[i].course
     var grade = document.createElement("td");
     grade.textContent =grades[i].grade
     tr.append(name,course,grade);
     tbody.append(tr);
   }
  }
}
