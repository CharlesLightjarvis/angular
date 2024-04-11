import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.doLogout().then(() => {
      this.router.navigate(['/login']);
    });
  }
  userAuth!: any;

  ngOnInit(): void {
    this.authService.getUserClaims().then((user) => {
      this.userAuth = user;
    });
  }
}
