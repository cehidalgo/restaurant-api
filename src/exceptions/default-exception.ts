type HttpErrorCode = '404' | '500' | '400' | '503';

export interface DefaultException {
  className: string;
  message: string;
}

export interface HttpDefaultException extends DefaultException {
  httpErrorCode: HttpErrorCode;
}
