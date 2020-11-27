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
import { NewsItemComponent } from './news-item/news-item.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MapLocalizeComponent } from './map-localize/map-localize.component';
import { EventsGalleryComponent } from './events-gallery/events-gallery.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormularDataComponent } from './formular-data/formular-data.component';
import { UploadPicComponent } from './admin/upload-pic/upload-pic.component';
import { ImageDragDirective } from './admin/image-drag.directive';
import { TextUploadComponent} from './admin/text-upload/text-upload.component';
import { AdminAddEventoComponent } from './admin/admin-add-evento/admin-add-evento.component';
import { FormsModule } from '@angular/forms';
import { NationalityComponent } from './database-components/nationality/nationality.component';
import { UserComponent } from './database-components/user/user.component';
import { EventoComponent } from './database-components/evento/evento.component';
import { ReservationComponent } from './database-components/reservation/reservation.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DatepickerComponent } from './admin/datepicker/datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoardAdminComponent } from './admin/board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders} from './helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MatRadioModule } from '@angular/material/radio';
import { DataCheckComponent } from './data-check/data-check.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './admin/participants/participants.component';
import { EditEventComponent } from './admin/edit-event/edit-event.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    NewsItemComponent,
    FooterComponent,
    ContactComponent,
    MapLocalizeComponent,
    EventsGalleryComponent,
    EventDetailComponent,
    LoginComponent,
    RegisterComponent,
    FormularDataComponent,
    UploadPicComponent,
    ImageDragDirective,
    TextUploadComponent,
    AdminAddEventoComponent,
    NationalityComponent,
    UserComponent,
    EventoComponent,
    ReservationComponent,
    DatepickerComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    HomeComponent,
    DataCheckComponent,
    ConfirmationDialogComponent,
    SuccessDialogComponent,
    EventSearchComponent,
    EditDataComponent,
    ParticipantsComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
platformBrowserDynamic().bootstrapModule(AppModule);
