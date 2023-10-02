import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Firestore, collectionData,getDocs,QuerySnapshot,doc, setDoc, deleteDoc, updateDoc, addDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { collection, query, where } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-examination-results',
  templateUrl: './examination-results.page.html',
  styleUrls: ['./examination-results.page.scss'],
})

export class ExaminationResultsPage implements OnInit {
  resultclass:any = "SSCI";
  resultshow:any = []
  group:any="HUMANITIES";
  rollno:any;
  itempagedata:any;
  result:any;
  groupsdata:any = ["HUMANITIES",
    "COMMERCE",
   "HOME ECONOMICES",
   "PRE-MEDICAL",
    "PRE-ENGINEERING",
    "SCIENCE GENERAL"]

  constructor(private http:HttpClient,private firestore: Firestore,private router: Router,private actionSheetCtrl: ActionSheetController,private toastController: ToastController) { }

  ngOnInit() {
    this.fetchExcelURL();
  }

  // async fetchExcelURL() {
  //   this.resultshow = [];
  //   console.log('examinationresults'+this.resultclass+'/examinationresults'+this.resultclass);
  //   const storage = getStorage();
  //   const excelRef = ref(storage, 'examinationresults'+this.resultclass+'/examinationresults'+this.resultclass);
  //   try {
  //       const excelURL = await getDownloadURL(excelRef);
  //       console.log(excelURL);
  //       const response = await fetch(excelURL);
  //       const blob = await response.blob();
  //       const reader = new FileReader();
  //       reader.onload = async (event:any) => {
  //         const data = new Uint8Array(event.target.result);
  //         const workbook = XLSX.read(data, { type: 'array' });
  //         const firstSheetName = workbook.SheetNames[0];
  //         const worksheet = workbook.Sheets[firstSheetName];
  //         const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  //         console.log(excelData);
  //         this.resultshow = excelData;
  //       };
  //       reader.readAsArrayBuffer(blob);
  //   } catch (error) {
  //       console.error('Error fetching or reading Excel file:', error);
  //   }
  // }
  async fetchExcelURL() {
    const storage = getStorage();

    // Reference to the Excel file in Firebase Storage
    const storageRef = ref(storage, 'examinationresultsHSCI/examinationresultsHSCI');

    // Get the download URL of the Excel file
    getDownloadURL(storageRef)
      .then((url) => {
        // Fetch the Excel file
        console.log(url);
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            // Parse the Excel file into an array
            const reader = new FileReader();
            reader.onload = (e: any) => {
              const data = e.target.result;
              const workbook = XLSX.read(data, { type: 'binary' });
              const sheetName = workbook.SheetNames[0]; // Assuming you're reading the first sheet
              const worksheet = workbook.Sheets[sheetName];
              const excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
              console.log('Excel Data:', excelData);

              // Now 'excelData' contains the array of data from the Excel file
              // You can use it as needed in your app
            };
            reader.readAsBinaryString(blob);
          })
          .catch((error) => {
            // Handle errors while fetching the Excel file
            console.error('Error fetching Excel file:', error);
          });
      })
      .catch((error) => {
        // Handle errors while getting the download URL
        console.error('Error getting download URL:', error);
      });
  }


  callname(){
    this.router.navigate(['/showresultpage']);
  }

  
  sendpage(){
    console.log(this.resultshow.length);
    if(this.group != "" && this.group != null && this.group != undefined && 
       this.rollno != "" && this.rollno != null && this.rollno != undefined){
      for(let i=0; i<this.resultshow.length; i++){
        if(this.resultshow[i][1] == this.group.toUpperCase() && this.resultshow[i][0] == this.rollno){
          this.itempagedata = this.resultshow[i]
        }
      }
      console.log(this.itempagedata);
      if(this.itempagedata){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify(this.itempagedata),
            pagetype: "result"
          }
        };
        this.router.navigate(['/resultcard'], navigationExtras);
      }else{
        this.presentToast("Data not found!");
      }
    }else{
      this.presentToast("Please fill the fields");
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      // header: 'Example header',
      // subHeader: 'Example subheader',
      buttons: [
        {
          text: 'SSC-I Annual',
          data: {
            action: 'SSCI',
          },
        },
        {
          text: 'SSC-II Annual',
          data: {
            action: 'SSCII',
          },
        },
        {
          text: 'HSC-I Annual',
          data: {
            action: 'HSCI',
          },
        },
        {
          text: 'HSC-II Annual',
          data: {
            action: 'HSCII',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    const resultsec = JSON.stringify(result, null, 2);
    this.result = JSON.parse(resultsec);
    console.log(this.result.data.action);
    this.resultclass = this.result.data.action;
    this.fetchExcelURL();
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
