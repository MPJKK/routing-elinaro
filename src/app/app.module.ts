import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';

import {AgmCoreModule} from '@agm/core';
import { RouteDirectionPipe } from './pipes/route-direction.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatButtonModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [
        AppComponent,
        SetupComponent,
        RoutesComponent,
        TopBarComponent,
        RouteDirectionPipe,

    ],
    imports: [
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatListModule,
        FlexLayoutModule,
        MatTabsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatListModule,
        MatExpansionModule,
        MatIconModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCo-hgadMZhDbru2L3XSRsfMETAJCJMnaE'

        })

    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
