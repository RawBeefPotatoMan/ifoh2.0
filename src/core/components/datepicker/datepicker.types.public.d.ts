import { ICellClickEvent, ICellHoverEvent, ILabelClickEvent, IPageChangeEvent, IPageLoadedEvent, IPageLoadingEvent } from '../../../core/shared/calendar-view/calendar-view.types';
import { IPickerCancelEvent, IPickerChangeEvent, IPickerCloseEvent, IPickerOpenEvent, IPickerTempChangeEvent } from '../../../core/shared/picker/picker.types';
import { IBaseEvent } from '../../base';
import { MbscDateType } from '../../util/datetime.types.public';
import { MbscCalendarOptions } from '../calendar/calendar';
import { MbscDatetimeOptions } from '../datetime/datetime';
import { DatepickerBase } from './datepicker';
export declare type MbscDatepickerValue = null | MbscDateType | MbscDateType[] | [MbscDateType | null, MbscDateType | null];
export declare type MbscDatepickerChangeEvent = IPickerChangeEvent<DatepickerBase, MbscDatepickerValue>;
export declare type MbscDatepickerTempChangeEvent = IPickerTempChangeEvent<DatepickerBase, MbscDatepickerValue>;
export declare type MbscDatepickerCancelEvent = IPickerCancelEvent<DatepickerBase, MbscDatepickerValue>;
export declare type MbscDatepickerCloseEvent = IPickerCloseEvent<DatepickerBase, MbscDatepickerValue>;
export declare type MbscDatepickerOpenEvent = IPickerOpenEvent<DatepickerBase, MbscDatepickerValue>;
export declare type MbscDatepickerPageLoadingEvent = IPageLoadingEvent<DatepickerBase>;
export declare type MbscDatepickerPageLoadedEvent = IPageLoadedEvent<DatepickerBase>;
export declare type MbscDatepickerPageChangeEvent = IPageChangeEvent<DatepickerBase>;
export declare type MbscDatepickerLabelClickEvent = ILabelClickEvent<DatepickerBase>;
export declare type MbscDatepickerCellClickEvent = ICellClickEvent<DatepickerBase>;
export declare type MbscDatepickerCellHoverEvent = ICellHoverEvent<DatepickerBase>;
export declare type MbscDatepickerControl = 'calendar' | 'date' | 'time' | 'datetime' | 'timegrid';
export interface MbscDatepickerActiveDateChangeEvent extends IBaseEvent<DatepickerBase> {
    /** The activated part of the range. */
    active: 'start' | 'end';
}
export interface MbscDatepickerOptions extends MbscDatetimeOptions<DatepickerBase>, MbscCalendarOptions<DatepickerBase> {
    /** @hidden */
    clearIcon?: string;
    /** @hidden */
    dateFormatLong?: string;
    /** @hidden */
    defaultValue?: any;
    /** @hidden */
    eventText?: string;
    /** @hidden */
    eventsText?: string;
    /** @hidden */
    modules?: any[];
    /** @hidden */
    showControls?: boolean;
    /** @hidden */
    tabs?: boolean | 'auto';
    /** @hidden */
    weekText?: string;
    /**
     * Number of months or weeks to display.
     * The view starts from a reference date defined by [refDate](#opt-refDate) option.
     * @defaultValue 1
     */
    calendarSize?: number;
    /**
     * List of controls to display on the picker. Possible values:
     * - `['calendar']`
     * - `['calendar', 'time']`
     * - `['date']`
     * - `['datetime']`
     * - `['date', 'time']`
     * - `['time']`
     * - `['timegrid']`
     * @defaultValue ['calendar']
     */
    controls?: MbscDatepickerControl[];
    /**
     * Default selection which appears on the picker. The provided value will not be set as picker value, it's only a pre-selection.
     *
     * If not provided, the default selection will be the current date and/or time.
     *
     * If `null` is passed, in case of the calendar control there will be no selected value, in case of scroller controls the current date
     * and time will still be displayed on the selected line, as an empty value cannot be displayed on the scroller.
     *
     * @defaultValue undefined
     */
    defaultSelection?: any;
    /**
     * Sets the input for the end date.
     *
     * When using the Datepicker to [select a range](#opt-select), it can be used with one, two or no inputs.
     * When the `endInput` is specified, it will put the range end part of the selection to that input.
     * Similarly the input for the range start can be specified using the [startInput](#opt-startInput) option.
     *
     * @defaultValue undefined
     */
    endInput?: any;
    /**
     * Sets the first day of the selection, when `'preset-range'` [selection](#opt-select) is used.
     * It takes a number representing the day of the week, * Sunday is 0, Monday is 1, etc.
     *
     * If not specified, it defaults to the first day of the week defined by the [localization](#localization-locale).
     *
     * The length of the selection can be controlled with the [selectSize](#opt-selectSize) option.
     *
     * @defaultValue undefined
     */
    firstSelectDay?: number;
    /**
     * In case of [range selection](#opt-select), specifies if invalid dates are allowed between the start and end dates.
     *
     * When set to `false`, the end selection will be limited to the next invalid date from the selected start date.
     *
     * For example, when designing a booking system, a possible solution for already booked dates is to set those dates to invalid.
     * When considering check-in and check-out selections with the datepicker, in some cases it is desireable to be able to check out
     * on dates that already have a check-in. In this case, those dates would be disabled. Using the
     * [rangeEndInvalid](#opt-rangeEndInvalid) option it can be allowed that the first invalid day after the start date can be selected
     * as end date.
     *
     * @defaultValue false
     */
    inRangeInvalid?: boolean;
    /**
     * Sets the maximum range that can be selected. When selecting a date range without the time part, it sets the maximum number of days
     * the selected range can contain. When there is a time part in the selection, it sets the maximum range in milliseconds.
     *
     * @defaultValue undefined
     */
    maxRange?: number;
    /**
     * It sets the maximum time that is selectable on the time or the timegrid [control](#opt-controls).
     *
     * When there is a date part of the selection, the maximum is applied to each day. For example `maxTime: '18:00'`
     * will limit the time part of the selection to at most 18 o'clock each day,
     * in contrast to the [max](#opt-max) option, which will limit the date part of the selection as well.
     * For example: `max: '2021-08-22T18:00` will limit the selection to August 22nd 18 o'clock,
     * but will allow selection of times past 18 o'clock on dates before August 22nd.
     *
     * :::info
     * This option can't be used with the `'datetime'` [control](#opt-controls).
     * :::
     * @defaultValue undefined
     */
    maxTime?: MbscDateType;
    /**
     * Sets the minimum range that can be selected. When selecting a date range without the time part, it sets the minimum number of days
     * the selected range can contain. When there is a time part in the selection, it sets the minimum range in milliseconds.
     *
     * @defaultValue undefined
     */
    minRange?: number;
    /**
     * It sets the minimum time that is selectable on the time or the timegrid [control](#opt-controls).
     *
     * When there is a date part of the selection, the minimum is applied to each day. For example `minTime: '08:00'`
     * will limit the time part of the selection to at least 8 o'clock each day.
     * in contrast to the [min](#opt-min) option, which will limit the date part of the selection as well.
     * For example: `min: '2021-08-22T08:00` will limit the selection to August 22nd 8 o'clock,
     * but will allow selection of times earlier than 8 o'clock on dates after August 22nd.
     *
     * :::info
     * This option can't be used with the `'datetime'` [control](#opt-controls).
     * :::
     * @defaultValue undefined
     */
    minTime?: MbscDateType;
    /**
     * When `true`, it enables the end date to be selected on the first invalid date that comes after the selected start date.
     *
     * For example, When designing a booking system, a possible solution for already booked dates is to set those dates to invalid.
     * When considering check-in and check-out selections with the datepicker, in some cases it is desireable to be able to check out
     * on dates that already have a check-in. In this case, those dates would be disabled.
     * With this option it can be enabled, so the selection's end can be on the same day the first invalid is.
     *
     * :::info
     * When the [inRangeInvalid](#opt-inRangeInvalid) option is set to `true` (default), this option is ignored, so make sure to turn
     * that off too if you want to use this one.
     * :::
     *
     * @defaultValue false
     */
    rangeEndInvalid?: boolean;
    /**
     * When selecting a range on the calendar control, it is optional to highlight the dates between the start and end date.
     *
     * By default, the dates are highlighted between the start and end values. When the highlight is turned off, only the start
     * and end dates are shown as selected on the calendar.
     *
     * On desktop devices where a cursor is available, hovering the calendar days also help to visualize the selecting range.
     * The hover styling is also turned off, when the range is not highlighted.
     *
     * @defaultValue true
     */
    rangeHighlight?: boolean;
    /**
     * In terms of value selection, the Datepicker can be used to select a single date/time or multiple dates/times, as well as a date range
     * or a time range. It is also possible to select a week or a part of the week as a range.
     *
     * The select option defines if the picker is used for selecting independent dates or a range.
     *
     * Possible values are:
     * - `'date'` - Used for single or multiple date/time selection.
     * - `'range'` - Used for date range or time range selection.
     * - `'preset-range'` - Used for a week range selection.
     *
     * @defaultValue 'date'
     */
    select?: 'date' | 'range' | 'preset-range';
    /**
     * If `true` and [multiple selection](#opt-selectMultiple) is enabled, the number of selected items will be displayed in the header.
     *
     * @defaultValue false
     */
    selectCounter?: boolean;
    /**
     * Sets the length of the selection in days when [preset-range selection](#opt-select) is used.
     *
     * The start of the selection can be set using the [firstSelectDay](#opt-firstSelectDay) option
     * and will have the specified length.
     *
     * It defaults to a full week (7 days).
     *
     * @defaultValue 7
     */
    selectSize?: number;
    /**
     * Show or hide the range labels.
     *
     * When [selecting a range](#opt-select), a start and end label is displayed on the picker.
     * These labels indicate which part of the range are we selecting (start or end).
     * The labels can also be used to switch the active selection from start to end or vice versa.
     *
     * The [start label text](#localization-rangeStartLabel) and [end label text](#localization-rangeEndLabel) as well as the
     * [start value placeholder](#localization-rangeStartHelp) and the [end value placeholder](#localization-rangeEndHelp)
     * can be customized.
     *
     * @defaultValue true
     */
    showRangeLabels?: boolean;
    /**
     * Sets the input for the start date.
     *
     * When using the Datepicker to [select a range](#opt-select), it can be used with one, two or no inputs.
     * When the `startInput` is specified, it will put the range start part of the selection to that input.
     * Similarly the input for the range end can be specified using the [endInput](#opt-endInput) option.
     *
     * @defaultValue undefined
     */
    startInput?: any;
    /**
     * When selecting a range, it specifies the placeholder text for the end value under the [end label](#opt-showRangeLabels).
     * @defaultValue 'Please select'
     * @group Localizations
     */
    rangeEndHelp?: string;
    /**
     * When selecting a range, it specifies the text of the [end label](#opt-showRangeLabels).
     * @defaultValue 'End'
     * @group Localizations
     */
    rangeEndLabel?: string;
    /**
     * When selecting a range, it specifies the placeholder text for the start value under the [start label](#opt-showRangeLabels).
     * @defaultValue 'Please select'
     * @group Localizations
     */
    rangeStartHelp?: string;
    /**
     * When selecting a range, it specifies the text of the [start label](#opt-showRangeLabels).
     * @defaultValue 'Start'
     * @group Localizations
     */
    rangeStartLabel?: string;
    /**
     * @event
     * Triggered when the picker is canceled.
     * @param args The event argument with the following properties:
     *    - `value`: *MbscDateType | MbscDateType[]* - The selected value.
     *    - `valueText`: *string* - The selected value as text.
     * @param inst The component instance.
     */
    onCancel?(args: MbscDatepickerCancelEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the value is changed.
     * @param args The event argument with the following properties:
     *    - `value`: *MbscDateType | MbscDateType[]* - The selected value.
     *    - `valueText`: *string* - The selected value as text.
     * @param inst The component instance.
     */
    onChange?(args: MbscDatepickerChangeEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the picker is closed.
     * @param args The event argument with the following properties:
     *    - `value`: *MbscDateType | MbscDateType[]* - The selected value.
     *    - `valueText`: *string* - The selected value as text.
     * @param inst The component instance.
     */
    onClose?(args: MbscDatepickerCloseEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the picker is opened.
     * @param args The event argument with the following properties:
     *    - `target`: *HTMLElement* - The DOM element of the popup.
     *    - `value`: *MbscDateType | MbscDateType[]* - The selected value.
     *    - `valueText`: *string* - The selected value as text.
     * @param inst The component instance.
     */
    onOpen?(args: MbscDatepickerOpenEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the temporary value is changed.
     * @param args The event argument with the following properties:
     *    - `value`: *MbscDateType | MbscDateType[]* - The selected value.
     * @param inst The component instance.
     */
    onTempChange?(args: MbscDatepickerTempChangeEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the active date changes from start to end or vice versa, in case of range selection mode.
     * @param args The event argument with the following properties:
     *    - `active`: *string* - The activated part of the range, `'start'` or `'end'`.
     * @param inst The component instance.
     */
    onActiveDateChange?(args: MbscDatepickerActiveDateChangeEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when a cell is clicked on the calendar.
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the clicked cell.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not (before it was clicked).
     *    - `target`: *HTMLElement* - The DOM element of the clicked cell.
     * @param inst The component instance.
     */
    onCellClick?(args: MbscDatepickerCellClickEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the mouse pointer hovers a day on the calendar.
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the hovered day.
     *    - `labels`: *Array<MbscCalendarLabel>* - If the day has labels, contains the label objects for the hovered day.
     *    - `marked`: *Array<MbscCalendarMarked>* - If the day is marked, contains the marked objects for the hovered day.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not.
     *    - `target`: *HTMLElement* - The DOM element of the cell.
     * @param inst The component instance.
     */
    onCellHoverIn?(args: MbscDatepickerCellHoverEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the mouse pointer leaves a day on the calendar view (does not apply for agenda, schedule and timeline views).
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the hovered day.
     *    - `labels`: *Array<MbscCalendarLabel>* - If the day has labels, contains the label objects for the hovered day.
     *    - `marked`: *Array<MbscCalendarMarked>* - If the day is marked, contains the marked objects for the hovered day.
     *    - `selected`: *boolean* - Specifies if the day is currently selected or not.
     *    - `target`: *HTMLElement* - The DOM element of the cell.
     * @param inst The component instance.
     */
    onCellHoverOut?(args: MbscDatepickerCellHoverEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when a label is clicked on the calendar.
     * @param args The event argument with the following properties:
     *    - `date`: *Date* - The date of the day on which the label was clicked.
     *    - `domEvent`: *Event* - The DOM event of the click.
     *    - `label`: *MbscCalendarLabel* - The original object of the label which was clicked, `undefined` in case of the "more" label.
     *    - `labels`: *Array<MbscCalendarLabel>* - An array containing each label object for the given day.
     *    - `target`: *HTMLElement* - The DOM element of the label.
     * @param inst The component instance.
     */
    onLabelClick?(args: MbscDatepickerLabelClickEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the calendar page is changed (with buttons or swipe).
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageChange?(args: MbscDatepickerPageChangeEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered when the calendar page is changed (with buttons or swipe) and the view finished rendering.
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageLoaded?(args: MbscDatepickerPageLoadedEvent, inst: DatepickerBase): void;
    /**
     * @event
     * Triggered before the markup of a calendar page is starting to render.
     * @param args The event argument with the following properties:
     *    - `firstDay`: *Date* - The first day of the displayed page.
     *    - `lastDay`: *Date* - The last day of the displayed page.
     *    - `month`: *Date* - The first day of the visible month in case of month view.
     * @param inst The component instance.
     */
    onPageLoading?(args: MbscDatepickerPageLoadingEvent, inst: DatepickerBase): void;
}
