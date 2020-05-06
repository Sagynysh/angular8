import { Component, OnInit } from '@angular/core'; 
import {TodosService} from '../share/todos.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public loading = true
	public searchString = ''

  constructor(public todosService:TodosService) { }

  ngOnInit(): void {
  	this.todosService.fetchTodos()
  	.pipe(delay(500))
  	.subscribe(()=>{
  		this.loading = false 
  	})
  }

  onChange(id:number){
  	console.log(id)
  	this.todosService.onToggle(id)

  }

  removeToDo(id:number){
		this.todosService.removeToDo(id) 
	}

}
