/**
 * moment-date-time-adapter.class
 */
import { InjectionToken } from '@angular/core';
import { Moment } from 'moment';
import { DateTimeAdapter } from 'ng-pick-datetime/dist/picker';
import * as i0 from "@angular/core";
/** Configurable options for {@see MomentDateAdapter}. */
export interface OwlMomentDateTimeAdapterOptions {
    /**
     * Turns the use of utc dates on or off.
     * Changing this will change how the DateTimePicker output value.
     * {@default false}
     */
    useUtc: boolean;
    /**
     * Turns the use of strict string parsing in moment.
     * Changing this will change how the DateTimePicker interprets input.
     * {@default false}
     */
    parseStrict: boolean;
}
/** InjectionToken for moment date adapter to configure options. */
export declare const OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS: InjectionToken<OwlMomentDateTimeAdapterOptions>;
export declare function OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY(): OwlMomentDateTimeAdapterOptions;
export declare class MomentDateTimeAdapter extends DateTimeAdapter<Moment> {
    private owlDateTimeLocale;
    private options?;
    private _localeData;
    constructor(owlDateTimeLocale: string, options?: OwlMomentDateTimeAdapterOptions);
    setLocale(locale: string): void;
    getYear(date: Moment): number;
    getMonth(date: Moment): number;
    getDay(date: Moment): number;
    getDate(date: Moment): number;
    getHours(date: Moment): number;
    getMinutes(date: Moment): number;
    getSeconds(date: Moment): number;
    getTime(date: Moment): number;
    getNumDaysInMonth(date: Moment): number;
    differenceInCalendarDays(dateLeft: Moment, dateRight: Moment): number;
    getYearName(date: Moment): string;
    getMonthNames(style: 'long' | 'short' | 'narrow'): string[];
    getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[];
    getDateNames(): string[];
    toIso8601(date: Moment): string;
    isEqual(dateLeft: Moment, dateRight: Moment): boolean;
    isSameDay(dateLeft: Moment, dateRight: Moment): boolean;
    isValid(date: Moment): boolean;
    invalid(): Moment;
    isDateInstance(obj: any): boolean;
    addCalendarYears(date: Moment, amount: number): Moment;
    addCalendarMonths(date: Moment, amount: number): Moment;
    addCalendarDays(date: Moment, amount: number): Moment;
    setHours(date: Moment, amount: number): Moment;
    setMinutes(date: Moment, amount: number): Moment;
    setSeconds(date: Moment, amount: number): Moment;
    createDate(year: number, month: number, date: number): Moment;
    clone(date: Moment): Moment;
    now(): Moment;
    format(date: Moment, displayFormat: any): string;
    parse(value: any, parseFormat: any): Moment | null;
    get parseStrict(): boolean;
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    deserialize(value: any): Moment | null;
    /** Creates a Moment instance while respecting the current UTC settings. */
    private createMoment;
    static ɵfac: i0.ɵɵFactoryDeclaration<MomentDateTimeAdapter, [{ optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MomentDateTimeAdapter>;
}
