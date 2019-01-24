import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateParsePipe } from './date-parse.pipe';
import { DurationPipe } from './duration.pipe';


@NgModule({
  declarations: [DurationPipe, DateParsePipe],
  providers: [DurationPipe, DateParsePipe, DatePipe],
  exports: [DurationPipe, DateParsePipe],
})
export class PipesModule {
}
