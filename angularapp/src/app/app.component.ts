
import { Component, Input, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import datas from './data';
import { MessageService } from 'primeng/api';
import videojs from 'video.js';

const Clapper = require('clappr');
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class AppComponent implements OnInit {

    @ViewChild('videoPlayer', {static: true}) target !: ElementRef;
    player !: videojs.Player;

    ngOnInit(): void {
        this.player = videojs(this.target.nativeElement);

        this.player.remainingTimeDisplay();
        console.log("Clapper", Clapper)
    }
    
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService) {
  }