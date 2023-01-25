import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = this.fb.group( {
          email: '',
          password: ''
        }
    )
  }

    submit() {
        // console.log(this.form?.getRawValue());

        const formData = this.form.getRawValue();
        const data = {
            username: formData.email,
            password: formData.password,
            grant_type: 'password',
            client_id: 2,

            // hardcoding for now..this value will eventually come from an environment file
            // see Laravel --> .env --> CLIENT_2
            // or .env_example on how to generate this value
            client_secret: '<client_secret_2>',

            scope: '*'
        };
        this.http.post(
            // local server
            // 'http://localhost:8000/oauth/token',

            // docker nginx server
            'http://localhost:8088/oauth/token',
            data
        ).subscribe(
            (result: any) => {
                // console.log('success');
                // console.log(result);
                localStorage.setItem('token', result.access_token)
                this.router.navigate(['/secure'])
            },
            error => {
                console.error('error');
                console.error(error);
            }
        )

    }
}
