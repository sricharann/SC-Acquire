import { TargetModal } from './../../modal/target.modal';
import { GlobalContext } from './../../services/global-context';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from '../../../../../node_modules/primeng/components/common/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-createtarget',
  templateUrl: './createtarget.component.html',
  providers: [MessageService]
})
export class CreatetargetComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  private target: TargetModal;
  targetform: FormGroup;
  progressValue: number;
  phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-',  /\d/, /\d/, /\d/, /\d/];
  submitted: boolean;

  statuses: SelectItem[];

  performances: SelectItem[];

  description: string;
  constructor(private createTargetForm: FormBuilder,
              private messageService: MessageService,
              private globalContext: GlobalContext,
              private router: Router
  ) { }

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
      { label: 'Researching', value: 'Research' }
    ];

    this.performances = [
      { label: 'Choose', value: '' },
      { label: 'Good', value: 'Good' },
      { label: 'Moderate', value: 'Moderate' },
      { label: 'Excellent', value: 'Excellent' }
    ];
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Target Created' });
    this.target = new TargetModal();
    console.log(this.targetform.value);
    // this.target.targetID = '';
    this.target.targetName = this.targetform.value.targetName;
    this.target.targetDomain = this.targetform.value.domain;
    this.target.targetPhoneNumber = this.targetform.value.phnumber;
    this.target.targetStatus = this.targetform.value.status;
    this.target.targetDescription = this.targetform.value.description;
    this.target.targetPerformance = this.targetform.value.performance;
    // tslint:disable-next-line:prefer-const
    let targets: any = this.globalContext.getTargets();
    this.target.targetID = targets.length + 1;
    targets.push(this.target);
    this.globalContext.setTargets(targets);
    this.progressValue = 5;
    this.router.navigate(['active']);
  }
}
