import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing-Example';

  constructor(private router: Router) { }

  displayActions(): void{
    alert('asdf');

  }

  clickerMe(){
    //alert('clicker me');
    //console.log('naviagating to actions');
    //this.router.navigate([{outlets: {actionsbar:['actions']}}]);
  }
}
