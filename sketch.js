//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let RaqueteOponenteComprimento = 10;
let RaqueteOponenteAltura = 90;
let velocidadeyOponente;

//Placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
   movimentaBolinha();
    verificaColisaoBorda();
  mostraRaquete ();
  movimentaminhaRaquete ();
  verificaColisaoBolinha ();
  mostraRaqueteOponente ();
  movimentaRaqueteOponente ();
  verificaColisaoBolinhaOponente ();
  incluirPlacar ();
}

function mostraBolinha () {
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  
 xBolinha += velocidadexBolinha;
 yBolinha += velocidadeyBolinha;
} 

  function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadexBolinha *= -1;
    }

      if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeyBolinha *= -1;
    }
}

  function mostraRaquete () {
    rect(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura)
  }

 function mostraRaqueteOponente () {
    rect(xRaqueteOponente, yRaqueteOponente, RaqueteOponenteComprimento, RaqueteOponenteAltura)
  }


function movimentaminhaRaquete () {
  if ( keyIsDown (UP_ARROW)) {
    yRaquete -= 10;
  }
  if ( keyIsDown ( DOWN_ARROW )) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente (){
  velocidadeyOponente = yBolinha - yRaqueteOponente - RaqueteOponenteComprimento /2 - 30;
  yRaqueteOponente += velocidadeyOponente 
}

function verificaColisaoBolinha () {
  if ( xBolinha - raio < xRaquete + RaqueteComprimento
 &&    yBolinha - raio < yRaquete + RaqueteAltura  &&  yBolinha + raio > yRaquete) {
    velocidadexBolinha *= -1;
  }
}

function verificaColisaoBolinhaOponente () {
  if ( xBolinha - raio < xRaqueteOponente+ RaqueteOponenteComprimento
 &&    yBolinha - raio < yRaqueteOponente + RaqueteOponenteAltura  &&  yBolinha + raio > yRaqueteOponente) {
    velocidadexBolinha *= +1;
  }
}

function incluirPlacar () {
  text ()
}