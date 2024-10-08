import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
@Input() projectName: string = "";
@Input() projectDescription: string = "";
@Input() tag1: string = "";
  @Input() tag2: string = "";
  @Input() projectLink: string = "";
}


