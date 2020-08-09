import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnsemblModule } from './ensembl/ensembl.module';
import { UcscModule } from './ucsc/ucsc.module';
import { CoordindateComponent } from './coordindate/coordindate.component';
import { MaskoptionComponent } from './maskoption/maskoption.component';
import { SpeciesComponent } from './species/species.component';
import { QualificationComponent } from './qualification/qualification.component';
import { SequencesResutlsComponent } from './sequences-resutls/sequences-resutls.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordindateComponent,
    MaskoptionComponent,
    SpeciesComponent,
    QualificationComponent,
    SequencesResutlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnsemblModule,
    UcscModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
