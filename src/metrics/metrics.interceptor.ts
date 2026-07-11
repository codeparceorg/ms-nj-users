import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';

import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MetricsService } from './metrics.service';

@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(private readonly metrics: MetricsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    // Ignorar el endpoint de métricas
    if (request.path === '/users/metrics') {
      return next.handle();
    }

    const start = process.hrtime();

    let statusCode = response.statusCode;

    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof HttpException) {
          statusCode = error.getStatus();
        } else {
          statusCode = 500;
        }

        return throwError(() => error);
      }),

      finalize(() => {
        const diff = process.hrtime(start);
        const duration = diff[0] + diff[1] / 1e9;

        const route =
          request.route?.path ??
          request.originalUrl ??
          request.url;

        const labels = {
          method: request.method,
          route,
          status_code: statusCode.toString(),
        };

        this.metrics.httpRequestsTotal.inc(labels);
        this.metrics.httpRequestDuration.observe(labels, duration);
      }),
    );
  }
}