import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateIncidentInput {
  @Field()
  initialDate: Date;

  @Field()
  resolutionDate: Date;

  @Field()
  clientId: number;

  @Field()
  incidentType: string;

  @Field()
  companyId: number;
}

@InputType()
export class UpdateIncidentInput {
  @Field(() => Int)
  id: number;

  @Field()
  initialDate?: Date;

  @Field()
  resolutionDate?: Date;

  @Field()
  clientId?: number;

  @Field()
  incidentType?: string;

  @Field()
  companyId?: number;
}
