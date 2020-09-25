import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Packs_has_products } from './model/packs-has-products.entity';

@Injectable()
export class PacksHasProductsService extends TypeOrmCrudService<
  Packs_has_products
> {
  constructor(
    @InjectRepository(Packs_has_products)
    PacksHasProductsRepository: Repository<Packs_has_products>,
  ) {
    super(PacksHasProductsRepository);
  }
}
