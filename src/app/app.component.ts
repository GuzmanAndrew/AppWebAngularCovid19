import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'app'}
})
export class AppComponent {

  @ViewChild('main', { static: true }) public main: MainComponent;

  public darkTheme = false;
  public ssVisability = '';

  public toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.main.map.darkTheme = this.darkTheme;
    this.main.map.changeMap();
    this.main.map.changeMapSeriesBrushScale();
  }

  public onDataReceived($event) {
    this.ssVisability = $event;
  }
}
