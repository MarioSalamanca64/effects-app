import { Component,inject,OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit{

  usuarios:Usuario[] = [];
  
  public usuarioService = inject(UsuarioService);

  ngOnInit(){
    this.usuarioService.getUsers().subscribe((users:any) => {
      console.log(users)
      this.usuarios = users;
    });
  }

}
