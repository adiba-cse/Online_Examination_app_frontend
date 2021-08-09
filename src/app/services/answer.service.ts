import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app_config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  url=app_config.api_url;
  constructor(private http:HttpClient) { }
  getByPapers( paperid:any){
    return this.http.get(this.url+'/answer/getbypaper/'+paperid);
  
  }
  
  addanswer(data:any)
  {
    return this.http.post(this.url+'/answer/add',data);
  }
}
