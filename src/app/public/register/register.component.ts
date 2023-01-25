import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form!: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,

    ) { }
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            password_confirmation: ['', Validators.required],
        });
    }

    submit() {
        const formData = this.form.getRawValue()
        console.log(this.form.value);
        // local server
        // this.http.post('http://localhost:8000/register', formData).subscribe(

        // docker nginx server
        this.http.post('http://localhost:8088/register', formData).subscribe(
            result => console.log(result),
            error => console.log(error)
        );
    }
}
