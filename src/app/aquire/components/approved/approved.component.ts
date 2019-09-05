import { Component, OnInit } from '@angular/core';
import { TargetModal } from '../../modal/target.modal';
import { GlobalContext } from '../../services/global-context';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
})
export class ApprovedComponent implements OnInit {

  targets: any;
  approvedTarget: TargetModal;
  approvedTargets: any;
  constructor(private globalContext: GlobalContext) {
    this.targets = JSON.parse(JSON.stringify(globalContext.getTargets()));
    this.approvedTargets = this.targets.filter(obj => obj.targetStatus === 'Approved');
  }

  ngOnInit() {
  }

}
