import { IBaseEvent } from '../../base';
import { IDatetimeProps } from '../../util/datetime';
import { MbscDateType } from '../../util/datetime.types.public';
import { IGestureArgs } from '../../util/gesture';
import { MbscRecurrenceRule } from '../../util/recurrence.types.public';
import { MbscCalendarNavService } from '../calendar-nav/calendar-nav';
import { InstanceServiceBase } from '../instance-service';
import { CalendarLabelBase } from './calendar-label';
import { CalendarViewBase } from './calendar-view';
import { MbscCalendarColor, MbscCalendarDayData, MbscCalendarEvent, MbscCalendarEventData, MbscCalendarLabel, MbscCalendarMarked, MbscResource } from './calendar-view.types.public';
export * from './calendar-view.types.public';
export declare type ViewType = 'page' | 'month' | 'year' | 'multi-year';
export interface IPageChangeEvent<T = CalendarViewBase> extends IBaseEvent<T> {
    /** The first day of the displayed page. */
    firstDay: Date;
    /** The last day of the displayed page. */
    lastDay: Date;
    /** The first day of the visible month in case of month view. */
    month?: Date;
    /**
     * The first day of the loaded pages, in case of the calendar view, where there are preloaded pages before and after the visible page.
     * For other views it's the first day of the displayed page, just like `firstDay`.
     */
    viewStart: Date;
    /**
     * The last day of the loaded pages, in case of the calendar view, where there are preloaded pages before and after the visible page.
     * For other views it's the last day of the displayed page, just like `lastDay`.
     */
    viewEnd: Date;
}
export interface IPageLoadingEvent<T = CalendarViewBase> extends IPageChangeEvent<T> {
    /** @hidden */
    viewChanged: boolean;
}
export interface IPageLoadedEvent<T = CalendarViewBase> extends IPageChangeEvent<T> {
    /** @hidden */
    activeElm: HTMLDivElement;
}
export interface ICellClickEvent<T = CalendarViewBase> extends IBaseEvent<T> {
    /** Date */
    date: Date;
    /** The DOM event of the click. */
    domEvent: Event;
    /** Specifies if the day is currently selected or not (before it was clicked). */
    selected: boolean;
    /** Target element */
    target: HTMLElement;
}
export interface ICellHoverEvent<T = CalendarViewBase> extends IBaseEvent<T> {
    /** Date */
    date: Date;
    /** The DOM event of the click. */
    domEvent: Event;
    /** If the day has labels, contains the label objects for the hovered day */
    labels: MbscCalendarLabel[];
    /** If the day is marked, contains the marked objects for the hovered day. */
    marked: MbscCalendarMarked[];
    /** Specifies if the day is currently selected or not (before it was clicked). */
    selected: boolean;
    /** Target element */
    target: HTMLElement;
}
export interface ILabelClickEvent<T = CalendarViewBase> extends IBaseEvent<T> {
    /** Date */
    date: Date;
    /** The DOM event of the click. */
    domEvent: Event;
    /** The original object of the label which was clicked, `undefined` in case of the "more" label. */
    label: MbscCalendarLabel;
    /** Each label object for the given day. */
    labels: MbscCalendarLabel[];
    /** Target element */
    target: HTMLElement;
}
/** Common interface for all kind of labels (standard, more, count, placeholder). */
export interface ICalendarProcessedLabel {
    id: string | number;
    /** Total number of labels for the day, in case when the label is showing the count. */
    count?: number;
    /** Label data in case of standard labels. */
    event?: MbscCalendarLabel;
    /** The calculated aria-label text for accessibility */
    label?: string;
    /** Last day of the month, needed when outer days are not shown */
    lastDay?: Date;
    /** More text in case of 'x more' labels. */
    more?: string;
    /** Indicates if it's a label spanning across multiple days. */
    multiDay?: boolean;
    /** Indicates if it's just a placeholder label. */
    placeholder?: boolean;
    /** Multiple day labels will have an empty label rendered for each day, without text. */
    showText?: boolean;
    /** Width of the label in case of multiple days. */
    width?: number;
}
/** Label data for one calendar day. */
export interface ICalendarLabelData {
    /** Labels to display on the given day, including placeholders and more label. */
    data: ICalendarProcessedLabel[];
    /** All the labels for the given day. */
    events: MbscCalendarLabel[];
}
/** @hidden */
export interface ICalendarProps extends IDatetimeProps {
    /** @hidden */
    downIcon?: string;
    /** @hidden */
    hasPicker?: boolean;
    /** @hidden */
    hoverEnd?: number;
    /** @hidden */
    hoverStart?: number;
    /** @hidden */
    mousewheel?: boolean;
    /** @hidden */
    nextIconH?: string;
    /** @hidden */
    nextIconV?: string;
    /** @hidden */
    prevIconH?: string;
    /** @hidden */
    prevIconV?: string;
    /** @hidden */
    rangeStart?: number;
    /** @hidden */
    rangeEnd?: number;
    /** @hidden */
    resourcesMap?: {
        [key: number]: MbscResource;
    };
    /** @hidden */
    showLabelCount?: boolean;
    /** @hidden */
    showToday?: boolean;
    /** @hidden */
    upIcon?: string;
    /**
     * Specifies the color for certain dates or date ranges on the calendar.
     * The color object has the following properties:
     * - `allDay`: *boolean* - Specifies whether the date you want to color is all day or not.
     * - `background`: *string* - Background color of the cell, can be any valid CSS color (`'red'`, `'#ff0000'`, `'rgb(255, 0, 0)'`, etc.).
     * - `cellCssClass`: *string* - CSS class for the day cell. Only applicable for the calendar view.
     * - `cssClass` *string* - Specifies a custom CSS class for the color.
     * Useful when customization is needed for the background of cells and time ranges.
     * Only applicable for the timeline and scheduler views.
     * - `date`: *Date | string | object* - Date of the calendar day which should be colored.
     * - `start`: *Date | string | object* - Start of the colored range.
     * - `end`: *Date, string | object* - End of the colored range.
     * - `highlight`: *string* - Highlight color of the day, can be any valid CSS color (`'red'`, `'#ff0000'`, `'rgb(255, 0, 0)'`, etc.).
     * - `recurring`: *string | object* - Recurrence rule for coloring recurring days.
     * - `recurringException`: *string | object | Array<string | object>* - Exception dates of the recurring rule.
     * Useful when specific dates need to be skipped from the rule.
     * - `recurringExceptionRule`: *string | object* - Exception rule of the recurring rule.
     * Useful when recurring dates need to be skipped from the rule.
     * - `resource`: *string | number | Array<string | number>* - Specifies the [resource](#opt-resources) ids for the color.
     * The color will be displayed only in the specified resource.
     * If there is no resource defined, the color will be displayed in every resource.
     * - `slot`: *string | number* - Specifies the [slot](#opt-slots) id for the color.
     * The color will be displayed only in the specified slot.
     * If there is no slot defined, the color will be displayed in every slot.
     * - `textColor`: *string* - Specifies the text color of the colored range title.
     * - `title`: *string* - Text which will be displayed for the colored range. Only applicable for the timeline and scheduler views.
     *
     * :::info
     * The colored range will be considered all-day if:
     * - the `allDay` property is explicitly set.
     * - the `start` / `end` properties are not specified, only the `date`.
     * :::
     * :::info
     * The dates can be specified as JavaScript Date objects, ISO 8601 strings, or moment objects.
     * :::
     * :::info
     * The colors can be combined with the [labels](#opt-labels) or [marked](#opt-marked) options.
     * :::
     *
     * ```js
     * [
     *   { date: new Date(2020, 2, 23), background: 'pink' },
     *   { date: new Date(2020, 2, 24), background: 'green' },
     *   { background: '#ff0000', recurring: { repeat: 'weekly', weekDays: 'SU' } },
     *   { background: 'yellow', recurring: { repeat: 'weekly', weekDays: 'SA' } }
     * ]
     * ```
     *
     * @defaultValue undefined
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Options_timeline
     * @group Properties
     */
    colors?: MbscCalendarColor[];
    /**
     * Sets the height of the component.
     *
     * The height of the calendar view impacts the number of labels that fit into a table cell.
     * A "show more" label will be displayed for events that don't fit.
     *
     * @defaultValue undefined
     */
    height?: number | string;
    /**
     * Specifies labels for calendar days.
     * A label object can have the following properties:
     * - `cellCssClass`: *string* - CSS class for the day cell. Only applicable for the calendar view.
     * - `color`: *string* - The color of the label, can be any valid CSS color (`'red'`, `'#ff0000'`, `'rgb(255, 0, 0)'`, etc.).
     * - `date`: *Date | string | object* - Date of the calendar label for single day labels.
     * - `start`: *Date | string | object* - Start of the calendar label.
     * - `end`: *Date, string | object* - End of the calendar label.
     * - `text`: *string* - The text of the label.
     * - `recurring`: *string | object* - Recurrence rule for recurring labels.
     * - `recurringException`: *string | object | Array<string | object>* - Exception dates of the recurring rule.
     * Useful when specific dates need to be skipped from the rule.
     * - `recurringExceptionRule`: *string | object* - Exception rule of the recurring rule.
     * Useful when recurring dates need to be skipped from the rule.
     *
     * :::info
     * The dates can be specified as JavaScript Date objects, ISO 8601 strings, or moment objects.
     * :::
     * :::info
     * The labels can be combined with the [colors](#opt-colors) option.
     * :::
     *
     * ```js
     * [
     *   {
     *     start: new Date(2020, 2, 23),
     *     end: new Date(2020, 2, 24),
     *     text: 'Conference',
     *     color: 'red'
     *   },
     *   {
     *     text: 'Christmas',
     *     recurring: { repeat: 'yearly', month: 12, day: 24 }
     *   }
     * ]
     * ```
     *
     * **Default value**: undefined
     * @group Options_calendarview
     * @group Properties
     */
    labels?: MbscCalendarLabel[];
    /**
     * Mark certain dates on the calendar. An array containing dates, or objects with the following properties:
     * - `cellCssClass`: *string* - CSS class for the day cell. Only applicable for the calendar view.
     * - `color`: *string* - The color of the mark, can be any valid CSS color (`'red'`, `'#ff0000'`, `'rgb(255, 0, 0)'`, etc.).
     * - `date`: *Date | string | object* - ate of the day to be marked.
     * - `start`: *Date | string | object* - Start date of the days to be marked.
     * - `end`: *Date, string | object* - End date of the days to be marked.
     * - `markCssClass`: *string* - CSS class for the mark.
     * - `recurring`: *string | object* - Recurrence rule for recurring marked days.
     * - `recurringException`: *string | object | Array<string | object>* - Exception dates of the recurring rule.
     * Useful when specific dates need to be skipped from the rule.
     * - `recurringExceptionRule`: *string | object* - Exception rule of the recurring rule.
     * Useful when recurring dates need to be skipped from the rule.
     *
     * :::info
     * The dates can be specified as JavaScript Date objects, ISO 8601 strings, or moment objects.
     * :::
     * :::info
     * The marked days can be combined with the [colors](#opt-colors) option.
     * :::
     *
     * ```js
     * [
     *   new Date(2020, 2, 15),
     *   new Date(2020, 2, 22),
     *   {
     *     start: new Date(2020, 2, 23),
     *     end: new Date(2020, 2, 24),
     *     color: 'red'
     *   },
     *   {
     *     color: 'green',
     *     recurring: { repeat: 'yearly', month: 12, day: 24 }
     *   }
     * ]
     * ```
     *
     * @defaultValue undefined
     * @group Options_calendarview
     * @group Properties
     */
    marked?: MbscCalendarMarked[];
    /**
     * Show or hide the calendar header controls: the previous and next buttons,
     * and the current view button together with the year and month picker.
     *
     * @defaultValue true
     */
    showControls?: boolean;
    /**
     * Displays the native tooltip that shows up when hovering over the event.
     *
     * @defaultValue true
     */
    showEventTooltip?: boolean;
    /**
     * Sets the width of the component.
     *
     * @defaultValue undefined
     */
    width?: number | string;
    /** @hidden */
    dateText?: string;
    /**
     * Text for the event word.
     *
     * @defaultValue 'event'
     * @group Localizations
     * @group Localizations_calendarview
     */
    eventText?: string;
    /**
     * Text for the events word (plural).
     *
     * @defaultValue 'events'
     * @group Localizations
     * @group Localizations_calendarview
     */
    eventsText?: string;
    /**
     * Text for the "more" label on the calendar, when there's not enough space to display all the labels for the day.
     * The `{count}` inside the string will be replaced with the number of extra labels.
     * Use the [moreEventsPluralText](#localization-moreEventsPluralText) as well, if the plural form is different.
     *
     * @defaultValue '{count} more'
     * @group Localizations
     * @group Localizations_calendarview
     */
    moreEventsText?: string;
    /**
     * Text for the "more" label on the calendar, when there's not enough space to display all the labels for the day,
     * and there are more than one extra labels.
     * The `{count}` inside the string will be replaced with the number of extra labels.
     * When not specified, the [moreEventsText](#localization-moreEventsText) option will be used for both plural and singular form.
     *
     * @defaultValue undefined
     * @group Localizations
     * @group Localizations_calendarview
     */
    moreEventsPluralText?: string;
    /**
     * Text for the next button in the calendar header, used as accessibility label.
     *
     * @defaultValue 'Next page'
     * @group Localizations
     */
    nextPageText?: string;
    /**
     * Text for the previous button in the calendar header, used as accessibility label.
     *
     * @defaultValue 'Previous page'
     * @group Localizations
     */
    prevPageText?: string;
    /** @hidden */
    timeText?: string;
    /** @hidden */
    onDayHoverIn?(args: any, inst: any): void;
    /** @hidden */
    onDayHoverOut?(args: any, inst: any): void;
    /** @hidden */
    onResize?(args: any, inst: any): void;
}
/** @hidden */
export interface ICalendarViewProps extends ICalendarProps {
    activeDate?: number;
    calendarScroll?: 'horizontal' | 'vertical';
    calendarType?: 'year' | 'month' | 'week';
    clickToCreate?: boolean | 'double' | 'single';
    className?: string;
    dragData?: ILabelDragData;
    dragToCreate?: boolean;
    dragToMove?: boolean;
    dragToResize?: boolean;
    endDay?: number;
    eventMap?: {
        [key: string]: MbscCalendarEvent[];
    };
    eventOrder?: (event1: MbscCalendarLabel, event2: MbscCalendarLabel) => number;
    eventRange?: 'year' | 'month' | 'week' | 'day';
    eventRangeSize?: number;
    instanceService?: InstanceServiceBase;
    hasContent?: boolean;
    headerTemplate?: any;
    isPicker?: boolean;
    labelList?: 'all' | boolean | number;
    labelsMap?: {
        [key: string]: MbscCalendarEvent[];
    };
    marksMap?: {
        [key: string]: MbscCalendarEvent[];
    };
    mouseSwipe?: boolean;
    navService?: MbscCalendarNavService;
    navView?: ViewType;
    noOuterChange?: boolean;
    pageLoad?: number;
    pages?: number | 'auto';
    refDate?: MbscDateType;
    responsiveStyle?: boolean;
    selectedDates?: {
        [key: number]: boolean | Date;
    };
    selectedEventsMap?: {
        [key: number]: MbscCalendarEvent;
    };
    selectMultipleEvents?: boolean;
    selectView?: ViewType;
    showCalendar?: boolean;
    showSchedule?: boolean;
    showOuterDays?: boolean;
    showWeekNumbers?: boolean;
    size?: number;
    startDay?: number;
    swipe?: boolean;
    update?: number;
    weeks?: number;
    resolution?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
    onActiveChange?(args: any, inst: CalendarViewBase): void;
    onCellHoverIn?(args: ICellHoverEvent, inst: CalendarViewBase): void;
    onCellHoverOut?(args: ICellHoverEvent, inst: CalendarViewBase): void;
    onDayClick?(args: ICellClickEvent, inst: CalendarViewBase): void;
    onDayDoubleClick?(args: ICellClickEvent, inst: CalendarViewBase): void;
    onDayRightClick?(args: ICellClickEvent, inst: CalendarViewBase): void;
    onGestureStart?(args: any, inst: CalendarViewBase): void;
    onLabelClick?(args: ILabelClickEvent, inst: CalendarViewBase): void;
    onLabelDoubleClick?(args: ILabelClickEvent, inst: CalendarViewBase): void;
    onLabelRightClick?(args: ILabelClickEvent, inst: CalendarViewBase): void;
    onLabelHoverIn?(args: any, inst: CalendarViewBase): void;
    onLabelHoverOut?(args: any, inst: CalendarViewBase): void;
    onLabelDelete?(args: any, inst: CalendarViewBase): void;
    onLabelUpdateStart?(args: any, inst: CalendarViewBase): void;
    onLabelUpdateMove?(args: any, inst: CalendarViewBase): void;
    onLabelUpdateEnd?(args: any, inst: CalendarViewBase): void;
    onLabelUpdateModeOn?(args: any, inst: CalendarViewBase): void;
    onLabelUpdateModeOff?(args: any, inst: CalendarViewBase): void;
    onPageChange?(args: IPageChangeEvent, inst?: CalendarViewBase): void;
    onPageLoaded?(args: IPageLoadedEvent, inst?: CalendarViewBase): void;
    onPageLoading?(args: IPageLoadingEvent, inst?: CalendarViewBase): void;
    onSelectedEventsChange?(args: any, inst: CalendarViewBase): void;
    onTodayClick?(): void;
    renderDay?(args: MbscCalendarDayData): any;
    renderDayContent?(args: MbscCalendarDayData): any;
    renderHeader?(): any;
    renderLabel?(event: MbscCalendarEventData): any;
    renderLabelContent?(event: MbscCalendarEventData): any;
}
/** @hidden */
export interface ICalendarViewState {
    cellTextHeight?: number;
    hasScrollY?: boolean;
    maxLabels?: number;
    pageSize: number;
    pickerSize: number;
    ready?: boolean;
    height: 'sm' | 'md';
    labelHeight?: number;
    update?: number;
    width: 'sm' | 'md';
    view?: ViewType;
    viewClosing?: ViewType;
    viewOpening?: ViewType;
}
/** @hidden */
export interface ICalendarViewHost {
    _theme: string;
    _calendarView: CalendarViewBase;
    _instanceService: InstanceServiceBase;
}
export interface ILabelDragDataSet {
    event?: MbscCalendarLabel;
    width?: number;
}
export interface ILabelDragData {
    /**
     * The dates of the event which is dragged.
     * We need to display the event boxes in case of touch drag, when we enter drag mode,
     * and continue to display during drag, but invisible, otherwise, if we loose the
     * element on which the touch started, the touch events will stop firing.
     */
    originDates?: {
        [key: string]: ILabelDragDataSet;
    };
    /**
     * The dates of the dragged event. Only containing the start of the event on every week and the
     * width of the event on that week.
     */
    draggedDates?: {
        [key: string]: ILabelDragDataSet;
    };
    /** The dragged event, displayed during drag. */
    draggedEvent?: MbscCalendarEvent;
}
/** Common interface for colors, marked and labels */
export interface ICalendarData {
    /** Specifies the date of the calendar day. */
    date?: Date | string | object;
    /** Specifies the start date/time of the calendar days/cells. */
    start?: Date | string | object;
    /** Specifies the end date/time of the calendar days/cells. */
    end?: Date | string | object;
    /** Specifies a recurrence rule for handling recurring days. */
    recurring?: MbscRecurrenceRule | string;
    /** Specifies recurring exceptions. */
    recurringException?: Array<string | object | Date> | string | object | Date;
    /** Specifies a recurrence exception rule. */
    recurringExceptionRule?: MbscRecurrenceRule | string;
    /** Occurrence number in case of recurrence. */
    nr?: number;
    /** Occurrence id in case of recurrence. */
    occurrenceId?: string;
    /** Origin of the occurrence. */
    original?: ICalendarData;
    /** CSS class for custom CSS. */
    cssClass?: string;
    [x: string]: any;
}
export interface ICalendarLabelDragArgs extends IGestureArgs {
    action?: 'click' | 'drag' | 'externalDrop';
    clone?: HTMLElement;
    create?: boolean;
    direction?: 'start' | 'end';
    drag?: boolean;
    dragData?: MbscCalendarEvent;
    event?: MbscCalendarEvent;
    eventName?: 'onDragModeOff' | 'onDragModeOn' | 'onDragStart' | 'onDragMove' | 'onDragEnd';
    external?: boolean;
    from?: any;
    resize?: boolean;
    source?: 'calendar' | 'schedule' | 'timeline';
}
export interface ILabelDragStartEvent extends IBaseEvent<CalendarLabelBase>, ICalendarLabelDragArgs {
}
export interface ILabelDragEndEvent extends IBaseEvent<CalendarLabelBase>, ICalendarLabelDragArgs {
}
export interface ILabelDragMoveEvent extends IBaseEvent<CalendarLabelBase>, ICalendarLabelDragArgs {
}
export interface ILabelDragOnEvent extends IBaseEvent<CalendarLabelBase>, ICalendarLabelDragArgs {
}
