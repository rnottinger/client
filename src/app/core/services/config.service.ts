import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    config: any;

    constructor(private http: HttpClient) {}

    loadConfig() {
        return this.http
            .get('./assets/config-local.json')
            .toPromise()
            .then(config => {
              this.config = config;
              console.log('Config: ' + JSON.stringify(this.config));
            });
    }
}

/*
https://dev.to/thisdotmedia/runtime-environment-configuration-with-angular-4f5j

Replacing the configuration file

- Now that we have everything in place
    to include configuration at runtime
      using a JSON file,
        all that's left to do
          is to replace that file
            with the environment-specific configuration,
              and it will be picked up
                when running the application.

One way could be
  to include multiple environment configuration files
    in source control,
      (config.qa.json, config.prod.json, ...)
        and swap them
          during deployment.

However, I prefer not
  to add a separate config file
    for each environment
      to which we're deploying.

Instead, I think it's a good idea
  to use a single file,
    and update its content
      as part of
        an automated release pipeline.

This allows for
  a separation between
    the code-base,
    and the different number of environments
      to which it's being deployed.
 */
