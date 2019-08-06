import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistredDataService {
currentUsername:any;
  constructor(private http:HttpClient) { }
setResponse(data):Observable<any>
{
  return this.http.put('/ownerdashboard/viewclient',data)
}
deleteClient(data):Observable<any>
{
  return this.http.delete('/ownerdashboard/viewclient',data)
}
}
