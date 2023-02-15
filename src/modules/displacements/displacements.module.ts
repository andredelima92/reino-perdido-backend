import { Module } from '@nestjs/common';
import { DisplacementsGateway } from './gateways/displacements.gateway';
import { MapsService } from './services/maps.service';

@Module({
  controllers: [],
  providers: [DisplacementsGateway, MapsService],
})
export class DisplacementsModule {}
