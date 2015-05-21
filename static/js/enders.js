var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
}
var pelean = false, turno = 0;
var estado ="", accion ="";
var enemies = 5;
var movs = {
	puño: 90, //z
	edebil: 88, //x
	efuerte: 67, //c
	flecha: 65, //a
	curar: 83 //s
}
var vel = 20;
var usuario,enemigo;
var fondo = {
	fondo: new Image(),
	fondoOK: false
}
var caritas = {
	arcantho: new Image(),
	arcanthoOK: false,
	drako: new Image(),
	drakoOK: false,
	raven: new Image(),
	ravenOK: false,
	bece: new Image(),
	beceOK: false,
	darkanna: new Image(),
	darkannaOK: false,
	levi: new Image(),
	leviOK: false,
	arcsit: new Image(),
	arcsitOK: false,
	drasit: new Image(),
	drasitOK: false,
	ravsit: new Image(),
	ravsitOK: false,
	besit: new Image(),
	besitOK: false,
	darsit: new Image(),
	darsitOK: false,
	levsit: new Image(),
	levsitOK: false

	}

var src = {
	fondosrc: "static/images/mapa.jpg",
	arcanthosrc: "static/images/arcfr.png",
	drakosrc: "static/images/drafr.png",
	ravensrc: "static/images/ravfr.png",
	becesrc: "static/images/becfr.png",
	darkannasrc: "static/images/darfr.png",
	levisrc: "static/images/levfr.png",
	arcsitsrc: "static/images/arcsit.png",
	drasitsrc: "static/images/drasit.png",
	ravsitsrc: "static/images/ravsit.png",
	besitsrc: "static/images/becsit.png",
	darsitsrc: "static/images/darsit.png",
	levsitsrc: "static/images/levsit.png",
}
//Clase Ender
function Ender (n,e,f,a,dx,df,fm,m,v,posx,posy,vit,sp,die) {
		this.nombre = n;
		this.elemento = e;
		this.fuerza = f;
		this.agi = a;
		this.dex = dx;
		this.def = df;
		this.fmagi = fm;
		this.magia = m;
		this.vida = v;
		this.posx = posx;
		this.posy = posy;
		this.vit = vit;
		this.sp = sp;
		this.muerto = die;
	}

//Arreglo de los personajes a elegir. Subclase de Ender
var personajes = [	arcantho = new Ender("Arcantho", "Tierra", 15, 0, 15, 40, 10, 5, 150,20,100,150,5,"arcdie.png"),
					drako = new Ender("DRaKo", "Fuego", 20, 20, 10, 10, 20, 10, 100,240,20,100,10,"dradie.png"),
					raven = new Ender("BlackRaven", "Muerte", 20, 30, 15, 10, 10, 5, 100,20,300,100,5,"ravdie.png"),
					bece = new Ender("DRK Bece", "Vida", 5, 0, 10, 25, 30,15, 150,440,100,150,15,"becdie.png"),
					darkanna = new Ender("DarkAnna", "Aire", 5, 50, 30, 0, 5, 5, 50,440,300,50,5,"dardie.png"),
					levi = new Ender("Leviatán", "Agua", 5, 5, 20, 5, 40, 20, 50,240,400,50,20, "levdie.png")
				];

