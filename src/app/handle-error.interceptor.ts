import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
// import{AlertifyService } from './alertify.service';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {

  // constructor(private alertify:AlertifyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('http request started');
    return next.handle(request)
    .pipe(catchError((error:HttpErrorResponse)=>{
                       console.log(error);
                      //  this.alertify.error(error.error);
                       return throwError(error.error);
       })
    );
  }
}
