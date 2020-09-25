import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Packs_has_products } from './model/packs-has-products.entity';
import { PacksHasProductsService } from './packs-has-products.service';

@Crud({
  model: { type: Packs_has_products },
  query: {
    join: {
      products: {
        eager: true,
      },
      packs: {
        eager: true,
      },
    },
  },
})
@Controller('packs-has-products')
export class PacksHasProductsController {
  constructor(public service: PacksHasProductsService) {}
}
