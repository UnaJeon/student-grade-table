class GradeTable{
  constructor(tableElement,noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement =noGradesElement;
  }
  updateGrades(grades){
   var tbody = document.querySelector(".tbody")
   tbody.textContent ='';
   for (var i=0; i < grades.length; i++){
     //var tr =document.createElement("tr");
     // var name =document.createElement("td");
     //name.textContent =grades[i].name
     // var course =document.createElement("td")
     //course.textContent = grades[i].course
     //var grade = document.createElement("td");
     //grade.textContent =grades[i].grade
     //tr.append(name,course,grade);
     //tbody.append(tr);
     tbody.append(this.renderGradeRow(grades[i],this.deleteGrade));
   }
   if (grades.length===0){
     pElement.classList.remove("d-none");
   }else{
     pElement.className = "d-none";
   }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data,deleteGrade){
      var tableRow=document.createElement("tr");

      var studentName =document.createElement("td");
      studentName.textContent = data.name;
      var studentCourse = document.createElement("td");
      studentCourse.textContent = data.course;
      var studentGrade= document.createElement("td");
      studentGrade.textContent = data.grade;
      var buttonData =document.createElement("td");
      var deleteButton =document.createElement("button");
      deleteButton.textContent ="DELETE"
      deleteButton.className = "btn btn-danger"

      tableRow.append(studentName,studentCourse,studentGrade,buttonData);
      buttonData.append(deleteButton);

      deleteButton.addEventListener('click',function(event){
        deleteGrade(data.id);
      })
      return tableRow;
    }
  }
