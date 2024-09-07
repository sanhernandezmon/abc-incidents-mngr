import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Incident {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  initialDate: Date;

  @Column()
  @Field()
  resolutionDate: Date;

  @Column()
  @Field()
  clientId: number;

  @Column()
  @Field()
  incidentType: string;

  @Column()
  @Field()
  companyId: number;
}
