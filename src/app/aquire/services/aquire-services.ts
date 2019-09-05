import { HttpClient } from '@angular/common/http';
import { TargetModal } from './../modal/target.modal';
import { Injectable } from '@angular/core';

@Injectable()
export class AquireServices {
    constructor(private http: HttpClient) {}
    getTargets() {
         return this.http.get('../resources/targets.json') ;
    }
}
