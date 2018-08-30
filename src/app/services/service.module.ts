import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  PersonaService,
  InformeService,
  AnotacioService,
  PeticioService,
  LoginGuardGuard,
  SubirArchivoService,
  NotificacionsService
 } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    PersonaService,
    InformeService,
    AnotacioService,
    PeticioService,
    LoginGuardGuard,
    SubirArchivoService,
    ModalUploadService,
    NotificacionsService
  ],
  declarations: []
})
export class ServiceModule { }
