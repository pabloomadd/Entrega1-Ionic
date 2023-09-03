import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController, IonicModule } from '@ionic/angular';
import { FormsModule,
          FormGroup,
          FormControl,
          Validators,
          FormBuilder, 
          ReactiveFormsModule,
   
        } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, 
            CommonModule,
            FormsModule,
            ReactiveFormsModule
          ]
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
}
