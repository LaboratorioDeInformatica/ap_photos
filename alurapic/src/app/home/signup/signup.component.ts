import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/plataform-detector.service';

@Component({
    templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit{
    
    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
    
    constructor(
            private formbuilder: FormBuilder,
            private userNotTakenValidatorService: UserNotTakenValidatorService,
            private signUpService: SignupService,
            private route: Router,
            private platFormDetectorService: PlatformDetectorService
            ){
        
    }
    
    ngOnInit(): void {
        
        this.signupForm = this.formbuilder.group({
            email:['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName:['',
                [   
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]
            ],           
            userName:['',
                [   
                    Validators.required,
                    LowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()

            ],   
            password:['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });

        this.platFormDetectorService.isPlatformBrowser() &&
        this.emailInput.nativeElement.focus();

    }

    signup(){
        const newUser = this.signupForm.getRawValue() as NewUser; 
        this.signUpService
            .signup(newUser)
            .subscribe(()=> this.route.navigate(['']),
            err => console.log(err)
            );
    }
}