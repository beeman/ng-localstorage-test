import { JsonPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ClusterService } from './cluster/cluster.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  template: `
    <div>
      <header>

        <button (click)="addCluster()">Add Cluster</button>
        <button (click)="addClusterErr()">Add Cluster Err</button>
      </header>
      <main>
        <table border='1' cellpadding="10">

          <tbody>
            @for (cluster of clusterService.clusters; track cluster.name) {
              <tr>
                <td>{{ cluster.endpoint }}</td>
                <td>{{ cluster.name }}</td>
                <td>
                  <button (click)="clusterService.deleteCluster(cluster)">Delete</button>
                  <button (click)="clusterService.setCluster(cluster)">Set</button>
                </td>
              </tr>
            } @empty {
              No clusters
            }
          </tbody>
        </table>


        <pre>cluster: {{clusterService.cluster | json }}</pre>
        <pre>clusters: {{clusterService.clusters | json }}</pre>
      </main>

    </div>
  `,
})
export class AppComponent {
  clusterService = inject(ClusterService)


  addCluster() {
    const name = `test-${Date.now()}`
    this.clusterService.addCluster({ endpoint: 'http://localhost:8899', name, })
  }

  addClusterErr() {
    const name = `test-${Date.now()}`
    this.clusterService.addCluster({ endpoint: 'localhost:8899', name, })
  }

}
