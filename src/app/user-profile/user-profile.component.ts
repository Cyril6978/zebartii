import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
User = {
  name : "Doe",
  firstName : "John",
  age : 25,
  quote : "",
  photo : "https://randomuser.me/api/portraits/lego/2.jpg",
  isThisAgeIsVisible : true
}
constructor (){}
affiche(){
   this.User.isThisAgeIsVisible =! this.User.isThisAgeIsVisible
  }};
  const User1 = new UserProfileComponent
