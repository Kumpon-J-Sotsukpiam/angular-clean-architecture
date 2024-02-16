import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreDataModule } from '@core/core.module';
import { UIModule } from './components/ui/ui.module';
import { LayoutModule } from './components/layouts/layout.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}, {
            metaReducers: []
        }),
        EffectsModule.forRoot([]),
        CoreDataModule,
        UIModule,
        LayoutModule
    ]
})
export class AppModule { }
