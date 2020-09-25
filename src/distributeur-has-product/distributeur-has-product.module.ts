import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distributeur_has_product } from './model/distributeur-has-product.entity';
import { Distributeur_has_productController } from './distributeur-has-product.controller';
import { Distributeur_has_productService } from './distributeur-has-product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Distributeur_has_product])],
  controllers: [Distributeur_has_productController],
  providers: [Distributeur_has_productService],
})
export class Distributeur_has_productModule {}