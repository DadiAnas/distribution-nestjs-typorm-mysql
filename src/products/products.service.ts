import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './model/products.entity';
import { CreateProducts, UpdateProducts } from './model/Products.dto';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class ProductsService extends TypeOrmCrudService<Products> {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {
    super(productsRepository);
  }
}

/*
  fetchAll() {
    return this.productsRepository.find();
  }

  fetchOne(id: number) {
    return this.productsRepository.findOne(id);
  }

  create(productsData: CreateProducts) {
    return this.productsRepository.save({ ...productsData });
  }

  update(productsData: UpdateProducts) {
    const { id, ...rest } = productsData;
    return this.productsRepository.update(id, rest);
  }

  remove(id: number) {
    return this.productsRepository.delete(id);
  }*/
