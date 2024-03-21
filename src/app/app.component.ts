import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div>
      <header>
        HEADER
      </header>
      <main>
        <router-outlet />
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  `,
})
export class AppComponent {


}
