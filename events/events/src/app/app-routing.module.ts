import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminAddEventComponent } from './admin/admin-add-event/admin-add-event.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminEventDetailComponent } from './admin/admin-event-detail/admin-event-detail.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsGalleryComponent } from './events-gallery/events-gallery.component';
import { FormularDataComponent } from './formular-data/formular-data.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'event-detail/:id:', component: EventDetailComponent },
  { path: 'events-gallery', component: EventsGalleryComponent },
  { path: 'formular-data', component: FormularDataComponent },
  { path: 'news', component: NewsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'news', pathMatch: 'full'},
  { path: 'admin/admin-contact', component: AdminContactComponent},
  { path: 'admin/admin-news', component: AdminAboutComponent},
  { path: 'admin/admin-add-event', component: AdminAddEventComponent},
  { path: 'admin/admin-event/:id', component: AdminEventDetailComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
