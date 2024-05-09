import { Component } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.css'
})
export class SecretComponent {
  /*lifeMeaningStyle = {
    color: 'red'
  };*/
  lifeMeaningStyle: any;

  ngOnInit(): void {
    this.updateLifeMeaningStyle('red');
    
    // Idővel változtathatjuk a színt
    setInterval(() => {
      const randomColor = this.getRandomColor();
      this.updateLifeMeaningStyle(randomColor);
    }, 100);
  }

  updateLifeMeaningStyle(color: string): void {
    this.lifeMeaningStyle = {
      color: color
    };
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
