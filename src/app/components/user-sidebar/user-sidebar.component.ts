import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss'
})
export class UserSidebarComponent {
  @Input()
  public user!: User;
  
  constructor(private router: Router) { }

  redirectToUserList() {
    this.router.navigate(['/user-list']);
  }
}
