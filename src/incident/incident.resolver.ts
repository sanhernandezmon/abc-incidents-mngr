import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Incident } from './incident.entity';
import { CreateIncidentInput, UpdateIncidentInput } from './dto/incident.dto';
import { IncidentService } from './incident.service';

@Resolver(() => Incident)
export class IncidentResolver {
  constructor(private readonly incidentService: IncidentService) {}

  @Mutation(() => Incident)
  async createIncident(@Args('createIncidentInput') createIncidentInput: CreateIncidentInput) {
    return this.incidentService.create(createIncidentInput);
  }

  @Query(() => [Incident])
  async incidents() {
    return this.incidentService.findAll();
  }

  @Mutation(() => Incident)
  async updateIncident(@Args('updateIncidentInput') updateIncidentInput: UpdateIncidentInput) {
    return this.incidentService.update(updateIncidentInput);
  }
}
