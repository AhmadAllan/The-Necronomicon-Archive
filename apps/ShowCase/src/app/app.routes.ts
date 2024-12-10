import { Route } from '@angular/router';
import {AppComponent} from "./app.component";
import {ThemeComponent} from "./theme/theme.component";

export const appRoutes: Route[] = [
  {path: '', component: AppComponent},
  {path: 'themes', component: ThemeComponent},
];
