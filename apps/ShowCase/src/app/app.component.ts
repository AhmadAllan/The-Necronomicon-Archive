import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ITabs } from '@necronomicon/interfaces';
import {NavBarComponent} from "@necronomicon/ui";

@Component({
  imports: [RouterModule, NavBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ShowCase';
  tabs: ITabs[] = [
    {
      id: 'nav',
      name: 'Nav',
      route: 'showcase/navigation',
    },
    {
      id: 'footer',
      name: 'Footer',
      route: 'showcase/footer',
    },
    {
      id: 'themes',
      name: 'Themes',
      route: 'themes',
    },
  ];
}
