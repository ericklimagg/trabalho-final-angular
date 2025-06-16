import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Variável para armazenar os dados da API
  public post: any;

  // Injeta o serviço HttpClient para fazer chamadas de rede
  constructor(private http: HttpClient) { }

  // Método que é executado quando o componente é iniciado
  ngOnInit(): void {
    // Faz uma requisição GET para a API JSONPlaceholder
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      this.post = data;
    });
  }
}