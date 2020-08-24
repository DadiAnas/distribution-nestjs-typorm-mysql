import { IsNotEmpty } from 'class-validator';

export class CreateProducts {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  price: number;

  description: string;
}

export class UpdateProducts extends CreateProducts {
  @IsNotEmpty()
  id: number;
}
