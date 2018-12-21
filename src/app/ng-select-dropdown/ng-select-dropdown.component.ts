import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-select-dropdown',
  templateUrl: './ng-select-dropdown.component.html',
  styleUrls: ['./ng-select-dropdown.component.scss']
})
export class NgSelectDropdownComponent implements OnInit {
  @Input() public settings;
  @Output() public changeEmit = new EventEmitter();
  public isDropdownVisible = false;
  constructor(private cRef: ElementRef) {}

  public ngOnInit() {
    if (this.settings.selected.id) {
      this.settings.placeHolder = this.settings.selected.name;
    }
  }
  public toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  public selectValue(item) {
    this.settings.selected = item;
    this.settings.placeHolder = item[this.settings.elementName];
    this.toggleDropdown();
    alert(`Selected item is ${this.settings.placeHolder}`);
    this.changeEmit.emit(item);
  }
  public closeDropdown() {
    this.toggleDropdown();
  }

    @HostListener('document:click', ['$event'])
    public documentClick(event: MouseEvent) {
      if (this.cRef.nativeElement.contains(event.target)) {
        // console.log(event);
      } else {
        this.isDropdownVisible = false;
      }
    }
}