var canvas, dibujo;
function juego()
{
	//Primero elige a tu personaje
	//alert("Instrucciones: \n1.- Elige con el botón a tu personaje.\n2.- Con las flechas del teclado pon tu personaje sobre los Ender enemigos.\n 3.- Vence a todos para ganar.\n ¡Diviértete! :D");
	canvas = document.getElementById("campo");
	canvas.height= 500;
	canvas.width = 500;
	dibujo = campo.getContext("2d");

	fondo.fondo.src = src.fondosrc;
	fondo.fondo.onload = function()
	{
		fondo.fondoOK = true;
		dibujar();
	}
	caritas.arcantho.src = src.arcanthosrc;
	caritas.arcantho.onload = function(){
		caritas.arcanthoOK = true;
		dibujar();
		}
	caritas.drako.src = src.drakosrc;
	caritas.drako.onload = function(){
		caritas.drakoOK = true;
		dibujar();
		}
	caritas.raven.src = src.ravensrc;
		caritas.raven.onload = function()
	{
		caritas.ravenOK = true;
		dibujar();
	}
	caritas.bece.src = src.becesrc;
		caritas.bece.onload = function()
	{
		caritas.beceOK = true;
		dibujar();
	}
	caritas.darkanna.src = src.darkannasrc;
		caritas.darkanna.onload = function()
	{
		caritas.darkannaOK = true;
		dibujar();
	}
	caritas.levi.src = src.levisrc;
		caritas.levi.onload = function()
	{
		caritas.leviOK = true;
		dibujar();
	}
	caritas.arcsit.src = src.arcsitsrc;
	caritas.arcsit.onload = function(){
		caritas.arcsitOK = true;
		dibujar();
		}
	caritas.drasit.src = src.drasitsrc;
	caritas.drasit.onload = function(){
		caritas.drasitOK = true;
		dibujar();
		}
	caritas.ravsit.src = src.ravsitsrc;
		caritas.ravsit.onload = function()
	{
		caritas.ravsitOK = true;
		dibujar();
	}
	caritas.besit.src = src.besitsrc;
		caritas.besit.onload = function()
	{
		caritas.besitOK = true;
		dibujar();
	}
	caritas.darsit.src = src.darsitsrc;
		caritas.darsit.onload = function()
	{
		caritas.darsitOK = true;
		dibujar();
	}
	caritas.levsit.src = src.levsitsrc;
		caritas.levsit.onload = function()
	{
		caritas.levsitOK = true;
		dibujar();
	}
	
var botones = [
arcanthob = false,
drakob = false, 
ravenb = false,
beceb = false,
darkannab = false,
levib = false,
]

	 	var b0 = document.getElementById("0").addEventListener("click", validar0);
	 	var b1 = document.getElementById("1").addEventListener("click", validar1);
	 	var b2 = document.getElementById("2").addEventListener("click", validar2);
	 	var b3 = document.getElementById("3").addEventListener("click", validar3);
	 	var b4 = document.getElementById("4").addEventListener("click", validar4);
	 	var b5 = document.getElementById("5").addEventListener("click", validar5);
		
	}
		
