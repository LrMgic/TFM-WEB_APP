import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { PostDTO } from 'src/app/user/Models/post.dto';
import { LocalStorageService } from 'src/app/user/Services/local-storage.service';
import { PostService } from 'src/app/user/Services/post.service';
import { SharedService } from 'src/app/user/Services/shared.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  post: PostDTO;
  title: FormControl;
  description: FormControl;
  publication_date: Data;
  tags: FormControl;

  postForm: FormGroup;
  isValidForm: boolean | null;

  private isUpdateMode: boolean;
  //Refactor: Dead Code
  //private validRequest: boolean;
  private postId: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
    private sharedService: SharedService,
    private localStorageService: LocalStorageService
  ) {
    this.isValidForm = null;
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.post = new PostDTO('', '', new Date(), '');
    this.isUpdateMode = false;
    //Refactor: Dead Code
    //this.validRequest = false;

    this.title = new FormControl(this.post.title, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(55),
    ]);

    this.description = new FormControl(this.post.description, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(555),
    ]);

    this.publication_date = new Date();

    this.tags = new FormControl(this.post.tags, [
      Validators.required,
      Validators.maxLength(255),
    ]);

    this.postForm = this.formBuilder.group({
      title: this.title,
      description: this.description,
      publication_date: this.publication_date,
      tags: this.tags,
    });
  }

  async ngOnInit(): Promise<void> {
    // update
    //Refactor: Inline Temp
    //let errorResponse: any;
    if (this.postId) {
      this.isUpdateMode = true;
      try {
        this.post = await this.postService.getPostById(this.postId);
        //Refactor: Extract Method
        this.refresPost();
      } catch (error: any) {
        this.sharedService.errorLog(error.error);
      }
    }
  }

  private refresPost(): void {
    this.title.setValue(this.post.title);

    this.description.setValue(this.post.description);

    this.publication_date.setValue(
      formatDate(this.post.publication_date, 'yyyy-MM-dd', 'en')
    );

    this.postForm = this.formBuilder.group({
      title: this.title,
      description: this.description,
      publication_date: this.publication_date,
      tags: this.tags,
    });
  }

  private async editPost(): Promise<void> {
    //Refactor: Duplicate Code tratamiento éxito y error con createPost
    //Se escala código tratamiento éxito y error a método que hace la llamada

    if (this.postId) {
      const UserId = this.localStorageService.get('user_id');
      if (UserId) {
        await this.postService.updatePost(this.postId, this.post);
      }
    }
  }

  private async createPost(): Promise<void> {
    const userId = this.localStorageService.get('user_id');

    if (userId) {
      await this.postService.createPost(this.post);
    }
  }

  async savePost() {
    this.isValidForm = !this.postForm.invalid;

    if (this.isValidForm) {
      this.post = this.postForm.value;
      //Refactor: Extract Method
      this.processForm();
    }
    // TODO 10
  }

  async processForm() {
    this.doSavePost()
      .then(() => {
        //Refactor: Extract Method
        this.goodEnd();
      })
      .catch((error: any) => {
        //Refactor: Extract Method
        this.badEnd(error);
      });
  }

  async doSavePost() {
    if (this.isUpdateMode) await this.editPost();
    else await this.createPost();
  }

  private async goodEnd(): Promise<void> {
    await this.sharedService.managementToast('postFeedback', true);
    //Refactor: Dead Code
    //this.validRequest = true;
    this.router.navigateByUrl('/post/posts');
  }

  private async badEnd(error: any): Promise<void> {
    await this.sharedService.errorLog(error.error);
    await this.sharedService.managementToast(
      'postFeedback',
      false,
      error.error
    );
    //Refactor: Dead Code
    //this.validRequest = false;
  }
}
