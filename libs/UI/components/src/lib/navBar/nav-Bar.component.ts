import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ITabs} from "@necronomicon/interfaces";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'lib-nav-bar',
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-Bar.component.html',
  styleUrl: './nav-Bar.component.scss',
})
export class NavBarComponent {
  @Input() tabs!: ITabs[];

  constructor(private router: Router) {}

  async handleRouting(route: string) {
    await this.router.navigate([route]);
  }
}
