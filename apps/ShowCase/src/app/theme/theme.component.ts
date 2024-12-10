import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeService} from "../utility/theme.service";

@Component({
  selector: 'app-theme',
  imports: [CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent implements OnInit{
  ngOnInit() {
    console.log('here')
  }
  themeService = inject(ThemeService);
}
