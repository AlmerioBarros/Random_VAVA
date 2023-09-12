



/*Ficou muito grande é a roleta uma merda, Nova ideia !!!!*/
/*   1.  Fazer a roleta so com uma div mega grande ,com os personagens dentro  (numero de caixas ainda pensando*/ 
/* Depois de aprender a usar classe , acho que ficaria otimo usar para fazer cada div herda uma função random por um classe  */
/*   2.  A função caixa de personagem ficou grande, melhor  */



/*Section random*/
const random = document.getElementById('random')
const img = document.getElementById('imginicial')
const imgp2 = document.getElementById('imginicial2')
const img1 = document.getElementById('img1')
/*Botões */
var vel = document.getElementById('ivelo')

function Roletar(){

    if(vel.value == 'Normal'){  
        
        /*Para se precisar roletar de novo*/
        random.style.display ='block'
        resultado.style.display='none'
        img1.style.display='none'
        img.style.display ='block'
        imgp2.style.display ='block'

        img.style.animation = 'imginicial 1.1s ease';
        imgp2.style.animation = 'imginicial2 1.1s ease';

        setTimeout(()=>{
            img.style.display ='none'
            imgp2.style.display ='none'

            random.style.animation = 'random 10s ease';

        },1000)

        setTimeout(()=>{
            img1.style.display ='block'

        },2000)

        setTimeout(()=>{
            img1.style.animation = 'img1 8s ease-out'

        },3000)

        setTimeout(()=>{

            random.style.animation ='none'
            img1.style.animation = 'none'
            imgp2.style.animation = 'none'
            
            random.style.display ='none'

            resultado.style.display ='block'

        },11000)
    }
    else if (vel.value == 'Dobro'){
                
        /*Para se precisar roletar de novo*/
        random.style.display ='block'
        resultado.style.display='none'
        img1.style.display='none'
        img.style.display ='block'
        imgp2.style.display ='block'

        img.style.animation = 'imginicial 1.1s ease';
        imgp2.style.animation = 'imginicial2 1.1s ease'

        setTimeout(()=>{
            img.style.display ='none'
            imgp2.style.display ='none'

            random.style.animation = 'random 6s ease';

        },1000)

        setTimeout(()=>{
            img1.style.display ='block'

        },2000)

        setTimeout(()=>{
            img1.style.animation = 'img1 4s ease-out'

        },3000)

        setTimeout(()=>{

            random.style.animation ='none'
            img1.style.animation = 'none'
            imgp2.style.animation = 'none'
            
            random.style.display ='none'

            resultado.style.display ='block'

        },7000)
    }
    else if(vel.value == 'Nenhuma' ){
        random.style.display = 'none'
        resultado.style.display = 'block'
    }
    else{
        alert('escolha uma das opções de velocidade existentes !!!')
    }

}
/*-----------------------------------------------------Segunda função------------------------------------------------*/
function CaixaDePersonagem(){

    /*section resultado*/
    let resultado = document.getElementById('resultado')
    let img_r = document.getElementById('img_r')
    let text_r = document.getElementById('text_r')

    class numero_para_personagem {
        constructor(complemento,nome){
            let num = parseInt(21 * Math.random()).toFixed(0);
            complemento = "";
            nome = "";
            switch(parseInt(num)){
            case 0:
                this.complemento = "url('arquivos/Astra.png')"
                this.nome = "Astra"
                break
            case 1:
                this.complemento = "url('arquivos/Breach.png')"
                this.nome = "Breach"
                break
            case 2:
                this.complemento = "url('arquivos/Brimstone.png')"
                this.nome = "Brimstone"
                break
            case 3:
                this.complemento = "url('arquivos/Chamber.png')"
                this.nome = "Chamber"
                break
            case 4:
                this.complemento = "url('arquivos/Cypher.png')"
                this.nome = "Cypher"
                break
            case 5:
                this.complemento = "url('arquivos/Deadlock.png')"
                this.nome = "Deadlock"
                break
            case 6:
                this.complemento = "url('arquivos/Fade.png')"
                this.nome = "Fade"
                break
            case 7:
                this.complemento = "url('arquivos/Gekko.png')"
                this.nome = "Gekko"
                break
            case 8:
                this.complemento = "url('arquivos/Harbor.png')"
                this.nome = "Harbor"
                break
            case 9:
                this.complemento = "url('arquivos/Jett.png')"
                this.nome = "Jett"
                break
            case 10:
                this.complemento = "url('arquivos/Kayo.png')"
                this.nome = "Kayo"
                break
            case 11:
                this.complemento = "url('arquivos/Killjoy.png')"
                this.nome = "Killjoy"
                break
            case 12:
                this.complemento = "url('arquivos/Neon.png')"
                this.nome = "Neon"
                break
            case 13:
                this.complemento = "url('arquivos/Omen.png')"
                this.nome = "Omen"
                break
            case 14:
                this.complemento = "url('arquivos/Phoenix.png')"
                this.nome = "Phoenix"
                break
            case 15:
                this.complemento = "url('arquivos/Raze.png')"
                this.nome = "Raze"
                break
            case 16:
                this.complemento = "url('arquivos/Reyna.png')"
                this.nome = "Reyna"
                break
            case 17:
                this.complemento = "url('arquivos/Sage.png')"
                this.nome = "Sage"
                break
            case 18:
                this.complemento = "url('arquivos/Skye.png')"
                this.nome = "Skye"
                break
            case 19:
                this.complemento = "url('arquivos/Sova.png')"
                this.nome = "Sova"
                break
            case 20:
                this.complemento = "url('arquivos/Viper.png')"
                this.nome = "Viper"
                break
            case 21:
                this.complemento = "url('arquivos/Yoru.png')"
                this.nome = "Yoru"
                break
            default:
                alert("ERRO , reinicie !!!")
            }
        }
    }

    /*Caminho para as caixas*/

    let selecionado = document.getElementById('selecionado')
    let c1 = document.getElementById('c1')
    let c2 = document.getElementById('c2')
    let c3 = document.getElementById('c3')
    let c4 = document.getElementById('c4')
    let c5 = document.getElementById('c5')
    let c6 = document.getElementById('c6')
    let c7 = document.getElementById('c7')
    let c8 = document.getElementById('c8')
    let c9 = document.getElementById('c9')
    let c10 = document.getElementById('c10')
    let c11 = document.getElementById('c11')
    let c12 = document.getElementById('c12')
    let c13 = document.getElementById('c13')
    let c14 = document.getElementById('c14')
    let c15 = document.getElementById('c15')
    let c16 = document.getElementById('c16')
    let cfim = document.getElementById('cfim') 

    /*Numero para personagem*/

    let pselecionado = new numero_para_personagem()
    let p1 = new numero_para_personagem()
    let p2 = new numero_para_personagem()
    let p3 = new numero_para_personagem()
    let p4 = new numero_para_personagem()
    let p5 = new numero_para_personagem()
    let p6 = new numero_para_personagem()
    let p7 = new numero_para_personagem()
    let p8 = new numero_para_personagem()
    let p9 = new numero_para_personagem()
    let p10 = new numero_para_personagem()
    let p11 = new numero_para_personagem()
    let p12 = new numero_para_personagem()
    let p13 = new numero_para_personagem()
    let p14 = new numero_para_personagem()
    let p15 = new numero_para_personagem()
    let p16 = new numero_para_personagem()
    let pfim = new numero_para_personagem()

    /*Interação caixa __ numero do personagem*/

    selecionado.style.background = pselecionado.complemento;
    c1.style.backgroundImage = p1.complemento;
    c2.style.backgroundImage = p2.complemento;
    c3.style.backgroundImage = p3.complemento;
    c4.style.backgroundImage = p4.complemento;
    c5.style.backgroundImage = p5.complemento;
    c6.style.backgroundImage = p6.complemento;
    c7.style.backgroundImage = p7.complemento;
    c8.style.backgroundImage = p8.complemento;
    c9.style.backgroundImage = p9.complemento;
    c10.style.backgroundImage = p10.complemento;
    c11.style.backgroundImage = p11.complemento;
    c12.style.backgroundImage = p12.complemento;
    c13.style.backgroundImage = p13.complemento;
    c14.style.backgroundImage = p14.complemento;
    c15.style.backgroundImage = p15.complemento;
    c16.style.backgroundImage = p16.complemento;
    cfim.style.backgroundImage = pfim.complemento;

    /*Caixa de resultado*/

    img_r.style.backgroundImage = pselecionado.complemento;
    text_r.innerHTML = (pselecionado.nome);

    /*Animação do resultado*/
    resultado.style.animation = 'resultado 3s ease infinite'




/*Prova de que esta vindovalores diferentes

    let teste = new numero_para_personagem()
    alert(teste.complemento)
    let teste2 = new numero_para_personagem()
    alert(teste2.complemento)
    */
}

