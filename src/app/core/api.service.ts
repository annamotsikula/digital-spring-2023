import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { authUrl, baseUrl } from "./constants";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { Post } from "../posts/entity/post.interface";

@Injectable({
    providedIn: 'root'
}) 
export class APIService {
    pagination$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
    currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(1)
    constructor(private _http: HttpClient) {
    }

    getPosts(): Observable<Post[]> {
        return this._http.get<Post[]>(`${baseUrl}/posts`)
    }

    addPost(data: Post): Observable<Post> {
        return this._http.post<Post>(`${baseUrl}/posts`, data)
    }

    deletePost(id: number) {
        return this._http.delete(`${baseUrl}/posts/${id}`)

    }

    getSinglePost(id: number): Observable<Post> {
        return this._http.get<Post>(`${baseUrl}/posts/${id}`)
    }

    getPaginatedPosts(amount: number, n: number): Observable<Post[]> {
        // console.log(`Amount of items per page: ${amount}, Current Page ${n}`)
        // ამ ფუნქციიდან წამოვა გადანაწილებული პოსტების მასივი
       return this.getPosts().pipe(
        tap(data => this.pagination$.next(data.length)),
        map(data => {
            const rangeFrom: number = (n - 1) * Number(amount); // for n = 1 => 0
            const rangeTo: number = rangeFrom + Number(amount);
         
            return data.slice(rangeFrom, rangeTo) // 0 - 9, 10 - 19, 20 - 29
        }
            ),
       )
    }

    signIn(data: {username: string, password: string}): Observable<any> {
        return this._http.post(`${authUrl}/auth/login`, data)
    }

    


}