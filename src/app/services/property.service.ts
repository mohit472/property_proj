import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    apiURL = 'http://localhost:3000';
    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    };

    addNewProperty(data: any): Observable<any> {
        return this.http.post<any>(this.apiURL + "/api/property", data);
    }

    getPropertyList(): Observable<any> {
        return this.http.get<any>(this.apiURL + "/api/property");
    }
}
