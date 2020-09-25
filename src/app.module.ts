import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { PacksModule } from './packs/packs.module';
import { PacktypesModule } from './packtypes/packtypes.module';
import { PacksHasProductsModule } from './packs-has-products/packs-has-products.module';
import { PaletsModule } from './palets/palets.module';
import { PaletsHasPacksModule } from './palets-has-packs/palets-has-packs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductsModule,
    CategoriesModule,
    PacksModule,
    PacktypesModule,
    PacksHasProductsModule,
    PaletsModule,
    PaletsHasPacksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
