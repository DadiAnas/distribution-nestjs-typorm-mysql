import { Packs_has_products } from 'src/packs-has-products/model/packs-has-products.entity';
import { Packtypes } from 'src/packtypes/model/packtypes.entity';
import { Palets_has_packs } from 'src/palets-has-packs/model/palets-has-packs.entity';
import { Products } from 'src/products/model/products.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
   ManyToOne
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

  @OneToMany(
    type => Palets_has_packs,
    palethaspack => palethaspack.packs,
  )
  paletspacks: Palets_has_packs[];

  @ManyToOne(type => Packtypes,
    packtype => packtype.packs,{cascade:true,eager:true})
  type: Packtypes
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
