class App {
  constructor(gradeTable,pageHeader,gradeForm){
     this.handleGetGradesError =this.handleGetGradesError.bind(this);
     this.handleGetGradesSuccess=this.handleGetGradesSuccess.bind(this);
     this.gradeTable = gradeTable;
     this.pageHeader = pageHeader;
     this.gradeForm = GradeForm;
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
    var average = (sum / grades.length)
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
  }

}
