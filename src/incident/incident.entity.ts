import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  initialDate: Date;

  @Column()
  resolutionDate: Date;

  @Column()
  clientId: number;

  @Column()
  incidentType: string;

  @Column()
  companyId: number;
}
