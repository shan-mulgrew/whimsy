import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{

  constructor(private apiService: ApiService) {}
  data: any;
  ngOnInit(): void {
    this.apiService.getData().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
