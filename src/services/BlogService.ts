import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseData } from "../app/shared/types/responseData";
import { BlogItem, ProductItems } from "../app/shared/types/productItem";

@Injectable({providedIn: 'root'})
export class BlogService{
    constructor(private http:HttpClient){}

    // getBlogs(){
    //     return  this.http.get<any>('https://ninedev-api.vercel.app/blogs');
    // }

    //bài 25 observable
     getBlogs() : Observable<ResponseData<ProductItems[]>>{
        return  this.http.get<any>('https://ninedev-api.vercel.app/blogs');
    }

    //Bài 27
    //tạo method gọi API
    detailBlog(id: number):Observable<ResponseData<ProductItems>>{
        return  this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
    }

    //B32 
    //gọi api thêm
    postBlog(blogItem: BlogItem):Observable<ResponseData<ProductItems>>{
        return  this.http.post<any>(`https://ninedev-api.vercel.app/blogs`, blogItem);
    }


    //Bài 33 
    //gọi api xóa
    deleteBlog(id: number):Observable<ResponseData<ProductItems>>{
        return  this.http.delete<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
    }
}

