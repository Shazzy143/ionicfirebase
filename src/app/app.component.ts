import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

import { getFirestore } from 'firebase/firestore';
import { Firestore, collectionData,getDocs,QuerySnapshot,doc, setDoc, deleteDoc, updateDoc, addDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { onSnapshot, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { collection } from '@firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home' },
    { title: 'Examination Results', url: '/examination-results', icon: 'documents' },
    { title: 'Roll number', url: '/rollno', icon: 'id-card' },
    { title: 'Date Sheet', url: '/datasheet', icon: 'document' },
    { title: 'Notification', url: '/notifications', icon: 'notifications' },
    { title: 'Download', url: '/downloads', icon: 'download' },
    { title: 'Fee/Due', url: '/fess', icon: 'wallet' },
    { title: 'Gallery', url: '/gallery', icon: 'images' },
    { title: 'Result On SMS', url: '/resultonsms', icon: 'chatbox' },
    { title: 'Model Papers', url: '/modalpapers', icon: 'newspaper' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isModalOpen = false;
  retrievedData:any;
  constructor(private modalController: ModalController,private router: Router,private navCtrl: NavController) {
    
    setTimeout(() => {
      this.setOpen(true);
      this.fetchDataFromSubcollection();
    }, 4500);
  }

  async fetchDataFromSubcollection() {
    const collectionName = 'BISEH';
    const parentDocumentId = 'notification';
    const subcollectionName = 'notification';
  
    const firestore = getFirestore();
    const subcollectionRef = collection(firestore, collectionName, parentDocumentId, subcollectionName);
  
    try {
      // Fetch data from the subcollection
      const subcollectionQuery = query(subcollectionRef);
      const querySnapshot = await getDocs(subcollectionQuery);
  
      this.retrievedData = [];
      querySnapshot.forEach((doc) => {
        this.retrievedData.push({ id: doc.id, ...doc.data() });
      });
  
      console.log('Retrieved Data:', this.retrievedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  navigateToPage(url: string) {
    // this.navCtrl.navigateForward(url);
    this.router.navigate([url]);
  }
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  closemodal(da: any) {
    this.isModalOpen = false;
    setTimeout(() => {
      this.subnotification(da);
    }, 100);
  }
  subnotification(da: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(da),
        image: 'value1',
      },
    };
    this.router.navigate(['notifiactionimage'], navigationExtras);
  }

}
