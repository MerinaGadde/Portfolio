import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatCardModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/mery Resume.docx';
    link.download = 'mery Resume.docx';
    link.click();
  }
}
