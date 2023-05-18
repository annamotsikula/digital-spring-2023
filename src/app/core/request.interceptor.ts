import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from "./storage.service";
import { AUTH_KEY } from "./constants";

@Injectable(
    {
    providedIn: 'root'
}
) export class RequestInterceptor extends StorageService implements HttpInterceptor {

    constructor() {super()}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('REQUEST', req)
        if(this.keyExists(AUTH_KEY)) {
            const modifiedReq = req.clone({
                setHeaders: {
                    authorization: `Bearer ${this.get(AUTH_KEY)}`
                }
            })
            return next.handle(modifiedReq)
        }

        return next.handle(req)
    }
    
}