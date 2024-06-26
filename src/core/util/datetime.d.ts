import { IBaseProps } from '../base';
import { MbscCalendarSystem } from '../commons';
import { MbscDateType, MbscTimezonedDate, MbscTimezonePlugin } from './datetime.types.public';
import { MbscRecurrenceRule } from './recurrence.types.public';
export declare const REF_DATE: Date;
export declare const DAY_OF_MONTH: RegExp;
export declare const DAY_OF_WEEK: RegExp;
export declare const ONE_MIN = 60000;
export declare const ONE_HOUR: number;
export declare const ONE_DAY: number;
export interface IValidateProps {
    /** If true the specified invalid will cover the whole day. */
    allDay?: boolean;
    /** Specifies the start of the invalid range. */
    start?: MbscDateType;
    /** Specifies the end of the invalid range. */
    end?: MbscDateType;
    /** Recurrence rule for recurring invalid ranges. */
    recurring?: MbscRecurrenceRule | string;
    /**
     * Specifies recurring exceptions.
     * Useful when specific dates need to be skipped from the rule.
     */
    recurringException?: MbscDateType[] | MbscDateType;
    /**
     * Specifies a recurrence exception rule.
     * Useful when recurring dates need to be skipped from the rule.
     */
    recurringExceptionRule?: MbscRecurrenceRule | string;
}
/** @hidden */
export interface IDatetimeProps extends IBaseProps {
    /** @hidden */
    allDayText?: string;
    /** @hidden */
    defaultValue?: any;
    /** @hidden */
    endDay?: number;
    /** @hidden */
    shortYearCutoff?: string | number;
    /** @hidden */
    showEventTooltip?: boolean;
    /** @hidden */
    startDay?: number;
    /** @hidden */
    getDate?: (y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number) => Date;
    /** @hidden */
    getDay?: (d: Date) => number;
    /** @hidden */
    getMaxDayOfMonth?: (y: number, m: number) => number;
    /** @hidden */
    getMonth?: (d: Date) => number;
    /** @hidden */
    getWeekNumber?: (d: Date) => number;
    /** @hidden */
    getYear?: (d: Date) => number;
    /**
     * The timezone in which the data is interpreted. If the data contains timezone information
     * (when the ISO string has a timezone offset, e.g. `"2021-03-28T01:00:00Z"` or `"2021-03-28T03:00:00+03:00"`)
     * then the data's timezone is used instead.
     *
     * :::info
     * When using timezones, the [exclusiveEndDates](#opt-exclusiveEndDates) option is also turned on by default.
     * :::
     * :::info
     * When using anything other than the default (`'local'`), a [timezone plugin](#opt-timezonePlugin)
     * must be also passed to the component.
     * :::
     *
     * Possible values:
     * - `'local'` - The system's local timezone.
     * - `'utc'` - UTC (Universal Coordinated Time) timezone.
     * - Timezone name - The timezone name from the
     * [IANA time zone database](https://gist.github.com/aviflax/a4093965be1cd008f172), e.g. `"America/New_York"`.
     *
     * If not specified, it defaults to the [displayTimezone](#opt-displayTimezone).
     * @defaultValue undefined
     */
    dataTimezone?: 'local' | 'utc' | string;
    /**
     * The timezone in which the data is displayed.
     *
     * :::info
     * When using timezones, the [exclusiveEndDates](#opt-exclusiveEndDates) option is also turned on by default.
     * :::
     * :::info
     * When using anything other than the default (`'local'`), a [timezone plugin](#opt-timezonePlugin)
     * must be also passed to the component.
     * :::
     *
     * Possible values:
     * - `'local'` - The system's local timezone.
     * - `'utc'` - UTC (Universal Coordinated Time) timezone.
     * - Timezone name - The timezone name from the
     * [IANA time zone database](https://gist.github.com/aviflax/a4093965be1cd008f172), e.g. `"America/New_York"`.
     *
     * @defaultValue 'local'
     */
    displayTimezone?: 'local' | 'utc' | string;
    /**
     * If `true`, the picker will work in exclusive end dates mode,
     * meaning that the last moment of the range (selected value, colors, invalids, marked days etc.)
     * is not part of the range.
     *
     * For example, when selecting a date range without the time part,
     * selecting `'2021-07-20'` for the range end, the underlying value will return `'2021-07-21'` instead,
     * because the range ends on the 21st, not including the 21st.
     *
     * :::info
     * When using timezones, the `exclusiveEndDates` option will default to `true`.
     * :::
     *
     * @defaultValue false
     */
    exclusiveEndDates?: boolean;
    /**
     * An array containing the invalid values. Can contain dates,
     * or objects with the following properties:
     * - `allDay`: *boolean* - Specifies whether the invalid range is all day or not.
     * - `start`: *Date | string | object* - Start of the invalid range.
     * - `end`: *Date, string | object* - End of the invalid range.
     * - `recurring`: *string | object* - Recurrence rule for recurring invalid ranges.
     * - `recurringException`: *string | object | Array<string | object>* - Exception dates of the recurring rule.
     * Useful when specific dates need to be skipped from the rule.
     * - `recurringExceptionRule`: *string | object* - Exception rule of the recurring rule.
     * Useful when recurring dates need to be skipped from the rule.
     * - `resource`: *string | number | Array<string | number>* - Specifies the [resource](#opt-resources) ids for the invalid range.
     * The invalid range will be displayed only in the specified resource.
     * If there is no resource defined, the invalid range will be displayed in every resource.
     * - `slot`: *string | number* - Specifies the [slot](#opt-slots) id for the invalid range.
     * The invalid range will be displayed only in the specified slot.
     * If there is no slot defined, the invalid range will be displayed in every slot.
     * - `title`: *string* - Text which will be displayed for the invalid range. Only applicable for the timeline and scheduler views.
     *
     * :::info
     * The dates can be specified as JavaScript Date objects, ISO 8601 strings, or moment objects.
     * :::
     *
     * ```js
     * [
     *   // Passing exact dates and times
     *   new Date(2021, 1, 7), // Date object
     *   '2021-10-15T12:00', // ISO 8601 string
     *   moment('2020-12-25'), // moment object
     *
     *   // Passing invalid ranges
     *   {
     *     // ISO 8601 strings
     *     start: '2021-10-15T12:00',
     *     end: '2021-10-18T13:00',
     *     title: 'Company 10th anniversary',
     *   },
     *   {
     *     // Date objects
     *     allDay: true,
     *     start: new Date(2021, 2, 7),
     *     end: new Date(2021, 2, 9),
     *     title: 'Conference for the whole team',
     *   },
     *   {
     *     // Time range with recurrence
     *     start: '13:00',
     *     end: '12:00',
     *     recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' },
     *     title: 'Lunch break',
     *   },
     *   {
     *     // Disable weekends
     *     recurring: {
     *       repeat: 'weekly',
     *       weekDays: 'SA,SU'
     *     }
     *   }
     * ]
     * ```
     *
     * @defaultValue undefined
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Options_timeline
     * @group Properties
     */
    invalid?: MbscDateType[] | IValidateProps[];
    /**
     * Maximum value that can be selected.
     * @defaultValue undefined
     */
    max?: MbscDateType;
    /**
     * Minimum value that can be selected.
     * @defaultValue undefined
     */
    min?: MbscDateType;
    /**
     * Reference to the Moment.js library. Needed when using Moment objects as [return values](#opt-returnFormat).
     *
     * @defaultValue undefined
     */
    moment?: any;
    /**
     * Specifies the format in which the selected dates are returned.
     * - `'jsdate'` - JavaScript date object.
     * - `'iso8601'` - ISO 8601 date string.
     * - `'locale'` - Formatted date string based on the locale option,
     * or the [dateFormat](#localization-dateFormat) and [timeFormat](#localization-timeFormat) options, if they are specified.
     * - `'moment'` - Moment object.
     * Ensure that [moment.js](https://momentjs.com/) is loaded and passed through the [moment](#opt-moment) option.
     *
     * :::info
     * When using a [timezone plugin](#opt-timezonePlugin),
     * the returned values are always in 'iso8601' format and this option is not taken into account.
     * :::
     *
     * @defaultValue 'jsdate'
     */
    returnFormat?: 'jsdate' | 'iso8601' | 'locale' | 'moment';
    /**
     * Separator between date and time in the formatted date string.
     * @defaultValue ' '
     */
    separator?: string;
    /**
     * Specifies the timezone plugin, which can handle the timezone conversions.
     *
     * By default the component uses the local timezone of the browser to interpret dates.
     * If you want to interpret dates a different timezone,
     * you will need an external library to handle the timezone conversions.
     * There are two supported libraries: [moment-timezone](https://momentjs.com/timezone/)
     * and [luxon](https://moment.github.io/luxon/#/).
     *
     * You can specify either the [dataTimezone](#opt-dataTimezone) or the [displayTimezone](#opt-displayTimezone) or both.
     *
     * Depending on which external library you use you can pass either the `momentTimezone` or `luxonTimezone`
     * objects. These objects can be imported from the mobiscroll bundle.
     *
     * @defaultValue undefined
     */
    timezonePlugin?: MbscTimezonePlugin;
    /**
     * An array containing the valid values. Use it when it's more convenient to specify valid values instead of the invalid ones.
     * If specified, everything else is considered to be invalid, and the [invalid](#opt-invalid) option will be ignored.
     *
     * Can contain dates, or objects with the following properties:
     * - `allDay`: *boolean* - Specifies whether the valid range is all day or not.
     * - `start`: *Date | string | object* - Start of the valid range.
     * - `end`: *Date, string | object* - End of the valid range.
     * - `recurring`: *string | object* - Recurrence rule for recurring valid ranges.
     * - `recurringException`: *string | object | Array<string | object>* - Exception dates of the recurring rule.
     * Useful when specific dates need to be skipped from the rule.
     * - `recurringExceptionRule`: *string | object* - Exception rule of the recurring rule.
     * Useful when recurring dates need to be skipped from the rule.
     *
     * :::info
     * The dates can be specified as JavaScript Date objects, ISO 8601 strings, or moment objects.
     * :::
     *
     * ```js
     * [
     *   // Passing exact dates and times
     *   new Date(2021, 1, 7), // Date object
     *   '2021-10-15T12:00', // ISO 8601 string
     *   moment('2020-12-25'), // moment object
     *
     *   // Passing invalid ranges
     *   {
     *     // ISO 8601 strings
     *     start: '2021-10-15T12:00',
     *     end: '2021-10-18T13:00',
     *     title: 'Company 10th anniversary',
     *   },
     *   {
     *     // Date objects
     *     allDay: true,
     *     start: new Date(2021, 2, 7),
     *     end: new Date(2021, 2, 9),
     *     title: 'Conference for the whole team',
     *   },
     *   {
     *     // Time range with recurrence
     *     start: '13:00',
     *     end: '12:00',
     *     recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' },
     *     title: 'Lunch break',
     *   },
     *   {
     *     // Disable weekends
     *     recurring: {
     *       repeat: 'weekly',
     *       weekDays: 'SA,SU'
     *     }
     *   }
     * ]
     * ```
     *
     * @defaultValue undefined
     * @group Options_calendarview
     * @group Options_scheduler
     * @group Options_timeline
     * @group Properties
     */
    valid?: MbscDateType[] | IValidateProps[];
    /**
     * Text for AM.
     * @defaultValue 'am'
     * @group Localizations
     */
    amText?: string;
    /**
     * Specifies the calendar system to be used. Supported calendars:
     * - Gregorian - Gregorian calendar. This is the default calendar system.
     * - Jalali - Persian calendar. The Farsi language needs to be included to the package.
     * - Hijri - Hijri calendar. The Arabic language needs to be included to the package
     * @defaultValue undefined
     * @group Localizations
     */
    calendarSystem?: MbscCalendarSystem;
    /**
     * The format for parsed and displayed dates:
     * - `M` - month of year (no leading zero)
     * - `MM` - month of year (two digit)
     * - `MMM` - month name short
     * - `MMMM` - month name long
     * - `D` - day of month (no leading zero)
     * - `DD` - day of month (two digit)
     * - `DDD` - day of week (short)
     * - `DDDD` - day of week (long)
     * - `YY` - year (two digit)
     * - `YYYY` - year (four digit)
     * - `'...'` - literal text
     * - `''` - single quote
     * - anything else - literal text
     *
     * @defaultValue 'MM/DD/YYYY'
     * @group Localizations
     */
    dateFormat?: string;
    /**
     * Human readable date format, used by screen readers to read out full dates.
     * Characters have the same meaning as in the [dateFormat](#localization-dateFormat) option.
     * @defaultValue 'DDDD, MMMM D, YYYY'
     * @group Localizations
     */
    dateFormatFull?: string;
    /**
     * Long date format, used by the agenda view and timeline day headers.
     * Characters have the same meaning as in the [dateFormat](#localization-dateFormat) option.
     * @defaultValue 'D DDD MMM YYYY'
     * @group Localizations
     * @group Localizations_agenda
     * @group Localizations_scheduler
     * @group Localizations_timeline
     */
    dateFormatLong?: string;
    /**
     * The list of long day names, starting from Sunday.
     * @defaultValue ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
     * @group Localizations
     */
    dayNames?: string[];
    /**
     * The list of minimal day names, starting from Sunday.
     * @defaultValue ['S', 'M', 'T', 'W', 'T', 'F', 'S']
     * @group Localizations
     */
    dayNamesMin?: string[];
    /**
     * The list of abbreviated day names, starting from Sunday.
     * @defaultValue ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     * @group Localizations
     */
    dayNamesShort?: string[];
    /**
     * Additional string to display after the day on the wheel.
     * @defaultValue undefined
     * @group Localizations
     */
    daySuffix?: string;
    /**
     * Set the first day of the week: Sunday is 0, Monday is 1, etc.
     * @defaultValue 0
     * @group Localizations
     */
    firstDay?: number;
    /** @hidden */
    fromText?: string;
    /**
     * The list of full month names.
     * @defaultValue
     * ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
     * @group Localizations
     */
    monthNames?: string[];
    /**
     * The list of abbreviated month names.
     * @defaultValue ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
     * @group Localizations
     */
    monthNamesShort?: string[];
    /**
     * Additional string to display after the month on the wheel.
     * @defaultValue undefined
     * @group Localizations
     */
    monthSuffix?: string;
    /**
     * Text for PM.
     * @defaultValue 'pm'
     * @group Localizations
     */
    pmText?: string;
    /**
     * Text for quarter numbers in the timeline header. The {count} inside the string will be replaced with the number of the current quarter.
     * @defaultValue 'Q {count}'
     * @group Localizations
     * @group Localizations_timeline
     */
    quarterText?: string;
    /**
     * The format for parsed and displayed times:
     * - `h` - 12 hour format (no leading zero)
     * - `hh` - 12 hour format (leading zero)
     * - `H` - 24 hour format (no leading zero)
     * - `HH` - 24 hour format (leading zero)
     * - `m` - minutes (no leading zero)
     * - `mm` - minutes (leading zero)
     * - `s` - seconds (no leading zero)
     * - `ss` - seconds (leading zero)
     * - `a` - lowercase am/pm
     * - `A` - uppercase AM/PM
     * - `'...'` - literal text
     * - `''` - single quote
     * - anything else - literal text
     *
     * @defaultValue 'hh:mm A'
     * @group Localizations
     */
    timeFormat?: string;
    /**
     * Text for the "Today" button.
     * @defaultValue 'Today'
     * @group Localizations
     */
    todayText?: string;
    /** @hidden */
    toText?: string;
    /**
     * Additional string to display after the year on the wheel.
     * @defaultValue undefined
     * @group Localizations
     */
    yearSuffix?: string;
    /**
     * Text for week numbers in the timeline header. The {count} inside the string will be replaced with the number of the current week.
     * @defaultValue 'Week {count}'
     * @group Localizations
     * @group Localizations_timeline
     */
    weekText?: string;
}
/**
 * Returns if a date object is a pseudo-date object
 * Pseudo-date objects are our implementation of a Date interface
 */
