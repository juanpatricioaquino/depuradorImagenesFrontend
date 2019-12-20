import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '@core/dto/menu.dto';
import { TipoMenu } from './tipo-menu.enum';

@Component({
  selector: 'app-template-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppTemplateComponent implements OnInit {
  nombreCompletoUsuario: string;
  imagenUsuario: string;
  menus: Menu[];
  tipoMenu = TipoMenu;
  tipoMenuApp: TipoMenu;
  isSidebarToggled = false;
  collapseSidebarOpen = {};
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (true) {
      this.nombreCompletoUsuario = "usuario.nombreCompleto";
      this.imagenUsuario = "usuario.imagen";
      // this.menus = usuario.menus;
      // this.menus = [{ descripcion: 'Home', accion: '/login', subMenus: null, hijoActivo: false, icono: 'home', id: null },
      // { descripcion: 'Perfil', accion: '/perfil', subMenus: null, hijoActivo: false, icono: 'home', id: null },
      // { descripcion: 'Aplicacion', accion: '/aplicacion', subMenus: null, hijoActivo: false, icono: 'home', id: null },
      // ];
      // this.setearHijosActivos();
    } else {
      this.nombreCompletoUsuario = ' ';
      this.imagenUsuario = null;
      this.menus = [];
    }
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map(() => this.router.routerState.root)
    //   )
    //   .subscribe(event => {
    //     this.setearHijosActivos();
    //   });
    this.route.data.subscribe(data => (this.tipoMenuApp = data.tipoMenu));
  }
  tieneSubElementos(elementoMenu: Menu): boolean {
    return elementoMenu.subMenus && elementoMenu.subMenus.length > 0;
  }

  // setearHijosActivos() {
  //   const _this = this;
  //   const cambiarValorSiTieneHijosActivos = function (elementoMenu: Menu): boolean {
  //     elementoMenu.hijoActivo = false;
  //     if (_this.router.isActive(elementoMenu.accion, true)) {
  //       return true;
  //     } else if (elementoMenu.subMenus) {
  //       for (const subMenu of elementoMenu.subMenus) {
  //         if (cambiarValorSiTieneHijosActivos(subMenu)) {
  //           elementoMenu.hijoActivo = true;
  //         }
  //       }
  //     }
  //     return elementoMenu.hijoActivo;
  //   };
  //   for (const menu of this.menus) {
  //     cambiarValorSiTieneHijosActivos(menu);
  //   }
  // }

  obtenerMenus(): Menu[] {
    return this.menus;
  }

  setearMenus(menus: Menu[]): Menu[] {
    return this.menus = menus;
  }
}


// this.menus = [{ descripcion: 'Home', accion: '/home', subMenus: null, hijoActivo: false, icono: 'home', id: null },
//         // Menu Funciones
//         {
//           descripcion: 'Funciones', accion: null,
//           // Submenu Funciones
//           subMenus: [{ descripcion: 'ABM', accion: '/funcion', subMenus: null, hijoActivo: false, icono: '', id: null },
//           {
//             descripcion: 'GRP Funciones', accion: '/grupo-de-funcion',
//             subMenus: null, hijoActivo: false, icono: '', id: null
//           },
//           {
//             descripcion: 'Funcion - Grupo de funcion', accion: '/funcion-grupo-de-funcion', subMenus: null, hijoActivo: false, icono: '',
//             id: null
//           },
//           {
//             descripcion: 'Funcion - GRP Usuarios', accion: '/funcion-grupo-de-usuario', subMenus: null, hijoActivo: false, icono: '',
//             id: null
//           }],
//           hijoActivo: false, icono: 'functions', id: 1
//         },
//         // Menu Usuarios
//         {
//           descripcion: 'Usuarios', accion: null,
//           // Submenu Usuarios
//           subMenus: [{ descripcion: 'GRP Usuarios', accion: '/grupo-de-usuario', subMenus: null, hijoActivo: false, icono: '', id: null },
//           {
//             descripcion: 'Usuario - GRP Funciones', accion: '/usuario-grupo-de-funcion', subMenus: null, hijoActivo: false, icono: '',
//             id: null
//           },
//           {
//             descripcion: 'Usuario - GRP Usuarios', accion: '/usuario-grupo-de-usuario', subMenus: null, hijoActivo: false, icono: '',
//             id: null
//           },
//           {
//             descripcion: 'GRP Usuarios - GRP Funciones', accion: '/grupo-de-usuario-grupo-de-funcion',
//             subMenus: null, hijoActivo: false, icono: '', id: null
//           }],
//           hijoActivo: false, icono: '', id: null
//         },
//         {
//           descripcion: 'Grupo de funciones', accion: '/funcion-grupo-de-funcion', subMenus: null, hijoActivo: false, icono: 'functions',
//           id: 2
//         },
//         // Menu Grupo de Funciones
//         {
//           descripcion: 'Grupo de funciones', accion: null, subMenus: [
//             // SubMenu Grupo de Funciones
//             { descripcion: 'ABM', accion: null, subMenus: null, hijoActivo: false, icono: '', id: null },
//             { descripcion: 'Usuarios', accion: null, subMenus: null, hijoActivo: false, icono: '', id: null },
//             { descripcion: 'Grupo de Funcion', accion: null, subMenus: null, hijoActivo: false, icono: '', id: null },
//             { descripcion: 'Grupo de Usuarios', accion: null, subMenus: null, hijoActivo: false, icono: '', id: null }
//           ], hijoActivo: false, icono: 'functions', id: 3
//         },
//         // Menu Grupo de Usuarios
//         {
//           descripcion: 'Grupo de Usuarios', accion: null, subMenus: [
//             // SubMenu Grupo de Usuario
//             { descripcion: 'ABM', accion: null, subMenus: null, hijoActivo: false, icono: '', id: null },
//             { descripcion: 'Usuarios', accion: null, subMenus: null, hijoActivo: false, icono: '', id: null },
//             { descripcion: 'Grupo de Funcion', accion: null, subMenus: null, hijoActivo: false, icono: '', id: null },
//             { descripcion: 'Grupo de Usuarios', accion: null, subMenus: null, hijoActivo: false, icono: '', id: null }
//           ], hijoActivo: false, icono: 'functions', id: 4
//         },
//         ];
