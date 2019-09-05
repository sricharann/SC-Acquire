import { ApprovedComponent } from './../aquire/components/approved/approved.component';
import { RejectedComponent } from './../aquire/components/rejected/rejected.component';
import { CreatetargetComponent } from './../aquire/components/createtarget/createtarget.component';
import { ActiveComponent } from './../aquire/components/active/active.component';
import { Routes } from '@angular/router';
import { PendingapprovalComponent } from '../aquire/components/pendingapproval/pendingapproval.component';

export const routes: Routes = [
    { pathMatch: 'full', path: '', component: CreatetargetComponent },
    { pathMatch: 'full', path: 'targetdetails', component: CreatetargetComponent },
    { pathMatch: 'full', path: 'active', component: ActiveComponent },
    { pathMatch: 'full', path: 'pendingapproval', component: PendingapprovalComponent },
    { pathMatch: 'full', path: 'approved', component: ApprovedComponent },
    { pathMatch: 'full', path: 'rejected', component: RejectedComponent },

];
