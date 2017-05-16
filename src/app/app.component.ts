import { Component, OnInit } from '@angular/core';
import { TweenLite, TweenMax, TimelineLite, TimelineMax, Power1, Power2, SlowMo, Power0} from "gsap";

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    let tl = new TimelineMax({repeat:0,yoyo:true});
    tl.staggerTo(".titleh2", 0.2, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, 0.3, "start");
    tl.staggerTo("#titlep", 0.3, {className:"+=smallerShadow", ease:Power1.easeIn}, 0.3, "normal");
  }

  navigateButtonClick(e) {
    let $window = $(window);
    if (e.target.id == "p1nav") {
      let element = document.getElementById("p1");
      let alignWithTop = true;
      element.scrollIntoView(alignWithTop);
    } else if (e.target.id == "p2nav") {
      let element = document.getElementById("p2");
      let alignWithTop = true;
      element.scrollIntoView(alignWithTop);
    } else if(e.target.id == "p3nav") {
      let element = document.getElementById("p3");
      let alignWithTop = true;
      element.scrollIntoView(alignWithTop);
    }
  }
}
