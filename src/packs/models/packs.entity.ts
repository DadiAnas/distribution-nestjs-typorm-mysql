import { Packs_has_products } from 'src/packs-has-products/models/packs-has-products.entity';
import { Products } from 'src/products/model/products.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['id'])
export class Packs {
  @PrimaryGeneratedColumn({ name: 'packId' })
  id: number;

  @Column()
  code: string;

  @Column({ type: 'float' })
  unity_number: number;

  @Column({ type: 'float' })
  weight: number;

  @Column({ type: 'float' })
  volume: number;

  @Column({ default: 'defaultpackpicture.jpg' })
  picture: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Packs_has_products,
    packhasproduct => packhasproduct.packs,
  )
  packsproducts: Packs_has_products[];

  // @ManyToMany(type => Products)
  // @JoinTable({
  //   name: 'packs_has_products', // table name for the junction table of this relation
  //   joinColumn: {
  //     name: 'pack_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'product_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // products: Products[];

  // @ManyToOne(
  //   type => Packtype,
  //   packtypes => packtypes.packs,
  //   {
  //     eager: true,
  //   },
  // )
  // packtypes?: Packtypes;
}
