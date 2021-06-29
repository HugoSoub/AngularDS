import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStatService {

  constructor(private httpsClient: HttpClient) { }

  public getData() {
    return this.httpsClient.get("https://stats.naminilamy.fr/");
  }
}
