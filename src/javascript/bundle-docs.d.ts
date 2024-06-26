import { MbscCalendarSync, MbscGoogleCalendarSyncConfig, MbscOutlookCalendarSyncConfig } from '../addons/calendar-integration/index';
import { DatepickerBase } from '../core/components/datepicker/datepicker';
import { EventcalendarBase } from '../core/components/eventcalendar/eventcalendar';
import { PopupBase } from '../core/components/popup/popup';
import { SelectBase } from '../core/components/select/select';
/**
 * WARNING
 *
 * Export names and types (interfaces and classes) are required
 * to remain the same in this file. The documentation generation works on these
 * conventions only. Changing it will affect the generated docs! (content might be
 * missing)
 */
export { MbscGoogleCalendarSyncConfig, MbscOutlookCalendarSyncConfig };
export interface MbscGoogleCalendarSync extends MbscCalendarSync<MbscGoogleCalendarSyncConfig> {
}
export interface MbscOutlookCalendarSync extends MbscCalendarSync<MbscOutlookCalendarSyncConfig> {
}
export declare class Eventcalendar extends EventcalendarBase {
}
export declare class Datepicker extends DatepickerBase {
}
export declare class Popup extends PopupBase {
}
export declare class Select extends SelectBase {
}
export { MbscAlertOptions, MbscButtonOptions, MbscCheckboxOptions, MbscConfirmOptions, MbscDatepickerOptions, MbscDropcontainerOptions, MbscDropdownOptions, MbscEventcalendarOptions, MbscInputOptions, MbscPopupOptions, MbscPromptOptions, MbscRadioGroupOptions, MbscRadioOptions, MbscSelectOptions, MbscSegmentedGroupOptions, MbscSegmentedOptions, MbscSnackbarOptions, MbscStepperOptions, MbscSwitchOptions, MbscTextareaOptions, MbscToastOptions, } from './bundle';
