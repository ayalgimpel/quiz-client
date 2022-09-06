import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReportService } from 'src/app/Services/report.service';

@Component({
  selector: 'app-report-quizes',
  templateUrl: './report-quizes.component.html',
  styleUrls: ['./report-quizes.component.css']
})
export class ReportQuizesComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParam) => {
      debugger
      const from = queryParam['from']
      const to = queryParam['to']
      const quizId = queryParam['quiz']
      this.reportService.get({ from, to, quizId }).subscribe(report => {
        console.log(report);
      })
    });

  }

}
