import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculationTypeModule } from './CalculationTypes/calculationTypes.module';
import { CalculationType } from './CalculationTypes/calculationTypes.entity';
import { ConfigModule } from '@nestjs/config';
import { ProofTypeModule } from './ProofTypes/proofTypes.module';
import { ProofTypes } from './ProofTypes/proofTypes.entity';
import { ItemRolesModule } from './ItemRoles/itemRoles.module';
import { ItemRoles } from './ItemRoles/itemRoles.entity';
import { Item } from './Items/item.entity';
import { ItemModule } from './Items/item.module';
import { ProofStatusModule } from './ProofStatus/proofStatus.module';
import { ProofStatus } from './ProofStatus/proofStatus.entity';
import { Proof } from './Proof/proof.entity';
import { Report } from './Report/report.entity';
import { ProofModule } from './Proof/proof.module';
import { ReportModule } from './Report/report.module';
import { ItemProof } from './ItemProof/ItemProof.entity';
import { ItemProofModule } from './ItemProof/ItemProof.module';
import { HttpModule } from '@nestjs/axios';
import { ReportStatus } from './ReportStatus/reportStatus.entity';
import { ReportStatusModule } from './ReportStatus/reporStatus.module';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';
import { UserRole } from './user-role/entities/user-role.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HttpModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      entities: [
        CalculationType,
        ProofTypes,
        ItemRoles,
        Item,
        ProofStatus,
        Proof,
        Report,
        ItemProof,
        ReportStatus,
        UserRole,
        User
      ],
      synchronize: false,
      ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    }),
    CalculationTypeModule,
    ProofTypeModule,
    ItemRolesModule,
    ItemModule,
    ProofStatusModule,
    ProofModule,
    ReportModule,
    ItemProofModule,
    ReportStatusModule,
    UserRoleModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
