import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GithubApiService {
  constructor(private http: HttpClient) {}

  getRepos(username: string) {
    const url = `https://api.github.com/users/${username}/repos?type=all&per_page=1000`;
    return this.http.get(url);
  }

  getUser(username: string){
    const url = `https://api.github.com/users/${username}`;
    return this.http.get(url);
  }
}
