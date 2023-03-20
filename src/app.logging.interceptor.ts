import {
  CallHandler,
  Injectable,
  NestInterceptor,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, throwError, map, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('New request!');
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log(`\nExecution time: ${Date.now() - now}ms`);
        console.log('\nRequest was successful!');
      }),
      map((x) => {
        return {
          status: 'success',
          data: x,
        };
      }),
      catchError((err) => {
        return of({
          status: 'fail',
          data: err.message,
        });
      }),
    );
  }
}
