import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'Indicar amigos' },
    { icon: 'phone-portrait-outline', text: 'Recarga de celular' },
    { icon: 'wallet-outline', text: 'Depositar' },
    { icon: 'options-outline', text: 'Ajustar limite' },
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'barcode-outline', text: 'Pagar' },
    { icon: 'lock-open-outline', text: 'Bloquear Cartão' },
    { icon: 'card-outline', text: 'Cartão virtual' },
  ];

  public items: Array<any> = [
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'person-outline', text: 'Perfil' },
    { icon: 'cash-outline', text: 'Configurar conta' },
    { icon: 'cash-outline', text: 'Configurar cartão' },
    { icon: 'phone-portrait-outline', text: 'Configurações do app' },
  ];
  public slidesOptions: any = { slidesPerView: 3, freeMode: true };

  constructor() { }

}
