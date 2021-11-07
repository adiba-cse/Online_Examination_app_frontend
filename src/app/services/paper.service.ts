import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { app_config } from '../config';
@Injectable({
  providedIn: 'root'
})
export class PaperService {
  url=app_config.api_url;
  constructor(private http:HttpClient) { }

  addPaper(data:any):Observable<any>{
    return this.http.post(this.url+'/paper/add',data);
  
  }
  getPapersByUser(  userid:any){
    return this.http.get(this.url+'/paper/getbyuser/'+userid);
  
  }
  getPapersById(  id:any){
    return this.http.get(this.url+'/paper/getbyid/'+id);
  
  }
  deletepaperbyId(id:any)
  {
    return this.http.delete(this.url+'/paper/delete/'+id);
  }

  addSolution(id: any, data: any){
    return this.http.put(this.url+'/paper/pushupdate/'+id, data);
  }
}
