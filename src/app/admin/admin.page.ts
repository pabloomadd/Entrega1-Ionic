import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import type { Animation } from '@ionic/angular';
import { IonicModule, AnimationController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminPage implements OnInit {

  @ViewChild (IonCard, {read: ElementRef}) card: ElementRef <HTMLIonCardElement> | undefined;

  private animation: Animation;

  adminInfoReceived: UserModel | undefined;

  constructor(private router: Router, private animationCtrl: AnimationController) {
    this.adminInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    
    this.animation = {} as Animation;
  }

  ngOnInit() {
  }

  goHomeadmin(){
    
    this.router.navigate(['/login'])

  }

  //Cambio de Contraseña a traves de Cambiar Button
  public alertButtons = [
    {
    text: 'Cambiar',
    handler: (data: {pass:string}) =>{
      if (this.adminInfoReceived != undefined){
        this.adminInfoReceived.password=data.pass;
      }
      
    }
    }
  ];
  public alertInputs = [
    {
      name: "pass",
      placeholder: 'Nueva contraseña',
    }
  ]

  //Funcion de Animation
  ngAfterViewInit(){
    if (this.card) {
      this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');

      this.animation.play();
    }
  }  
  
  play(){
    this.animation.play();
  }

  

  stop(){
    this.animation.stop();
  }
}