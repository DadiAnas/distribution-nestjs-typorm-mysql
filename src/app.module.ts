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
import { CountriesService } from './countries/countries.service';
import { CountriesModule } from './countries/countries.module';
import { CountriesController } from './countries/countries.controller';
import { CountriesController } from './countries/countries.controller';
import { CountriesModule } from './countries/countries.module';
import { CountriesService } from './countries/countries.service';

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
    CountriesModule,
  ],
  controllers: [AppController, CountriesController],
  providers: [AppService, CountriesService],
})
export class AppModule {}
