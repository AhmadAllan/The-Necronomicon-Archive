import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavBarComponent} from "@the-necronomicon-archive/UI";
import { ITabs } from '@the-necronomicon-archive/interfaces';

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
    }
  ];
}
