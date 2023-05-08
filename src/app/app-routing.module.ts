import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadCarComponent} from "./upload-car/upload-car.component";
import {SaveCarDetailsComponent} from "./save-car-details/save-car-details.component";

const routes: Routes = [
  {path: 'upload-car', component: UploadCarComponent},
  {path: 'save-car-details', component: SaveCarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
