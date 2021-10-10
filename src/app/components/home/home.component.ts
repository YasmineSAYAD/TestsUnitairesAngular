import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.message=this.userService.isAuth ?
     "Welcome"+this.userService.user.username :
     "Please log in";
  }

}
