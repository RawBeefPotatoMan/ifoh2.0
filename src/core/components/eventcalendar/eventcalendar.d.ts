import { BaseComponent } from '../../base';
import { MbscPrintConfig } from '../../print';
import { MbscCalendarNavService } from '../../shared/calendar-nav/calendar-nav';
import { CalendarViewBase } from '../../shared/calendar-view/calendar-view';
import { ICalendarLabelDragArgs, IPageChangeEvent, IPageLoadedEvent, IPageLoadingEvent, MbscCalendarEvent, MbscCalendarEventData, MbscResource, ViewType } from '../../shared/calendar-view/calendar-view.types';
import { InstanceServiceBase } from '../../shared/instance-service';
import { MbscDateType } from '../../util/datetime.types.public';
import { IEventDragStopArgs, MbscEventcalendarOptions, MbscEventcalendarState, MbscEventList, MbscSchedulerTimezone } from './eventcalendar.types';
/** @hidden */
export declare class EventcalendarBase extends BaseComponent<MbscEventcalendarOptions, MbscEventcalendarState> {
    /** @hidden */
    static defaults: MbscEventcalendarOptions;
    protected static _name: string;
    /** @hidden */
    eventList?: MbscEventList[];
    print: (config?: MbscPrintConfig) => void;
    /** @hidden */
    _active: number;
    /** @hidden */
    _anchor: HTMLDivElement;
    /** @hidden */
    _calendarScroll?: 'horizontal' | 'vertical';
    /** @hidden */
    _calendarSize?: number;
    /** @hidden */
    _calendarLabelList?: 'all' | number | boolean;
    /** @hidden */
    _calendarType?: 'year' | 'month' | 'week';
    /** @hidden */
    _calendarView: CalendarViewBase;
    /** @hidden */
    _checkSize: number;
    /** @hidden */
    _colorEventList: boolean;
    /** @hidden */
    _colorsMap?: {
        [key: number]: MbscCalendarEvent[];
    };
    /** @hidden */
    _cssClass?: string;
    /** @hidden */
    _currentTimeIndicator?: boolean;
    /** @hidden */
    _dragTimeStep?: number;
    /** @hidden */
    _eventDropped: boolean;
    /** @hidden */
    _eventListHTML: any;
    /** @hidden */
    _eventListType?: 'year' | 'month' | 'week' | 'day';
    /** @hidden */
    _eventListSize: number;
    /** @hidden */
    _eventMap: {
        [key: string]: MbscCalendarEvent[];
    };
    /** @hidden */
    _firstDay: Date;
    /** @hidden */
    _firstWeekDay: number;
    /** @hidden */
    _instanceService?: InstanceServiceBase;
    /** @hidden */
    _invalidsMap?: {
        [key: number]: MbscCalendarEvent[];
    };
    /** @hidden */
    _labelsMap?: {
        [key: string]: MbscCalendarEvent[];
    };
    /** @hidden */
    _lastDay: Date;
    /** @hidden */
    _list: HTMLElement | null;
    /** @hidden */
    _listDays?: {
        [key: string]: HTMLElement | null;
    } | null;
    /** @hidden */
    _marksMap?: {
        [key: string]: MbscCalendarEvent[];
    };
    /** @hidden */
    _maxDate: number;
    /** @hidden */
    _minDate: number;
    /** @hidden */
    _navigateToEvent?: MbscCalendarEvent;
    /** @hidden */
    _navService: MbscCalendarNavService;
    /** @hidden The select view of the navigation picker */
    _navView?: ViewType;
    /** @hidden */
    _pageLoad: number;
    /** @hidden */
    _popoverClass: string;
    /** @hidden */
    _popoverList?: HTMLElement;
    /** @hidden Flag for the print method to turn off virtual scrolling */
    _print?: boolean;
    /** @hidden */
    _rangeEndDay?: number;
    /** @hidden */
    _rangeStartDay?: number;
    /** @hidden */
    _rangeType?: 'year' | 'month' | 'week' | 'day';
    /** @hidden */
    _refDate?: Date;
    /** @hidden */
    _resourcesMap?: {
        [key: string]: MbscResource;
    };
    /** @hidden */
    _scheduleMaxEventStack?: 'all' | 'auto' | number;
    /** @hidden */
    _scheduleMinEventWidth?: number;
    /** @hidden */
    _scheduleType: 'month' | 'week' | 'day';
    /** @hidden */
    _scheduleEndDay: number;
    /** @hidden */
    _scheduleStartDay: number;
    /** @hidden */
    _scheduleEndTime?: string;
    /** @hidden */
    _scheduleSize: number;
    /** @hidden */
    _scheduleStartTime?: string;
    /** @hidden */
    _scheduleTimeCellStep: number;
    /** @hidden */
    _scheduleTimeLabelStep: number;
    /** @hidden */
    _scheduleTimezones?: Array<MbscSchedulerTimezone | string>;
    /** @hidden */
    _timelineMaxEventStack?: 'all' | number;
    /** @hidden */
    _timelineSize: number;
    /** @hidden */
    _timelineType: 'year' | 'month' | 'week' | 'day';
    /** @hidden */
    _timelineEndDay: number;
    /** @hidden */
    _timelineStartDay: number;
    /** @hidden */
    _timelineEndTime?: string;
    /** @hidden */
    _timelineStartTime?: string;
    /** @hidden */
    _timelineResolution?: 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour';
    /** @hidden */
    _timelineResolutionVertical?: 'day';
    /** @hidden */
    _timelineRowHeight?: 'variable' | 'equal';
    /** @hidden */
    _timelineTimeCellStep: number;
    /** @hidden */
    _timelineTimeLabelStep: number;
    /** @hidden */
    _timelineListing?: boolean;
    /** @hidden */
    _timelineVirtualScroll?: boolean;
    /** @hidden */
    _selected: number;
    /** @hidden */
    _selectedDateHeader?: string;
    /** @hidden */
    _selectedDates: {
        [key: number]: boolean;
    };
    /** @hidden */
    _selectedEventsMap: {
        [key: string]: MbscCalendarEvent;
    };
    /** @hidden */
    _selectedDateTime: number;
    /** @hidden */
    _shouldLoadDays?: boolean;
    /** @hidden */
    _shouldScrollSchedule: number;
    /** @hidden */
    _showCalendar?: boolean;
    /** @hidden */
    _showDate?: boolean;
    /** @hidden */
    _showEventCount?: boolean;
    /** @hidden */
    _showEventLabels?: boolean;
    /** @hidden */
    _showEventList?: boolean;
    /** @hidden */
    _showEventPopover?: boolean;
    /** @hidden */
    _showOuterDays?: boolean;
    /** @hidden */
    _showSchedule?: boolean;
    /** @hidden */
    _showScheduleAllDay?: boolean;
    /** @hidden */
    _showScheduleDays?: boolean;
    /** @hidden */
    _showTimeline?: boolean;
    /** @hidden */
    _showTimelineWeekNumbers?: boolean;
    /** @hidden */
    _showWeekNumbers?: boolean;
    /** @hidden */
    _rowTops: number[];
    /** @hidden */
    _update: number;
    /** @hidden */
    _validsMap?: {
        [key: number]: MbscCalendarEvent[];
    };
    /** @hidden */
    _onScroll: (...args: any[]) => void;
    private _tempDay?;
    private _tempWeek?;
    private _tempEvent?;
    private _calCellWidth;
    private _areaTop;
    private _areaLeft;
    private _areaBottom;
    private _areaRight;
    private _onCalendar?;
    private _triggerCreated?;
    private _triggerUpdated?;
    private _triggerDeleted?;
    private _body;
    private _clone?;
    private _defaultDate?;
    private _events;
    private _hoverTimer;
    private _isHover?;
    private _isEventClick?;
    private _isListScrolling;
    private _isPageChange?;
    private _moreLabelClicked?;
    private _refresh?;
    private _shouldAnimateScroll?;
    private _shouldScroll?;
    private _shouldSkipScroll?;
    private _skipScheduleScroll?;
    private _unsubscribe?;
    private _viewChanged?;
    private _viewDate?;
    /**
     * Adds one or more events to the calendar
     *
     * @param events - Object or Array containing the events.
     * @returns - An array containing the list of IDs generated for the events.
     *
     * @method javascript
     * @method jquery
     */
    addEvent(events: MbscCalendarEvent | MbscCalendarEvent[]): string[];
    /**
     * Returns the [events](#opt-data) between two dates. If `start` and `end` are not specified,
     * it defaults to the start and end days of the current view.
     * If `end` is not specified, it defaults to start date + 1 day.
     *
     * @param start - Start date of the specified interval.
     * @param end  - End date of the specified interval.
     * @returns - An array containing the event objects.
     */
    getEvents(start?: MbscDateType, end?: MbscDateType): MbscCalendarEvent[];
    /**
     * Returns the [invalids](#opt-invalid) between two dates. If `start` and `end` are not specified,
     * it defaults to the start and end days of the current view.
     * If `end` is not specified, it defaults to start date + 1 day.
     *
     * @param start - Start date of the specified interval.
     * @param end  - End date of the specified interval.
     * @returns - An array containing the invalid objects.
     */
    getInvalids(start?: MbscDateType, end?: MbscDateType): MbscCalendarEvent[];
    /**
     * Returns the selected events.
     *
     * @returns - An array containing the selected events.
     *
     * The selected events can be set with the [setSelectedEvents](#method-setSelectedEvents) method.
     * Multiple event selection can be turned on with the [selectMultipleEvents](#opt-selectMultipleEvents) option.
     *
     * @method javascript
     * @method jquery
     */
    getSelectedEvents(): MbscCalendarEvent[];
    /**
     * Set the events for the calendar. The previous events will be overwritten.
     * Returns the list of IDs generated for the events.
     *
     * @param events - An array containing the events.
     * @returns - An array containing the event IDs.
     * @method javascript
     * @method jquery
     */
    setEvents(events: MbscCalendarEvent[]): string[];
    /**
     * Returns the view date which is representing the currently displayed date on the component.
     */
    /**
     * Sets the selected events.
     *
     * The selected events are returned by the [getSelectedEvents](#method-getSelectedEvents) method.
     * Multiple event selection can be turned on with the [selectMultipleEvents](#opt-selectMultipleEvents) option.
     *
     * @param selectedEvents - An array containing the selected event objects.
     *
     * @method javascript
     * @method jquery
     */
    setSelectedEvents(selectedEvents: MbscCalendarEvent[]): void;
    /**
     * Removes one or more events from the event list based on IDs. For events without IDs, the IDs are generated internally.
     * The generated ids are returned by the [addEvent](#method-addEvent) or [getEvents](#method-getEvents) methods.
     *
     * @param events - An array containing IDs or the event objects to be deleted.
     *
     * @method javascript
     * @method jquery
     */
    removeEvent(events: string | number | MbscCalendarEvent | string[] | number[] | MbscCalendarEvent[]): void;
    /**
     * Navigates to the specified event on the calendar.
     * @param event - The event object. The `id`, `start` and `resource` properties (in case if resources
     * are used in timeline or schedule views) must be present in the object.
     */
    navigateToEvent(event: MbscCalendarEvent): void;
    /**
     * Navigates to the specified date on the calendar.
     * For views, where time is also displayed, the view will be scrolled to the specified time.
     * If the time part is not explicitly specified, it defaults to the start of the day.
     *
     * To change the initial date of the calendar, use the [selectedDate](#opt-selectedDate) option instead.
     *
     * @param date - Date to navigate to.
     *
     * @method javascript
     * @method jquery
     */
    navigate(date: MbscDateType, animate?: boolean): void;
    /**
     * Updates one or more events in the event calendar.
     * @param events - The event or events to update.
     *
     * @method javascript
     * @method jquery
     */
    updateEvent(events: MbscCalendarEvent | MbscCalendarEvent[]): void;
    /**
     * @hidden
     * Refreshes the view.
     */
    refresh(): void;
    /** @hidden */
    _onWeekDayClick: (d: number) => void;
    /** @hidden */
    _onDayClick: (args: any) => void;
    /** @hidden */
    _onActiveChange: (args: any) => void;
    /** @hidden */
    _onGestureStart: (args: any) => void;
    /** @hidden */
    _onDayDoubleClick: (args: any) => void;
    /** @hidden */
    _onDayRightClick: (args: any) => void;
    /** @hidden */
    _onCellHoverIn: (args: any) => void;
    /** @hidden */
    _onCellHoverOut: (args: any) => void;
    /** @hidden */
    _onEventHoverIn: (args: any) => void;
    /** @hidden */
    _onEventHoverOut: (args: any) => void;
    /** @hidden */
    _onEventClick: (args: any) => void;
    /** @hidden */
    _onEventDoubleClick: (args: any) => void;
    /** @hidden */
    _onEventRightClick: (args: any) => void;
    /** @hidden */
    _onEventDragEnd: (args: any) => void;
    /** @hidden */
    _onEventDragStart: (args: any) => void;
    /** @hidden */
    _onEventDragEnter: (args: any) => void;
    /** @hidden */
    _onEventDragLeave: (args: any) => void;
    /** @hidden */
    _onLabelHoverIn: (args: any) => void;
    /** @hidden */
    _onLabelHoverOut: (args: any) => void;
    /** @hidden */
    _onLabelClick: (args: any) => void;
    /** @hidden */
    _onLabelDoubleClick: (args: any) => void;
    /** @hidden */
    _onLabelRightClick: (args: any) => void;
    /** @hidden */
    _onCellClick: (args: any) => void;
    /** @hidden */
    _onCellDoubleClick: (args: any) => void;
    /** @hidden */
    _onCellRightClick: (args: any) => void;
    /** @hidden */
    _proxy: (args: any) => void;
    /** @hidden */
    _onPageChange: (args: IPageChangeEvent<CalendarViewBase>) => void;
    /** @hidden */
    _onPageLoading: (args: IPageLoadingEvent<CalendarViewBase>) => void;
    /** @hidden */
    _onPageLoaded: (args: IPageLoadedEvent<CalendarViewBase>) => void;
    /** @hidden */
    _onMoreClick: (args: {
        context: HTMLElement;
        date: Date;
        inst: any;
        key: string;
        list: MbscCalendarEventData[];
        target: HTMLDivElement;
    }) => void;
    /** @hidden */
    _onPopoverClose: (args: any) => void;
    /** @hidden */
    _onResize: (ev: any) => void;
    /** @hidden */
    _onSelectedEventsChange: (events: any) => void;
    /** @hidden */
    _getDragDates: (start: Date, end: Date, event: MbscCalendarEvent) => {
        [key: string]: any;
    };
    /** @hidden */
    _onLabelUpdateModeOn: (args: ICalendarLabelDragArgs) => void;
    /** @hidden */
    _onLabelUpdateModeOff: (args: ICalendarLabelDragArgs) => void;
    /** @hidden */
    _onLabelUpdateStart: (args: ICalendarLabelDragArgs) => void;
    /** @hidden */
    _onLabelUpdateMove: (args: ICalendarLabelDragArgs) => void;
    /** @hidden */
    _onLabelUpdateEnd: (args: ICalendarLabelDragArgs) => void;
    /** @hidden */
    _onEventDragStop: (args: IEventDragStopArgs) => boolean;
    /** @hidden */
    _onExternalDrag: (args: ICalendarLabelDragArgs) => void;
    /** @hidden */
    _onEventDelete: (args: any) => void;
    /** @hidden */
    _setEl: (el: any) => void;
    /** @hidden */
    _setList: (el: any) => void;
    /** @hidden */
    _setPopoverList: (list: any) => void;
    protected _render(s: MbscEventcalendarOptions, state: MbscEventcalendarState): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
    private _onKeyDown;
    private _resetSelection;
    private _getAgendaEvents;
    private _getEventData;
    /**
     * Returns the timestamp of the closest day which falls between the specified start and end weekdays.
     * @param timestamp The timestamp of the date to validate.
     * @param dir Navigation direction. If not specified, it will return the next valid day, otherwise the next or prev, based on direction.
     */
    private _getValidDay;
    private _setEventList;
    private _showPopover;
    private _hidePopover;
    private _scrollToDay;
    private _selectedChange;
    private _cellClick;
    private _dayClick;
    private _labelClick;
    private _eventClick;
    /**
     * Handles multiple event selection on label/event click.
     */
    private _handleMultipleSelect;
}
