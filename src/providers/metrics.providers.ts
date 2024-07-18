import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

export const CustomMetricsProviders = [
  makeCounterProvider({
    name: 'PROM_METRIC_USER_NOT_FOUND_COUNTER',
    help: 'Counts the number of times a user was not found',
  }),
];
