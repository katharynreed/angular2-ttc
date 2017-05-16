import { Component, OnInit } from '@angular/core';
import { TweenLite, TweenMax, TimelineLite, TimelineMax, Power1, Power2, SlowMo} from "gsap";

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
    tl.staggerTo("h2", 0.2, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, 0.3, "start");
  }

  navigateButtonClick(e) {
    let $window = $(window);

    // if (e.target.id == "p1nav") {
    //   // TweenLite.to($window, 1, {scrollTo: {y:"#p1", offsetY:70}});
    //   console.log("works");
    // } else if (e.target.id == "p2nav") {
    //   solutionsT1.to(window, 1, {scrollTo: {y:"#p2", offsetY:70}});
    //   console.log("works");
    // } else if(e.target.id == "p3nav") {
    //   TweenLite.to($window, 1, {scrollTo: {y:"#p1", offsetY:70}});
    //   console.log("works");

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
