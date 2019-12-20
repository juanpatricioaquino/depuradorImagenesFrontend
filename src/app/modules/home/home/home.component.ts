import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Menu } from '@core/dto/menu.dto';
import { StorageService } from '@core/services/storage.service';
import { AppTemplateComponent } from '@core/template/app/app.component';
import { ImageDTO } from '../image.dto';
import { ImageService } from '../image.service';
import { ImageFile } from '../imageFile.dto';
import { ImageUploadService } from '../imageUpload.service';
import { PredictedImageDTO } from '../predictedImage.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menus: Menu[];
  idAplicacion: number = Number(this.storageService.getItem('idAplicacion'));
  predictedImage = {} as PredictedImageDTO;
  image = {} as ImageDTO;
  imagenAux: string;
  imagePath = {} as SafeResourceUrl;
  selectedFile = {} as ImageFile;
  isLoading: boolean = false;

  constructor(
    private storageService: StorageService,
    private appTemplateComponent: AppTemplateComponent,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private imageUploadService: ImageUploadService,
  ) { }

  ngOnInit() {
    this.appTemplateComponent.setearMenus(this.menus);
    this.postImage();
  }

  getImage(): void {
    this.imageService.getImage().subscribe(data => (this.predictedImage = data));
  }

  postImage(): void {
    this.image.model = "model_1";
    this.imageService.postImage(this.image).subscribe(data => (this.predictedImage = data));
  }

  processFile(imageInput: any) {
    this.isLoading = true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.image.image = event.target.result.split("base64,")[1];
      this.image.model = "model_1";
      this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(event.target.result);

      this.imageUploadService.uploadImage(this.image).subscribe(
        data => {
          data.heatmap = data.heatmap.split("b'")[1];
          data.heatmap = data.heatmap.substring(0, data.heatmap.length - 1);
          data.safeImg = this.sanitizer.bypassSecurityTrustUrl("data:image/jpg;base64, " + data.heatmap);
          this.predictedImage = data;
        },
        (err) => {

        })
    });
    this.isLoading = false;
    reader.readAsDataURL(file);
  }

}
