import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

var $: any;
@Injectable({
  providedIn: 'root'
})

export class AlertsService {
  constructor() { }

  notify(text: string, status: 'info' | 'success' | 'warning' | 'danger', timer = 4000) {
    $.notify(
      {
        icon: "ti-gift",
        message: text,
      },
      {
        type: status,
        timer: timer,
        placement: {
          from: "top",
          align: "center",
        },
        template:
          '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
      }
    );


  }

  success(title: string, message?: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonText: 'OK'
    });
  }

  error(title: string, message?: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonText: 'OK'
    });
  }

  warning(title: string, message?: string) {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      confirmButtonText: 'OK'
    });
  }

  info(title: string, message?: string) {
    Swal.fire({
      icon: 'info',
      title: title,
      text: message,
      confirmButtonText: 'OK'
    });
  }

  confirm(title: string, message?: string): Promise<boolean> {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      return result.isConfirmed;
    });
  }

}
