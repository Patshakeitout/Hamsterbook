import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamsterCardComponent } from './hamster-card/hamster-card.component';
import { FriendboxComponent } from './friendbox/friendbox.component';
import { HeaderComponent } from './header/header.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { FriendService } from './friend.service';

@NgModule({
  declarations: [
    AppComponent,
    HamsterCardComponent,
    FriendboxComponent,
    HeaderComponent,
    ProfileRowComponent,
    ProposalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    FriendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
