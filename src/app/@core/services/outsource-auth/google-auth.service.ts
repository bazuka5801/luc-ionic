import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Injectable({
    providedIn: 'root'
})
export class GoogleAuthService {

    private readonly oauth2Endpoint: string = 'https://accounts.google.com/o/oauth2/v2/auth';
    private readonly oauth2Params: {[key: string]: string} = {
        client_id: '967897122719-vndnn724chk8b3v1d8vp0hn7pf479eq7.apps.googleusercontent.com',
        redirect_uri: `${this.appConfigService.locationOrigin}/main/tabs/user`,
        response_type: 'token',
        scope: 'https://www.googleapis.com/auth/userinfo.profile', // TODO check
        state: 'pass-through value',
    };

    constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    }

    public getMapFromRoute(fragment: string) {
        if (!fragment) {
            return;
        }
        const params: {[key: string]: string} = {};
        fragment.split('&').forEach(x => {
            const param = x.split('=');
            params[param[0]] = param[1];
        });
        console.log(params);
    }

    public async authRequest(): Promise<void> {
        const googleUser = await Plugins.GoogleAuth.signIn(null);
        console.log('user', googleUser);

        // const form = this.createForm();
        // document.body.appendChild(form);
        // form.submit();

        // TODO: cors block short variant
        // let uri = this.oauth2Endpoint;
        // uri += Object.keys(this.oauth2Params).reduce(
        //     (acc = '', next) => `${acc}${acc ? '&' : '?'}${next}=${this.oauth2Params[next]}`,
        //     '',
        // );
        // console.log(uri);
        // location.href = uri;
    }

    private createForm(): HTMLFormElement {
        const form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', this.oauth2Endpoint);

        // tslint:disable-next-line:forin
        for (const p in this.oauth2Params) {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', p);
            input.setAttribute('value', this.oauth2Params[p]);
            form.appendChild(input);
        }

        return form;
    }
}
