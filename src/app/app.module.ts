import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule }from '@angular/material/toolbar'
import { MatButtonModule }from '@angular/material/button'
import { MatIconModule }from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat'

//import { DateFormatPipe } from './shared/pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    //DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    AngularFireModule.initializeApp({"projectId":"vmoa-2024","appId":"1:689910227264:web:d89bbc3289096176631aa5","storageBucket":"vmoa-2024.appspot.com","apiKey":"AIzaSyAZ96YJ3rUqk1Mq7ELcS6k4khxHgn-Skf8","authDomain":"vmoa-2024.firebaseapp.com","messagingSenderId":"689910227264","measurementId":"G-1E9VLCR5FG"}),
    //provideFirebaseApp(() => initializeApp({"projectId":"vmoa-2024","appId":"1:689910227264:web:d89bbc3289096176631aa5","storageBucket":"vmoa-2024.appspot.com","apiKey":"AIzaSyAZ96YJ3rUqk1Mq7ELcS6k4khxHgn-Skf8","authDomain":"vmoa-2024.firebaseapp.com","messagingSenderId":"689910227264","measurementId":"G-1E9VLCR5FG"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
