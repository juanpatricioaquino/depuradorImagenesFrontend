import { Funcion } from './funcion.dto';
import { Menu } from './menu.dto';
import { Token } from './token.dto';

export interface Usuario {
  apellido: string;
  funciones: Funcion[];
  idAplicacion: number;
  idPersona: number;
  idUsuario: number;
  imagen: string;
  menus: Menu[];
  nombre: string;
  nombreCompleto: string;
  nombreUsuario: string;
  observacion: string;
  tienePermiso: boolean;
  token: Token;
}
