import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/shared/interfaces";
import { environment } from "src/environments/environment";
import { tap } from 'rxjs/operators'
import { FbAuthResponse } from "src/environments/interface";

@Injectable()
export class AuthService {
    
    constructor(private http: HttpClient) { }

    get token(): string {
        return ''
    }

    login(user: User): Observable<any> {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
        .pipe(
            tap(this.setToken)
        )    
        ;
    }

    logout() {

    }

    isAuthenticated() :boolean {
        return !!this.token;
    }

    private setToken(response: FbAuthResponse) {
        console.log(response)
    }
}