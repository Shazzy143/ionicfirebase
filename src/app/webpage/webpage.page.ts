import { Component, OnInit } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { Firestore, collectionData,getDocs,QuerySnapshot,doc, setDoc, deleteDoc, updateDoc, addDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { onSnapshot, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { collection } from '@firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.page.html',
  styleUrls: ['./webpage.page.scss'],
})
export class WebpagePage implements OnInit {
  excelData: any[] = [];
  notidata:any;
  sheet:any;
  sheet1:any;
  modal1:any;
  modal:any;
  constructor(private firestore: Firestore) { }

  ngOnInit() {
  }

  async createAndFetchData(event: any) {
    const file = event.target.files[0];
    const excelURL = await this.uploadnoti(file);
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
    const newData = {
      data: this.notidata,
      notilink: excelURL,
      currentDate:formattedDate
    };
    const collectionName = 'BISEH';
    const parentDocumentId = 'notification';
    const subcollectionName = 'notification'; // Remove "this." as it seems you want to use the actual string "randomKey"
  
    const firestore = getFirestore();
    const subcollectionRef = collection(firestore, collectionName, parentDocumentId, subcollectionName);
  
    try {
      // Add data to the subcollection
      const newDocRef = await addDoc(subcollectionRef,newData);
  
      // Fetch data from the subcollection
      const subcollectionQuery = query(subcollectionRef);
      const unsubscribe = onSnapshot(subcollectionQuery, (querySnapshot) => {
        const retrievedData = [];
        querySnapshot.forEach((doc) => {
          retrievedData.push({ id: doc.id, ...doc.data() }); // Include document ID in the retrieved data
        });
        console.log('Retrieved Data:', retrievedData);
      });
  
      // Don't forget to unsubscribe when you're done listening for changes
      // unsubscribe();
  
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }

  async createAndFetchDatagallery(event: any) {
    const file = event.target.files[0];
    const excelURL = await this.uploadgallery(file);
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
    const newData = {
      gallerylink: excelURL,
      currentDate:formattedDate
    };
    const collectionName = 'BISEH';
    const parentDocumentId = 'gallery';
    const subcollectionName = 'gallery'; // Remove "this." as it seems you want to use the actual string "randomKey"
  
    const firestore = getFirestore();
    const subcollectionRef = collection(firestore, collectionName, parentDocumentId, subcollectionName);
  
    try {
      // Add data to the subcollection
      const newDocRef = await addDoc(subcollectionRef,newData);
  
      // Fetch data from the subcollection
      const subcollectionQuery = query(subcollectionRef);
      const unsubscribe = onSnapshot(subcollectionQuery, (querySnapshot) => {
        const retrievedData = [];
        querySnapshot.forEach((doc) => {
          retrievedData.push({ id: doc.id, ...doc.data() }); // Include document ID in the retrieved data
        });
        console.log('Retrieved Data:', retrievedData);
      });
  
      // Don't forget to unsubscribe when you're done listening for changes
      // unsubscribe();
  
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }
  
  async createAndFetchDataslider(event: any) {
    const file = event.target.files[0];
    const excelURL = await this.uploadnotislider(file);
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
    const newData = {
      sliderlink: excelURL,
      currentDate:formattedDate
    };
    const collectionName = 'BISEH';
    const parentDocumentId = 'slider1';
    const subcollectionName = 'slider1'; // Remove "this." as it seems you want to use the actual string "randomKey"
  
    const firestore = getFirestore();
    const subcollectionRef = collection(firestore, collectionName, parentDocumentId, subcollectionName);
  
    try {
      // Add data to the subcollection
      const newDocRef = await addDoc(subcollectionRef,newData);
  
      // Fetch data from the subcollection
      const subcollectionQuery = query(subcollectionRef);
      const unsubscribe = onSnapshot(subcollectionQuery, (querySnapshot) => {
        const retrievedData = [];
        querySnapshot.forEach((doc) => {
          retrievedData.push({ id: doc.id, ...doc.data() }); // Include document ID in the retrieved data
        });
        console.log('Retrieved Data:', retrievedData);
      });
  
      // Don't forget to unsubscribe when you're done listening for changes
      // unsubscribe();
  
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }


  async createAndFetchDataslider2(event: any) {
    const file = event.target.files[0];
    const excelURL = await this.uploadnotislider2(file);
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
    const newData = {
      sliderlink: excelURL,
      currentDate:formattedDate
    };
    const collectionName = 'BISEH';
    const parentDocumentId = 'slider2';
    const subcollectionName = 'slider2'; // Remove "this." as it seems you want to use the actual string "randomKey"
  
    const firestore = getFirestore();
    const subcollectionRef = collection(firestore, collectionName, parentDocumentId, subcollectionName);
  
    try {
      // Add data to the subcollection
      const newDocRef = await addDoc(subcollectionRef,newData);
  
      // Fetch data from the subcollection
      const subcollectionQuery = query(subcollectionRef);
      const unsubscribe = onSnapshot(subcollectionQuery, (querySnapshot) => {
        const retrievedData = [];
        querySnapshot.forEach((doc) => {
          retrievedData.push({ id: doc.id, ...doc.data() }); // Include document ID in the retrieved data
        });
        console.log('Retrieved Data:', retrievedData);
      });
  
      // Don't forget to unsubscribe when you're done listening for changes
      // unsubscribe();
  
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }
  
  async updateData(event: any) {
  const file = event.target.files[0];
  const excelURL = await this.uploadnoti(file);
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);

  const collectionName = 'BISEH';
  const parentDocumentId = 'datasheet';
  const subcollectionName = 'datasheet';

  const firestore = getFirestore();
  const subcollectionRef = collection(firestore, collectionName, parentDocumentId, subcollectionName);

  try {
    // Query for a document in the subcollection that you want to update
    const querySnapshot = await getDocs(subcollectionRef);
    querySnapshot.forEach(async (doc) => {
      // Here, you can specify the conditions to identify the document you want to update.
      // For example, if you want to update a document with a specific name, you can do:
      if (doc.data().name === this.sheet) {
        const docRef = doc.ref;
        // Update the fields you want to change
        await updateDoc(docRef, {
          data:this.sheet1,
          notilink: excelURL,
          currentDate: formattedDate,
        });
      }
    });

    console.log('Data updated successfully.');

  } catch (error) {
    console.error('Error updating data:', error);
  }
}


async updateData1(event: any) {
  const file = event.target.files[0];
  const excelURL = await this.uploadmodalpaper(file);
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);

  const collectionName = 'BISEH';
  const parentDocumentId = 'modalpaper';
  const subcollectionName = 'modalpaper';

  const firestore = getFirestore();
  const subcollectionRef = collection(firestore, collectionName, parentDocumentId, subcollectionName);

  try {
    // Query for a document in the subcollection that you want to update
    const querySnapshot = await getDocs(subcollectionRef);
    querySnapshot.forEach(async (doc) => {
      // Here, you can specify the conditions to identify the document you want to update.
      // For example, if you want to update a document with a specific name, you can do:
      if (doc.data().name === this.modal) {
        const docRef = doc.ref;
        // Update the fields you want to change
        await updateDoc(docRef, {
          data:this.modal1,
          notilink: excelURL,
          currentDate: formattedDate,
        });
      }
    });

    console.log('Data updated successfully.');

  } catch (error) {
    console.error('Error updating data:', error);
  }
}


  async sliderone(event: any){
    const file = event.target.files[0];
    const firestore = getFirestore();
    const storage = getStorage();
    const uniqueFileName = `slider1/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, uniqueFileName);
  
    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
  
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async uploadnoti(file) {
    const firestore = getFirestore();
    const storage = getStorage();
    const uniqueFileName = `Notifications/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, uniqueFileName);
  
    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
  
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async uploadmodalpaper(file) {
    const firestore = getFirestore();
    const storage = getStorage();
    const uniqueFileName = `Modalpaper/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, uniqueFileName);
  
    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
  
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async uploadgallery(file) {
    const firestore = getFirestore();
    const storage = getStorage();
    const uniqueFileName = `Gallery/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, uniqueFileName);
  
    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
  
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  
  async uploadnotislider(file) {
    const firestore = getFirestore();
    const storage = getStorage();
    const uniqueFileName = `slider1/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, uniqueFileName);
  
    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
  
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async uploadnotislider2(file) {
    const firestore = getFirestore();
    const storage = getStorage();
    const uniqueFileName = `slider2/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, uniqueFileName);
  
    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
  
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
  

  async uploadFile(file) {
    const firestore = getFirestore();
    const storage = getStorage();
    const storageRef = ref(storage, 'rollnoHSC-II/' + "rollnoHSC-II");

    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);

      // Get the download URL
      // const downloadURL = await getDownloadURL(storageRef);
      const downloadURL = await getDownloadURL(snapshot.ref);

      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async uploadFile1(file) {
    const firestore = getFirestore();
    const storage = getStorage();
    const storageRef = ref(storage, 'download/' + "sheet2");

    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);

      // Get the download URL
      // const downloadURL = await getDownloadURL(storageRef);
      const downloadURL = await getDownloadURL(snapshot.ref);

      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async uploadFile2(file) {
    const firestore = getFirestore();
    const storage = getStorage();
    const storageRef = ref(storage, 'fee/' + "sheet2");

    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);

      // Get the download URL
      // const downloadURL = await getDownloadURL(storageRef);
      const downloadURL = await getDownloadURL(snapshot.ref);

      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async handleFileUpload(event: any) {
    const file = event.target.files[0];

    if (file) {
      try {
        const excelURL = await this.uploadFile(file);
        if(excelURL){
          this.readFile(file);
        }
        // Now you can integrate this URL into your existing code to add it to the Firestore subcollection.
        // Modify the `newData` object as needed, e.g., newData.excelURL = excelURL;

        // Rest of your code...
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }

  async handleFileUpload1(event: any) {
    const file = event.target.files[0];

    if (file) {
      try {
        const excelURL = await this.uploadFile1(file);
        console.log(excelURL);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }


  async handleFileUpload2(event: any) {
    const file = event.target.files[0];

    if (file) {
      try {
        const excelURL = await this.uploadFile2(file);
        console.log(excelURL);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }

  async readFile(file) {
    console.log(file);
    const reader = new FileReader();
    
    reader.onload = async (event: any) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      // Convert Excel data to an array of objects
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      this.excelData = excelData;

      // Log the parsed data
      console.log(this.excelData);
    };

    reader.readAsArrayBuffer(file);
  }
}
