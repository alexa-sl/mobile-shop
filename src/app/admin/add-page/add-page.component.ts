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
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  submit(){
    if (this.form.invalid) {
      return;
    }

    const product: IProduct = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price
    }

    this.prodService.create(product).subscribe((res) => console.log(res));
  }
}
