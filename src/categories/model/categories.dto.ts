import { IsNotEmpty } from 'class-validator';

export class AddProducts {
  @IsNotEmpty()
  categoriesId: number;
  @IsNotEmpty()
  productsId: number;
}
/*
export class CreateCategories {
  @IsNotEmpty()
  categoryid: number;
}

export class UpdateCategories extends CreateCategories {}
*/
