import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseUrl } from "./constants";
import { Observable } from "rxjs";
import { Post } from "../posts/entity/post.interface";

@Injectable({
    providedIn: 'root'
}) 
export class APIService {

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


}