import { Router } from '@angular/router';
import { GlobalContext } from './../../services/global-context';
import { AquireServices } from './../../services/aquire-services';
import { ContactInfoModal } from './../../modal/contactInfo.modal';
import { TargetModal } from './../../modal/target.modal';
import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { SelectItem } from '../../../../../node_modules/primeng/components/common/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/components/common/api';


@Component({
  selector: 'app-home',
  templateUrl: './active.component.html',
  providers: [ConfirmationService]
})

/**
 * ActiveComponent to display the active targets created.
 * 2
 */
export class ActiveComponent implements OnInit {

  private target: TargetModal;
  targetform: FormGroup;
  submitted: boolean;
  statuses: SelectItem[];
  performances: SelectItem[];
  targets: any;
  editDialog: boolean;
  deleteDialog: boolean;
  selectedTarget: TargetModal;
  phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-',  /\d/, /\d/, /\d/, /\d/];

  constructor(private globalContext: GlobalContext,
              private createTargetForm: FormBuilder,
              private router: Router,
              private confirmationService: ConfirmationService) {
    this.targets = globalContext.getTargets();
  }

  ngOnInit() {
    this.targetform = this.createTargetForm.group({
      targetName: new FormControl('', Validators.required),
      domain: new FormControl('', Validators.required),
      phnumber: new FormControl('', Validators.required),
      description: new FormControl(''),
      status: new FormControl('', Validators.required),
      performance: new FormControl('', Validators.required)
    });

    this.statuses = [
      { label: 'Select Status', value: '' },
      { label: 'Researching', value: 'Research' },
      { label: 'Pending Approval', value: 'Pending Approval' },
      { label: 'Approved', value: 'Approved' },
      { label: 'Rejected', value: 'Rejected' },
    ];

    this.performances = [
      { label: 'Good', value: 'Good' },
      { label: 'Moderate', value: 'Moderate' },
      { label: 'Excellent', value: 'Excellent' }
    ];

  }
  /**
   * Function to open Edit dialog box on click of edit button
   * @param event Event
   * @param target TargetModal
   */
  editTarget(event: Event, target: TargetModal) {
    this.selectedTarget = JSON.parse(JSON.stringify(target));
    this.editDialog = true;
    event.preventDefault();
  }
  /**
   * Function to delete Target for active targets
   * @param event Event
   * @param target TargetModal
   */
  deleteTarget(event: Event, target: TargetModal) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this target?',
      accept: () => {
        this.selectedTarget = target;
        let AllTargets: any;
        AllTargets = this.globalContext.getTargets();
        // tslint:disable-next-line:prefer-const
        let index = AllTargets.findIndex(item => item.targetID === this.selectedTarget.targetID);
        AllTargets.splice(index, 1);
        this.router.navigate(['active']);
      },
      reject: () => {
        // no action
      }
    });

  }

  /**
   * Update target values
   * @param value string
   */
  onSubmit(value: string) {
    this.submitted = true;
    // tslint:disable-next-line:prefer-const
    let targets = this.globalContext.getTargets();
    // tslint:disable-next-line:prefer-const
    let updateTargetData: TargetModal = {
      targetID: this.selectedTarget.targetID,
      targetName: this.selectedTarget.targetName,
      targetDomain: this.selectedTarget.targetDomain,
      targetDescription: this.selectedTarget.targetDescription,
      targetStatus: this.selectedTarget.targetStatus,
      targetPhoneNumber: this.selectedTarget.targetPhoneNumber,
      targetPerformance: this.selectedTarget.targetPerformance,
    };
    // tslint:disable-next-line:prefer-const
    let index = targets.findIndex(item => item.targetID === this.selectedTarget.targetID);

    targets.splice(index, 1, updateTargetData);
    this.globalContext.setTargets(targets);
    this.editDialog = false;
    this.router.navigate(['active']);
  }

}
