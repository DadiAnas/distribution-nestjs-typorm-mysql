import { Controller } from '@nestjs/common';
import { Distributeur_has_productService } from './distributeur-has-product.service';
import { Crud } from '@nestjsx/crud';
import { Distributeur_has_product } from './model/distributeur-has-product.entity';

@Crud({
  model: { type: Distributeur_has_product },
})
@Controller('distributeur_has_product')
export class Distributeur_has_productController {
  constructor(public service: Distributeur_has_productService) {}
}