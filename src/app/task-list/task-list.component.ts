import { Component, NgModule, OnInit } from '@angular/core';
import { TaskPipe } from '../task.pipe';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskPipe, CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  search : string = ' ';

  tasks : any[] = [];
  router : any;

  constructor(private taskService:TaskService){ } 
    ngOnInit() : void{
      this.loadTask();    
    }

    loadTask(){
      this.taskService.getTasks().subscribe((d) => {
        this.tasks = d;
      });
    }
    onDelete(taskid : any){
      this.taskService.deleteTask(taskid).subscribe((d) => {
        this.loadTask();

      });
    }

    onEdit(taskid:any){
      this.router.navigate(['/task-edit',taskid]);
    }
}
