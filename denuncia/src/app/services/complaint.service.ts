import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Complaint } from '../models/Complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private static readonly BASE_URL = `${environment.appBaseUrl}/api/v1/complaint`;

  constructor(private http: HttpClient) { }

  public criateComplaintPdf(complaint: Complaint): Observable<Complaint> {
    return this.http.post<Complaint>(`${ComplaintService.BASE_URL}/generatePdf`, complaint);
  }

}
