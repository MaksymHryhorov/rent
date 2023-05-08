import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UploadCarResponse} from "./upload-car/UploadCarResponse";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  uploadCar(fileEntry: File): Observable<any> {
    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name);

    return this.httpClient.post<UploadCarResponse>("http://localhost:8080/api/cars", formData);
  }
}
