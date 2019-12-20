import { SafeUrl } from '@angular/platform-browser';

export interface PredictedImageDTO {
  prediction: string;
  heatmap: string;
  safeImg: SafeUrl;
}
