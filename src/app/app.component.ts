import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ashley-cpa';

  mobileMenuActive= false;

  activePolaroid = "stack-3";

  ngOnInit() {
  }

  mobileMenuClicked() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

  public menuItemClicked() {
    this.mobileMenuActive = false;
  }

  public changePolaroid() {
    console.log("click");
    if (this.activePolaroid == "stack-1") {
      this.activePolaroid = "stack-2"
    }
    else if (this.activePolaroid == "stack-2") {
      this.activePolaroid = "stack-3";
    }
    else {
      this.activePolaroid = "stack-1"
    }
  }
}


//   document.addEventListener('DOMContentLoaded', function () {
//       const sections = document.querySelectorAll('section');
  
//       const options = {
//           threshold: 0.1,
//           rootMargin: "0px 0px -50px 0px"
//       };
  
//       const observer = new IntersectionObserver(function(entries, observer) {
//           entries.forEach(entry => {
//               if (!entry.isIntersecting) {
//                   return;
//               }
//               console.log("showing...");
//               console.log(entry);
//               entry.target.classList.add('show');
//               observer.unobserve(entry.target);
//           });
//       }, options);
  
//       sections.forEach(section => {
//           observer.observe(section);
//       });
  
//       const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
//       const menu = document.querySelector('.menu');
  
//       mobileMenuIcon!.addEventListener('click', () => {
//           menu!.classList.toggle('active');
//           mobileMenuIcon!.classList.toggle('active');
  
          
//           // const menuItems = document.querySelectorAll('.menu a');
//           // menuItems.forEach(function(item) {
//           //     item.addEventListener('click', () => {
//           //         menu.classList.toggle('active');
//           //         mobileMenuIcon.classList.toggle('active');
//           //     });
//           // })
//       });
//   });


