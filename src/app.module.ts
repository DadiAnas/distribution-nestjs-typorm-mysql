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
import { Distributeur_has_productModule } from './distributeur-has-product/distributeur-has-product.module';
import { DistributeursModule } from './distributeurs/distributeurs.module';
import { User_typesModule } from './user-types/user-types.module';
import { UsersModule } from './users/users.module';
import { PersonsModule } from './persons/persons.module';
import { Address_typesModule } from './address-types/address-types.module';
import { AddressModule } from './address/address.module';
import { CountriesModule } from './countries/countries.module';

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
    Address_typesModule,
    AddressModule,
    PersonsModule,
    UsersModule,
    User_typesModule,
    DistributeursModule,
    Distributeur_has_productModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
