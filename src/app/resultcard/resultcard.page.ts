import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import html2canvas from 'html2canvas';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

@Component({
  selector: 'app-resultcard',
  templateUrl: './resultcard.page.html',
  styleUrls: ['./resultcard.page.scss'],
})
export class ResultcardPage implements OnInit {
  info: any;
  pagetypetext: any;
  data: any = {};
  @ViewChild('pdfContent') pdfContent: ElementRef;
  imageURL:any;
  constructor(private activatedRoute: ActivatedRoute,private photoViewer: PhotoViewer) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params['data']) {
        this.info = JSON.parse(params['data']);
        this.pagetypetext = params['pagetype'];
        console.log(this.info);
        console.log(this.pagetypetext);
        const rawData = this.info.before;
        this.data = this.parseData(rawData);
      }
    });
  }


  parseData(dataString: string) {
    const data = {};
    const pairs = dataString?.split(' ');

    pairs?.forEach((pair) => {
      const [key, value] = pair.split('=');
      data[key] = value;
    });

    return data;
  }

  captureAndConvertToImage() {
    const captureElement = document.getElementById('captureElement');

    html2canvas(captureElement).then(canvas => {
      // Convert canvas to image URL
      const imageURL = canvas.toDataURL('image/png');
      // this.imageURL = imageURL;
      // Do something with the imageURL (e.g., display it, send it to a server, etc.)
      console.log(imageURL);
      this.callname(imageURL);
    });
  }

  callname(da: any) {
    console.log("working");
    const imagePath = '../../assets/images/Time Table A.E sample elective subs XII final  (1).png';
    try {
      this.photoViewer.show(da, 'Result Card', { share: true });
    } catch (error) {
      console.error('Error loading image:', error);
    }
  }

  // downloadPdf() {
  //   alert("1");
  //   const fileName = 'slip';
  //   const pdfContent = this.pdfContent.nativeElement;
  //   this.generatePdf(pdfContent, fileName);
  // }


  // generatePdf(pageContent: HTMLElement, fileName: string) {
  //   alert("2")
  //   domtoimage.toPng(pageContent).then((dataUrl) => {
  //     const pdf = new jsPDF();
  //     pdf.addImage(dataUrl, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
  //     pdf.save(`${fileName}.pdf`);
  //   });
  // }


  
}