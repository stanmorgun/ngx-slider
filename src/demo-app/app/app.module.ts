import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxSliderModule } from '@local/ngx-slider';

import { DocsModule } from './docs/docs.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { DemosComponent } from './demos.component';
import {
  AlphabetSliderComponent,
  CustomCombineLabelsFunctionSliderComponent,
  CustomDisplayFunctionSliderComponent,
  CustomHtmlDisplayFunctionSliderComponent,
  CustomLegendFunctionSliderComponent,
  CustomScaleSliderComponent,
  CustomTicksLegendSliderComponent,
  CustomTicksSliderComponent,
  DateSliderComponent,
  DisabledNormalisationSliderComponent,
  DisabledSliderComponent,
  DraggableRangeOnlySliderComponent,
  DraggableRangeSliderComponent,
  DynamicColorSelectionBarSliderComponent,
  DynamicOptionsSliderComponent,
  DynamicPointerColorSliderComponent,
  DynamicTickColorSliderComponent,
  DynamicallyCreatedSlidersComponent,
  FloatingPointSliderComponent,
  IntermediateTicksSliderComponent,
  IntermediateTicksValuesRangeSliderComponent,
  LimitedRangeSliderComponent,
  LimitedSliderComponent,
  LogScaleSliderComponent,
  ManualRefreshSliderComponent,
  NoSwitchingRangeSliderComponent,
  PushRangeSliderComponent,
  RangeSliderComponent,
  ReactiveFormRangeSliderComponent,
  ReactiveFormSimpleSliderComponent,
  ReadOnlySliderComponent,
  RightToLeftSliderComponent,
  SelectionBarAtEndSliderComponent,
  SelectionBarFromValueSliderComponent,
  SelectionBarGradientSliderComponent,
  SelectionBarSliderComponent,
  SimpleSliderComponent,
  SteppedSliderComponent,
  StyledSliderComponent,
  TicksCustomTooltipsSliderComponent,
  TicksSliderComponent,
  TicksTooltipsSliderComponent,
  TicksValuesRangeSliderComponent,
  TicksValuesSliderComponent,
  TicksValuesTooltipsSliderComponent,
  TriggerFocusSliderComponent,
  UserEventsSliderComponent,
  VerticalSlidersComponent,
} from './snippets';
import { routerConfig } from './app-router.config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DemosComponent,
    AlphabetSliderComponent,
    CustomCombineLabelsFunctionSliderComponent,
    CustomDisplayFunctionSliderComponent,
    CustomHtmlDisplayFunctionSliderComponent,
    CustomLegendFunctionSliderComponent,
    CustomScaleSliderComponent,
    CustomTicksLegendSliderComponent,
    CustomTicksSliderComponent,
    DateSliderComponent,
    DisabledNormalisationSliderComponent,
    DisabledSliderComponent,
    DraggableRangeOnlySliderComponent,
    DraggableRangeSliderComponent,
    DynamicColorSelectionBarSliderComponent,
    DynamicOptionsSliderComponent,
    DynamicPointerColorSliderComponent,
    DynamicTickColorSliderComponent,
    DynamicallyCreatedSlidersComponent,
    FloatingPointSliderComponent,
    IntermediateTicksSliderComponent,
    IntermediateTicksValuesRangeSliderComponent,
    LimitedRangeSliderComponent,
    LimitedSliderComponent,
    LogScaleSliderComponent,
    ManualRefreshSliderComponent,
    NoSwitchingRangeSliderComponent,
    PushRangeSliderComponent,
    RangeSliderComponent,
    ReactiveFormRangeSliderComponent,
    ReactiveFormSimpleSliderComponent,
    ReadOnlySliderComponent,
    RightToLeftSliderComponent,
    SelectionBarAtEndSliderComponent,
    SelectionBarFromValueSliderComponent,
    SelectionBarGradientSliderComponent,
    SelectionBarSliderComponent,
    SimpleSliderComponent,
    SteppedSliderComponent,
    StyledSliderComponent,
    TicksCustomTooltipsSliderComponent,
    TicksSliderComponent,
    TicksTooltipsSliderComponent,
    TicksValuesRangeSliderComponent,
    TicksValuesSliderComponent,
    TicksValuesTooltipsSliderComponent,
    TriggerFocusSliderComponent,
    UserEventsSliderComponent,
    VerticalSlidersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DocsModule,
    RouterModule.forRoot(routerConfig),
    NgbModule.forRoot(),
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
