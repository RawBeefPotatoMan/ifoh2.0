import { BaseComponent } from '../../base';
import { IPopupButton, PopupBase } from '../../components/popup/popup';
import { IPickerProps, IPickerState } from './picker.types';
/** @hidden */
export declare class PickerBase<PropType extends IPickerProps = IPickerProps, StateType extends IPickerState = IPickerState, ValueType = any, ValueRepType = any> extends BaseComponent<PropType, StateType> {
    static defaults: IPickerProps;
    /** @hidden */
    _allowTyping?: boolean;
    /** @hidden */
    _anchor?: HTMLElement;
    /** @hidden */
    _anchorAlign: 'start' | 'end' | 'center';
    /** @hidden */
    _buttons?: IPopupButton[];
    /** @hidden */
    _cssClass?: string;
    /** @hidden */
    _focusElm: HTMLElement;
    /** @hidden */
    _headerText?: string;
    /** @hidden */
    _isOpen?: boolean;
    /** @hidden */
    _live?: boolean;
    /** @hidden */
    _maxWidth?: string | number;
    /** @hidden */
    _popup: PopupBase | null;
    /** @hidden */
    _preventShow?: boolean;
    /** @hidden */
    _scrollLock?: boolean;
    /** @hidden */
    _showInput?: boolean;
    /** @hidden */
    _tempValueRep: ValueRepType;
    /** @hidden */
    _tempValueText: string;
    /** @hidden */
    _value?: ValueType;
    /** @hidden */
    _valueRep: ValueRepType;
    /** @hidden */
    _valueText: string;
    /** @hidden */
    _wrapper: HTMLElement | null;
    /**
     * In case of angular directives, this property will hold the dynamically
     * create instance of the component. In other cases this will be undefined.
     */
    protected _inst?: PickerBase<PropType, StateType, ValueType, ValueRepType>;
    protected _valueTextChange?: boolean;
    protected _oldValueText?: string;
    protected _shouldInitInput?: boolean;
    /** Flag for skipping the value parsing on open. When the tempValue is set programmatically, the selected value
     * shouldn't be parsed and put to the temp, because it would overwrite the temporarily set value.
     */
    protected _tempValueSet?: boolean;
    /** Does the picker support the null value
     * If the null value is not supported by the picker, it will trigger a change when the value differs after parse.
     * If the null value is supported by the picker, it will not trigger a change when the tempValueRep changes after parse.
     */
    protected _nullSupport: boolean;
    protected _preventChange?: boolean;
    private _handler;
    private _input?;
    private _observer;
    private _tempValue?;
    private _resetEl?;
    /**
     * Opens the component.
     *
     * @method javascript
     * @method jquery
     */
    open(): void;
    /**
     * Closes the component.
     *
     * @method javascript
     * @method jquery
     */
    close(): void;
    /** @hidden */
    set(): void;
    /**
     * Recalculates the position of the component (if not inline).
     */
    position(): void;
    /** Returns a boolean indicating whether the component is visible or not. */
    isVisible(): boolean;
    /** @hidden */
    getVal(): any[] | ValueType;
    /** @hidden */
    setVal(value: ValueType): void;
    /**
     * Returns the temporary value that's selected on the picker.
     *
     * Depending on how the picker is [displayed](#opt-display), the selection might be in a temporary state
     * that hasn't been set yet. This temporary value can be acquired calling the getTempVal method on the
     * picker instance.
     * @returns The return value type depends on the [returnFormat](#opt-returnFormat) and the
     * [select](#opt-select) option.
     */
    getTempVal(): ValueType;
    /**
     * Sets the Picker temporary value. This temp value is shown on the picker until the selection.
     * In the case of inline mode or when the [touchUi](#opt-touchUi) option is false the value will be set to the Model as well,
     * since in these cases there's no temporary value.
     * @param value The value to set to the Datepicker as temporary value
     */
    setTempVal(value: ValueType): void;
    /** @hidden */
    _onInputChange: (ev: any, val?: string) => void;
    /** @hidden */
    _onResize: (args: any) => void;
    /** @hidden */
    _onWrapperResize: () => void;
    /** @hidden */
    _onPopupClose: (args: any) => void;
    /** @hidden */
    _onPopupClosed: (args: any) => void;
    /** @hidden */
    _onPopupKey: (args: any) => void;
    /** @hidden */
    _onPopupOpen: (args: any) => void;
    /** @hidden */
    _onButtonClick: ({ domEvent, button }: {
        domEvent: any;
        button: IPopupButton;
    }) => void;
    /** @hidden */
    _setInput: (inp: any) => void;
    /** @hidden */
    _setPopup: (popup: any) => void;
    /** @hidden */
    _setWrapper: (wrapper: any) => void;
    /** @hidden */
    _shouldValidate(s: IPickerProps, prevS: IPickerProps): boolean;
    /** @hidden */
    _valueEquals(v1?: ValueType, v2?: ValueType): boolean;
    /** @hidden */
    _change(value: ValueType | null): void;
    protected _render(s: IPickerProps, state: IPickerState): void;
    protected _updated(): void;
    /**
     * Writes the value to the element and returns if the value was changed
     * @param elm The HTML element the value should be written to
     * @param text The value text that's written into the element
     */
    protected _writeValue(elm: HTMLInputElement, text: string, value?: ValueType): boolean;
    protected _destroy(): void;
    protected _setHeader(): void;
    protected _setOrUpdate(preventChange?: boolean): void;
    /**
     * Returns a copy of the value representation.
     * Is used to copy the temporary value to the final value and vice versa.
     * @param value The value to copy.
     */
    protected _copy(value: ValueRepType): ValueRepType;
    /**
     * Formats the value representation into a string to display the selection.
     * @param value The value to format.
     */
    protected _format(value: ValueRepType): string;
    /**
     * Transforms the value representation into the actual value.
     * E.g. in case of date scroller the value is represented as an array like [5, 28, 2020],
     * this function will transform it into a date object.
     * @param value The value to transform.
     */
    protected _get(value: ValueRepType): ValueType;
    /**
     * Parses a string or actual value into the value representation.
     * E.g. in case of the date scroller the '05/28/2020' string should be parsed into [5, 28, 2020].
     * @param valueText The value to parse.
     */
    protected _parse(valueText: string | ValueType, fromInput?: boolean): ValueRepType;
    protected _validate(): void;
    protected _onClosed(): void;
    protected _onOpen(): void;
    protected _onParse(): void;
    /**
     * Default behavior for the enter key in a picker to set the selection and close the picker
     * @param args
     */
    protected _onEnterKey(args: any): void;
    private _valueChange;
    private _readValue;
    private _unlisten;
    private _write;
}
