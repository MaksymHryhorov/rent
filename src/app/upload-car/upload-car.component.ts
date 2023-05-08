import {Component} from '@angular/core';
import {CarService} from "../car.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload-car',
  templateUrl: './upload-car.component.html',
  styleUrls: ['./upload-car.component.css']
})
export class UploadCarComponent {
  fileUpload: boolean = false;
  fileEntry: FileSystemFileEntry | undefined;

  constructor(private carService: CarService, private router: Router) {
  }

  uploadCar() {
    if (this.fileEntry !== undefined) {
      console.log(this.fileEntry);

      this.fileEntry.file(file => {
        this.carService.uploadCar(file).subscribe(data => {
          this.router.navigateByUrl("/save-car-details/" + data.carId);
        })
      })
    }
  }
}