function mover()
{
	addEventListener("keydown", caminar);
	function caminar(datos)
	{
	var codigo = datos.keyCode;
	
	if(!pelean){
	if(codigo == teclas.RIGHT)
	{	
		if (arcantho.posx <460 && drako.posx < 460 && raven.posx < 460 && darkanna.posx < 460 && bece.posx < 460 && levi.posx < 460)
		{
			usuario.posx+=vel;
		}
	}
	if(codigo == teclas.DOWN)
	{if(arcantho.posy <=400 && drako.posy <= 400 && raven.posy <= 400 && darkanna.posy <= 400 && bece.posy <= 400 && levi.posy <= 400)
		{
			usuario.posy+=vel;
		}
		
	}
	if(codigo == teclas.UP)
	{if(arcantho.posy >0 && drako.posy > 0 && raven.posy > 0 && darkanna.posy > 0 && bece.posy > 0 && levi.posy > 0)
		{
			usuario.posy-=vel;
		}
		
	}
	if(codigo == teclas.LEFT)
	{if(arcantho.posx >0 && drako.posx > 0 && raven.posx > 0 && darkanna.posx > 0 && bece.posx > 0 && levi.posx > 0)
		{
			usuario.posx-=vel;
		}
	}
}
//colisiones
	for (var i=0; i<5; i++){
		if (usuario.posx == enemigo[i].posx && usuario.posy == enemigo[i].posy)
				{
					
					dibujarpelea(i);
					pelean = true;
					
					if(turno==0){
					if(codigo == movs.puño)
					{ 	var hit = Math.floor((Math.random() * usuario.dex) + 1);
						var miss = Math.floor((Math.random() * enemigo[i].agi) + 1);

						if(hit >= miss)
						{
							var str = Math.floor((Math.random() * usuario.fuerza) + 1);
							var defensa = Math.floor((Math.random() * enemigo[i].def) + 1);
							if (str <= defensa)
							{
								var daño = 1
								enemigo[i].vida -= daño;
							}
							else
							{
								var daño = (str - defensa)*2
								enemigo[i].vida-= daño;
							}
							
							estado = usuario.nombre + " dañó " + daño + " a "+ enemigo[i].nombre;
						}
						else{ estado = "Fallaste";}
							turno = 1;
					}

					if(codigo == movs.edebil)
					{ 	var hit = Math.floor((Math.random() * usuario.dex) + 1);
						var miss = Math.floor((Math.random() * enemigo[i].agi) + 1);

						if(hit >= miss)
						{
							var str = Math.floor((Math.random() * usuario.fmagi) + 1);
							var defensa = Math.floor((Math.random() * enemigo[i].def) + 1);
							if (str <= defensa)
							{
								var daño = 1
								enemigo[i].vida -= daño;
							}
							else
							{
								var daño = (str - defensa)*2
								enemigo[i].vida-= daño;
							}
							
							estado = usuario.nombre + " dañó " + daño + " a "+ enemigo[i].nombre;
						}
						else{ estado = "Fallaste";}
						//dibujarpelea(i);
						turno = 1;

					}
					if(codigo == movs.efuerte)
					{ 	var hit = (Math.floor((Math.random() * usuario.dex) + 1))*2;
						var miss = Math.floor((Math.random() * enemigo[i].agi) + 1);

						if(hit >= miss)
						{
							var str = Math.floor((Math.random() * usuario.fmagi) + 1);
							var defensa = Math.floor((Math.random() * enemigo[i].def) + 1);
							if (str <= defensa)
							{
								var daño = 1
								enemigo[i].vida -= daño;
							}
							else
							{
								var daño = (str - defensa);
								enemigo[i].vida-= daño;
							}
							
							estado = usuario.nombre + " dañó " + daño + " a "+ enemigo[i].nombre;
						}
						else{ estado = "Fallaste";}
						//dibujarpelea(i);
						turno = 1;
					}
					if(codigo == movs.flecha)
					{ 	var hit = Math.floor((Math.random() * usuario.agi) + 1);
						var miss = Math.floor((Math.random() * enemigo[i].agi) + 1);

						if(hit >= miss)
						{
							var str = Math.floor((Math.random() * usuario.dex) + 1);
							var defensa = Math.floor((Math.random() * usuario.def) + 1);
							if (str <= defensa)
							{
								var daño = 1
								enemigo[i].vida -= daño;
							}
							else
							{
								var daño = (str - defensa)*2
								enemigo[i].vida-= daño;
							}
							
							estado = usuario.nombre + " dañó " + daño + " a "+ enemigo[i].nombre;
						}
						else{ estado = "Fallaste";}
						//dibujarpelea(i);
						turno = 1;
					}
					if(codigo == movs.curar)
					{ 	
						if(usuario.magia > 0)
						{
							usuario.vida += Math.ceil((usuario.fmagi + usuario.vit)*0.1);
							estado = "Te curaste " + Math.ceil((usuario.fmagi + usuario.vit)*0.1) + " de vida";
							usuario.magia--;
						}
						else{ estado = "Fallaste";}
						turno = 1;
					}
				}
			
					
						
					//turno enemigo
					if(turno==1)
					{
						if(enemigo[i].vida > 0)
							{
								var opc = Math.floor((Math.random() * 5) + 1)
								if(opc == 1)
									{
										if(enemigo[i].magia > 0)
										{
											enemigo[i].vida += Math.ceil((enemigo[i].fmagi + enemigo[i].vit)*0.1);
											accion = enemigo[i].nombre + " se curó " + Math.ceil((enemigo[i].fmagi + enemigo[i].vit)*0.1) + " de vida";
											enemigo[i].magia--;
										}
										else{ accion = enemigo[i].nombre + " falló";}	
										turno = 0
										//alert("puño");
									}
								if(opc == 2)
									{ 	var hit = Math.floor((Math.random() * enemigo[i].dex) + 1);
										var miss = Math.floor((Math.random() * usuario.agi) + 1);

										if(hit >= miss)
										{
											var str = Math.floor((Math.random() * enemigo[i].fuerza) + 1);
											var defensa = Math.floor((Math.random() * usuario.def) + 1);
											if (str <= defensa)
											{
												var daño = 1
												usuario.vida -= daño;
											}
											else
											{
												var daño = (str - defensa)*2
												usuario.vida-= daño;
											}
							
											accion = enemigo[i].nombre + " dañó " + daño + " a "+ usuario.nombre;
										}
										else{ accion = enemigo[i].nombre + " falló";}
											turno = 0;
									}

								if(opc == 3)
									{ 	var hit = Math.floor((Math.random() * enemigo[i].dex) + 1);
										var miss = Math.floor((Math.random() * usuario.agi) + 1);

										if(hit >= miss)
										{
											var str = Math.floor((Math.random() * enemigo[i].fmagi) + 1);
											var defensa = Math.floor((Math.random() * usuario.def) + 1);
											if (str <= defensa)
											{
												var daño = 1
												usuario.vida -= daño;
											}
											else
											{
												var daño = (str - defensa)*2
												usuario.vida-= daño;
											}
							
											accion = enemigo[i].nombre + " dañó " + daño + " a "+ usuario.nombre;
										}
										else{ accion = enemigo[i].nombre + " falló";}
											turno = 0;
									}
								if(opc == 4)
									{ 	var hit = (Math.floor((Math.random() * enemigo[i].dex) + 1))*2;
										var miss = Math.floor((Math.random() * usuario.agi) + 1);

										if(hit >= miss)
										{
											var str = Math.floor((Math.random() * enemigo[i].fmagi) + 1);
											var defensa = Math.floor((Math.random() * usuario.def) + 1);
											if (str <= defensa)
											{
												var daño = 1
												usuario.vida -= daño;
											}
											else
											{
												var daño = (str - defensa);
												usuario.vida-= daño;
											}
							
											accion = enemigo[i].nombre + " dañó " + daño + " a "+ usuario.nombre;
										}
										else{ accion = enemigo[i].nombre + " falló";}
											turno = 0;
									}
								if(opc == 5)
									{ 	var hit = Math.floor((Math.random() * enemigo[i].agi) + 1);
										var miss = Math.floor((Math.random() * usuario.agi) + 1);

										if(hit >= miss)
										{
											var str = Math.floor((Math.random() * enemigo[i].dex) + 1);
											var defensa = Math.floor((Math.random() * usuario.def) + 1);
											if (str <= defensa)
											{
												var daño = 1
												usuario.vida -= daño;
											}
											else
											{
												var daño = (str - defensa)*2
												usuario.vida-= daño;
											}
							
											accionaccion = enemigo[i].nombre + " dañó " + daño + " a "+ usuario.nombre;
										}
										else{ accionaccion = enemigo[i].nombre + " falló";}
											turno = 0;
									}
							}
						//dibujarpelea();	
						//turno = 0;
					}

					if (enemigo[i].vida <= 0)
					{
						pelean = false;
						estado = "";
						accion ="";
						usuario.magia = usuario.sp;
						usuario.vida = usuario.vit;
						if(enemigo[0].vida <=0 && enemigo[1].vida <=0 && enemigo[2].vida <=0 && enemigo[3].vida <=0 && enemigo[4].vida <=0 )
						{
							//alert("¡Ganaste!");
							$("section").addClass("Hidden");
							$("footer").removeClass("Hidden");
						}
						//alert("Venciste al Ender de " + enemigo[i].elemento); 
					}
					if (usuario.vida <= 0)
					{
						accion = "Perdiste";
						estado = "Presiona F5 para intentar de nuevo";
						turno = 3;
						pelean = 3;
					}
				

					dibujarpelea(i);
					//pelea(i);
					
						
						//alert("chocaste con " + enemigo[i].nombre);
					
					
				}	
	}	

		if(!pelean){dibujar();}
	}
}

