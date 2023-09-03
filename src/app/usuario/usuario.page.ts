import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';
import { UserModel } from '../models/UserModel';

import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuarioPage implements OnInit {

  @ViewChild(IonCard, {read: ElementRef}) card: ElementRef<HTMLIonCardElement> | undefined;

  private animation: Animation;
  
  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;

  
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private animationCtrl: AnimationController) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    // Si quiero obtener un valor por URL usando routerLink
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
    console.log("Valor obtenido desde URL: ",this.idUserHtmlRouterLink);
    
    //Inicializa animation
    this.animation = {} as Animation;
   }


  ngOnInit() {
  }
  
  public alertButtons = [
    {
    text: 'Cambiar',
    handler: (data: {pass:string}) =>{
      if (this.userInfoReceived != undefined){
        this.userInfoReceived.password=data.pass;
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
  
  

 
  
  //Funcion Ir a Login
  goHome(){
    
    this.router.navigate(['/login'])

  }
  
  //Animación ColorCard
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
