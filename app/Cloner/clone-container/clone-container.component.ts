import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-clone-container',
  templateUrl: './clone-container.component.html',
  styleUrls: ['./clone-container.component.sass']
})
export class CloneContainerComponent implements OnInit, AfterViewInit {
  loading = true;
  constructor(private router: Router) { 
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  ngOnInit() {      
      
  }

  clickerMe(){
    alert('clicker me');
  }

  ngAfterViewInit() {
    this.router.navigate([{outlets: {actionsbar:['actions']}}]);
  }
  
}
