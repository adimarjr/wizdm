import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GtagModule } from '@wizdm/gtag';
import { DialogModule } from '@wizdm/dialog';
import { ReadmeModule } from '@wizdm/readme';
import { IconModule } from '@wizdm/elements/icon';
import { ButtonChangerModule } from '@wizdm/elements/button';
import { ContentRouterModule, RoutesWithContent } from '@wizdm/content';
//import { CanLeaveModule, CanLeaveGuard } from 'app/pages/guards/can-leave';
import { FileSizePipeModule, MomentPipeModule } from 'app/utils/pipes';
import { DownloadModule } from 'app/utils/download';
import { ActionbarModule } from 'app/navigator/actionbar';
import { UploadsComponent } from './uploads.component';

const routes: RoutesWithContent = [
  {
    path: '',
    content: 'uploads',
    component: UploadsComponent,
    //canDeactivate: [ CanLeaveGuard ]
  }
];

@NgModule({
  declarations: [ UploadsComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    GtagModule,
    DialogModule,
    ReadmeModule,
    IconModule,
    ButtonChangerModule,
    //CanLeaveModule,
    ActionbarModule,
    FileSizePipeModule,
    MomentPipeModule,
    DownloadModule,
    ContentRouterModule.forChild(routes)
  ]
})
export class UploadsModule { }
