import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {
    todoArray = [];
    public todo: any;
  constructor() { }

  ngOnInit(): void {
  }
  addTodo(value){
    this.todoArray.push(this.todo);
    this.todo = '';
    console.log(this.todoArray);
  
  }
}
