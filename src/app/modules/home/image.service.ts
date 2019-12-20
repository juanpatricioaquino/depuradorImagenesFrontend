import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageDTO } from './image.dto';
import { PredictedImageDTO } from './predictedImage.dto';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private urlServicio = environment.url_backend + 'depurador';

  constructor(private http: HttpClient) { }

  getImage(): Observable<PredictedImageDTO> {
    return this.http.get<PredictedImageDTO>(`${this.urlServicio}`);
  }

  postImage(dto: ImageDTO): Observable<PredictedImageDTO> {
    return this.http.post<PredictedImageDTO>(`${this.urlServicio}`, dto);
  }

}
