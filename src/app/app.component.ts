import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  public sampleObj = {
    placeHolder: 'None',
    data: [],
    elementName: 'name',
    selected: {},
    className: ''
  };
  public dropdownSettings = {
    placeHolder: 'None',
    data: [
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      },
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      },
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      },
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      },
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      }
    ],
    elementName: 'name',
    selected: {},
    className: ''
  };
  public dropdownSettingsSelected = {
    placeHolder: 'None',
    data: [
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      },
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      },
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      },
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      },
      {
        id: 1,
        name: 'one'
      },
      {
        id: 2,
        name: 'two'
      },
      {
        id: 3,
        name: 'three'
      }
    ],
    elementName: 'name',
    selected: {
      id: 2,
      name: 'two'
    },
    className: ''
  };

  public onChangeEmit(ev) {
    console.log(ev);
  }
}
