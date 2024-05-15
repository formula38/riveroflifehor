import { Component, OnInit } from "@angular/core";
import { Block } from "../api/interfaces/block";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  blocks: Block[] = [];

  ngOnInit() {
    this.blocks = this.getBlocks();
  }

  getBlocks(): Block[] {
    return [
      {
        blockClass: "sp-spacer-block sp-hide-tablet sp-hide-mobile",
        blockType: "spacer",
        blockContent: null,
      },
      {
        blockClass: "sp-heading-block",
        blockType: "heading",
        blockContent: "<h2><b>FAITHFUL LEADERSHIP</b></h2>",
      },
      {
        blockClass: "sp-text-block",
        blockType: "text",
        blockContent: "Bishop Clifton Edwards Jr. and First Lady Tracie Edwards have provided faithful and consistent leadership to River of Life Church and the Sacramento, CA community since 2019." +
          "<br><br>",
      },
      {
        blockClass: "sp-image-block",
        blockType: "image",
        blockContent: "<img " +
          "src='assets/images/_oldsite/HOME/bishop_clifton_edwards_jr-first_lady_tracie_edwards.png' " +
          "alt='Bishop Clifton Edwards Jr. and First Lady Tracie Edwards' " +
          "class='responsive-image' />",
      },
      {
        blockClass: "sp-button-block",
        blockType: "button",
        blockContent: "<a class='sp-button' routerLink='/about/leadership'>MEET OUR LEADERSHIP TEAM</a>",
      },
    ];
  }
}
