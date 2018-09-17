import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit{
    
    signupForm: FormGroup;
    
    constructor(private formbuilder: FormBuilder){
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
                    Validators.pattern(/^[a-z0-9_\-]+$/),
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]
            ],   
            password:['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
    }
    
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}