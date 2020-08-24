import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Categories } from './model/categories.entity';
import { CategoriesService } from './categories.service';
import { AddProducts } from './model/categories.dto';

@Crud({
  model: { type: Categories },
  query: {
    join: {
      products: {
        eager: true,
      },
    },
  },
})
@Controller('categories')
export class CategoriesController {
  constructor(public service: CategoriesService) {}

  @Get('/:id/products')
  Products(@Param('id') id) {
    return this.service.Products(id);
  }
  @Post('/:id/products')
  addProducts(@Body() payload: AddProducts) {
    return this.service.addProducts(payload);
  }
}
