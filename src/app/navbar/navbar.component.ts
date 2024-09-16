import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import $ from 'jquery';
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MySkillsComponent, FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{

}



