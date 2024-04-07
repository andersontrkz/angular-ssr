import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input()
  public user!: User;
 
  constructor(private router: Router) { }

  redirectToUserDetails(userId: number) {
    this.router.navigate([`/user-details/${userId}`]);
  }
}
