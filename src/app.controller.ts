import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MapsDTO, MapsService } from './maps.service';

@Controller()
export class AppController {
  constructor(private readonly mapService: MapsService) {}

  @Get()
  getHello(): MapsDTO[] {
    return this.mapService.getMaps();
  }

  @Get(':position')
  getByPosition(@Param('position', ParseIntPipe) position: number): any {
    return this.mapService.getMapByPosition(position);
  }
}
