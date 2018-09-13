import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { promise } from "protractor";

@Injectable()
export class BackendApiDumyService {
  private org = {
    id: 1,
    name: "Orange Lab"
  };

  private fullUser = {
    id: 122222,
    firstName: "Menna",
    lastName: "Asfour",
    email: "menna.asfour17@gmail.com",
    password: "12345",
    orgId: 1
  };

  constructor(private http: Http) {}

  public getOrganizationByUserId(userId: number): Promise<any> {
    if (userId === this.fullUser.id) {
      return Promise.resolve(this.org);
    }
  }

  public login(email: string, password: string): Promise<any> {
    var user = {
      email: email,
      password: password
    };
    if (user.email === user.email && user.password === user.password) {
      return Promise.resolve(this.fullUser);
    }
    //   return this.http.post(BackendApiService.POST_LOGIN_CREDIENTIAL,user)
    //   .pipe(map((response:Response)=>response.json()));
  }

  public getOrganizationSpace(orgId: number): Promise<any> {
    // return this.http.get(BackendApiService.GET_ORGANIZATION_SPACE_ENDPOINT+ "?orgId=" + orgId).pipe(map((response:Response)=> response.json()));
    var spaces = {
      spaces: [
        {
          id: 1,
          name: "space1"
        },
        {
          id: 2,
          name: "space2"
        },
        {
          id: 3,
          name: "space3"
        },
        {
          id: 4,
          name: "space4"
        }
      ]
    };
    return Promise.resolve(spaces);
  }

  public getOrganizationService(orgId: number): Promise<any> {
    //   return this.http.get(BackendApiService.GET_ORGANIZATION_SERVICE_ENDPOINT+ "?orgId=" + orgId)
    //   .pipe(map((response:Response)=> response.json()));
    var service = {
      services: [
        {
          id: 1,
          name: "service1"
        },
        {
          id: 2,
          name: "service2"
        },
        {
          id: 3,
          name: "service3"
        },
        {
          id: 4,
          name: "service4"
        }
      ]
    };
    return Promise.resolve(service);
  }

  // ToDo: post data and get url or just get url
  public getGitlabPiplineLink(anyobject): Promise<any> {
    // return this.http.get(BackendApiService.GET_GITLAB_URL_ENDPOINT).pipe(map((response:Response)=> response.json()))
    return Promise.resolve("https://gitlab.forge.orange-labs.fr/users/sign_in/");
  }
}
