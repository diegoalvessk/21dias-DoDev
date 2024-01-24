class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    SSD

    constructor(tipo, processador, video, armazenamento, memoriaRam, SSD){
        this.tipo = tipo 
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.SSD = SSD
    }

    exibirInformações(){
        console.log(this.tipo + this.processador + this.video + this.armazenamento + this.memoriaRam + this.SSD)
    }
}

let pc = new Computador("desktop" , "AMD" , "Integrado", 500 , 8 , true)

pc.exibirInformações()