import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Platformu yok etme işlevi
const platform = bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
