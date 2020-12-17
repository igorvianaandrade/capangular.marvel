import { Component, OnInit } from '@angular/core';
import { ComicList } from 'src/app/models/comics/comic-list.model';
import { ComicsService } from 'src/app/services/comics/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comicList: ComicList[] = [];

  constructor(private comicService: ComicsService) { }

   /*chamando com modelagem */
   ngOnInit(): void {
    this.comicService.getAllComics()
    .subscribe((response:any) => {
      this.comicList = response;
      console.log("OI: "+this.comicList);
    });
  }

}
