import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ITabs} from "@necronomicon/interfaces";

@Component({
  selector: 'lib-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-Bar.component.html',
  styleUrl: './nav-Bar.component.scss',
})
export class NavBarComponent {
  @Input() tabs!: ITabs[] ;
}
