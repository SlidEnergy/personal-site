import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
  }

  send_click(event: any) {
    emailjs.init('user_yn75C5B2KcUPr1rN2IXW1');
    event.preventDefault();

    this.message = 'Отправляем письмо...';

    emailjs.sendForm('gmail', 'template_YVf0zvqH', '#contact-form')
      .then(response => {
        this.message = 'Письмо успешно отправлено';
        console.log('SUCCESS!', response.status, response.text);
      }, error => {
        this.message = 'Письмо не удалось отправить';
        console.log('FAILED...', error);
      });
  }
}
