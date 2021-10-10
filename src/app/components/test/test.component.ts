import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
todos=[
  {name:"Todo 1"},
  {name:"Todo 2"}
];
title="Todo App"
  constructor() { }

  ngOnInit(): void {
  }
  setTodo(name:string){

  }
  getTodo(index:number){
    if(this.todos[index]){
      return this.todos[index];
    }else{
      return null;
    }

  }

}
