import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public string='http://localhost:8080';

  constructor(private httpClient) { }

  public getRessource(url){
    return this.http.get(this.host+url);

  }
}
