
export class User{

    constructor(
        public _id:string,
        public  nombre: string,
        public apellido: string,
        public email: string,
        public telefono: string,
        public password: string,
        public role: string,
        public image: string,
        public gettoken: null
    ){

    }
}