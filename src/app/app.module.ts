import { BoxComponent } from './../components/box/box';
import { MinhaPaginaPage } from './../pages/minha-pagina/minha-pagina';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [ //Components, pipes, diretivas declaram-se aqui
		BoxComponent, //component, portanto declarado aqui apenas
		MyApp,
		HomePage,
		ListPage,
		MinhaPaginaPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp), //Componente inicial (root component)
	],
	bootstrap: [IonicApp],
	entryComponents: [ //Páginas declaram-se aqui
		MyApp,
		HomePage,
		ListPage,
		MinhaPaginaPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
