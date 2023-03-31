import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
	exports: [
		MatToolbarModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule
	]
})

export class MaterialsModule{

}