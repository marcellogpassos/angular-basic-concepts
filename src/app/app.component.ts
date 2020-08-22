import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bem vindos ao Angular!';

  itensMenu = [
    {
      link: '',
      label: 'Home'
    },
    {
      link: 'pessoas',
      label: 'Listar Pessoas'
    },
  ];

  expanded: boolean;

}
