import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAddEventoComponent } from './admin/admin-add-evento/admin-add-evento.component';
import { BoardAdminComponent } from './admin/board-admin/board-admin.component';
import { UploadPicComponent } from './admin/upload-pic/upload-pic.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ContactComponent } from './contact/contact.component';
import { EventoComponent } from './database-components/evento/evento.component';
import { NationalityComponent } from './database-components/nationality/nationality.component';
import { ReservationComponent } from './database-components/reservation/reservation.component';
import { UserComponent } from './database-components/user/user.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsGalleryComponent } from './events-gallery/events-gallery.component';
import { FormularDataComponent } from './formular-data/formular-data.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UploadFileService } from './services/upload-file.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'event-detail/:id:', component: EventDetailComponent },
  { path: 'events-gallery', component: EventsGalleryComponent },
  { path: 'formular-data', component: FormularDataComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/admin-add-event', component: AdminAddEventoComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'events', component: EventoComponent},
  { path: 'users', component: UserComponent},
  { path: 'reservations', component: ReservationComponent},
  { path: 'nationalities', component: NationalityComponent},
  { path: 'upload-pic', component: UploadPicComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user-events', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
