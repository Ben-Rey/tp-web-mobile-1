import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionReseauComponent } from './section-reseau/section-reseau.component';
import { SectionCarousselComponent } from './section-caroussel/section-caroussel.component';
import { SectionImagesVideoComponent } from './section-images-video/section-images-video.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionReseauComponent,
    SectionCarousselComponent,
    SectionImagesVideoComponent,
    SectionFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
