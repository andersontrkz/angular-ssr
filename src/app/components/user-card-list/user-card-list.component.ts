import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-card-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-card-list.component.html',
  styleUrl: './user-card-list.component.scss'
})
export class UserCardListComponent implements OnInit {
  @Input()
  public users!: User[];
 
  constructor() { }

  ngOnInit(): void { }
}