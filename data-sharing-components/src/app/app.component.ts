import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name: 'stormo', content: 'some server content'}];

  addServer(serverData: {serverName:string, serverContent: string}) {
    this.serverElements.push({type: 'server', name: serverData.serverName, content: serverData.serverContent});
  }

  addBluePrint(bluePrintData: {serverName:string, serverContent: string}) {
    this.serverElements.push({type: 'blueprint', name: bluePrintData.serverName, content: bluePrintData.serverContent});
  }
  
}
