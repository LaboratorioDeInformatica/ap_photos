import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/plataform-detector/plataform-detector.service';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl:'./signin.component.html'
})

export class SigninComponent implements OnInit{
    
    loginForm: FormGroup;
    fromUrl: string;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService ,
        private router:  Router ,
        private platformDetectorService: PlatformDetectorService,
        private titleService: Title,
        private activatedRoute: ActivatedRoute){
    }
    
    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params =>{
            this.fromUrl = params.fromUrl
        })
        this.titleService.setTitle('Login');
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser() &&
        this.userNameInput.nativeElement.focus();
    }
//this.router.navigateByUrl('user/'+ userName),
    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService
        .autenticate(userName, password )
        .subscribe(
            () =>  {
            if(this.fromUrl){
                this.router.navigateByUrl(this.fromUrl);
            }else{
                this.router.navigate(['user', userName]);
            }
                
            },
            err => {
            console.log(err);
            this.loginForm.reset();
            this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
            alert('Invalid user name or password!')
            }
        );
        
    }
}