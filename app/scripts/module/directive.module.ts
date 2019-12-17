import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BefforeDirective} from './../directive/core/beffore.directive';
@NgModule({
    imports:[CommonModule,BrowserModule,FormsModule],
    declarations: [BefforeDirective],//声明模块
    exports:[BefforeDirective]    //加载模块出口文件
})
export class directiveModule{

}