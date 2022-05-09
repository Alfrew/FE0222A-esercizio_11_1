import { Component, OnInit } from "@angular/core";
import { Ipost } from "../interface/post";
import { CategoryService } from "../service/category.service";
import { getPosts, loadDB } from "../service/post.service";

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts">
        <div class="mb-3" *ngIf="!post.active" [ngClass]="changeCol(post)">
          <h5 class="card-header">Inactive post</h5>
          <div class="card-body">
            <h5 clas>{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <button class="btn btn-secondary form-control" (click)="changeStatus(post)">Attiva</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class InactivePostPage implements OnInit {
  posts: Ipost[] = [];

  constructor(private catSrv: CategoryService) {
    // loadDB().then((posts) => {
    //   this.posts = posts;
    // });
    getPosts().then((POSTS) => {
      this.posts = POSTS;
    });
  }
  changeCol(post: Ipost) {
    return this.catSrv.categorie(post);
  }
  changeStatus(post: Ipost) {
    return this.catSrv.status(post);
  }

  ngOnInit(): void {}
}
