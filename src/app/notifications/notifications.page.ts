import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { getFirestore } from 'firebase/firestore';
import { Firestore, collectionData,getDocs,QuerySnapshot,doc, setDoc, deleteDoc, updateDoc, addDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { onSnapshot, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { collection } from '@firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  retrievedData:any =[];
  constructor(private router: Router,private firestore: Firestore) {
    this.fetchDataFromSubcollection();
  }

  ngOnInit() {
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

  closemodal(da: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(da),
        image: 'value1',
      },
    };
    this.router.navigate(['notifiactionimage'], navigationExtras);
  }


}
