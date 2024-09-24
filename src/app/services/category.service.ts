import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private apiService: ApiService) {}

  public inject(api: ApiService): Observable<ArrayBuffer> {
    return this.apiService.get(`${environment.apiUrl}/categories`);
  }
  public getCategories(): Observable<ArrayBuffer> {
    return this.apiService.get(`${environment.apiUrl}/categories`);
  }

  public getOneCategory(id: string): Observable<ArrayBuffer> {
    return this.apiService.get(`${environment.apiUrl}/categories/${id}`);
  }

  public createCategory(
    name: string,
    parentId: string,
  ): Observable<ArrayBuffer> {
    return this.apiService.post(`${environment.apiUrl}/categories`, {
      name,
      parentId,
    });
  }

  public updateCategory(
    id: string,
    name: string,
    parentId: string,
  ): Observable<ArrayBuffer> {
    return this.apiService.put(`${environment.apiUrl}/categories/${id}`, {
      name,
      parentId,
    });
  }

  public deleteCategory(id: string): Observable<ArrayBuffer> {
    return this.apiService.delete(`${environment.apiUrl}/categories/${id}`);
  }

  public importCategories(data: Array<JSON>): Observable<ArrayBuffer> {
    return this.apiService.post(`${environment.apiUrl}/categories/import`, {
      data,
    });
  }
}
