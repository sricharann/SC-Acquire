import { TargetModal } from './../modal/target.modal';
import { Injectable } from '@angular/core';

/**
 * An Injectable service used as global context object. 
 * GlobalContext object can be used to persist global data.
 */
@Injectable()
export class GlobalContext {

    private globalTargets = [];

    getTargets() {
        return this.globalTargets;
    }

    setTargets(data) {
        this.globalTargets = data;
    }
}
