import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  message: string;
  statusClass: string;

  constructor() { }

  ngOnInit() {
  }

  send_click(event: any) {
    emailjs.init('user_yn75C5B2KcUPr1rN2IXW1');
    event.preventDefault();

    this.message = 'Отправляем письмо...';
    this.statusClass = 'emailjs-sending';

    emailjs.sendForm('service_d3ukm9o', 'template_YVf0zvqH', '#contact-form')
      .then((response: EmailJSResponseStatus) => {
        this.message = 'Письмо успешно отправлено';
          this.statusClass = 'emailjs-success';
        console.log('SUCCESS!', response.status, response.text);
      }, error => {
        this.message = 'Письмо не удалось отправить';
          this.statusClass = 'emailjs-error';
        console.log('FAILED...', error);
      });
  }
}
