import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private apiService: ApiService) {}

  public getImage(id: string): Observable<ArrayBuffer> {
    return this.apiService.get(`${environment.apiUrl}/images/${id}`);
  }

  public createImage(
    advertId: string,
    content: string,
  ): Observable<ArrayBuffer> {
    return this.apiService.post(`${environment.apiUrl}/images`, {
      advertId,
      content,
    });
  }

  public deleteImage(id: string): Observable<ArrayBuffer> {
    return this.apiService.delete(`${environment.apiUrl}/images/${id}`);
  }
}
