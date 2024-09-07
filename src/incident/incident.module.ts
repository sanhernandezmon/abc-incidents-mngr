import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incident } from './incident.entity';
import { IncidentResolver } from './incident.resolver';
import { IncidentService } from './incident.service';

@Module({
  imports: [TypeOrmModule.forFeature([Incident])],
  providers: [IncidentResolver, IncidentService],
})
export class IncidentModule {}
