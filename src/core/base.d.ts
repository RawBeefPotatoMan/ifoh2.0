import { Base } from '../preact/base';
import { MbscLocale } from '../i18n/locale';
export declare const version = "5.29.1";
/**
 * @hidden
 * Interface for modules, add-ons
 */
export interface IModule {
    init(inst: any): void;
}
/**
 * Preact with typescript complains about these props missing,
 * so adding it here
 */
export interface IBaseProps {
    /**
     * Specifies a custom CSS class for the component.
     * @defaultValue undefined
     */
    cssClass?: string;
    /**
     * Specifies different options for different container widths, in a form of an object,
     * where the keys are the name of the breakpoints, and the values are objects containing the options for the given breakpoint.
     *
     * :::info
     * The available width is queried from the container element of the component and not the browsers viewport like in css media queries
     * :::
     * There are five predefined breakpoints:
     *
     * - `xsmall` - min-width: 0px
     * - `small` - min-width: 576px
     * - `medium` - min-width: 768px
     * - `large` - min-width: 992px
     * - `xlarge` - min-width: 1200px
     *
     * Custom breakpoints can be defined by passing an object containing the `breakpoint` property specifying the min-width in pixels.
     * Example:
     *
     * ```
     * responsive: {
     *   small: {
     *     display: 'bottom'
     *   },
     *   custom: { // Custom breakpoint
     *     breakpoint: 600,
     *     display: 'center'
     *   },
     *   large: {
     *     display: 'anchored'
     *   }
     * }
     * ```
     *
     * @defaultValue undefined
     */
    responsive?: {
        [key: string]: any;
    };
    /**
     * Enables right-to-left display.
     *
     * @defaultValue false
     * @group Localizations
     */
    rtl?: boolean;
    /**
     * Specifies the visual appearance of the component.
     *
     * If it is `'auto'` or `undefined`, the theme will automatically be chosen based on the platform.
     * If custom themes are also present, they will take precedence over the built in themes, e.g. if there's an iOS based custom theme,
     * it will be chosen on the iOS platform instead of the default iOS theme.
     *
     * Supplied themes:
     * - `'ios'` - iOS theme
     * - `'material'` - Material theme
     * - `'windows'` - Windows theme
     *
     * It's possible to [modify theme colors](../theming/sass-variables) or
     * [create custom themes](../theming/sass-themes).
     *
     * :::info
     * Make sure that the theme you set is included in the downloaded package.
     * :::
     *
     * @defaultValue undefined
     */
    theme?: string;
    /**
     * Controls which variant of the [theme](#opt-theme) will be used (light or dark).
     *
     * Possible values:
     * - `'light'` - Use the light variant of the theme.
     * - `'dark'` - Use the dark variant of the theme.
     * - `'auto'` or `undefined` - Detect the preferred system theme on devices where this is supported.
     *
     * To use the option with custom themes, make sure to create two custom themes, where the dark version has the same name as the light one,
     * suffixed with `'-dark'`, e.g.: `'my-theme'` and `'my-theme-dark'`.
     *
     * @defaultValue undefined
     */
    themeVariant?: 'light' | 'dark' | 'auto';
    /** @hidden */
    touchUi?: boolean | 'auto';
    /**
     * Sets the language of the component. The locale object contains all the translations for a given language.
     * The built in language modules are listed below. If a language is not listed, it can be provided as a
     * [custom language module](https://docs.mobiscroll.com/languages).
     *
     * Supported values:
     * - Arabic: `localeAr`, `'ar'`
     * - Bulgarian: `localeBg`, `'bg'`
     * - Catalan: `localeCa`, `'ca'`
     * - Czech: `localeCs`, `'cs'`
     * - Chinese: `localeZh`, `'zh'`
     * - Croatian: `localeHr`, `'hr'`
     * - Danish: `localeDa`, `'da'`
     * - Dutch: `localeNl`, `'nl'`
     * - English: `localeEn` or `undefined`, `'en'`
     * - English (UK): `localeEnGB`, `'en-GB'`
     * - Farsi: `localeFa`, `'fa'`
     * - German: `localeDe`, `'de'`
     * - Greek: `localeEl`, `'el'`
     * - Spanish: `localeEs`, `'es'`
     * - Finnish: `localeFi`, `'fi'`
     * - French: `localeFr`, `'fr'`
     * - Hebrew: `localeHe`, `'he'`
     * - Hindi: `localeHi`, `'hi'`
     * - Hungarian: `localeHu`, `'hu'`
     * - Italian: `localeIt`, `'it'`
     * - Japanese: `localeJa`, `'ja'`
     * - Korean: `localeKo`, `'ko'`
     * - Lithuanian: `localeLt`, `'lt'`
     * - Norwegian: `localeNo`, `'no'`
     * - Polish: `localePl`, `'pl'`
     * - Portuguese (Brazilian): `localePtBR`, `'pt-BR'`
     * - Portuguese (European): `localePtPT`, `'pt-PT'`
     * - Romanian: `localeRo`, `'ro'`
     * - Russian: `localeRu`, `'ru'`
     * - Russian (UA): `localeRuUA`, `'ru-UA'`
     * - Slovak: `localeSk`, `'sk'`
     * - Serbian: `localeSr`, `'sr'`
     * - Swedish: `localeSv`, `'sv'`
     * - Thai: `localeTh`, `'th'`
     * - Turkish: `localeTr`, `'tr'`
     * - Ukrainian: `localeUa`, `'ua'`
     *
     * @defaultValue undefined
     * @group Localizations
     */
    locale?: string | MbscLocale;
    /** @hidden */
    modules?: IModule[];
    /** @hidden */
    baseTheme?: any;
    /** @hidden */
    children?: any;
    /** @hidden */
    class?: string;
    /** @hidden */
    className?: string;
    /** @hidden */
    context?: string | HTMLElement;
    /** @hidden */
    dangerouslySetInnerHTML?: any;
    /** @hidden */
    hasChildren?: boolean;
    /** @hidden */
    key?: any;
    /** @hidden */
    ref?: any;
    /** @hidden */
    style?: any;
    /**
     * @event
     * Triggered when the component is destroyed.
     * @param args - The event argument object.
     * @param inst - The component instance.
     */
    onDestroy?(args: any, inst: any): void;
    /**
     * @event
     * Triggered when the component is initialized.
     * @param args - The event argument object.
     * @param inst - The component instance.
     */
    onInit?(args: any, inst: any): void;
}
export interface IBaseEvent<T> {
    inst?: T;
    type?: string;
}
/** @hidden */
export declare class BaseComponent<PropType extends IBaseProps, StateType> extends Base<PropType, StateType> {
    /** @hidden */
    static defaults: any;
    protected static _name: string;
    /** @hidden */
    readonly nativeElement: HTMLElement;
    /** @hidden */
    s: PropType;
    /** @hidden */
    state: StateType;
    /** @hidden */
    _className: string;
    /** @hidden */
    _hb: string;
    /**
     * Used to identify if it's a mobiscroll component
     * @hidden
     */
    _mbsc: boolean;
    /** @hidden */
    _rtl: string;
    /** @hidden */
    _theme: string;
    /** @hidden */
    _touchUi: boolean;
    /** @hidden */
    _v: any;
    /**
     * Needed for preact for dynamic updates, because props is immutable.
     * Merge this into the computed settings as well.
     */
    protected _prevS: PropType;
    protected _respProps?: PropType;
    protected _zone: any;
    protected _optChange?: number;
    protected _uid: number;
    /** @hidden */
    destroy(): void;
    /** @hidden */
    _hook<T>(name: string, args: T): any;
    /** @hidden */
    _proxyHook: (args: any) => any;
    protected __init(): void;
    protected __destroy(): void;
    protected _render(s: PropType, state: StateType): void;
    protected _willUpdate(): void;
    private _resp;
    private _merge;
}
