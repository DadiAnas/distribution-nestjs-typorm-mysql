import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Categories } from 'src/categories/model/categories.entity';
import { Packs_has_products } from 'src/packs-has-products/model/packs-has-products.entity';
import { Distributeur_has_product } from 'src/distributeur-has-product/model/distributeur-has-product.entity';

@Entity()
@Unique(['designation'])
export class Products {
  @PrimaryGeneratedColumn()
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

  @OneToMany(
    type => Packs_has_products,
    packshasproducts => packshasproducts.products,
  )
  packsproducts: Packs_has_products[];

  @OneToMany(
    type => Distributeur_has_product,
    distproduct => distproduct.products,
  )
  distributeursproducts: Distributeur_has_product[];

  @ManyToOne(
    type => Categories,
    categories => categories.products,
    {
      eager: true,
      cascade: true,
    },
  )
  categories?: Categories;
}
