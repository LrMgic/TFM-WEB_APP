import { Component, OnInit } from '@angular/core';
import { PostDTO } from 'src/app/user/Models/post.dto';
import { PostService } from 'src/app/user/Services/post.service';
import { SharedService } from 'src/app/user/Services/shared.service';

@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.scss'],
})
export class NoticiesComponent implements OnInit {
  posts: PostDTO[];
  constructor(
    private postService: PostService,
    private sharedService: SharedService
  ) {
    // this.loadPosts();
    this.posts = [
      {
        postId: '1',
        title: 'Noticia 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto dolore a distinctio, beatae itaque quam veniam exercitationem totam autem quod enim numquam vero, soluta molestiae voluptas nemo alias ullam.',
        publication_date: new Date('2022-05-8 22:15:57.356'),
        userId: 'Gerard V.',
        tags: 'Noticia important, Fabrica',
      },
      {
        postId: '2',
        title: 'Noticia 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto dolore a distinctio, beatae itaque quam veniam exercitationem totam autem quod enim numquam vero, soluta molestiae voluptas nemo alias ullam.',
        publication_date: new Date('2022-05-9 22:15:57.356'),
        userId: 'Gerard V.',
        tags: 'Noticia important, Fabrica',
      },
      {
        postId: '3',
        title: 'Noticia 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto dolore a distinctio, beatae itaque quam veniam exercitationem totam autem quod enim numquam vero, soluta molestiae voluptas nemo alias ullam.',
        publication_date: new Date('2022-05-10 22:15:57.356'),
        userId: 'Gerard V.',
        tags: 'Noticia important, Fabrica',
      },
      {
        postId: '4',
        title: 'Noticia 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto dolore a distinctio, beatae itaque quam veniam exercitationem totam autem quod enim numquam vero, soluta molestiae voluptas nemo alias ullam.',
        publication_date: new Date('2022-05-11 22:15:57.356'),
        userId: 'Gerard V.',
        tags: 'Noticia important, Fabrica',
      },
      {
        postId: '5',
        title: 'Noticia 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto dolore a distinctio, beatae itaque quam veniam exercitationem totam autem quod enim numquam vero, soluta molestiae voluptas nemo alias ullam.',
        publication_date: new Date('2022-05-12 22:15:57.356'),
        userId: 'Gerard V.',
        tags: 'Noticia important, Fabrica',
      },
    ];
  }

  ngOnInit(): void {
  }

  // private async loadPosts(): Promise<void> {
  //   try {
  //     this.posts = await this.postService.getPosts();
  //   } catch (error: any) {
  //     this.sharedService.errorLog(error.error);
  //   }
  // }
}
