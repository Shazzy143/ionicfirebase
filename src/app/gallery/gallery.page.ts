import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
import { Router, NavigationExtras } from '@angular/router';

import { getFirestore } from 'firebase/firestore';
import { Firestore, collectionData,getDocs,QuerySnapshot,doc, setDoc, deleteDoc, updateDoc, addDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { onSnapshot, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { collection } from '@firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  setimage:any = "../../assets/images/office_office_Prostock-Studio.jpg";
  retrievedData:any =[];
  constructor(private photoViewer: PhotoViewer,private router: Router,private firestore: Firestore) {
    this.fetchDataFromSubcollection();
  }

  ngOnInit() {
    
  }

  async fetchDataFromSubcollection() {
    const collectionName = 'BISEH';
    const parentDocumentId = 'gallery';
    const subcollectionName = 'gallery';
  
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

  getimage(da:any){
    this.setimage = da;
  }

  previewimg(){
    try {
      this.photoViewer.show(this.setimage, 'Image', { share: true });
    } catch (error) {
      console.error('Error loading image:', error);
    }
  }
}
