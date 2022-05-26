import { Component, Input, OnInit } from '@angular/core';
import { PostDTO } from 'src/app/user/Models/post.dto';

@Component({
  selector: 'app-noticia-extens',
  templateUrl: './noticia-extens.component.html',
  styleUrls: ['./noticia-extens.component.scss'],
})
export class NoticiaExtensComponent implements OnInit {
  @Input() postExtend!: PostDTO;
  constructor() {}

  ngOnInit(): void {}
}
