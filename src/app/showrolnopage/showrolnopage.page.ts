import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Firestore, collectionData,getDocs,QuerySnapshot,doc, setDoc, deleteDoc, updateDoc, addDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { collection, query, where } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-showrolnopage',
  templateUrl: './showrolnopage.page.html',
  styleUrls: ['./showrolnopage.page.scss'],
})
export class ShowrolnopagePage implements OnInit {
  data:any;
  rollno:any;
  maindata:any = [];
  subdata:any = [];
  sendingdata:any = [];  
  constructor(private firestore: Firestore,private router: Router,private activatedRoute: ActivatedRoute,private toastController: ToastController) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params['data']) {
        this.data = params['data'];
        console.log(this.data);
        this.fetchExcelURL();
      }
    });
  }


  async fetchExcelURL() {
    this.sendingdata = [];
    console.log('rollno'+this.data+'/rollno'+this.data);
    const storage = getStorage();
      const excelRef = ref(storage, 'rollno'+this.data+'/rollno'+this.data);
      try {
        const excelURL = await getDownloadURL(excelRef);
        console.log(excelURL);
        const response = await fetch(excelURL);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = async (event:any) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            console.log(excelData);
            this.sendingdata = excelData;
            // this.pushcode();
        };
        reader.readAsArrayBuffer(blob);
      } catch (error) {
        console.error('Error fetching or reading Excel file:', error);
      }
  }


  pushcode(){
    console.log(this.maindata);
    console.log(this.subdata);
    console.log(this.sendingdata[0][0]);
    if(this.rollno != "" && this.rollno != null && this.rollno != undefined){
        // for(let i=0; i<this.maindata.length; i++){
        //     if(this.maindata[i].seatno == this.rollno){
        //         this.sendingdata = this.maindata[i];
        //         console.log(this.sendingdata);
        //         const desiredArray = this.subdata.find(item => item.code === this.sendingdata.centre); 
        //         this.sendingdata.examcenter = desiredArray;
        //     }
        // }
        for(let i=0;i<this.sendingdata.length;i++){
          if(this.sendingdata[i][0] == this.rollno){
            this.sendingdata = this.sendingdata[i]; 
          }
        }
        console.log(this.sendingdata)
        let navigationExtras: NavigationExtras = {
          queryParams: {
              data: JSON.stringify(this.sendingdata),
              pagetype: "result"
          }
        };
        this.router.navigate(['/resultcard'],navigationExtras);
    }else{
        this.presentToast("Please fill the fields");
    }
  }

  async presentToast(da) {
    const toast = await this.toastController.create({
      message: da,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
  
}
