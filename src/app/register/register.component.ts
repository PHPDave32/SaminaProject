import { Component } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  prenom:any;
  nom:any;
  email:any;
  password:any;
  confirmePass:any;
  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {}

  goToLogin(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['register']);
  }

  registerUser(){

    if (this.password !== this.confirmePass){
      Swal.fire({
        title: '',
        text: 'Les mot de passe ne sont pas conformes',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    const registerData = {
      email: this.email,
      nom: this.nom,
      prenom: this.prenom,
      role: 'user', /* rôle par defaut seul l'admin peut créer un admin */
      password: this.password,
    };

    this.authService.signIn(registerData).subscribe(authResponse => {
      sessionStorage.setItem('currentUser', JSON.stringify(authResponse));
      this.router.navigate(['home']);
    }, error => {
      console.log("error ", error);
      Swal.fire({
        title: 'Error!',
        text: 'Un problème est survenu lors du traitement, veuillez réprendre.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    });
  }

}
