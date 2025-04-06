import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';


export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'useradd',
        component: UserFormComponent
    }
];
