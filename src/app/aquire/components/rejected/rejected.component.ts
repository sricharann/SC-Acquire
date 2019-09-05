import { Component, OnInit } from '@angular/core';
import { GlobalContext } from '../../services/global-context';
import { TargetModal } from '../../modal/target.modal';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
})
export class RejectedComponent implements OnInit {

  targets: any;
  rejectedTarget: TargetModal;
  rejectedTargets: any;
  constructor(private globalContext: GlobalContext) {
    this.targets = JSON.parse(JSON.stringify(globalContext.getTargets()));
    this.rejectedTargets = this.targets.filter(obj => obj.targetStatus === 'Rejected');
    
  }

  ngOnInit() {
  }

}
