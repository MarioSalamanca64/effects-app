import { Component,inject,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit{

  usuarios:Usuario[] = [];
  loading:boolean = false;
  error:any;
  
  //public usuarioService = inject(UsuarioService);
  private store = inject(Store<AppState>);


  ngOnInit(){

    this.store.select('usuarios').subscribe(({users, loading,error}) => {
      this.usuarios = users;
      this.loading  = loading;
      this.error    = error;
      console.log(loading)
    });

    this.store.dispatch(cargarUsuarios())

    // this.usuarioService.getUsers().subscribe((users:any) => {
    //   console.log(users)
    //   this.usuarios = users;
    // });
  }

}
