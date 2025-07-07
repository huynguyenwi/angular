import { NgClass, NgFor, NgIf} from "@angular/common";
import { Component, Input, OnChanges, OnDestroy, Output, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CurrencyPipe } from "../pipes/CurrencyPipe.pipe";
import { UpperCasePipe } from "../pipes/UpperCasePipe.pipe";
import { ProductItems } from "../types/productItem";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-product-item',
  imports: [
    RouterOutlet, 
    FormsModule, 
    CurrencyPipe, 
    UpperCasePipe,
    NgFor,
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl: './productItem.component.html',
  styleUrl: './productItem.component.css'
})
export class ProductItemComponent implements OnChanges, OnDestroy{
  //bài 16: Pass Props
  @Input() products : ProductItems[] = [];

  //bài 17: Function props
  @Output() dataEvent = new EventEmitter<number>();

  handleDelete = (id: number) => {
    // console.log(id); //kiểm tra xem sản phẩm nhận id chưa
    this.dataEvent.emit(id);
  }

  //bài 18: getter 
  get totalPrice(): string{
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    },0);
    return `Total Price ${sum}`;
  }

  //Bài 21: Change Detection
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes['products'].currentValue);
      console.log(changes['products'].previousValue);
  }

  //Bài 22: Destruction
  ngOnDestroy(): void {
    console.log('Component is removed');
  }
}