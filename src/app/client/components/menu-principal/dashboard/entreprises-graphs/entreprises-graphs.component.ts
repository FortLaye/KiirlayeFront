import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-entreprises-graphs',
  templateUrl: './entreprises-graphs.component.html',
  styleUrls: ['./entreprises-graphs.component.css']
})
export class EntreprisesGraphsComponent implements OnInit {
    public chart: any;

    ngOnInit(): void {
        this.createChart();
    }
    createChart(){
        this.chart = new Chart('MyChart', {
            type: 'bar',
            data: {
                labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17'],
                datasets: [
                    {
                        label: 'Ventes',
                        data: ['467','576', '572', '79', '92', '574', '573', '576'],
                        backgroundColor: '#8BC34A'
                    },
                    {
                        label: 'Bénéfices',
                        data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
                        backgroundColor: '#FB5E0B'
                    }
                ]
            },
            options: {
                aspectRatio: 2.2
            }
        })
    }
}
