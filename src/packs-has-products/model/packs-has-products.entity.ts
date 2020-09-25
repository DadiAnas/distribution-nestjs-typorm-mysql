import { Packs } from 'src/packs/models/packs.entity';
import { Products } from 'src/products/model/products.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Packs_has_products {
  @Column({ type: 'float' })
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    Type => Packs,
    packs => packs.packsproducts,
    { primary: true },
  )
  packs: Packs;

  @ManyToOne(
    type => Products,
    products => products.packsproducts,
    { primary: true },
  )
  products: Products;
}
