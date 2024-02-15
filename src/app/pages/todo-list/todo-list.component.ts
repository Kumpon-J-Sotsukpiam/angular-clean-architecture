import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ScannedActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { initFlowbite } from 'flowbite';

import { TodosFacadeService } from '@core';
import { TodoActionTypes } from '@core/todo/store/todo.actions';
import { TodosMockDbService } from '@core/todo/mock/todos.mock';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>()

  constructor(
    public readonly todosFacadeService: TodosFacadeService,
    private readonly todosMockDbService: TodosMockDbService,
    private readonly actions$: ScannedActionsSubject
  ) {
    actions$.pipe(takeUntil(this.destroy$))
      .pipe(ofType(TodoActionTypes.createTodoFailure))
      .subscribe(action => {
        console.log("🚀 ~ AppComponent ~ constructor ~ action", action)
      })
  }

  ngOnInit(): void {
    console.log("🚀 ~ TodoListComponent ~ ngOnInit")
    initFlowbite();
    this.getTodos();
  }

  ngOnDestroy(): void {
    console.log("🚀 ~ TodoListComponent ~ ngOnDestroy")
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createTodo() {
    const todo = this.todosMockDbService.createRandomTodo()
    this.todosFacadeService.createTodo(todo)
  }

  public deleteTodo(id: string) {
    // this.todosFacadeService.deleteTodo(uuid)
  }

  private getTodos() {
    this.todosFacadeService.getTodos()
  }

}
