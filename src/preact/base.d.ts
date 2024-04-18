import { PureComponent } from './pure';
export declare function Directive(args: any): (ctor: any) => any;
export declare class Base<PropsType, StateType> extends PureComponent<PropsType, StateType> {
    /** @hidden */
    static _fname: string;
    /** @hidden */
    static _selector: string;
    /** @hidden */
    static _renderOpt: any;
    /** @hidden */
    s: PropsType;
    value: any;
    _el: HTMLElement;
    /** @hidden */
    _shouldEnhance?: HTMLElement | string | boolean | null;
    protected _opt: any;
    protected _newProps: any;
    private __value;
    /** @hidden */
    componentDidMount(): void;
    /** @hidden */
    componentDidUpdate(): void;
    /** @hidden */
    componentWillUnmount(): void;
    /** @hidden */
    render(): any;
    /** @hidden */
    getInst(): this;
    /**
     * Sets or updates options of the component.
     * @method javascript
     * @method jquery
     */
    setOptions(opt: PropsType): void;
    /** @hidden */
    _setEl: (el: any) => void;
    /** @hidden */
    _safeHtml(html: string): any;
    protected _init(): void;
    protected __init(): void;
    protected _emit(name: string, args: any): void;
    protected _template(s: PropsType, state: StateType): any;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected __destroy(): void;
    protected _willUpdate(): void;
    private _enhance;
}
