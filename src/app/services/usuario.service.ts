import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';
  private http = inject(HttpClient);

  constructor() { }

  getUsers(){
    return this.http.get(`${this.url}/users?per_page=6`)
            .pipe(
              map((resp:any) => {
                return resp['data'];
              })
            );
  }

}
