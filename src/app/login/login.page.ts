import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { UserModel } from '../models/UserModel';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]})
export class LoginPage implements OnInit {

  listUser: UserModel[] = [
    new UserModel('Ricardo','Paredes','jgomez@ricparede',undefined,'USUARIO','ricparedes','ric123'),
    new UserModel('Cecilia','Prado','ceprado@mail.com',undefined,'ADMIN','cecipprado','ceci123'),
    new UserModel('Carlos','Duran','carlduran@mail.com',undefined,'USUARIO','carlduran','carlos123'),
    new UserModel('Valentina','Ramos','valramos@mail.com',undefined,'ADMIN','valeramos','valentina123')
  ];

  userLoginModal: IUserLogin = {
    username: '',
    password: ''
  };

  constructor(private route: Router) { }

  ngOnInit() {
    this.userLoginModalRestart();
  }

  userLogin(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].type == 'USUARIO'){
          let sendInfo = this.route.navigate(['/usuario'], userInfoSend);
          return true;
        }else{
          let sendInfo = this.route.navigate(['/admin'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;
    
  }

  public userLoginModalRestart(): void{
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }
}
