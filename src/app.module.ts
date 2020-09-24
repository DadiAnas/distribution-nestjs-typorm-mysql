import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { PacksModule } from './packs/packs.module';
import { PacktypesController } from './packtypes/packtypes.controller';
import { PacktypesService } from './packtypes/packtypes.service';
import { PacktypesModule } from './packtypes/packtypes.module';
import { PacksHasProductsModule } from './packs-has-products/packs-has-products.module';
import { PaletsController } from './palets/palets.controller';
import { PaletsModule } from './palets/palets.module';
import { PaletsHasPacksController } from './palets-has-packs/palets-has-packs.controller';
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
  controllers: [AppController, PacktypesController, PaletsController, PaletsHasPacksController],
  providers: [AppService, PacktypesService],
})
export class AppModule {}
