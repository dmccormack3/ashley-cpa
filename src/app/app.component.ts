import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ashley-cpa';

  mobileMenuActive= false;

  activePolaroid = "stack-3";

  emailSubject: string = '';
  emailMessage: string = '';

  services: any = {
    finPlanning: false,
    businessTaxPrep: false,
    taxAdvice: false,
    specTax: false
  }

  ngOnInit() {
    setTimeout(() => {
      window.scrollTo(0,50);
    }, 250)

  }

  /* todo: this needs improved */
  toggleServices(name: string) {
    this.services[name] = !this.services[name];
  }

  mobileMenuClicked() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

  public menuItemClicked() {
    this.mobileMenuActive = false;
  }

  public changePolaroid() {
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

  public sendMessage () {
    window.location.href = `mailto:danielmccormack92@gmail.com?subject=${this.emailSubject}&body=${this.emailMessage}`;
  }

  
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event: any) {
  //   const numb = window.scrollY;
  //   console.log(numb);
  //   if (numb >= 1) {
  //     console.log("scrolled 1");
  //   }
  //   else {
  //     console.log("hello");
  //     /* https://stackoverflow.com/questions/49215634/angular-check-when-an-element-is-in-view */
  //   }
  // }
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


