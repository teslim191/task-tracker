import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string
  day!: string
  reminder: boolean = false
  showAddTask!: boolean
  subscription!: Subscription
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  //on submitting the form
  onSubmit(){
    // check if text field is empty
    if (!this.text) {
      alert('please enter a task')
    }
    // create new task
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

   
    // clear fields after clicking on submit button
    this.text = ''
    this.day = ''
    this.reminder = false
  }



}
