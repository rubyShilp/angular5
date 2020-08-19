import { Component, Input } from "@angular/core";
@Component({
  selector: "fa-loading",
  templateUrl: "./loading.html",
})
export class Loading {
  @Input() showHide: boolean;
  @Input() context: string;
}
