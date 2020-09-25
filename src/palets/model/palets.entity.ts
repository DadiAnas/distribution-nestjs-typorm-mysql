import { Palets_has_packs } from 'src/palets-has-packs/model/palets-has-packs.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @OneToMany(
    type => Palets_has_packs,
    paletshaspacks => paletshaspacks.palets,
  )
  paletspacks: Palets_has_packs[];
}
