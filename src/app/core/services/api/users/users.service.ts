import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';
import { UsersRequest } from './interfaces/users-request.interface';
import { UsersResponse } from './interfaces/users-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private githubApi = environment.githubSearchApi;

  constructor(private httpClient: HttpClient) {}

  getUsers(requestParameters: UsersRequest): Observable<User[]> {
    try {
      let queryParameters = new HttpParams();

      queryParameters = queryParameters.appendAll({
        q: requestParameters.q ?? '',
        per_page:
          requestParameters.per_page ?? this.githubApi.pagination.per_page,
        page: requestParameters.page ?? this.githubApi.pagination.page,
      });

      const url = this.githubApi.baseUrl + this.githubApi.paths.users;

      return this.httpClient
        .get<UsersResponse>(url, { params: queryParameters })
        .pipe(map((response) => response?.items));
    } catch (error) {
      throw error;
    }
  }
}
