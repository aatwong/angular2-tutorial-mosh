import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';

import {ChangePasswordValidators} from './ChangePasswordValidators'

@Component({
    selector: 'change-password',
    templateUrl: 'app/change-password.template.html'
})

export class ChangePasswordComponent {

    form: ControlGroup;

    constructor(fb: FormBuilder) { 
        this.form = fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                ChangePasswordValidators.minPasswordLength
            ])],
            confirmPassword: ['', Validators.required], 
        }, { validator: ChangePasswordValidators.mismatchingPasswords })
    }

    changePassword() {
        var originalPassword = "1234";
        if (this.form.find('oldPassword').value != originalPassword)
            this.form.find('oldPassword').setErrors({invalidOldPassword: true});
    }
}
