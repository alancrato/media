import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { NavbarComponent } from './navbar/navbar';

@NgModule({
	declarations: [
		FooterComponent,
    	NavbarComponent
	],
	imports: [],
	exports: [
		FooterComponent,
    	NavbarComponent
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ComponentsModule {}
