import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

import { getFirestore } from 'firebase/firestore';
import { Firestore, collectionData,getDocs,QuerySnapshot,doc, setDoc, deleteDoc, updateDoc, addDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { onSnapshot, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { collection } from '@firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-modalpapers',
  templateUrl: './modalpapers.page.html',
  styleUrls: ['./modalpapers.page.scss'],
})
export class ModalpapersPage implements OnInit {
  retrievedData:any =[];
  constructor(private router: Router,private firestore: Firestore,private photoViewer: PhotoViewer) {
    this.fetchDataFromSubcollection();
  }

  ngOnInit() {
  }

  async fetchDataFromSubcollection() {
    const collectionName = 'BISEH';
    const parentDocumentId = 'modalpaper';
    const subcollectionName = 'modalpaper';
  
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

  callname(da: any) {
    console.log("working");
    const imagePath = da.notilink;
    try {
      this.photoViewer.show(imagePath, da.data, { share: true });
    } catch (error) {
      console.error('Error loading image:', error);
    }
  }

}
