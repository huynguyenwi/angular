import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderLayoutComponent, 
    // FormsModule, 
    // CurrencyPipe, 
    // UpperCasePipe,
    // NgFor,
    // NgClass,
    // NgIf,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // //Bài 6 
  // //Text
  //  title = 'Hello world';
  //  text = {
  //     name: 'Ninedev',
  //     old: 2025
  //  };

  //  //Properties
  //  isDisable = true;

  //  //Attributes
  //  contentImage = 'Welcome';

  //  //Bài 7: Event
  //  nameBtn = 'Click Me!';

  //  clickMessage = '';

  //  handleClickMe() : void{
  //   this.clickMessage = 'Click Me Hello World';
  //  }
  //  updateField() : void{
  //   console.log('Hello world');
  //  }


  //  //Bài 8: two way binding
  //  bindingMessage = '';

  //  //Bài 11: List Render
  // products = [
  //   { name: 'samba og', price: 400000, image: 'assets/images/samba-og.png'},
  //   { name: 'nike f1', price: 500000, image: 'assets/images/samba-og.png'},
  //   { name: 'adidas f2', price: 600000, image: 'assets/images/samba-og.png'},
  //   { name: 'mlb f3', price: 700000, image: 'assets/images/samba-og.png'}
  // ];

  // //Bài 12: Directive
  // isActive = true;
  // isVisible = false;
}

