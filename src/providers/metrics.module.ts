import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { CustomMetricsProviders } from './metrics.providers';

@Module({
  imports: [PrometheusModule],
  providers: [...CustomMetricsProviders],
  exports: [...CustomMetricsProviders],
})
export class CustomMetricsModule {}
