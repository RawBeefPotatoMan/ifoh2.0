import { IBaseEvent, IBaseProps } from '../../base';
import { IPopupButtonBase, PopupBase } from './popup';
export declare type MbscPopupPredefinedButton = 'set' | 'cancel' | 'ok' | 'close';
export declare type MbscPopupDisplay = 'center' | 'bottom' | 'top' | 'anchored' | 'inline' | 'bubble';
export declare type MbscPopupCloseEventSource = MbscPopupPredefinedButton | 'overlay' | 'esc' | 'scroll';
export interface MbscPopupButton extends IPopupButtonBase {
    /** The handler of the button, which will run when the button is pressed. */
    handler?: MbscPopupPredefinedButton | ((event: any) => void);
}
export interface MbscPopupCloseEvent extends IBaseEvent<PopupBase> {
    /** Determines what triggered the close event. */
    source?: MbscPopupCloseEventSource;
}
export interface MbscPopupOpenEvent extends IBaseEvent<PopupBase> {
    /** The DOM element of the popup. */
    target: HTMLElement;
}
export interface MbscPopupPositionEvent extends IBaseEvent<PopupBase> {
    /** The window width. */
    windowWidth: number;
    /** The window height. */
    windowHeight: number;
    /** */
    isLarge?: boolean;
    /** The max height of the popup. */
    maxPopupHeight: number;
    /** The max width of the popup. */
    maxPopupWidth: number;
    /** The DOM element of the popup. */
    target: HTMLElement;
}
export interface MbscPopupOptions extends IBaseProps {
    /** @hidden */
    activeElm?: HTMLElement | string;
    /** @hidden */
    anchorAlign?: 'start' | 'end' | 'center';
    /** @hidden */
    buttonVariant?: 'standard' | 'flat' | 'outline';
    /** @hidden */
    closeOnScroll?: boolean;
    /** @hidden */
    contentPadding?: boolean;
    /** @hidden */
    disableLeftRight?: boolean;
    /** @hidden */
    focusElm?: any;
    /**
     * @hidden
     * Set the popup as active modal
     */
    setActive?: boolean;
    /** @hidden */
    windowWidth?: number;
    /**
     * Specifies the anchor element for positioning, if [display](#opt-display) is set to `'anchored'`.
     * @defaultValue undefined
     */
    anchor?: HTMLElement;
    /**
     * Animation to use when the component is opened or closed, if [display](#opt-display) is not set to `'inline'`.
     * Possible values:
     * - `'pop'`
     * - `'slide-down'`
     * - `'slide-up'`
     *
     * If `false`, the animation is turned off.
     * @defaultValue undefined
     */
    animation?: 'pop' | 'slide-down' | 'slide-up' | boolean;
    /**
     * Buttons to display. Each item of the array will be a button. A button can be specified as a string, or as a button object.
     *
     * If a string, it must be one of the predefined buttons:
     * - `'ok'` - Approve action. Will display the caption specified by the [okText](#localization-okText) option.
     * - `'cancel'` - Dismisses the popup. Will display the caption specified by the [cancelText](#localization-cancelText) option.
     * - `'close'` - Closes the popup. Will display the caption specified by the [closeText](#localization-closeText) option.
     * - `'set'` - Approve action. Will display the caption specified by the [setText](#localization-setText) option.
     *
     * The button object can have the following properties:
     * - `text`: *string* - Text of the button.
     * - `handler`: *string | () => void* - The handler function which will run when the button is pressed.
     * If a string, it must be one of the predefined button handlers:
     *   - `'set'` - Approve action.
     *   - `'cancel'` - Dismiss the popup.
     * - `icon`: *string* - Icon for the button.
     * - `cssClass`: *string* - CSS class for the button.
     * - `disabled`: *boolean* - The disabled state of the button.
     * - `keyCode`: *number | string | Array<number | string>* - The key code associated with the button to activate it from keyboard.
     * Can be a single value or multiple value passed as an array. Predefined string values are: `'enter'`, `'esc'`, `'space'`.
     *
     * ```js title="Example for using predefined and custom buttons"
     * [
     *   'set',
     *   {
     *     text: 'Custom',
     *     icon: 'checkmark',
     *     cssClass: 'my-btn',
     *     handler: function (event) {
     *       alert('Custom button clicked!');
     *     }
     *   },
     *   'cancel'
     * ]
     * ```
     * ```js title="Example for using a predefined button handler"
     * [
     *   'set',
     *   {
     *     text: 'Hide',
     *     handler: 'cancel',
     *     icon: 'close',
     *     cssClass: 'my-btn'
     *   }
     * ]
     * ```
     *
     * @defaultValue undefined
     */
    buttons?: Array<MbscPopupButton | MbscPopupPredefinedButton | string>;
    /**
     * If `true`, the popup is closed when the ESC key is pressed.
     * @defaultValue true
     */
    closeOnEsc?: boolean;
    /**
     * If `true`, the popup is closed on overlay click or tap.
     * @defaultValue true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Specify the DOM element in which the component is rendered and positioned, if [display](#opt-display) is not `'inline'`.
     * Can be a selector string or a DOM element.
     * @defaultValue 'body'
     */
    context?: string | HTMLElement;
    /**
     * Specifies a custom CSS class for the component.
     *
     * :::info
     * The `mbsc-no-padding` class removes the built in padding of the popup content.
     * :::
     */
    cssClass?: string;
    /**
     * Controls the positioning of the component. Possible options:
     * - `'center'` - The component appears as a popup at the center of the viewport.
     * - `'inline'` - The component is rendered inline.
     * - `'anchored'` - The component appears positioned to the element defined by the [anchor](#opt-anchor) option.
     * - `'top'` - The component appears docked to the top of the viewport.
     * - `'bottom'` - The component appears docked to the bottom of the viewport.
     *
     * The default display mode depends on the [theme](#opt-theme), it defaults to `'bottom'` for the iOS theme and
     * to `'center'` for all other themes.
     * @defaultValue undefined
     */
    display?: MbscPopupDisplay;
    /**
     * If `true`, after closing the popup the focus will be moved to the last focused element
     * before the popup was opened.
     * @defaultValue true
     */
    focusOnClose?: boolean;
    /**
     * If `true`, the popup will receive the focus when opened.
     * @defaultValue true
     */
    focusOnOpen?: boolean;
    /**
     * If `true` and [display](#opt-display) is not set to `'inline'`, focus won't be allowed to leave the popup.
     * @defaultValue true
     */
    focusTrap?: boolean;
    /**
     * If `true`, the popup will appear in full screen, but, by default, its width and height won't exceed 600px.
     * You can change that using the [maxWidth](#opt-maxWidth) and [maxHeight](#opt-maxHeight) options.
     * @defaultValue false
     */
    fullScreen?: boolean;
    /**
     * Text to display in the header.
     * @defaultValue undefined
     */
    headerText?: string;
    /**
     * Sets the height of the component.
     * @defaultValue undefined
     */
    height?: string | number;
    /**
     * Specifies if the component is opened or not. Use it together with the [onClose](#event-onClose) event, by setting it
     * to `false` when the component closes.
     * @defaultValue false
     */
    isOpen?: boolean;
    /**
     * Sets the maximum height of the component. If not specified, on larger screens (>=768px width) it defaults to 600px.
     * @defaultValue undefined
     */
    maxHeight?: string | number;
    /**
     * Sets the maximum width of the component.
     * @defaultValue undefined
     */
    maxWidth?: string | number;
    /**
     * Disables page scrolling, if the content of the popup is not scrollable.
     * @defaultValue true
     */
    scrollLock?: boolean;
    /**
     * Show or hide the popup arrow, when [display](#opt-display) is `'anchored'`.
     * @defaultValue true
     */
    showArrow?: boolean;
    /**
     * Show or hide the popup overlay.
     * @defaultValue true
     */
    showOverlay?: boolean;
    /**
     * Use `true` to render a touch optimized user interface, or `false` for a user interface optimized for pointer devices (mouse, touchpad).
     *
     * Can be used with the [responsive](#opt-responsive) option to change the user interface based on viewport width.
     *
     * If set to `'auto'`, the touch UI will be automatically enabled based on the platform.
     *
     * @defaultValue 'auto'
     */
    touchUi?: boolean | 'auto';
    /**
     * Sets the width of the component.
     * @defaultValue undefined
     */
    width?: string | number;
    /**
     * Text for the "Cancel" button.
     * @defaultValue 'Cancel'
     * @group Localizations
     */
    cancelText?: string;
    /**
     * Text for the "Close" button.
     * @defaultValue 'Close'
     * @group Localizations
     */
    closeText?: string;
    /**
     * Text for the "Ok" button.
     * @defaultValue 'Ok'
     * @group Localizations
     */
    okText?: string;
    /**
     * Text for the "Set" button.
     * @defaultValue 'Set'
     * @group Localizations
     */
    setText?: string;
    /** @hidden */
    onButtonClick?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when the component is closed.
     * @param args The event argument with the following properties:
     *    - `source`: *string* - Determines what triggered the close event. Can be one of `'set'`, `'cancel'`, `'ok'`, `'close'`,
     * `'overlay'`, `'esc'`, `'scroll'`.
     * @param inst The component instance.
     */
    onClose?(args: MbscPopupCloseEvent, inst: PopupBase): void;
    /** @hidden */
    onClosed?(args: any, inst: any): void;
    /** @hidden */
    onKeyDown?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when the component is opened.
     * @param args The event argument with the following properties:
     *    - `target`: *HTMLElement* - The DOM element of the popup.
     * @param inst The component instance.
     */
    onOpen?(args: MbscPopupOpenEvent, inst: PopupBase): void;
    /**
     * @event
     * Triggered when the component is positioned (on initial show and resize / orientation change).
     * Useful if dimensions needs to be modified before the positioning happens, e.g. set a custom width or height.
     * Custom positioning can also be implemented in this handler. In that case, returning `false` from the handler function will prevent
     * the built in positioning.
     * @param args The event argument with the following properties:
     *    - `target`: *HTMLElement* - The DOM element of the popup.
     *    - `windowWidth`: *number* - The window width.
     *    - `windowHeight`: *number* - The window height.
     * @param inst The component instance.
     */
    onPosition?(args: MbscPopupPositionEvent, inst: PopupBase): void;
    /** @hidden */
    onResize?(args: any, inst: any): void;
}
