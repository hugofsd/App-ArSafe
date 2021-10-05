import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: ' ',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },



  // {
  //   path: 'home',
  //   loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  // },

  // {
  //   path: 'clima',
  //   loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  // },

  // {
  //   path: 'ar',
  //   loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  // },

  // {
  //   path: 'clima',
  //   loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
