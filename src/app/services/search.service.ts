import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public search(
    searchString: string | null,
    category?: string | null,
  ): Observable<[]> {
    return this.http.post<[]>(`${environment.apiUrl}/advert/search`, {
      search: searchString,
      showNonActive: true,
      category: category,
    });
  }
}
