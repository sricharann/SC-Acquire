import { ConfirmationService } from 'primeng/api';
import { ActiveComponent } from './aquire/components/active/active.component';
import { DropdownModule } from 'primeng/dropdown';
import { GlobalContext } from './aquire/services/global-context';
import { AquireServices } from './aquire/services/aquire-services';
import { HttpClientModule } from '@angular/common/http';
import { RouteModule } from './route/route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/components/app.component';
import { HeaderComponent } from './aquire/components/header/header.component';
import { FooterComponent } from './aquire/components/footer/footer.component';
import { DataViewModule } from 'primeng/dataview';
import { CreatetargetComponent } from './aquire/components/createtarget/createtarget.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { RejectedComponent } from './aquire/components/rejected/rejected.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TextMaskModule } from 'angular2-text-mask';
import {ProgressBarModule} from 'primeng/progressbar';
import { PendingapprovalComponent } from './aquire/components/pendingapproval/pendingapproval.component';
import { ApprovedComponent } from './aquire/components/approved/approved.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActiveComponent,
    CreatetargetComponent,
    RejectedComponent,
    PendingapprovalComponent,
    ApprovedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    TextMaskModule,
    RouteModule,
    DataViewModule,
    ToastModule,
    ReactiveFormsModule,
    MessageModule,
    DropdownModule,
    TabViewModule,
    PanelModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    ProgressBarModule
  ],
  providers: [AquireServices, GlobalContext, ConfirmationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
