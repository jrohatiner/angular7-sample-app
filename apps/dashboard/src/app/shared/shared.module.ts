import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '@workshop/material';
import { CoreDataModule } from '@workshop/core-data';

import { CustomersStatusComponent } from './customers-status/customers-status.component';
import { CustomerGroupStatusComponent } from './customer-group-status/customer-group-status.component';
import { CustomersService } from '../../../../../libs/core-data/src/lib/customers/customers.service';
import { ErrorInterceptor } from '../../../../../libs/core-data/src/lib/error/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectsService } from '../../../../../libs/core-data/src/lib/projects/projects.service';
import { AuthService } from '../../../../../libs/core-data/src/lib/auth/auth.service';
import { NotificationsService } from '../../../../../libs/core-data/src/lib/notifications/notifications.service';
import { TokenInterceptor } from '../../../../../libs/core-data/src/lib/auth/token.interceptor';
import { AuthGuardService } from '../../../../../libs/core-data/src/lib/auth/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CoreDataModule
  ],
  exports: [
    CustomersStatusComponent,
    CustomerGroupStatusComponent,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CoreDataModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CustomersService,
    NotificationsService,
    ProjectsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  declarations: [CustomersStatusComponent, CustomerGroupStatusComponent]
})
export class SharedModule {}
