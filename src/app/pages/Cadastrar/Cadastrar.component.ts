import { Component, ViewEncapsulation, HostBinding } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms'; // Adicione esta importação

@Component({
  selector: "cadastrar",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule],  // Adicione o FormsModule aqui
  templateUrl: "./Cadastrar.component.html",
  styleUrls: ["./Cadastrar.component.css"],
})
export class Cadastrar {
  @HostBinding("style.display") display = "contents";
  
  email: string = '';  // Defina os campos para email e senha
  senha: string = '';

  constructor(private router: Router) {}

  onRectangleClick() {
    this.router.navigate(["/conectese"]);
  }

  onCadastrarClick() {
    console.log('Cadastro:', this.email, this.senha);
    // Lógica para realizar o cadastro
  }
}