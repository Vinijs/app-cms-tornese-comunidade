import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-enterprise/camera/ngx';
import { SessionService } from '../services/sessionService';
import { Administrador } from '../models/administrador';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
      this.admLogado = SessionService.get("admlogado")
      if(!this.admLogado){
      this.router.navigateByUrl("/login")
    }
  }
  imagem: string = ""
  private camera: Camera = new Camera();
  admLogado: Administrador

  chamarCamera(){
    alert("aqui");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
     }

     this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;

     this.imagem = base64Image
     }, (err) => {
     // Handle error
     });
  }

}
