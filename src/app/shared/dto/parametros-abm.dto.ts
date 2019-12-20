import { OperacionABM } from '@shared/enum/operacion-abm.enum';

export interface ParametrosABM {
  operacion: OperacionABM;
  camposEditables: boolean;
}
