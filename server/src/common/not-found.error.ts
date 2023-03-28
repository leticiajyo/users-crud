import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundError extends HttpException {
  constructor(entity) {
    super(`${entity} not found`, HttpStatus.NOT_FOUND);
  }
}
