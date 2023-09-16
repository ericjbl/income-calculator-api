import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"

@Module({
  imports: [UserModule,
    JwtModule.register({ global: true })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
