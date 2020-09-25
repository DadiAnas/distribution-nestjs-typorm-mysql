import { Packs } from 'src/packs/models/packs.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Packtypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string

  @OneToMany(
    type => Packs,
    packs => packs.type,
  )
  packs: Packs[];
}
