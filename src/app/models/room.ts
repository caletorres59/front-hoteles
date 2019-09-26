
export class Room{

    constructor(
        public _id:string,
        public  numero: string,
        public costo: number,
        public impuesto: number,
        public location: string,
        public status: boolean,
        public hotel: string
    ){

    }
}
