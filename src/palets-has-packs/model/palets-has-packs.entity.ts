import { Packs } from 'src/packs/models/packs.entity';
import { Palets } from 'src/palets/model/palets.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Palets_has_packs {
  @Column({ type: 'float' })
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    Type => Palets,
    palets => palets.paletspacks,
    { primary: true },
  )
  palets: Palets;

  @ManyToOne(
    type => Packs,
    packs => packs.paletspacks,
    { primary: true },
  )
  packs: Packs;
}
