import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  startBrowsing() {
    this.router.navigate(['/browseCards'], { queryParams: { category: 'guest' } });
  }

  learnMore() {
    // Scroll to tips section or show more information
    const tipsSection = document.querySelector('.tips-section');
    if (tipsSection) {
      tipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}