import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from "@angular/material/card";

@NgModule({
	exports: [
		MatToolbarModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		MatCardModule
	]
})

export class MaterialsModule{

}