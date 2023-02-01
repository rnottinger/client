import { Injectable } from '@angular/core';
import { ConfigService } from "./config.service";

@Injectable()
export class ApiService {

  constructor(
      private endpoint: string,
      private configService: ConfigService
  ) {

  }

  public getEndpoint() {
    return this.configService.config.apiUrl + this.endpoint;
  }


  public errorAlert(errors = []) {
    // this.bsModalRef = this.modalService.show(ModalAlertComponent, {
    //   initialState: {
    //     errors: errors
    //   }
    // });
    // this.bsModalRef.content.template = '';
    //
    // this.modalService.onHide.subscribe(result => {
    //   console.log(errors);
    // });
  }
}
