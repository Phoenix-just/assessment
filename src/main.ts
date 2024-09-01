import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ENV } from './environments/environment';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    if (ENV.enviroment == 'production') {
      console.log = () => {}
    }
  })
  .catch((err) => console.error(err));
