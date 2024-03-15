import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Denuncia } from '../models/denuncia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  private static readonly BASE_URL = `${environment.appBaseUrl}/api/v1/denuncia`;

  constructor(private http: HttpClient) { }

  public criateComplaintPdf(denuncia: Denuncia): Observable<Denuncia> {
    return this.http.post<Denuncia>(`${DenunciaService.BASE_URL}/generatePdf`, denuncia);
  }
  
}
