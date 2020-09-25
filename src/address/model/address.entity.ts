import { Address_types } from 'src/address-types/model/address-types.entity';
import { Countries } from 'src/countries/model/countries.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  zip_code: number;

  @Column()
  adress1: string;

  @Column()
  adress2: string;

  @Column()
  city: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    type => Countries,
    country => country.adresss,
  )
  country: Countries;

  @ManyToOne(
    type => Address_types,
    addresstype => addresstype.adresss,
  )
  type: Address_types;
}
