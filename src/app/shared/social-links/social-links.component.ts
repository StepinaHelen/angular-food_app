import { Component, OnInit } from '@angular/core';
import { AuthsService } from 'src/app/service/auth.service';

@Component({
  selector: 'food-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  constructor(public authsService: AuthsService) {}

  ngOnInit(): void {}
}
