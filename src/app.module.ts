import { Module } from '@nestjs/common';
import { DisplacementsModule } from './modules/displacements/displacements.module';

@Module({
  imports: [DisplacementsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
