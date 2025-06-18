import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperIntl, MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { PublicModule } from './public/public.module';
import {FormControl} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
//import { PublicRoutingModule } from './public-routing.module';

import { CommonModule } from '@angular/common';


import { AddLecDialog } from './docintarface-v2/docintarface-v2.component';
import { ClNavComponent } from './cl-nav/cl-nav.component';
import { MedlcComponent } from './medlc/medlc.component';
import { RecformComponent } from './recform/recform.component';
import { CardComponent } from './card/card.component';
import { HistoryComponent } from './history/history.component';
import { LecarstvoComponent } from './lecarstvo/lecarstvo.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

import { SomeDataService } from './services/some-data.service';
import { TestReceptService } from './services/test-recept.service';
import { QrComponent } from './qr/qr.component';
import { WstestComponent } from './wstest/wstest.component';
import { OtchetnostComponent } from './otchetnost/otchetnost.component';
import { OtchetcardComponent } from './otchetcard/otchetcard.component';
import { DocNavComponent } from './doc-nav/doc-nav.component';
import { MatMenuModule } from '@angular/material/menu';
import { DocintarfaceComponent } from './docintarface/docintarface.component';
import { DoclcComponent } from './doclc/doclc.component';
import { CreaterecformComponent } from './createrecform/createrecform.component';
import { DocintarfaceV2Component } from './docintarface-v2/docintarface-v2.component';


@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    MyNavComponent,
    ClNavComponent,
    MedlcComponent,
    RecformComponent,
    CardComponent,
    HistoryComponent,
    AddLecDialog,
    LecarstvoComponent,
    
    QrComponent,
    
    WstestComponent,
    LoginComponent,
    RegisterComponent,
    OtchetnostComponent,
    OtchetcardComponent,
    DocNavComponent,
    DocintarfaceComponent,
    DoclcComponent,
    CreaterecformComponent,
    DocintarfaceV2Component
    //PublicModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    //MatDialog,
    //MatStepperIntl, 
    //StepperOrientation,
    MatStepperModule

    
  ],
  providers: [SomeDataService,TestReceptService,],
  bootstrap: [AppComponent]

})
export class AppModule { }
