import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsService } from './maps.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MapsService],
})
export class AppModule {}
