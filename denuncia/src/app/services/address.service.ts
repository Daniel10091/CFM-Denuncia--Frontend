import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private appBaseUrl = environment.appBaseUrl;

  constructor(private http: HttpClient) { }

  public getAddressByZipCode(zipCode: string) {
    return this.http.get(`${this.appBaseUrl}/api/v1/viacep/${zipCode}`);
  }

}
