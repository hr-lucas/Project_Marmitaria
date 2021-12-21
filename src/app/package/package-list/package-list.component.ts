import { Component, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [
    new Package('Churrasco', 'Churrasco de picanha','https://img.itdg.com.br/tdg/images/blog/uploads/2021/08/Churrasco-barato.jpg?w=1200'),
    new Package('Churrasco', 'Churrasco de picanha','https://img.itdg.com.br/tdg/images/blog/uploads/2021/08/Churrasco-barato.jpg?w=1200'),
    new Package('Churrasco', 'Churrasco de picanha','https://img.itdg.com.br/tdg/images/blog/uploads/2021/08/Churrasco-barato.jpg?w=1200'),
    new Package('Churrasco', 'Churrasco de picanha','https://img.itdg.com.br/tdg/images/blog/uploads/2021/08/Churrasco-barato.jpg?w=1200'),
    new Package('Churrasco', 'Churrasco de picanha','https://img.itdg.com.br/tdg/images/blog/uploads/2021/08/Churrasco-barato.jpg?w=1200')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
