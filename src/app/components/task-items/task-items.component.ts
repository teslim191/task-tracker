import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css'],
})
export class TaskItemsComponent implements OnInit {
  // all tasks
  tasks!: Task[];
  // @Input() task!: Task
  // @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter
  faTimes = faTimes;

  constructor(private taskServices: TaskService) {}
  ngOnInit(): void {
    this.taskServices.getTasks().subscribe((task) => (this.tasks = task));
  }
  // delete a task
  onDelete(task: Task) {
    this.taskServices
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  //toggle reminder
  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.taskServices.updateReminder(task).subscribe()
  }

  //add task
  addTask(task: Task){
    this.taskServices.addTask(task).subscribe((task) => this.tasks.push(task))
  }

}
