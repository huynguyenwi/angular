import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../../services/BlogService';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    ProductItemComponent,
    // HeaderLayoutComponent, 
    // FormsModule, 
    // CurrencyPipe, 
    // UpperCasePipe,
    // NgFor,
    // NgClass,
    NgIf,
    // RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, DoCheck, OnDestroy {
  //Bài 6 
  //Text
  title = 'Hello world';
  text = {
    name: 'Ninedev',
    old: 2025
  };

  //Properties
  isDisable = true;

  //Attributes
  contentImage = 'Welcome';

  //Bài 7: Event
  nameBtn = 'Click Me!';

  clickMessage = '';

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }
  updateField(): void {
    console.log('Hello world');
  }


  //Bài 8: two way binding
  bindingMessage = '';

  //Bài 11: List Render
  products: ProductItems[] = [
    // { id: 1, name: 'samba og', price: 400000, image: 'assets/images/samba-og.png' },
    // { id: 2, name: 'nike f1', price: 500000, image: 'assets/images/samba-og.png' },
    // { id: 3, name: 'adidas f2', price: 600000, image: 'assets/images/samba-og.png' },
    // { id: 4, name: 'mlb f3', price: 700000, image: 'assets/images/samba-og.png' }
  ];

  //Bài 12: Directive
  isActive = true;
  isVisible = true;

  //Bài 17: function props
  handleDelete = (id: number) => {
    //console.log(id); //kiểm tra xem cha đã nhận id chưa
    //thực hiện xóa product
    // const productIndex = this.products.findIndex(item=>item.id == id);
    // if(productIndex !== -1){
    //   this.products.splice(productIndex, 1); //xóa product
    // }
    //bài 21
    //this.products = this.products.filter((item) => item.id !== id)
    
    //bài 33: Http delete
    this.blogService.deleteBlog(id).subscribe(({data}: any)=>{
      //nếu data == 1
      if(data == 1){
        //xóa ở giao diện cập nhật luôn k cần gọi lại api lấy tất cả sp
        this.products = this.products.filter((item) => item.id !== id)
      }
    })
  }

  //bài 20: Creation(contructor, ngOnInit)

  //  constructor(){
  //     console.log('Initalize Component');
  //  }

  //  ngOnInit(): void{
  //     console.log('Initalize Component');
  //     fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  //  }

  //Bài 21 Change Detection(ngOnChanges, ngDoCheck)
  //  ngDoCheck(): void {
  //     console.log('Check Component');

  //  }

  //  handleChangeVisible = () => {
  //     this.isVisible = false;
  //  }


  //Bài 23: Http Client

  //Get API
  // constructor(private http: HttpClient){
  //   console.log('Initalize Component');
  // }
  // ngOnInit(): void {
  //   console.log('Initalize Component');
  //   this.http.get<any>('https://ninedev-api.vercel.app/blogs')
  //     .subscribe(
  //       // data => console.log(data)
  //       ({data, message}) => { //get data và message từ api
  //         // console.log(data) 
  //         // console.log(message) 
  //         //gán products cho data ở api
  //         this.products = data.map((item: any) =>{
  //           return {
  //             ...item,
  //             name: item.title,
  //             price: Number(item.body),
  //             image: 'assets/images/samba-og.png',
  //           }
  //         }); 
  //       });
  // }


  ngDoCheck(): void {
    //console.log('Check Component');
  }

  handleChangeVisible = () => {
    //this.isVisible = false;
  }


  //Bài 24: Http Service
  // constructor(private blogService: BlogService){
  //   console.log('Initalize Component');
  // }
  // ngOnInit(): void {
  //   console.log('Initalize Component');
  //   this.blogService.getBlogs()
  //     .subscribe(
  //       // data => console.log(data)
  //       ({data, message}) => { //get data và message từ api
  //         // console.log(data) 
  //         // console.log(message) 
  //         //gán products cho data ở api
  //         this.products = data.map((item: any) =>{
  //           return {
  //             ...item,
  //             name: item.title,
  //             price: Number(item.body),
  //             image: 'assets/images/samba-og.png',
  //           }
  //         }); 
  //       });
  // }


  //bài 25: Observable
  getBlogApi: Subscription;

  constructor(private blogService: BlogService) {
    console.log('Initalize Component');
    this.getBlogApi = new Subscription();
  }

  // ngOnInit(): void {
  //   console.log('Initalize Component');
  //   this.getBlogApi = this.blogService.getBlogs()
  //     .subscribe(
  //       // data => console.log(data)
  //       ({data, message}) => { //get data và message từ api
  //         // console.log(data) 
  //         // console.log(message) 
  //         //gán products cho data ở api
  //         this.products = data.map((item: any) =>{
  //           return {
  //             ...item,
  //             name: item.title,
  //             price: Number(item.body),
  //             image: 'assets/images/samba-og.png',
  //           }
  //         }); 
  //       });
  // }
  ngOnDestroy(): void {
    if (this.getBlogApi) {
      this.getBlogApi.unsubscribe();
      console.log('getBlogApi unsubcribed');
    }
  }

  //Bài 26: Http Mapping
  ngOnInit(): void {
    console.log('Initalize Component');
    this.getBlogApi = this.blogService.getBlogs()
    .pipe(
      map(({ data }) =>
        data.map((item: any) => {
          return {
            ...item,
            name: item.title,
            price: Number(item.body),
            image: 'assets/images/samba-og.png',
          }
        })
        //.filter(product => product.price > 300000)
      ),
    )
      .subscribe(
        (res) => {
          this.products = res;
        });
  }


}

