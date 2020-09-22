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
@Unique(['designation'])
export class Products {
  @PrimaryGeneratedColumn({ name: 'productid' })
  id: number;

  @Column()
  designation: string;

  @Column()
  description: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'float' })
  weight: number;

  @Column({ default: 'defaultpicture.jpg' })
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
