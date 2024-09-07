import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incident } from './incident.entity';
import { CreateIncidentInput, UpdateIncidentInput } from './dto/incident.dto';

@Injectable()
export class IncidentService {
  constructor(
    @InjectRepository(Incident)
    private readonly incidentRepository: Repository<Incident>,
  ) {}

  async create(createIncidentInput: CreateIncidentInput): Promise<Incident> {
    const incident = this.incidentRepository.create(createIncidentInput);
    return this.incidentRepository.save(incident);
  }

  async findAll(): Promise<Incident[]> {
    return this.incidentRepository.find();
  }

  async update(updateIncidentInput: UpdateIncidentInput): Promise<Incident> {
    const incident = await this.incidentRepository.preload(updateIncidentInput);
    if (!incident) {
      throw new Error('Incident not found');
    }
    return this.incidentRepository.save(incident);
  }
}
