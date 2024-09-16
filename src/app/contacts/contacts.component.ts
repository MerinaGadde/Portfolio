import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  userObj: { FullName: string; Email: string; Message: string } = {
    FullName: '',
    Email: '',
    Message: ''
  };

  onSubmit() {
    if (this.userObj.FullName && this.userObj.Email && this.userObj.Message) {
      alert('Your message has been sent!');
      this.userObj = {
        FullName: '',
        Email: '',
        Message: ''
      };
    } else {
      alert('Please fill out all fields.');
    }
  }
}
