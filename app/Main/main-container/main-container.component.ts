import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickerMe(){
    console.log('naviagating to actions');
    this.router.navigate([{outlets: {actionsbar:'actions'}}]);
  }
}
