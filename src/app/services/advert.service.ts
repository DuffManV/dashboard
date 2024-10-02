import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ISearchAdvert } from '../interfaces/ISearchAdvert';
import IProduct from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class AdvertService {
  constructor(private apiService: ApiService) {}

  public getAdverts(data: ISearchAdvert): Observable<IProduct[]> {
    return this.apiService.post(`${environment.apiUrl}/advert/search`, {
      data,
    });
  }

  public getOneAdvert(id: string): Observable<IProduct> {
    return this.apiService.get(`${environment.apiUrl}/advert/${id}`);
  }

  public createAdvert(
    name: string,
    description: string,
    cost: string,
    images: Array<string>,
    email: string,
    phone: string,
    location: string,
    categoryId: string,
  ): Observable<ArrayBuffer> {
    return this.apiService.post(`${environment.apiUrl}/advert`, {
      name,
      description,
      cost,
      images,
      email,
      phone,
      location,
      categoryId,
    });
  }

  public updateAdvert(
    id: string,
    name: string,
    description: string,
    cost: string,
    images: Array<string>,
    email: string,
    phone: string,
    location: string,
    categoryId: string,
  ): Observable<ArrayBuffer> {
    return this.apiService.put(`${environment.apiUrl}/advert/${id}`, {
      name,
      description,
      cost,
      images,
      email,
      phone,
      location,
      categoryId,
    });
  }

  public deleteAdvert(id: string): Observable<IProduct> {
    return this.apiService.delete(`${environment.apiUrl}/advert/${id}`);
  }

  public getAdvertComments(id: string): Observable<IProduct> {
    return this.apiService.get(`${environment.apiUrl}/advert/${id}/comments`);
  }

  public postAdvertComment(
    id: string,
    text: string,
    parentId: string,
  ): Observable<ArrayBuffer> {
    return this.apiService.post(`${environment.apiUrl}/advert/${id}/comments`, {
      text,
      parentId,
    });
  }
}
