import { Component, OnInit } from '@angular/core';
import { find, map, tap } from 'rxjs';
import { GithubApiService } from 'src/app/services/github-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public repos$!:any;
  public user!:any;
  constructor(private githubApi: GithubApiService) { }

  ngOnInit(): void {

    this.repos$ = this.githubApi.getRepos(environment.username).pipe(
      map((repos: any) => repos.filter((repo: any) => repo.homepage != "" && repo.homepage != null)),
      map((repos: any) => repos.map((repo: any) => ({
        ...repo,
        pushed_at: new Date(repo.pushed_at)
      }))),
      tap((repos: any) => console.log(repos)),
      map((repos: any) => repos.sort((a: any, b: any) => b.pushed_at - a.pushed_at))
    )

    this.githubApi.getUser(environment.username).subscribe(user => {
      this.user = user;
      console.log("Usuario: ", this.user);
    });

  }

  openLink(enlace: string) {
    if(!enlace.includes('https')) enlace = 'https://'+ enlace
    window.open(enlace, "_blank");
  }

}
