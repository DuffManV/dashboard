import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DadataAddressService {
  constructor(private apiService: ApiService) {}

  public getAddress(query: string): Observable<string> {
    return this.apiService.post(environment.dadataUrl, { query });
  }
}
