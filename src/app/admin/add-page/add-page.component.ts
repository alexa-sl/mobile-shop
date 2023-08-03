import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {IProduct} from "../../shared/interfaces/IProduct";

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  constructor(private prodService: ProductService) {
  }
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      category: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  submit(){
    if (this.form.invalid) {
      return;
    }

    const product: IProduct = {
      category: this.form.value.type,
      title: this.form.value.title,
      image: this.form.value.photo,
      description: this.form.value.info,
      price: this.form.value.price
    }

    this.prodService.create(product).subscribe((res) => console.log(res));
  }
}
