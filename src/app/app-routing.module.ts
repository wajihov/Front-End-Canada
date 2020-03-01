import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { ProfilUserComponent } from "./profil-user/profil-user.component";

const routes: Routes = [
  { path: "user", component: UsersComponent },
  { path: "profilUser/:id", component: ProfilUserComponent },
  { path: "", component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
