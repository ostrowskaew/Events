import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MapLocalizeComponent } from './map-localize/map-localize.component';
import { EventsGalleryComponent } from './events-gallery/events-gallery.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormularDataComponent } from './formular-data/formular-data.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { UploadPicComponent } from './admin/upload-pic/upload-pic.component';
import { ImageDragDirective } from './admin/image-drag.directive';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { TextUploadComponent} from './admin/text-upload/text-upload.component';
  import { from } from 'rxjs';
import { AdminEventDetailComponent } from './admin/admin-event-detail/admin-event-detail.component';
import { AdminAddEventComponent } from './admin/admin-add-event/admin-add-event.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    NewsComponent,
    NewsItemComponent,
    FooterComponent,
    ContactComponent,
    MapLocalizeComponent,
    EventsGalleryComponent,
    EventDetailComponent,
    LoginComponent,
    RegisterComponent,
    FormularDataComponent,
    AdminAboutComponent,
    UploadPicComponent,
    ImageDragDirective,
    AdminContactComponent,
    TextUploadComponent,
    AdminEventDetailComponent,
    AdminAddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
