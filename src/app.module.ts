import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { IncidentModule } from './incident/incident.module';
import { Incident } from './incident/incident.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Change to your database host
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // Change to your PostgreSQL username
      password: 'S3cret', // Change to your PostgreSQL password
      database: 'incidents', // Change to your PostgreSQL database name
      entities: [Incident],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    IncidentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
