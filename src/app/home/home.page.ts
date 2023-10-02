import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { collection } from '@firebase/firestore';
import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { Firestore, collectionData,getDocs,QuerySnapshot,doc, setDoc, deleteDoc, updateDoc, addDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { onSnapshot, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isModalOpen = false;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 2000, 
    }
   };
   slideOptsOne1 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 3000, 
    }
   };
   retrievedData:any;
   retrievedData1:any;
  constructor(
    private router: Router,
    private modalController: ModalController,
    private navCtrl: NavController,
    private firestore: Firestore
  ) {
    
  }

  ngOnInit() {
    this.fetchDataFromSubcollection();
    this.fetchDataFromSubcollection1();
  }

  async fetchDataFromSubcollection() {
    const collectionName = 'BISEH';
    const parentDocumentId = 'slider1';
    const subcollectionName = 'slider1';
  
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

  async fetchDataFromSubcollection1() {
    const collectionName = 'BISEH';
    const parentDocumentId = 'slider2';
    const subcollectionName = 'slider2';
  
    const firestore = getFirestore();
    const subcollectionRef = collection(firestore, collectionName, parentDocumentId, subcollectionName);
  
    try {
      // Fetch data from the subcollection
      const subcollectionQuery = query(subcollectionRef);
      const querySnapshot = await getDocs(subcollectionQuery);
  
      this.retrievedData1 = [];
      querySnapshot.forEach((doc) => {
        this.retrievedData.push({ id: doc.id, ...doc.data() });
      });
  
      console.log('Retrieved Data:', this.retrievedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  intropage(){
    this.router.navigate(['/intro']);
  }

  aboutpage(){
    this.router.navigate(['/aboutus']);
  }

  contactuspage(){
    this.router.navigate(['/contactus']);
  }

  examsresult(){
    this.router.navigate(['/examination-results']);
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

  bollnumberslip(){
    this.router.navigate(['/rollno']);
  }

  datasheet(){
    this.router.navigate(['/datasheet']);
  }

  notification1(){
    this.router.navigate(['/notifications']);
  }

  downloads(){
    this.router.navigate(['/downloads']);
  }

  fees(){
    this.router.navigate(['/fess']);
  }

  subnotification(da: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: da,
        image: 'value1',
      },
    };
    this.router.navigate(['notifiactionimage'], navigationExtras);
  }
}