import { Component, OnInit, Input } from '@angular/core';
import { GanttItem, GanttPrintService } from '@worktile/gantt';


@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css'],
  providers: [GanttPrintService]
})
export class GanttChartComponent implements OnInit {
  
  @Input() selectedSteps: any;
  @Input() roadmapStart: any;
  @Input() roadmapEnd: any;

  ganttData: GanttItem[] = [];

  constructor(private printService: GanttPrintService) { }

  ngOnInit(): void {
    this.ganttData = [];
    this.selectedSteps.forEach( (step: any) => {
      let loopItem = { id: step.step.opSelector, title: step.step.opSelector, start: this.dateToTimestamp(step.dateStart), end: this.dateToTimestamp(step.dateEnd) }
      this.ganttData.push(loopItem);
    });
  }

  dateToTimestamp(datep: any) {
    return (Math.floor(datep.getTime() / 1000));
  }

  print(name: string) {
    this.printService.print(name);
  }

}