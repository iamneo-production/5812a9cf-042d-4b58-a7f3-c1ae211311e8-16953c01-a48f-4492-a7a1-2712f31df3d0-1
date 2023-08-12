import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';
import { HighlightDirective } from './highlight.directive';
import {SidebarModule} from 'primeng/sidebar';
import { PublisherCountListComponent } from './publisher-count-list/publisher-count-list.component';
import {DialogModule} from 'primeng/dialog';

import {DropdownModule} from 'primeng/dropdown';
import { DifficultWiseReportComponent } from './difficult-wise-report/difficult-wise-report.component';
import { PublisherLoginComponent } from './publisher-login/publisher-login.component';
import { PublisherSchoolTableComponent } from './publisher-school-table/publisher-school-table.component';
import { PublisherOverlayPanalComponent } from './publisher-overlay-panal/publisher-overlay-panal.component';
import { PlyrModule } from 'ngx-plyr';  


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    PublisherCountListComponent,
    DifficultWiseReportComponent,
    PublisherLoginComponent,
    PublisherSchoolTableComponent,
    PublisherOverlayPanalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CheckboxModule,
    SidebarModule,
    DropdownModule,
    DialogModule,
    PlyrModule
=======
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { VideoModule } from './video/video.module';
import { ClipComponent } from './clip/clip.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ClipsListComponent } from './clips-list/clips-list.component';
import { TimestampPipe } from './pipes/timestamp.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ClipComponent,
    NotFoundComponent,
    ClipsListComponent,
    TimestampPipe,
  ],
  imports: [
    BrowserModule,
    VideoModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
