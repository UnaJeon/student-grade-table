class App {
  constructor(gradeTable,pageHeader,gradeForm){
     this.handleGetGradesError =this.handleGetGradesError.bind(this);
     this.handleGetGradesSuccess=this.handleGetGradesSuccess.bind(this);
     this.gradeTable = gradeTable;
     this.pageHeader = pageHeader;
     this.gradeForm = gradeForm;
     this.createGrade = this.createGrade.bind(this);
     this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
     this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
     this.deleteGrade= this.deleteGrade.bind(this);
     this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
     this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var sum = 0;
    for(var i=0; i<grades.length; i++){
      sum+=grades[i].grade;
    }
    var average = Math.floor(sum / grades.length)
    this.pageHeader.updateAverage(average)
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
      headers:{
        "X-Access-Token": "rN3u5oPd"
      }
    })
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade)
  }
  createGrade(name,course,grade){
    console.log(name,course,grade);
    $.ajax({
      method: "POST",
      url:"https://sgt.lfzprototypes.com/api/grades",
      data:{
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
      headers:{
        "X-Access-Token": "rN3u5oPd"
      }
    })
  }
  handleCreateGradeError(error){
    console.error(error);

  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
  deleteGrade(id){
    console.log(id);
    $.ajax({
      method:"DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" +id,
      headers: {
        "X-Access-Token": "rN3u5oPd"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
