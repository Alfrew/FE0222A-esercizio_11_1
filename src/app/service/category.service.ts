import { Injectable } from "@angular/core";
import { Ipost } from "../interface/post";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  categorie(post: Ipost) {
    return {
      "bg-success text-white": post.category === "Sport",
      "bg-warning": post.category === "Cooking",
      "bg-danger text-white": post.category === "Politic",
    };
  }
  constructor() {}
  status(post: Ipost) {
    return (post.active = !post.active);
  }
}
