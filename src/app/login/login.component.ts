import { Component } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
// import {AuthService2} from '../services/auth.service'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {  }
  ngOnInit(): void {}

  email: any;
  password: any;
  connectUser() {
    // const loginData = {
    //   email: this.email,
    //   password: this.password,
    // };

    // this.authService.signIn(loginData).subscribe(authResponse => {
    //   sessionStorage.setItem('currentUser', JSON.stringify(authResponse));
    //   this.router.navigate(['home']);
    // }, error => {
    //   console.log("error ", error);
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'email ou mot de passe incorrect, Veuillez réessayer !',
    //     icon: 'error',
    //     confirmButtonText: 'OK'
    //   })
    // });

    /*à supprimer*/
    sessionStorage.setItem('currentUser', JSON.stringify({
      id: 1,
      userName: "david",
      password: "david",
      email: "david",
      role: "ADMIN"
    }))
    this.router.navigate(['home']);

  }

  goToRegister(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['register']);
  }
}
