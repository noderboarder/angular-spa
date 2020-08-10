import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  // customized attribute
  developerGithub = 'https://www.github.com/noderboarder';
  myGithubRepositoryLink = 'https://github.com/noderboarder/angular-spa';
  mySchoolLink = 'https://www.uthsc.edu';

  ngOnInit(): void {
  }

}