export declare function isMBSCDate(d: any): d is MbscTimezonedDate;
/**
 * Returns an ISO8601 date string in data timezone, if it's a date with timezone, otherwise the original date.
 * @param d The date to check.
 * @param s Options object containing timezone options.
 * @param tz Explicit timezone, if specified
 */
export declare function convertTimezone(d: MbscDateType, s: IDatetimeProps, tz?: string): MbscDateType;
/** @hidden */
export declare const dateTimeLocale: IDatetimeProps;
export declare const ISO_8601_FULL: RegExp;
export declare const ISO_8601_TIME: RegExp;
/**
 * Returns the milliseconds of a date since midnight.
 * @hidden
 * @param d The date.
 */
export declare function getDayMilliseconds(d: Date): number;
/**
 * Checks if two date ranges are overlapping each other
 * @hidden
 * @param start1 start date of the first range
 * @param end1 end date of the first range
 * @param start2 start date of the second range
 * @param end2 end date of the second range
 * @param adjust if true, 0 length range will be modified to 1ms
 * @returns true if there is overlap false otherwise
 */
export declare function checkDateRangeOverlap(start1: Date, end1: Date, start2: Date, end2: Date, adjust?: boolean): boolean;
/**
 * Returns the starting point of a day in display timezone
 * @param s
 * @param d
 * @returns
 */
