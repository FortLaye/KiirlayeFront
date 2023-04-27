import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-adherants-graphs',
  templateUrl: './adherants-graphs.component.html',
  styleUrls: ['./adherants-graphs.component.css']
})
export class AdherantsGraphsComponent implements OnInit {

    public chart!: any

    ngOnInit(): void {
        this.createChart();
    }

    createChart(){
      this.chart = new Chart("MyLineAdherantChart", {
        type: 'line',
        data: {
          labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
          datasets: [
            {
              label: 'Adhérants',
              data: ['60', '156', '244', '320', '309', '288', '430', '589'],
              fill: true,
              tension: 0.5,
              backgroundColor: "#8BC34A9E"
            }
          ]
        },
        options: {
          aspectRatio:2.2
        }
      })
    }

}
