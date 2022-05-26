import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactaComponent } from './portada/Components/contacta/contacta.component';
import { LacervesaComponent } from './portada/Components/lacervesa/lacervesa.component';
import { LafabricaComponent } from './portada/Components/lafabrica/lafabrica.component';
import { LempresaComponent } from './portada/Components/lempresa/lempresa.component';
import { NavbarComponent } from './portada/Components/navbar/navbar.component';
import { NoticiaExtensComponent } from './portada/Components/noticia-extens/noticia-extens.component';
import { NoticiesComponent } from './portada/Components/noticies/noticies.component';
import { SeguimentLlistaComponent } from './portada/Components/seguiment-llista/seguiment-llista.component';
import { SeguimentComponent } from './portada/Components/seguiment/seguiment.component';
import { FooterComponent } from './user/Components/footer/footer.component';
import { HeaderComponent } from './user/Components/header/header.component';
import { LoginComponent } from './user/Components/login/login.component';
import { RegisterComponent } from './user/Components/register/register.component';
import { FormatDatePipe } from './user/pipes/format-date.pipe';
import { AuthInterceptorService } from './user/Services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NoticiesComponent,
    LempresaComponent,
    LafabricaComponent,
    LacervesaComponent,
    SeguimentComponent,
    FormatDatePipe,
    NoticiaExtensComponent,
    SeguimentLlistaComponent,
    ContactaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
