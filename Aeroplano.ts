class Turbina{
    private numTurbinas:number =0 ;
public constructor (n : number){
    this.numTurbinas = n;
}

public toString(){
    return this.numTurbinas + "Turbina/s"
}
}


class Cubierta{
private cabinaTripulacion: boolean = false;
private cabinaVuelo: boolean = false;
private sistemaEmergencia: boolean = false;
private numTanquesCombustible: number = 0;
private numPuertasSalidas: number = 0;

public constructor(pCabinaTripulacion: boolean , pCabinaVuelo: boolean, pSistemaEmergencia: boolean,
    pNumTanquesCombustible: number, pNumPuertasSalidas: number
    ) {
        this.cabinaTripulacion= pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pNumTanquesCombustible;
        this.numPuertasSalidas= pNumPuertasSalidas;
}
public toString(){
let mensaje ="Cubierta compuesta de:";
if (this.cabinaVuelo) {
    return mensaje += "Cubierta de Vuelo, ";
}
if (this.cabinaTripulacion) {
    return mensaje += "Cubierta de Tripulacion, ";
}
if (this.sistemaEmergencia) {
    return mensaje += "Sistema de Emergencia, ";
}
mensaje += this.numTanquesCombustible + "Tanques de Combustible";
mensaje += this.numPuertasSalidas + "Puertas de salida";
return mensaje;
}
}

class Alas{
    private turbina: boolean = false;
    private numTurbinas: number = 0;

    
    public constructor(pTurbina: boolean ,pNumTurbinas: number
        ) {
            this.turbina= pTurbina;
            this.numTurbinas = pNumTurbinas;
         
    }
    public toString(){
    let mensaje ="Alas compuestas de:";
   
       return mensaje += this.numTurbinas + "Turbinas";;
    }
    }
    

    class TrenDeAterrizaje{
        private trenAterrizaje: boolean = false;
        private numTrenDeAterrizaje: number = 0;
    
        
        public constructor(pTrenAterrizaje: boolean ,pNumTrenAterrizaje: number
            ) {
                this.trenAterrizaje= pTrenAterrizaje;
                this.numTrenDeAterrizaje = pNumTrenAterrizaje;
             
        }
        public toString(){
        let mensaje ="Tren de Aterrizaje compuesto de:";
       
           return mensaje += this.numTrenDeAterrizaje + "Trenes de Aterrizaje";;
        }
        }
        

        class Helice{
            private helice: boolean = false;
            private numHelice: number = 0;
        
            
            public constructor(pHelice: boolean ,pNumHelices: number
                ) {
                    this.helice= pHelice;
                    this.numHelice = pNumHelices;
                 
            }
            public toString(){
            let mensaje ="Helice compuesta de:";
           
               return mensaje += this.numHelice + "Helices";;
            }
            }
            
//AEROPLANO

class Aeroplano{
private helice: Helice;
private trenAterrizaje: TrenDeAterrizaje ;
private alas: Alas;
private cubierta: Cubierta;

 constructor(pHelice:Helice , pTrenAterrizaje:TrenDeAterrizaje, pAlas: Alas,
    pCubierta: Cubierta
    ) {
        this.helice= pHelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
}
public toString(){
let mensaje ="Aeroplano compuesto por:";
mensaje += this.helice.toString();
mensaje += this.trenAterrizaje.toString();
mensaje += this.alas.toString();
mensaje += this.cubierta.toString();
return mensaje;
}}