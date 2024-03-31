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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';

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
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    FriendService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
