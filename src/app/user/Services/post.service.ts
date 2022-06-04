import { HttpClient } from '@angular/common/http';
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
  private urlTFMUocApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'posts';
    // this.urlTFMUocApi = 'http://localhost:3000/' + this.controller;
    this.urlTFMUocApi = 'https://tfm-api.herokuapp.com/' + this.controller;
  }

  getPosts(): Promise<PostDTO[] | any> {
    return this.http.get<PostDTO[]>(this.urlTFMUocApi).toPromise();
  }

  getPostsByUserId(userId: string): Promise<PostDTO[] | any> {
    return this.http
      .get<PostDTO[]>('http://localhost:3000/users/posts/' + userId)
      .toPromise();
  }

  createPost(post: PostDTO): Promise<PostDTO | any> {
    return this.http.post<PostDTO>(this.urlTFMUocApi, post).toPromise();
  }

  getPostById(postId: string): Promise<PostDTO | any> {
    return this.http.get<PostDTO>(this.urlTFMUocApi + '/' + postId).toPromise();
  }

  updatePost(postId: string, post: PostDTO): Promise<PostDTO | any> {
    return this.http
      .put<PostDTO>(this.urlTFMUocApi + '/' + postId, post)
      .toPromise();
  }

  deletePost(postId: string): Promise<deleteResponse | any> {
    return this.http
      .delete<deleteResponse>(this.urlTFMUocApi + '/' + postId)
      .toPromise();
  }
}