function dibujar()
{
	if (fondo.fondoOK){
		dibujo.drawImage(fondo.fondo,0,0);
	}
	if (!caritas.arcsitOk){
		dibujo.drawImage(caritas.arcsit, arcantho.posx, arcantho.posy);
	}
	if (!caritas.drasitOk){
		dibujo.drawImage(caritas.drasit, drako.posx,drako.posy);
	}
	if (!caritas.ravsitOk){
		dibujo.drawImage(caritas.ravsit, raven.posx,raven.posy);
	}
	if (!caritas.besitOk){
		dibujo.drawImage(caritas.besit, bece.posx,bece.posy);
	}
	if (!caritas.darsitOk){
		dibujo.drawImage(caritas.darsit, darkanna.posx,darkanna.posy);
	}
	if (!caritas.levsitOk){
		dibujo.drawImage(caritas.levsit, levi.posx,levi.posy);
	}
		
}

function validar0()
{
	if((drakob == true || ravenb == true || beceb == true || darkannab == true || levib == true)== false){
	arcanthob = true;
	usuario = arcantho;
	enemigo = [drako, raven, bece, darkanna,levi];
	caritas.arcsit = caritas.arcantho;
	dibujar();
	mover();
	}
}
function validar1()
{
	if((arcanthob == true || ravenb == true || beceb == true || darkannab == true || levib == true)== false){
	drakob = true;
	usuario = drako;
	enemigo = [arcantho, raven, bece, darkanna,levi];
	caritas.drasit = caritas.drako;
	dibujar();
	mover();
	}
}
function validar2()
{
	if((drakob == true || arcanthob == true || beceb == true || darkannab == true || levib == true)== false){
	ravenb = true;
	usuario = raven;
	enemigo = [drako, arcantho, bece, darkanna,levi];
	caritas.ravsit = caritas.raven;
	dibujar();
	mover();
	}
}
function validar3()
{
	if((drakob == true || ravenb == true || arcanthob == true || darkannab == true || levib == true)== false){
	beceb = true;
	usuario = bece;
	enemigo = [drako, raven, arcantho, darkanna,levi];
	caritas.besit = caritas.bece;
	dibujar();
	mover();
	}
}
function validar4()
{
	if((drakob == true || ravenb == true || beceb == true || arcanthob == true || levib == true)== false){
	darkannab = true;
	usuario = darkanna;
	enemigo = [drako, raven, bece, arcantho,levi];
	caritas.darsit = caritas.darkanna;
	dibujar();
	mover();
	}
}
function validar5()
{
	if((drakob == true || ravenb == true || beceb == true || darkannab == true || arcanthob == true)== false){
	levib = true;
	usuario = levi;
	enemigo = [drako, raven, bece, darkanna,arcantho];
	caritas.levsit = caritas.levi;
	dibujar();
	mover();
	}
}

