import { Injectable } from '@angular/core';
import { Observable,of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


import { Task } from 'src/app/interfaces/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //create a property for the url
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }
  //to get all task
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  //delete task
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  //update task reminder
  updateReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions)
  }

  //add task
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }
}
 