export declare function getDayStart(s: IDatetimeProps, d: Date): Date;
/**
 * Returns the last point of a day in display timezone
 * @param s
 * @param d
 * @returns
 */
export declare function getDayEnd(s: IDatetimeProps, d: Date): Date;
/** @hidden */
export declare function getEndDate(s: IDatetimeProps, allDay: boolean | undefined, start: Date, end: Date, isList?: boolean): Date;
/** @hidden */
export declare function getDateStr(d: Date): string;
/** @hidden */
export declare function getDateOnly(d: Date, nativeDate?: boolean): Date;
/** @hidden */
export declare function getUTCDateOnly(d: Date): number;
/**
 * Returns the difference in days for two dates
 * @hidden
 * @param d1 First date
 * @param d2 Second date
 * @returns Difference in days
 */
export declare function getDayDiff(d1: Date, d2: Date): number;
/**
 * Returns the number of days between two dates if there are missing days between them
 * @hidden
 */
export declare function getGridDayDiff(from: Date, to: Date, startDay: number, endDay: number): number;
/**
 * Returns the date of the first day of the week for a given date
 * @hidden
 */
export declare function getFirstDayOfWeek(d: Date, s: any, w?: number): Date;
/**
 * Checks if two dates are on the same date
 * @hidden
 * @param d1 First date
 * @param d2 Second date
 * @returns True or false
 */
