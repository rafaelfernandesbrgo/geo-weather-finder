import { ValidationError } from 'yup';

export interface Errors {
  [Key: string]: string;
}


//to show error in message
export function getValidationErrorsMessage(err: ValidationError): string {
  let messages = '';
  err.inner.forEach(error => {
    if (error.path) {
      if (messages === '') {
        messages = error.message
      } else {
        messages = error.message + ', ' + messages
      }

    }
  });
  return messages;
  
}

