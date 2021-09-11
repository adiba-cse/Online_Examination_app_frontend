import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PaperService } from '../services/paper.service';

@Component({
  selector: 'app-addpaper',
  templateUrl: './addpaper.component.html',
  styleUrls: ['./addpaper.component.css'],
})
export class AddpaperComponent implements OnInit {
  PaperDetails: any;
  CurrentUser: any;

  QuestionPaper: any = {
    questions: [
      {
        name: 'Question 1',
        answertype: 'text',
        answer: '',
      },
    ],
    options: {},
  };
  questionTypes: any = ['text', 'radio', 'checkbox'];

  constructor(private fb: FormBuilder, private paperService: PaperService,private router: Router) {}

  ngOnInit(): void {
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user') as string);
    this.initForm();

    document.body.classList.add('add-paper');
  }

  ngOnDestroy() {
    document.body.classList.remove('add-paper');
  }
  //   FormSubmit()
  // {console.log(this.PaperDetails.value);
  //   //this.userService.addUser(this.PaperDetails.value).subscribe((res:any)=>{console.log(res)});
  // }

  initForm() {
    this.PaperDetails = this.fb.group({
      user: this.CurrentUser._id,
      title: '',
      max_marks: '',
      course: '',
      description: '',
      answers: Array,
      created: new Date(),
    });
  }

  addQuestion() {
    this.QuestionPaper.questions.push({
      name: 'Sample Question 1',
      answertype: 'text',
      answer: '',
    });
  }
  setOptions(e: any, index: any) {
    let question = this.QuestionPaper.questions[index];
    if (
      question['answertype'] == this.questionTypes[1] ||
      question['answertype'] == this.questionTypes[2]
    ) {
      if (!question['options']) {
        this.QuestionPaper.questions[index]['options'] = [{ text: '' }];
        console.log('ya');
      }
    }

    console.log(question);
  }

  addOption(index: any) {
    this.QuestionPaper.questions[index]['options'].push({ text: '' });
  }

 

  submitForm() {
    let formdata = this.PaperDetails.value;
    formdata['data'] = this.QuestionPaper;

    console.log(formdata);

    this.paperService.addPaper(formdata).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Hurray',
        text: 'Saved Successfully',
      });
    
    });
    this.router.navigate(['/managepaper']);
  }
}