export declare function isSameDay(d1: Date, d2: Date): boolean;
/**
 * Checks if two dates ranges are on the same range
 * @hidden
 * @param d1 First date of first range
 * @param d2 Second date of first range
 * @param d3 First date of second range
 * @param d4 Second date of second range
 * @returns True or false
 */
export declare function isSameDateRange(d1: Date, d2: Date, d3: Date, d4: Date): boolean;
/**
 * Check if 2 dates are in the same month (depends on the calendar system).
 * @param d1 First date.
 * @param d2 Second date.
 * @param s Settings containing the calendar system functions.
 */
export declare function isSameMonth(d1: Date, d2: Date, s: IDatetimeProps): boolean;
/** @hidden */
export declare function adjustedDate(y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number): Date;
export declare function isDate(d: any): d is Date;
export declare function isTime(d: any): boolean;
/**
 * When a timezone plugin is specified, return a date with the same parts as the passed date (year, month, day, hour)
 * only with a timezone specified to display timezone
 * Otherwise it returns the same thing in the local timezone
 * @param s Settings object
 * @param d Date object
 * @returns
 */
export declare function addTimezone(s: any, d: Date): Date;
/**
 * Returns a local date with the same year/month day/hours/minutes... as the original date in the parameter
 * It does not convert to any timezone, it just takes the date/hour/minute and creates a new local date from that
 * @param d Date with or without timezone data or null/undefined
 * @returns A new local Date object or undefined/null when nothing is pass as param
 */
