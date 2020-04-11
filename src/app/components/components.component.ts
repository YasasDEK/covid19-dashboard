import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    data: Observable<object>;
    datas: any;
    request: any;
    myData: any;
    finals: any;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.fetchData().subscribe(data => {
            this.datas = data;
            this.finals = this.datas.data;
            console.log(this.datas.data);
        })
    }

    // this._http.getRequest().subscribe(res=>this.requests=res);


    fetchData() {
        this.data = this.http.get('https://www.hpb.health.gov.lk/api/get-current-statistical');
        console.log(this.data);
        return this.data;
    }

}