import { Colaborador } from './colaborador.model';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  API_URL = "https://backendplenohigorbraga.herokuapp.com/colaboradores";

  // API_URL = "http://localhost:8080/colaboradores";

  constructor(private http: HttpClient) { }

  // showMessage(msg, isError: boolean = false): void {
  //   this.snackBar.open(msg, 'X', {
  //     duration: 3000,
  //     horizontalPosition: "right",
  //     verticalPosition: "top",
  //     panelClass: isError ? ['msg-error'] : ['msg-sucess']
  //   })
  // }

  save(data: any): Observable<Colaborador> {
    return !data.id
      ? this.http
        .post<Colaborador>(this.API_URL, data)
        .pipe(map((data) => data))
      : this.http
        .put<Colaborador>(`${this.API_URL}/${data.id}`, data)
        .pipe(map((data) => data));
  }

  read(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.API_URL).pipe(
      map((obj) => obj)
    );
  }

  readById(id: number): Observable<Colaborador> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Colaborador>(url).pipe(
      map((obj) => obj)
    );
  }

  delete(id: number): Observable<Colaborador> {
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<Colaborador>(url).pipe(
      map((obj) => obj)
    );

  }


  // errorHandler(e: any): Observable<any> {
  //   this.showMessage('Ocorreu um erro', true);
  //   return EMPTY
  // }
}