import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private PathSet = 'https://localhost:7012/api/TaskItems'

  constructor(private http:HttpClient) { }

  //get
  getTasks(){
   return this.http.get<any[]>(this.PathSet);
  }

  //Add
  addTask(task:any){
    return this.http.post(this.PathSet,task);

  }

 // Edit
  updateTask(taskid:any){
    return this.http.put(this.PathSet,taskid);

  }
  //delete

  deleteTask(taskid:any){
    return this.http.delete(this.PathSet+"/"+taskid);
     
  }
  getTask(taskid:any){
    return this.http.get(this.PathSet+"/"+taskid);

  }

  
}
