import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  isMenuCollapsed = true;

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // When the user scrolls, check the scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Set a threshold value, such as 100 pixels, to trigger the class change
    if (scrollPosition > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  
}
