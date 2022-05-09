import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar.component";
import { ActivePostPage } from "./pages/active-post.page";
import { HomePage } from "./pages/home.page";
import { InactivePostPage } from "./pages/inactive-post.page";

const routes: Route[] = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "activePost",
    component: ActivePostPage,
  },
  {
    path: "inactivePost",
    component: InactivePostPage,
  },
];
@NgModule({
  declarations: [AppComponent, HomePage, ActivePostPage, InactivePostPage, NavbarComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
