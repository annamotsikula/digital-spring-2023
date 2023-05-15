import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AUTH_KEY, IS_AUTHORIZED, authUrl } from "../core/constants";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../core/storage.service";

@Injectable({providedIn: 'root'})

export class AuthService extends StorageService{

    constructor(private _http: HttpClient) {
        super();
    }

    signIn(data: {username: string, pwd: string, rememberMe: boolean}): Observable<{token: string}> {
        const authData = {
            username: data.username,
            password: data.pwd
        }
        return this._http.post<{token:string}>(`${authUrl}/auth/login`, authData).pipe(
            tap(result => {
                if(data.rememberMe) {
                    this.set(IS_AUTHORIZED, data.rememberMe)
                }
                this.set(AUTH_KEY, result.token)
            })
        )
    }

    isAuthorized(): boolean {
        return this.keyExists(AUTH_KEY)
    }

    userSaved(): boolean {
        return !!this.keyExists(AUTH_KEY) && !!this.keyExists(IS_AUTHORIZED)
    }
}