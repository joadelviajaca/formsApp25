import { Routes } from '@angular/router';
import { BasicosComponent } from './template/basicos/basicos.component';
import { DinamicosComponent } from './template/dinamicos/dinamicos.component';
import { SwitchesComponent } from './template/switches/switches.component';

export const routes: Routes = [
    {
        path: 'template', children: [
            { path: 'basicos', component: BasicosComponent },
            { path: 'dinamicos', component: DinamicosComponent },
            { path: 'switches', component: SwitchesComponent },
            { path: '**', redirectTo: 'basicos' }
        ]
    }
];
