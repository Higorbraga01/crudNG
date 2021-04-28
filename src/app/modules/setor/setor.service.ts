import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Setor } from './setor.model';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  API_URL = "https://backendplenohigorbraga.herokuapp.com/setores";

  // API_URL = "http://localhost:8080/setores";

  constructor(private http: HttpClient) { }

  // showMessage(msg, isError: boolean = false): void {
  //   this.snackBar.open(msg, 'X', {
  //     duration: 3000,
  //     horizontalPosition: "right",
  //     verticalPosition: "top",
  //     panelClass: isError ? ['msg-error'] : ['msg-sucess']
  //   })
  // }

  create(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(this.API_URL, setor).pipe(
      map((obj) => obj)
    );
  }

  read(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.API_URL).pipe(
      map((obj) => obj)
    );
  }

  // errorHandler(e: any): Observable<any> {
  //   this.showMessage('Ocorreu um erro', true);
  //   return EMPTY
  // }

}
