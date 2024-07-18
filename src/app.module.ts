import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { CustomMetricsProviders } from './providers/metrics.providers';
import { CustomMetricsModule } from './providers/metrics.module';

@Module({
  imports: [PrometheusModule.register(), CustomMetricsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    ...CustomMetricsProviders,
  ],
})
export class AppModule {}
