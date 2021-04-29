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

  save(data: any): Observable<Setor> {
    return !data.id
      ? this.http
        .post<Setor>(this.API_URL, data)
        .pipe(map((data) => data))
      : this.http
        .put<Setor>(`${this.API_URL}/${data.id}`, data)
        .pipe(map((data) => data));
  }

  read(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.API_URL).pipe(
      map((obj) => obj)
    );
  }

  delete(id: number): Observable<Setor> {
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<Setor>(url).pipe(
      map((obj) => obj)
    );

  }

  // errorHandler(e: any): Observable<any> {
  //   this.showMessage('Ocorreu um erro', true);
  //   return EMPTY
  // }

}
