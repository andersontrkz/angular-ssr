import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCardListComponent } from '../../components/user-card-list/user-card-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserCardListComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {  
  constructor(private httpClient: HttpClient) { }

  data: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.get(`https://reqres.in/api/users?page=1&per_page=20`).subscribe(response => {
      this.data = response;      
    });
  }
}
