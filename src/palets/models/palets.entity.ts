import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;
}
