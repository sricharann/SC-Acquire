import { Component, OnInit } from '@angular/core';
import { TargetModal } from '../../modal/target.modal';
import { GlobalContext } from '../../services/global-context';

@Component({
  selector: 'app-pendingapproval',
  templateUrl: './pendingapproval.component.html',
})
export class PendingapprovalComponent implements OnInit {

  targets: any;
  pendingApprovalTarget: TargetModal;
  pendingApprovalTargets: any;
  constructor(private globalContext: GlobalContext) {
    this.targets = JSON.parse(JSON.stringify(globalContext.getTargets()));
    this.pendingApprovalTargets = this.targets.filter(obj => obj.targetStatus === 'Pending Approval');
  }

  ngOnInit() {
  }

}
