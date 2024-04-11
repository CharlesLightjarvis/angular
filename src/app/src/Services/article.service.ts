import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Article } from 'src/Modeles/Article';
import { Member } from 'src/Modeles/Membre';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  // tab: Article[] = GLOBAL.DB.articles;
  tab: Article[] = [];

  constructor(private httpClient: HttpClient) {}

  GETALL(): Observable<Article[]> {
    //envoyer requete http en mode get vers json server
    return this.httpClient.get<Article[]>('http://localhost:3000/articles');
  }

  save(ArticleToSave: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:3000/articles',
      ArticleToSave
    );
  }
}
