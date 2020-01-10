import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  featureSelect: string = 'recipes';

  showFeature(option: string) {
    this.featureSelect = option;
  }
}
