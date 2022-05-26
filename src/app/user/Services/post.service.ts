import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { PostDTO } from '../Models/post.dto';

interface updateResponse {
  affected: number;
}

interface deleteResponse {
  affected: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private urlPFMUocApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'posts';
    this.urlPFMUocApi = 'http://localhost:3000/' + this.controller;
  }

  getPosts(): Promise<PostDTO[] | any> {
    return this.http.get<PostDTO[]>(this.urlPFMUocApi).toPromise();
  }

  getPostsByUserId(userId: string): Promise<PostDTO[] | any> {
    return this.http
      .get<PostDTO[]>('http://localhost:3000/users/posts/' + userId)
      .toPromise();
  }

  createPost(post: PostDTO): Promise<PostDTO | any> {
    return this.http.post<PostDTO>(this.urlPFMUocApi, post).toPromise();
  }

  getPostById(postId: string): Promise<PostDTO | any> {
    return this.http
      .get<PostDTO>(this.urlPFMUocApi + '/' + postId)
      .toPromise();
  }

  updatePost(postId: string, post: PostDTO): Promise<PostDTO | any> {
    return this.http
      .put<PostDTO>(this.urlPFMUocApi + '/' + postId, post)
      .toPromise();
  }

  deletePost(postId: string): Promise<deleteResponse | any> {
    return this.http
      .delete<deleteResponse>(this.urlPFMUocApi + '/' + postId)
      .toPromise();
  }
}
