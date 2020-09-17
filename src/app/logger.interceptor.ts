import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

// you always make mistakes. Should be provided in provider in app.module.ts! STUPID!!
@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('this is test intercept test url : ' + request.url);
    console.log('this is test intercept test method: ' + request.method);
    console.log('this is test intercept test param: ' + request.params);

    // 용례: API token 사용가능
    let httpAuth = request.headers.get('Authorization');

    console.log('before intercepting: ' + httpAuth);
    httpAuth = '!@#$%^&*: ' + httpAuth;

    request.headers.append('RefreshToken', httpAuth);

    // check decode and encode
    console.log('after intercepting request header test:' + httpAuth);
    return next.handle(request);
  }
}
