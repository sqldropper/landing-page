import { Component } from '@angular/core';
import { faBars,faVideoCamera} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SqlDropper';
  faBars = faBars;
  faVideoCamera= faVideoCamera;
}
