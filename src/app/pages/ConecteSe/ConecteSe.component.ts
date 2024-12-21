import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "conecte-se",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ConecteSe.component.html",
  styleUrls: ["./ConecteSe.component.css"],
})
export class ConecteSe {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onRectangleClick() {
    this.router.navigate(["/incio"]);
  }

  onCadastrarTextClick() {
    this.router.navigate(["/"]);
  }
}
