import { Injectable } from "@nestjs/common";

// import { throwError } from "rxjs";

@Injectable()
export class AppService {
  getHello() {
    if (Math.random() > 0.5) {
      throw new Error('my error');
    }
    return 'Hello World!';
  }
}
