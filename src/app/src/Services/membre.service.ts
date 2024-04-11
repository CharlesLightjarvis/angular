import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/Modeles/Membre';

@Injectable({
  providedIn: 'root',
})
export class MembreService {
  tab: any[] = GLOBAL.DB.members;

  constructor(private httpClient: HttpClient) {}
  SAVE(MemberToSave: any): Observable<any> {
    //generer une requete http post
    //return  this.httpClient.post("https://localhost:8015/membres",MemberToSave)
    const member1 = {
      ...MemberToSave,
      id: Math.ceil(Math.random() * 1000),
      createdDate: new Date().toISOString(),
    };
    this.tab.push(member1);
    return new Observable((observer) => observer.next());
  }
  Delete(id: string): Observable<any> {
    //this.httpClient.delete('https://localhost:4200//$(id)')
    this.tab = this.tab.filter((item) => item.id != id);

    return new Observable((observer) => observer.next());
  }
  getMembreByID(id: string): Observable<Member> {
    //this.httpClient.get<Member>('https://localhost:4200/Membre/$(id)')

    return new Observable((observer) =>
      observer.next(this.tab.filter((item) => item.id == id)[0] ?? null)
    );
  }

  updateMember(idCourant: String, form: any): Observable<any> {
    const index1 = this.tab.findIndex((item) => item.id == idCourant);
    this.tab[index1] = {
      id: idCourant,
      ...form,
      createdDate: new Date().toISOString(),
    };
    return new Observable((observer) => observer.next());
  }
}
