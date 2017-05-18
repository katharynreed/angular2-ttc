import { Component, OnInit, HostListener, EventEmitter, Directive } from '@angular/core';
import { TweenLite, TweenMax, TimelineLite, TimelineMax, Power1, Power2, SlowMo, Power0, Sine} from "gsap";

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
    tl.staggerTo(".titleh2", 0.4, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, 0.3, "start");
    tl.staggerTo("#titlep", 0.3, {className:"+=smallerShadow", ease:Power1.easeIn}, 0.3, "normal");
    TweenMax.staggerTo("#sun", 10, {y:100, x:100}, 0.3);
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

  hoverInit(e) {
    let tl = new TimelineMax({repeat:0});
    if(e.target.id == "p2") {
      TweenMax.staggerTo("#part1", 10, {y:100, x:100}, 0.3);

      tl.staggerTo("#part2", 4, {className:"+=part2show",  opacity:0, ease:Sine.easeIn}, 2);

      tl.staggerTo(["#elip1", "#elip2", "#elip3"], 0.6, {className:"+=showPart6", opacity:1, ease:Power1.easeIn}, 0.3, "normal");

      tl.staggerTo(['#part3'], 2, {className:"+=part3show", opacity:1, ease:Power1.easeIn}, 2);

      TweenMax.staggerTo("#part4", 10, {y:100, x:100}, 0.3);

      TweenMax.staggerTo("#part5", 10, {y:100, x:100}, 0.3);

    } else if (e.target.id == "p3") {
      TweenMax.staggerTo('#test2', 50, {y:10, x:2000}, 0.3);
    }
  }

  // @HostListener("window:scroll", [])
  // scrollInit(e) {
  //   if (e) {
  //     console.log(e);
  //     let scrollPos = document.getBoundingClientRect();
  //     console.log(scrollPos);
  //     let screenPos = e.clientY;
  //     console.log(screenPos);
  //     if (scrollPos == screenPos) {
  //       alert("works!");
  //     }
  //   }
  //   // console.log("WORKS!");
  // }
}