export declare function removeTimezone(d: Date): Date;
/**
 * Creates a new date object, depending on the parameters.
 * Will return a native Date object or a Mobiscroll Date object depending on what timezone plugin is specified in
 * the Settings object.
 * Can be passed another datetime to initialize from, or can be passed individual date and time parameters
 * @param s Mobiscroll Settings object
 * @param yearOrStamp The year or the other date string/timestamp/object
 * @param month The month
 * @param date The date of month
 * @param hour The Hour
 * @param min The Minute
 * @param sec The Second
 * @param ms The Millisecond
 * @returns
 */
export declare function createDate(s: any, value?: number | string | Date | MbscTimezonedDate): Date;
export declare function createDate(s: any, year: number, month: number, date: number, hour?: number, min?: number, sec?: number, ms?: number): Date;
/** @hidden */
export declare function makeDate(d: any, s?: any, format?: any, parts?: any, skipTimezone?: boolean): any;
/** @hidden */
export declare function returnDate(d: Date, s: IDatetimeProps, displayFormat: string, isoParts: any, hasTimePart: boolean): any;
/**
 * Format a date into a string value with a specified format.
 * @param {string} format - Output format.
 * @param {Date} date - Date to format.
 * @param {IDatetimeProps} options - Locale options.
 * @returns {string} The formatted date string.
 */
