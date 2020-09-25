import { IsNotEmpty } from 'class-validator';

export class AddPacks {
  @IsNotEmpty()
  packtypesId: number;
  @IsNotEmpty()
  packsId: number;
}
