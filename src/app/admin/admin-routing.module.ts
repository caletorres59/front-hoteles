import { NgModule } from '@angular/core';
import  {RouterModule, Routes} from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Hotel } from '../models/hotel';

const adminRoutes: Routes = [
    {
        path : 'admin',
        component:  LoginComponent
        
      
    },
    {
        path : 'register',
        component:  RegisterComponent,
    },
    {
        path : 'dashboard',
        component:  MainComponent,
        children: [
            {path: '', component: ListComponent},
            {path: 'add', component: CreateComponent},
            {path: 'edit/:id', component: EditComponent}

        ],
    }
   

];


@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {}