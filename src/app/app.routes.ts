import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';


export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'users',
        component: UserListComponent
    }
];
