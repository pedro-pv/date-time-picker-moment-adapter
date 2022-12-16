/**
 * moment-date-time.module
 */
import { NgModule } from '@angular/core';
import { MomentDateTimeAdapter, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS } from './moment-date-time-adapter.class';
import { OWL_MOMENT_DATE_TIME_FORMATS } from './moment-date-time-format.class';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE } from '@danielmoncada/angular-datetime-picker/dist/picker';
import { OWL_DATE_TIME_FORMATS } from '@danielmoncada/angular-datetime-picker/dist/picker';
import * as i0 from "@angular/core";
export class MomentDateTimeModule {
}
MomentDateTimeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MomentDateTimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MomentDateTimeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MomentDateTimeModule });
MomentDateTimeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MomentDateTimeModule, providers: [
        {
            provide: DateTimeAdapter,
            useClass: MomentDateTimeAdapter,
            deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
        },
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MomentDateTimeModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        {
                            provide: DateTimeAdapter,
                            useClass: MomentDateTimeAdapter,
                            deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
                        },
                    ],
                }]
        }] });
export class OwlMomentDateTimeModule {
}
OwlMomentDateTimeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: OwlMomentDateTimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OwlMomentDateTimeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: OwlMomentDateTimeModule, imports: [MomentDateTimeModule] });
OwlMomentDateTimeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: OwlMomentDateTimeModule, providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS }], imports: [[MomentDateTimeModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: OwlMomentDateTimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MomentDateTimeModule],
                    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGUtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNrZXIvc3JjL2xpYi9tb21lbnQtYWRhcHRlci9tb21lbnQtZGF0ZS10aW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9DQUFvQyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOztBQVczRixNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO21IQUFwQixvQkFBb0I7bUhBQXBCLG9CQUFvQixhQVJsQjtRQUNQO1lBQ0ksT0FBTyxFQUFFLGVBQWU7WUFDeEIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixJQUFJLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQ0FBb0MsQ0FBQztTQUNyRTtLQUNKOzRGQUVRLG9CQUFvQjtrQkFUaEMsUUFBUTttQkFBQztvQkFDTixTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7NEJBQy9CLElBQUksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9DQUFvQyxDQUFDO3lCQUNyRTtxQkFDSjtpQkFDSjs7QUFRRCxNQUFNLE9BQU8sdUJBQXVCOztxSEFBdkIsdUJBQXVCO3NIQUF2Qix1QkFBdUIsWUFQdkIsb0JBQW9CO3NIQU9wQix1QkFBdUIsYUFGckIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQyxZQUQ1RSxDQUFDLG9CQUFvQixDQUFDOzRGQUd0Qix1QkFBdUI7a0JBSm5DLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBQyxDQUFDO2lCQUN4RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogbW9tZW50LWRhdGUtdGltZS5tb2R1bGVcbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9tZW50RGF0ZVRpbWVBZGFwdGVyLCBPV0xfTU9NRU5UX0RBVEVfVElNRV9BREFQVEVSX09QVElPTlMgfSBmcm9tICcuL21vbWVudC1kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XG5pbXBvcnQgeyBPV0xfTU9NRU5UX0RBVEVfVElNRV9GT1JNQVRTIH0gZnJvbSAnLi9tb21lbnQtZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIsIE9XTF9EQVRFX1RJTUVfTE9DQUxFIH0gZnJvbSAnQGRhbmllbG1vbmNhZGEvYW5ndWxhci1kYXRldGltZS1waWNrZXIvZGlzdC9waWNrZXInO1xuaW1wb3J0IHsgT1dMX0RBVEVfVElNRV9GT1JNQVRTIH0gZnJvbSAnQGRhbmllbG1vbmNhZGEvYW5ndWxhci1kYXRldGltZS1waWNrZXIvZGlzdC9waWNrZXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBEYXRlVGltZUFkYXB0ZXIsXG4gICAgICAgICAgICB1c2VDbGFzczogTW9tZW50RGF0ZVRpbWVBZGFwdGVyLFxuICAgICAgICAgICAgZGVwczogW09XTF9EQVRFX1RJTUVfTE9DQUxFLCBPV0xfTU9NRU5UX0RBVEVfVElNRV9BREFQVEVSX09QVElPTlNdXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTW9tZW50RGF0ZVRpbWVNb2R1bGUge1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtNb21lbnREYXRlVGltZU1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE9XTF9EQVRFX1RJTUVfRk9STUFUUywgdXNlVmFsdWU6IE9XTF9NT01FTlRfREFURV9USU1FX0ZPUk1BVFN9XSxcbn0pXG5leHBvcnQgY2xhc3MgT3dsTW9tZW50RGF0ZVRpbWVNb2R1bGUge1xufVxuIl19