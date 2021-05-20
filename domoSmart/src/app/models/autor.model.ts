export class Autor {
    
    public nombre: string;           
    public apellidos: string;
    public ciudad: string;
    public telefono: string;
    public telegram: string;
    public correo: string;

    constructor (nombre: string, apellidos: string, ciudad: string, telefono: string, telegram: string, correo: string){
    
        this.nombre = nombre;
        this.apellidos = apellidos;        
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.telegram = telegram;
        this.correo = correo;

    }

}