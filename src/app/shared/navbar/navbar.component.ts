import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  private router = inject(Router);


irUsuario(id:string){
  if(!id){
    return
  }

  this.router.navigate(['/usuario',id])
}

}