export declare function formatDatePublic(format: string, date: Date, options?: IDatetimeProps): string;
/**
 * Format a date into a string value with a specified format.
 * This is for inner usage, and it's faster than the one above, because it skips the option merge.
 * @param {string} format - Output format.
 * @param {Date} date - Date to format.
 * @param {IDatetimeProps} options - Locale options.
 * @returns {string} The formatted date string.
 */
export declare function formatDate(format: string, date: Date, s: IDatetimeProps): string;
/**
 * Extract a date from a string value with a specified format.
 * @param {string} format Input format.
 * @param {string} value String to parse.
 * @param {IDatetimeProps} options Locale options
 * @return {Date} Returns the extracted date or defaults to now if no format or no value is given
 */
export declare function parseDate(format: string, value: string, options: IDatetimeProps): Date;
/** Value Equality function for Date and Array of Date types
 * Checks if two dates or two array of dates are the same.
 * NOTE: empty Arrays are treated the same way as null values because,
 * when parsing a null value, the returned value representation is an empty object (datepicker),
 * which when turned back, won't be null, but rather an empty array
 */
export declare function dateValueEquals(v1: any, v2: any, s: IDatetimeProps): boolean;
/**
 * Clones a date object (native or custom mbsc date).
 * @param date The date to clone.
 */
export declare function cloneDate(date: Date): Date;
/**
 * Adds the specified number of days to a date. Returns a new date object.
 * @param date The date.
 * @param days Days to add.
 */
export declare function addDays(date: Date, days: number): Date;
/**
 * Adds the specified number of days to a date. Returns a new date object.
 * @param date The date.
 * @param months Days to add.
 * @param s
 */
export declare function addMonths(date: Date, months: number, s: IDatetimeProps): Date;
/**
 * Check if a day is inside the visible week days.
 * @param day Weekday to check.
 * @param startDay Start day of the week.
 * @param endDay End day of the week.
 */
export declare function isInWeek(day: number, startDay: number, endDay: number): boolean;
/**
 * Rounds a date to the specified minute step.
 * @param date The date to round.
 * @param step Step specified as minutes.
 */
export declare function roundTime(date: Date, step: number): Date;
/** Constrains a date to min and max */
export declare function constrainDate(date: Date, min?: Date, max?: Date): Date;
export declare const datetime: {
    formatDate: typeof formatDatePublic;
    parseDate: typeof parseDate;
};
export declare type DateType = MbscDateType;
export declare type IDate = MbscTimezonedDate;
export declare type ITimezonePlugin = MbscTimezonePlugin;
