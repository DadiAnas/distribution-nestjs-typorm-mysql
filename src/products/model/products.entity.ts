import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Categories } from 'src/categories/model/categories.entity';

@Entity()
@Unique(['title'])
export class Products {
  @PrimaryGeneratedColumn({ name: 'productid' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ default: 'defaultpicutre.png' })
  picture: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    type => Categories,
    categories => categories.products,
    {
      eager: true,
    },
  )
  categories?: Categories;
}
