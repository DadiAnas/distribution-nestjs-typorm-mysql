import { Controller } from '@nestjs/common';
import { DistributeursService } from './distributeurs.service';
import { Crud } from '@nestjsx/crud';
import { Distributeurs } from './model/distributeurs.entity';

@Crud({
  model: { type: Distributeurs },
  query: {
    join: {
      Distributeur_has_product: {
        eager: true,
      },
      pesons: {
        eager: true,
      },
      users: {
        eager: true,
      },
    },
  },
})
@Controller('distributeurs')
export class DistributeursController {
  constructor(public service: DistributeursService) {}
}
