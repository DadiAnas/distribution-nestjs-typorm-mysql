import {
  Controller,
  Get,
  Param,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  Crud,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Categories } from 'src/categories/model/categories.entity';
import { Products } from './model/products.entity';
import { ProductsService } from './products.service';

class createDoc {
  designation: string;
  description: string;
  price: number;
  weight: number;
  picture: string;
  file: any;
  categories: Categories;
}

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

  @Override()
  @UseInterceptors(FileInterceptor('image'))
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: createDoc,
    @UploadedFile() file: any,
  ) {
    console.log({ dto, file });
    //dto.picture = dto.file.name;
    return this.service.createOne(req, dto);
  }

  @Get('products/images/:pictureId')
  async serveAvatar(@Param('productId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads/products/images' });
  }
}
