import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('person') person: string = "";

  @Output('voted') voted = new EventEmitter<string>();

  @Input('lastVoted') lastVoted: boolean = false;
}
