import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './model/categories.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { AddProducts } from './model/categories.dto';
import { ProductsService } from 'src/products/products.service';
import { Products } from 'src/products/model/products.entity';

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Categories> {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
    private productsService: ProductsService,
  ) {
    super(categoriesRepository);
  }

  async Products(id: number) {
    const categorie = await this.categoriesRepository.findOneOrFail(id, {
      relations: ['products'],
    });
    return categorie.products || [];
  }

  async addProducts(payload: AddProducts) {
    const categories = await this.categoriesRepository.findOne(
      payload.categoriesId,
    );
    const prod = await this.productsService.findOne(payload.productsId);
    categories.products = [...(categories.products || []), prod];
    return await this.categoriesRepository.save(categories);
  }
  /*
  fetchAll() {
    return this.categoriesRepository.find();
  }

  fetchOne(id: number) {
    return this.categoriesRepository.findOne(id);
  }

  create(categoriesData: CreateCategories) {
    return this.categoriesRepository.save({ ...categoriesData });
  }

  update(categoriesData: UpdateCategories) {
    const { categoryid, ...rest } = categoriesData;
    return this.categoriesRepository.update(categoryid, rest);
  }

  remove(id: number) {
    return this.categoriesRepository.delete(id);
  }*/
}
