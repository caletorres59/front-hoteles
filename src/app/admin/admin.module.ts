
import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';

//Components

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomComponent } from './components/room/room.component';

@NgModule({

    declarations: [
        MainComponent,
        ListComponent,
        CreateComponent,
        EditComponent,
        LoginComponent,
        RegisterComponent,
        RoomComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AdminRoutingModule
    ],

    exports: [
        MainComponent,
        ListComponent,
        CreateComponent,
        EditComponent,
        LoginComponent,
        RegisterComponent
    ],

    providers: []
})

export class AdminModule{}

