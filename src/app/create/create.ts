import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { BlogItem, ProductItems } from '../shared/types/productItem';
import { BlogService } from '../../services/BlogService';

@Component({
  selector: 'app-create',
  imports: [
    ReactiveFormsModule,
    NgIf,

  ],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create{
  //form control
  // name = new FormControl('');
  // price = new FormControl('');



  constructor(private blogService: BlogService, private router: Router){
    
  }

// handleAddCart(){

//   console.log(this.name.value);
//   console.log(this.price.value);
// }


//Bài 30 form group
  //form group
  product = new FormGroup({
   name: new FormControl('', Validators.required),
   price: new FormControl('', Validators.required),
  })

  get name(){
    return this.product.get('name');
  }
  get price(){
    return this.product.get('price');
  }
handleAddCart(){
  //name và price khi có báo error required thì k cho submit
  if(this.name?.hasError('required') || this.price?.hasError('required'))
    return;
  const blogItem: BlogItem = {
    id: Math.random(),
    title: String(this.name?.value),
    body: String(this.price?.value),
    author: 'mario'
  }
  // console.log(this.name?.value);
  // console.log(this.price?.value);
  //gọi api
  this.blogService.postBlog(blogItem).subscribe(({data}: any)=>{
    //nếu có dữ liệu về home
    if(data.id){
        this.router.navigate(['/']);
    }
  })
}


}



