import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'skills',component:MySkillsComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'contact',component:ContactsComponent
    },
    
];
