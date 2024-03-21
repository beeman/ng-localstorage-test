import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideNgxLocalstorage } from 'ngx-localstorage'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNgxLocalstorage({})
  ]
};
