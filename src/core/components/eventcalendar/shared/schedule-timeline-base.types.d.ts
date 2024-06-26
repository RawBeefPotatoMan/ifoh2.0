import { IBaseProps } from '../../../base';
import { MbscCalendarNavService } from '../../../shared/calendar-nav/calendar-nav';
import { ICalendarLabelDragArgs, MbscCalendarDayData, MbscCalendarEvent, MbscCalendarEventData, MbscResource } from '../../../shared/calendar-view/calendar-view.types';
import { MbscDateType, MbscTimezonePlugin } from '../../../util/datetime.types.public';
import { IEventDragStopArgs, MbscEventConnection, MbscNewEventData, MbscSlot } from '../eventcalendar.types';
export interface ISTOptions extends IBaseProps {
    allDayText?: string;
    amText?: string;
    clickToCreate?: boolean | 'single' | 'double';
    checkSize?: number;
    connections?: MbscEventConnection[];
    colorsMap?: {
        [key: number]: MbscCalendarEvent[];
    };
    currentTimeIndicator?: boolean;
    dayNames?: string[];
    dayNamesMin?: string[];
    dayNamesShort?: string[];
    dataTimezone?: string;
    dateFormat?: string;
    dateFormatFull?: string;
    dateFormatLong?: string;
    displayTimezone?: string;
    dragTimeStep?: number;
    dragToCreate?: boolean;
    dragToMove?: boolean;
    dragToResize?: boolean;
    dragInTime?: boolean;
    dragBetweenResources?: boolean;
    dragBetweenSlots?: boolean;
    endDay: number;
    endTime?: string;
    eventMap?: {
        [key: string]: MbscCalendarEvent[];
    };
    eventOrder?: (event1: MbscCalendarEvent, event2: MbscCalendarEvent) => number;
    eventOverlap?: boolean;
    exclusiveEndDates?: boolean;
    extendDefaultEvent?: (args: MbscNewEventData) => MbscCalendarEvent;
    externalDrag?: boolean;
    externalDrop?: boolean;
    firstDay?: number;
    getDay?: (d: Date) => number;
    getDate?: (y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number) => Date;
    getMaxDayOfMonth?: (y: number, m: number) => number;
    getMonth?: (d: Date) => number;
    getWeekNumber?: (d: Date) => number;
    getYear?: (d: Date) => number;
    groupBy?: 'date' | 'resource';
    height?: number;
    immutableData?: boolean;
    invalidateEvent?: 'start-end' | 'strict';
    invalidsMap?: {
        [key: number]: MbscCalendarEvent[];
    };
    eventList?: boolean;
    maxDate: number;
    minDate: number;
    maxEventStack?: 'all' | 'auto' | number;
    minEventWidth?: number;
    monthNames?: string[];
    monthNamesShort?: string[];
    moreEventsPluralText?: string;
    moreEventsText?: string;
    navigateToEvent?: MbscCalendarEvent;
    navService: MbscCalendarNavService;
    nextIcon?: string;
    nextIconRtl?: string;
    downIcon?: string;
    newEventText?: string;
    pmText?: string;
    quarterText?: string;
    refDate?: MbscDateType;
    resources?: MbscResource[] | null | undefined;
    rowHeight?: 'variable' | 'equal';
    scroll: number;
    selected: number;
    selectedEventsMap: {
        [key: string]: MbscCalendarEvent;
    };
    showAllDay?: boolean;
    showDays?: boolean;
    showEventBuffer?: boolean;
    showEventTooltip?: boolean;
    weekNumbers?: boolean;
    size?: number;
    resolution?: 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour';
    resolutionVertical?: 'day';
    slots?: MbscSlot[] | null | undefined;
    startDay: number;
    startTime?: string;
    timeCellStep: number;
    timeFormat?: string;
    timeLabelStep: number;
    timezonePlugin?: MbscTimezonePlugin;
    type: 'week' | 'day' | 'month' | 'year';
    virtualScroll?: boolean;
    weekText?: string;
    width?: number;
    eventDragEnd(args: IEventDragStopArgs): boolean;
    onActiveChange(args: any): void;
    onCellClick(args: any): void;
    onCellDoubleClick(args: any): void;
    onCellRightClick(args: any): void;
    onEventClick(args: any): void;
    onEventDragEnter?(args: any): void;
    onEventDragLeave?(args: any): void;
    onEventDoubleClick(args: any): void;
    onEventRightClick(args: any): void;
    onEventDelete(args: any): void;
    onEventHoverIn(args: any): void;
    onEventHoverOut(args: any): void;
    onEventDragEnd?(args: any, inst: any): void;
    onEventDragStart?(args: any, inst: any): void;
    onMoreClick?(args: any, inst: any): void;
    onPopoverClose?(args: any, inst: any): void;
    onResourceCollapse?(args: any, inst: any): void;
    onResourceExpand?(args: any, inst: any): void;
    renderBufferAfter?(event: MbscCalendarEventData): any;
    renderBufferBefore?(event: MbscCalendarEventData): any;
    renderDay?(args: MbscCalendarDayData): any;
    renderDayFooter?(args: MbscCalendarDayData): any;
    renderEventContent?(event: MbscCalendarEventData): any;
    renderEvent?(event: MbscCalendarEventData): any;
    renderHour?(args: MbscCalendarDayData): any;
    renderHourFooter?(args: MbscCalendarDayData): any;
    renderMonth?(args: MbscCalendarDayData): any;
    renderMonthFooter?(args: MbscCalendarDayData): any;
    renderResource?(resource: MbscResource): any;
    renderResourceHeader?(): any;
    renderResourceFooter?(): any;
    renderSidebar?(resource: MbscResource): any;
    renderSidebarFooter?(): any;
    renderSidebarHeader?(): any;
    renderQuarter?(args: MbscCalendarDayData): any;
    renderQuarterFooter?(args: MbscCalendarDayData): any;
    renderWeek?(args: MbscCalendarDayData): any;
    renderWeekFooter?(args: MbscCalendarDayData): any;
    renderYear?(args: MbscCalendarDayData): any;
    renderYearFooter?(args: MbscCalendarDayData): any;
}
export interface ISTState {
    batchIndexX?: number;
    batchIndexY?: number;
    cellHeight?: number;
    cellWidth?: number;
    dayNameWidth?: number;
    dayWidth?: number;
    dragData?: IDragData;
    eventHeight?: number;
    footerHeight?: number;
    gridWidth?: number;
    gridContWidth?: number;
    gutterHeight?: number;
    hasScrollX?: boolean;
    hasScrollY?: boolean;
    headerHeight?: number;
    isTouchDrag?: boolean;
    parentRowHeight?: number;
    rowHeight?: number;
    scrollContHeight?: number;
    update?: number;
}
export interface IDailyData {
    allDay: MbscCalendarEventData[];
    data: MbscCalendarEventData[];
    hasMore?: boolean;
}
export interface IEventPosData {
    bufferAfter?: string;
    bufferBefore?: string;
    cssClass?: string;
    start?: string;
    startDate: Date;
    end?: string;
    endDate: Date;
    position?: {
        height?: string;
        left?: string;
        right?: string;
        top?: string;
        width?: string;
    };
}
export interface IDragData {
    originDate?: number;
    /**
     * The dates of the event which is dragged.
     * We need to display the event boxes in case of touch drag, when we enter drag mode,
     * and continue to display during drag, but invisible, otherwise, if we loose the
     * element on which the touch started, the touch events will stop firing.
     */
    originDates?: {
        [key: string]: MbscCalendarEventData;
    };
    originResource?: number | string;
    /** The dates of the dragged event. */
    draggedDates?: {
        [key: string]: MbscCalendarEventData;
    };
    /** The dragged event, displayed during drag. */
    draggedEvent?: MbscCalendarEventData;
    resource?: number | string;
    slot?: number | string;
}
export interface IDayData {
    columnTitle?: string;
    date: Date;
    endDate?: Date;
    dateIndex: number;
    dateKey: string;
    dateText: string;
    day: number;
    dayDiff: number;
    eventMap: {
        all: MbscCalendarEvent[];
        [key: string]: MbscCalendarEvent[];
    };
    /** True when it is today or when today is in the week/month/year range - with higher resolutions  */
    isActive?: boolean;
    label: string;
    lastOfMonth?: boolean;
    lastOfWeek?: boolean;
    monthIndex: number;
    monthText: string;
    monthTitle: string;
    timestamp: number;
    weekIndex: number;
    weekNr?: number;
    weekText: string;
    weekTitle: string;
}
export interface IGroupData {
    stacks: MbscCalendarEventData[][];
    more: MbscCalendarEventData[];
}
export interface IVirtualPage {
    top: number;
    startIndex: number;
}
export interface ICalendarEventDragArgs extends ICalendarLabelDragArgs {
    click?: boolean;
    eventData?: MbscCalendarEventData;
    resource?: string | number;
    slot?: string | number;
}