function dibujarpelea(i)
{
	dibujo.rect(0,0,500,500);
	dibujo.fillStyle="gray";
	dibujo.fill();
	dibujo.strokeStyle = "white";
	dibujo.beginPath();
	dibujo.moveTo(0, 50);
	dibujo.lineTo(500, 50);
	dibujo.lineWidth =100;
	dibujo.stroke()
	dibujo.closePath();
	dibujo.strokeStyle = "white";
	dibujo.beginPath();
	dibujo.moveTo(0, 450);
	dibujo.lineTo(500, 450);
	dibujo.lineWidth =100;
	dibujo.stroke()
	dibujo.closePath();
					//Datos Usuario
	dibujo.font="20px Georgia";
	dibujo.fillStyle="black";
	dibujo.textAlign="start";
	dibujo.fillText(usuario.nombre,10,420);
	dibujo.fillText("Ataques:",200,420);
	dibujo.fillText("Z: Puño",200,460);
	dibujo.fillText("X: Ataque de elemento",300,440);
	dibujo.fillText("C: Ataque de área",300,460);
	dibujo.fillText("A: Ataque rápido",300,480);
	dibujo.fillText("S: Curar",200,480);
	dibujo.fillText("SP: " + usuario.magia,10,480)
	dibujo.font="40px Verdana";
	dibujo.fillStyle="blue";
	dibujo.fillText(usuario.vida,30,450);

					//Datos Enemigo
	dibujo.font="20px Georgia";
	dibujo.fillStyle="black";
	dibujo.fillText(enemigo[i].nombre + ", Ender de " + enemigo[i].elemento,280,20);
	dibujo.font="40px Verdana";
	dibujo.fillStyle="blue";
	dibujo.fillText(enemigo[i].vida,430,50);
					//Estado pelea
	dibujo.font="50px Verdana"
	dibujo.fillStyle ="red";
	dibujo.textAlign = "center";
	dibujo.fillText(accion, 250,200,400);
	dibujo.fillText(estado, 250,300,400);
}

//for (var i = 0; i < 6; i++) {
		//	b[i].addEventListener("click", botones[i] = true);//validar([i]))
		//};
		


	/*caritas.arcantho.src = src.arcanthosrc;
	caritas.arcantho.onload = function()
	{
		caritas.arcanthoOK = true;
		inicio();
	}/*

	
	/*for (var i = 0; i <6; i++) {
		document.write(personajes[i].nombre + "<br>");	
	};*/

	//campotierra.addEventListener("click", function(){alert("sirve?");})

/*function inicio()
{
	if (!caritas.arcanthoOk){
		dibujo.drawImage(caritas.arcantho, 100,100);
	}
}*/

