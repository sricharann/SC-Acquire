import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes),
    ]
})

export class RouteModule {
    constructor() {
        //
    }
}
