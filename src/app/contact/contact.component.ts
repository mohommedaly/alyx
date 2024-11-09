import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',  // Updated selector
  templateUrl: './contact.component.html',  // Updated template URL
  styleUrls: ['./contact.component.scss']  // Updated style URL
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Your message has been sent!');
      this.contactForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
