import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { AdminLoginComponent } from './Admin/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './Client/Client.service';
import { FormsModule } from '@angular/forms'
import { ClientRegisterComponent } from './Client/register/Client.register.component';
import { ClientLoginComponent } from './Client/login/login.component';
import { ClientAddComponent } from './Client/add/client.add.component';
import { ClientListComponent } from './Client/List/client.list.component';
import { HomeComponent } from './Admin/Home/home.component';
import { from } from 'rxjs';
import { TraderService } from './Trader/Trader.service';
import { TraderLoginComponent } from './Trader/login/login.component';
import { TraderRegisterComponent } from './Trader/register/trader.register.component';
import { TraderListComponent } from './Trader/List/trader.list.component';
import { TraderAddComponent } from './Trader/add/trader.add.component';
import { CroptypeListComponent } from './CropType/list/croptype.list.component';
import { CropTypeAddComponent } from './CropType/add/croptype.add.component';
import { CroptypeService } from './CropType/croptype.service';
import { CropDetailsService } from './CropDetails/cropdetail.service';
import { CropDetailListComponent } from './CropDetails/list/cropdetail.list.component';
import { CropDetailAddComponent } from './CropDetails/add/cropdetail.add.component';
import { FertiliserdetailService } from './FertiliserDetails/Fertiliserdetail.service';
import { FertDetailListComponent } from './FertiliserDetails/list/fertiliserdetail.list.component';
import { FertDetailAddComponent } from './FertiliserDetails/add/fertiliserdetail.add.component';
import { seedDetailsService } from './SeedDetails/seedDetails.service';
import { seedDetailsAddComponent } from './SeedDetails/add/seedDetails.add.component';
import { seedDetailsListComponent } from './SeedDetails/list/seedDetails.list.component';
import { ServicesService } from './Services/services.service';
import { ServiceAddComponent } from './Services/add/services.add.component';
import { ServiceListComponent } from './Services/list/services.list.component';
import { TradingtypeService } from './TradingType/Tradingtype.service';
import { TradingtypeListComponent } from './TradingType/list/Tradingtype.list.component';
import { TradingTypeAddComponent } from './TradingType/add/Tradingtype.add.component';
import { ServiceproviderService } from './ServiceProvider/Serviceprovider.service';
import { ServicePrAddComponent } from './ServiceProvider/add/Serviceprovider.add.component';
import { ServicePrListComponent } from './ServiceProvider/list/Serviceprovider.list.component';
import { TradingService } from './Trading/Trading.service';
import { TradingAddComponent } from './Trading/add/Trading.add.component';
import { TradingListComponent } from './Trading/list/Trading.list.component';


const routes: Route[] = [
  { path: 'Admin-login', component: AdminLoginComponent },
  { path: 'Client-login', component: ClientLoginComponent },
  { path: 'Client-register', component: ClientRegisterComponent },
  { path: 'Client-add', component: ClientAddComponent },
  { path: 'Client-List', component: ClientListComponent },
  { path: 'adminHome', component: HomeComponent },
  { path: 'Trader-login', component: TraderLoginComponent },
  { path: 'Trader-register', component: TraderRegisterComponent },
  { path: 'Trader-add', component: TraderAddComponent },
  { path: 'Trader-list', component: TraderListComponent },
  { path: 'croptype-add', component: CropTypeAddComponent },
  { path: 'croptype-list', component: CroptypeListComponent },
  { path: 'cropdetails-list', component: CropDetailListComponent },
  { path: 'cropdetails-add', component: CropDetailAddComponent },
  { path: 'Fert-add',component:FertDetailAddComponent},
  { path: 'Fert-List', component: FertDetailListComponent },
  { path: 'seed-add',component:seedDetailsAddComponent},
  { path: 'seed-list',component:seedDetailsListComponent},
  { path: 'services-list',component:ServiceListComponent},
  { path: 'services-add',component:ServiceAddComponent} ,
  { path: 'tradingtype-add',component:TradingTypeAddComponent},
  { path: 'tradingtype-list',component:TradingtypeListComponent},
  { path: 'servicepr-list',component:ServicePrListComponent},
  { path: 'servicepr-add',component:ServicePrAddComponent},
  { path: 'trading-add',component:TradingAddComponent},
  { path: 'trading-list',component:TradingListComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ClientRegisterComponent,
    ClientLoginComponent,
    ClientAddComponent,
    ClientListComponent,
    HomeComponent,
    TraderLoginComponent,
    TraderRegisterComponent,
    TraderListComponent,
    TraderAddComponent,
    CroptypeListComponent,
    CropTypeAddComponent,
    CropDetailAddComponent,
    CropDetailListComponent,
    FertDetailListComponent,
    FertDetailAddComponent,
    seedDetailsAddComponent,
    seedDetailsListComponent,
    ServiceAddComponent,
    ServiceListComponent,
    TradingTypeAddComponent,
    TradingtypeListComponent,
    ServicePrAddComponent,
    ServicePrListComponent,
    TradingListComponent,
    TradingAddComponent
  
  ],
  imports: [
    
BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [
    TraderService,
    ClientService,
    CroptypeService,
    CropDetailsService,
    FertiliserdetailService,
    seedDetailsService,
    ServicesService,
    TradingtypeService,
    ServiceproviderService,
    TradingService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
