import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'forth';

  isSubmitted: boolean = false;
  students: any[] = [];
  rowIndex: number | null = 0;

  

  studentForm: FormGroup = new FormGroup({
    studentName: new FormControl("", Validators.required ),
    studentYear: new FormControl(null, Validators.required ),
    studentContact: new FormControl(null, Validators.required ),
    studentActivity: new FormControl("", Validators.required )
  })


  submit(){
    this.isSubmitted = true;
    if (this.studentForm.valid) {
      if (this.rowIndex !== null) {
        this.students[this.rowIndex] = this.studentForm.value;
        this.rowIndex = null;
        
      } else {
        this.students.unshift(this.studentForm.value);
      }
      this.studentForm.reset();
    }
  }
  

  reset(){
    this.studentForm.reset();
  }


  updateRow( i: number ) {
    this.rowIndex = i;
    const UpdateStudent = this.students[i];
    this.studentForm.patchValue(UpdateStudent);
  }


  deleteRow( i: number ){
    this.students.splice(i, 1);
  }


}
