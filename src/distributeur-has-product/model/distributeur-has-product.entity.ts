import { Distributeurs } from 'src/distributeurs/model/distributeurs.entity';
import { Products } from 'src/products/model/products.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';

@Entity()
export class Distributeur_has_product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  quantity_current: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    type => Distributeurs,
    distributeurs => distributeurs.distributeursproducts,
  )
  distributeur: Distributeurs;

  @ManyToOne(
    type => Products,
    products => products.distributeursproducts,
  )
  products: Products;
}
