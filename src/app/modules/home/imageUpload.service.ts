import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageDTO } from './image.dto';
import { PredictedImageDTO } from './predictedImage.dto';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private urlServicio = environment.url_backend + 'depurador';

  constructor(private http: HttpClient) { }

  public uploadImage(image: ImageDTO): Observable<PredictedImageDTO> {
    const formData = new FormData();
    formData.append('model', image.model);
    formData.append('image', image.image);
    return this.http.post<PredictedImageDTO>(`${this.urlServicio}`, formData);
  }

}
