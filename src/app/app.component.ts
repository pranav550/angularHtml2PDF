import { Component } from '@angular/core';
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'html2Pdf';

  download() {
    var element = document.getElementById('table')
    html2canvas(element).then((canvas) => {
      console.log(canvas)
      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()
      var imageHeight = canvas.height * 208 / canvas.width
      doc.addImage(imgData, 0, 0, 208, imageHeight)
      doc.save("image.pdf")
    })
  }

}
