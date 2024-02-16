import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyinfoComponent } from './pages/myinfo/myinfo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyinfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web';
}
