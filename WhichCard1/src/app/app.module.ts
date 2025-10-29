import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SelectionComponent } from "./selection/selection.component";
import { AppRoudingModule } from "./app-routing.module";
import { BrowseCardsComponent } from "./browse-cards/browse-cards.component";





@NgModule({
  declarations: [AppComponent, HomeComponent, SelectionComponent,BrowseCardsComponent],
  imports: [BrowserModule,AppRoudingModule],
  providers: [],
})
export class AppModule {}