import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
interface Event {
  name: string;
  value: any;
}

@Component({
  selector: 'app-practise-dropdown',
  templateUrl: './practise-dropdown.component.html',
  styleUrls: ['./practise-dropdown.component.scss']
})
export class PractiseDropdownComponent implements OnInit {

  people: Observable<any[]>;
  selectedPeople = [];
  events: Event[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.people = this.dataService.getPeople();
  }

  onChange($event) {
    this.events = [];
    this.events.push({ name: '(change)', value: $event });
  }

}
