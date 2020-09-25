import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Distributeur_has_product } from './model/distributeur-has-product.entity';

@Injectable()
export class Distributeur_has_productService extends TypeOrmCrudService<Distributeur_has_product> {
  constructor(@InjectRepository(Distributeur_has_product) distributeur_has_productRepository: Repository<Distributeur_has_product>) {
    super(distributeur_has_productRepository);
  }
}
