import { Injectable, Inject } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class BackendApiService {
  private static readonly POST_LOGIN_CREDIENTIAL: string = "/api/v1/login";
  private static readonly GET_USER_ORGANIZATION_ENDPOINT: string ="/api/v1/user/org";
  private static readonly GET_ORGANIZATION_SPACE_ENDPOINT: string ="/api/v1/org/space";
  private static readonly GET_ORGANIZATION_SERVICE_ENDPOINT: string ="/api/v1/org/service";
  private static readonly GET_ORGANIZATION_URL_ENDPOINT: string ="/api/v1/org/url";
  private static readonly GET_GITLAB_URL_ENDPOINT: string ="/api/v1/gitlab/url";

  constructor(private http: Http) {}

  public getOrganizationByUserId(userId: number): Observable<any> {
    return this.http.get(BackendApiService.GET_USER_ORGANIZATION_ENDPOINT + "?userId=" + userId)
            .pipe(map((response: Response) => response.json()));
  }

  public login(email:string,password:string):Observable<any>{
      var user={
          email:email,
          password:password
      }
      return this.http.post(BackendApiService.POST_LOGIN_CREDIENTIAL,user)
      .pipe(map((response:Response)=>response.json()));
  }

  public getOrganizationSpace(orgId:number):Observable<any>{
        return this.http.get(BackendApiService.GET_ORGANIZATION_SPACE_ENDPOINT+ "?orgId=" + orgId).pipe(map((response:Response)=> response.json()));
  }

  public getOrganizationService(orgId:number):Observable<any>{
      return this.http.get(BackendApiService.GET_ORGANIZATION_SERVICE_ENDPOINT+ "?orgId=" + orgId)
      .pipe(map((response:Response)=> response.json()));
  }
    
  // ToDo: post data and get url or just get url
  public getGitlabPiplineLink():Observable<any>{
    return this.http.get(BackendApiService.GET_GITLAB_URL_ENDPOINT).pipe(map((response:Response)=> response.json()))
  }


}
