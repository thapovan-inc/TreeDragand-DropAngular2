import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from 'primeng/primeng';

import {
  TreeNodeComponent,
  XeditableTextComponent,
  TextSearchTextFieldComponent
} from './directives';

import { NodeSearchPipe } from './pipes/node-search.pipes';
import { TreeManagerService } from './services/tree-manager.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeSearchPipe,
    TreeNodeComponent,
    XeditableTextComponent,
    TextSearchTextFieldComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule
  ],
  exports: [
  ],
  providers: [
    TreeManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
