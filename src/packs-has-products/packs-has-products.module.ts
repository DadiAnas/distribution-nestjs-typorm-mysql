import { Module } from '@nestjs/common';
import { PacksHasProductsService } from './packs-has-products.service';
import { PacksHasProductsController } from './packs-has-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packs_has_products } from './models/packs-has-products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Packs_has_products]),
    PacksHasProductsModule,
  ],
  providers: [PacksHasProductsService],
  controllers: [PacksHasProductsController],
})
export class PacksHasProductsModule {}
