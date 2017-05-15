import { Component } from '@angular/core';
import { TweenLite, TweenMax, TimelineLite, TimelineMax, Power1, Power2} from "gsap";

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  onToggle(){
    var tl = new TimelineMax({repeat:6, repeatDelay:1, yoyo:true});
    tl.staggerTo("h2", 0.2, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, 0.3, "start")
  }
}
