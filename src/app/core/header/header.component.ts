import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) { }

  ngOnInit() {
  }

  //On select navigation page
  onSelect(feature: string){
  	this.featureSelected.emit(feature);
  }

  onSaveData(){
    this.dataStorageService.storeRecipes()
        .subscribe(
          (response: Response) => {
            console.log(response)
          }
        );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
    console.log('Got recipe data!');
  }

  onLogout(){
    this.authService.logout();
  }
}
