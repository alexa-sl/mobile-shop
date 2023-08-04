import {Component} from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {IProduct} from "../../shared/interfaces/IProduct";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {
  constructor(
    private prodService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  product: IProduct;
  form: FormGroup;

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(params => {
        return this.prodService.getProduct(params['id']);
      })).subscribe(product => {
      this.product = product;

      this.form = new FormGroup({
        category: new FormControl(this.product.category, Validators.required),
        title: new FormControl(this.product.title, Validators.required),
        image: new FormControl(this.product.image, Validators.required),
        description: new FormControl(this.product.description, Validators.required),
        price: new FormControl(this.product.price, [Validators.required, Validators.min(1)])
      });
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.prodService.updateProduct(this.product.id,
      {
        ...this.product,
        category: this.form.value.category,
        title: this.form.value.title,
        image: this.form.value.image,
        description: this.form.value.description,
        price: this.form.value.price
      }
    ).subscribe(res => {
        this.form.reset();
        this.router.navigate(['/']).then();
      }
    )
  }
}
