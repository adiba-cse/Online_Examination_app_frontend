import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {document.body.classList.add('view-paper');
  }
  ngOnDestroy(){
    document.body.classList.remove('view-paper');

  }

}
