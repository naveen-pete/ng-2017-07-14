import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {
    productName: string = "iPhone 7 Plus";
    description: string = "Product from Apple";

    onUpdateClick() {
        this.productName = 'iPhone 6';
    }
}
