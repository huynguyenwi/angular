import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Detail } from './detail/detail';
import { Create } from './create/create';

export const routes: Routes = [
    {path: '',  component: Home, pathMatch: 'full'},
    // {path: 'detail/:id', component: Detail},
    // {path: 'create', component: Create},


    //lazy loading
    {
        path: 'detail/:id',
        loadComponent: () =>
            import('./detail/detail').then((m)=>m.Detail)
    },
        {
        path: 'create',
        loadComponent: () =>
            import('./create/create').then((m)=>m.Create)
    }
];
