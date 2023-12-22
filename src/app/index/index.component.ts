import { Component, HostListener } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  toEmail: string = '';
  name: string = '';
  message: string = '';
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

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(environment.emailService.serviceId, environment.emailService.templateId, e.target as HTMLFormElement, environment.emailService.publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  sendMail(): void {
    // Call a service to send the email (not implemented in this example)
    console.log('Email Sent:', { to: this.toEmail, subject: this.name, message: this.message });
  }


}
