import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "incio",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Incio.component.html",
  styleUrls: ["./Incio.component.css"],
})
export class Incio {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
