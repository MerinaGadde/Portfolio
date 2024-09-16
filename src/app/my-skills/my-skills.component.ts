import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent, CommonModule, ProjectCardComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  ProjectCardComponent = [
    {
      projectName: 'Tic Tac Toe',
      projectDescription: 'A classic two-player game where opponents take turns marking spaces in a 3x3 grid to align three of their marks in a row.',
      tag1: 'HTML & CSS',
      tag2: 'JavaScript',
      projectLink: 'https://tic-tac-toe-game-chi-smoky.vercel.app/'
    },
    {
      projectName: 'To-Do List ',
      projectDescription: 'A to-do list app helps you keep track of tasks by letting you add, edit, and delete items. It is an easy way to organize what you need to do, set deadlines, and prioritize your tasks.',
      tag1: 'HTML & CSS',
      tag2: 'JavaScript',
      projectLink: 'https://simple-todo-list-app-phi.vercel.app/'
    },
    {
      projectName: 'Calculator App',
      projectDescription: 'A calculator website allows users to perform basic mathematical calculations like addition, subtraction, multiplication, and division. It is a simple and easy-to-use tool for quick math tasks.',
      tag1: 'HTML & CSS',
      tag2: 'JavaScript',
      projectLink: 'https://basic-calculator-indol.vercel.app/'
    }
  ];

}
