import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // tasks!: Task[]
  // constructor(private taskServices: TaskService){}

  ngOnInit(): void {
    // this.taskServices.getTasks().subscribe((task) => this.tasks = task)
  }
  // deleteTask(task: Task){
  //   console.log(task)
  // }

}
