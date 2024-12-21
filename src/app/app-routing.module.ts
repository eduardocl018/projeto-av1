import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConecteSe } from "./pages/ConecteSe/ConecteSe.component";
import { Cadastrar } from "./pages/Cadastrar/Cadastrar.component";
import { Incio } from "./pages/Incio/Incio.component";

const routes: Routes = [
  {
    path: "",
    component: ConecteSe,
  },
  {
    path: "cadastrar",
    component: Cadastrar,
  },
  {
    path: "incio",
    component: Incio,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}