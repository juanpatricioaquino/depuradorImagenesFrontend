export interface Menu {
  descripcion: string;
  accion: string;
  subMenus: Menu[];
  hijoActivo: boolean;
  icono: string;
  id: number;
}
