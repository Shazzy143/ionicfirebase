import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'newspopup',
    loadChildren: () => import('./newspopup/newspopup.module').then( m => m.NewspopupPageModule)
  },
  {
    path: 'notifiactionimage',
    loadChildren: () => import('./notifiactionimage/notifiactionimage.module').then( m => m.NotifiactionimagePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'examination-results',
    loadChildren: () => import('./examination-results/examination-results.module').then( m => m.ExaminationResultsPageModule)
  },
  {
    path: 'showresultpage',
    loadChildren: () => import('./showresultpage/showresultpage.module').then( m => m.ShowresultpagePageModule)
  },
  {
    path: 'rollno',
    loadChildren: () => import('./rollno/rollno.module').then( m => m.RollnoPageModule)
  },
  {
    path: 'showrolnopage',
    loadChildren: () => import('./showrolnopage/showrolnopage.module').then( m => m.ShowrolnopagePageModule)
  },
  {
    path: 'datasheet',
    loadChildren: () => import('./datasheet/datasheet.module').then( m => m.DatasheetPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  {
    path: 'fess',
    loadChildren: () => import('./fess/fess.module').then( m => m.FessPageModule)
  },
  {
    path: 'downloadimage',
    loadChildren: () => import('./downloadimage/downloadimage.module').then( m => m.DownloadimagePageModule)
  },
  {
    path: 'resultcard',
    loadChildren: () => import('./resultcard/resultcard.module').then( m => m.ResultcardPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'resultonsms',
    loadChildren: () => import('./resultonsms/resultonsms.module').then( m => m.ResultonsmsPageModule)
  },
  {
    path: 'modalpapers',
    loadChildren: () => import('./modalpapers/modalpapers.module').then( m => m.ModalpapersPageModule)
  },
  {
    path: 'webpage',
    loadChildren: () => import('./webpage/webpage.module').then( m => m.WebpagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
