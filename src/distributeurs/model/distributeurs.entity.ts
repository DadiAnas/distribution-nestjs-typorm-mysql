import { Distributeur_has_product } from 'src/distributeur-has-product/model/distributeur-has-product.entity';
import { Persons } from 'src/persons/model/persons.entity';
import { Users } from 'src/users/model/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Distributeurs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reason_social: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(type => Users)
  @JoinColumn()
  user: Users;

  @OneToOne(type => Persons)
  @JoinColumn()
  person: Persons;

  @OneToMany(
    type => Distributeur_has_product,
    distproduct => distproduct.distributeur,
  )
  distributeursproducts: Distributeur_has_product[];
}
