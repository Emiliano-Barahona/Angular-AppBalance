import { Egreso } from "./egreso.model";

export class EgresoServicio {
    egresos: Egreso[] = [
        new Egreso("Renta Departamento", 900),
        new Egreso("Ropa", 200)
    ]

    eliminar(ingreso: Egreso) {
        const indice: number = this.egresos.indexOf(ingreso)
        this.egresos.splice(indice, 1)
    }
}