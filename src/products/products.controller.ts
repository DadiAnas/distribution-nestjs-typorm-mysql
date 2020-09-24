import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Products } from './model/products.entity';
import { ProductsService } from './products.service';

@Crud({
  model: { type: Products },
  query: {
    join: {
      categories: {
        eager: true,
      },
      packs_has_products: {
        eager: true,
      },
    },
  },
})
@Controller('products')
export class ProductsController {
  constructor(public service: ProductsService) {}
}
