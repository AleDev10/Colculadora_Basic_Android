//selecionador global
const main = document.getElementById("main");

//segunda pagina
function pagina_dev() {
  console.log("simsimsimsim");
  main.removeChild(secund_home);
  const secund_dev = document.createElement("section");
  secund_dev.setAttribute("id", "secundDev");
  secund_dev.setAttribute("class", "secund");
  main.appendChild(secund_dev);
}

//primeira pagina
function pagina_home() {
  //segunda pagina
  function pagina_dev() {
    console.log("simsimsimsim");
    main.removeChild(secund_home);
    //começo da segunda pagina
    const secund_dev = document.createElement("section");
    secund_dev.setAttribute("id", "secundDev");
    main.appendChild(secund_dev);
    //parte superior
    var superior = document.createElement("div");
    superior.setAttribute("id", "superior");
    secund_dev.appendChild(superior);
    var bt_voltar=document.createElement("button");
    bt_voltar.setAttribute("id", "voltar");
    bt_voltar.addEventListener("click", function() {
        console.log("de volta a home");
        main.removeChild(secund_dev);
        pagina_home()
    })
    superior.appendChild(bt_voltar);
    var icon_voltar=document.createElement("img");
    icon_voltar.setAttribute("src","/calculadorapp/www/icone/voltar1.png")
    bt_voltar.appendChild(icon_voltar);
    var logo_txt=document.createElement("img");
    logo_txt.setAttribute("src","/calculadorapp/www/icone/txt.png")
    logo_txt.setAttribute("id", "logo");
    superior.appendChild(logo_txt);

    //parte central
    var centro = document.createElement("div");
    centro.setAttribute("id", "centro");
    secund_dev.appendChild(centro);
    var foto = document.createElement("div");
    foto.setAttribute("id", "foto");
    centro.appendChild(foto);
    var foto_dev=document.createElement("img");
    foto_dev.setAttribute("id","fotodev")
    foto_dev.setAttribute("src","/calculadorapp/www/img/fotodev.png");
    foto.appendChild(foto_dev);
    var titulo = document.createElement("div");
    titulo.setAttribute("id", "titulo");
    centro.appendChild(titulo);
    var titulo_dev=document.createElement("img");
    titulo_dev.setAttribute("src","/calculadorapp/www/icone/titulo.png");
    titulo.appendChild(titulo_dev);
    var assinatura = document.createElement("div");
    centro.appendChild(assinatura);
    var foto_assina=document.createElement("img");
    foto_assina.setAttribute("src","/calculadorapp/www/icone/nome.png");
    assinatura.appendChild(foto_assina);    
    var dilema = document.createElement("div");
    dilema.setAttribute("id","dilema");
    centro.appendChild(dilema);
    var dilematxt=document.createElement("img");
    dilematxt.setAttribute("src","/calculadorapp/www/img/dilema.png");
    dilema.appendChild(dilematxt);    


    //parte inferior
    var inferior = document.createElement("div");
    inferior.setAttribute("id", "inferior");
    secund_dev.appendChild(inferior);
    var rodape = document.createElement("div");
    rodape.setAttribute("id", "rodape");
    inferior.appendChild(rodape);
    var rodape_txt=document.createElement("img");
    rodape_txt.setAttribute("src","/calculadorapp/www/img/rodape.png");
    rodape.appendChild(rodape_txt); 
  }

  //começo da primeira pagina
  var secund_home = document.createElement("section");
  secund_home.setAttribute("id", "secundHome");
  main.appendChild(secund_home);
  //cabeçalho
  var cabecalho = document.createElement("div");
  cabecalho.setAttribute("id", "cabecalho");
  secund_home.appendChild(cabecalho);
  //botão do Dev
  let botao_dev = document.createElement("button");
  botao_dev.setAttribute("id", "botao_dev");
  botao_dev.addEventListener("click", () => {
    pagina_dev();
  });
  cabecalho.appendChild(botao_dev);
  let icon_dev = document.createElement("img");
  icon_dev.setAttribute("id", "icon");
  icon_dev.setAttribute("src", "./icone/dev.png");
  botao_dev.appendChild(icon_dev);
  //paragrafos
  let saidas = document.createElement("div");
  saidas.setAttribute("id", "saidas");
  cabecalho.appendChild(saidas);
  var output1 = document.createElement("p");
  output1.setAttribute("id", "saida1");
  saidas.appendChild(output1);
  output1.innerHTML = "100+50";
  var output2 = document.createElement("p");
  output2.setAttribute("id", "saida2");
  saidas.appendChild(output2);
  output2.innerHTML = "150";

  //aria de variáveis
  var contador = 0;
  var travaCaracter = false;
  var contagemAddCaracter = 0;

  //funcionalidades
  function adicionarCaracter(x) {
    console.log(x);
    if (contagemAddCaracter < 22) {
      contagemAddCaracter++;
      console.log(contagemAddCaracter);
      if (travaCaracter == true) {
        output1.innerHTML = "";
        output2.innerHTML = "";
        output2.innerHTML += x;
        travaCaracter = false;
        console.log(travaCaracter);
      } else {
        output2.innerHTML += x;
        console.log(travaCaracter);
      }
    } else {
      output1.innerHTML = "";
      output2.innerHTML = "";
      output2.innerHTML += x;
      travaCaracter = false;
      contagemAddCaracter = 0;
      console.log(contagemAddCaracter);
      console.log(travaCaracter);
    }
  }

  function sinal(a) {
    console.log(output1.innerHTML.length);
    if (output1.innerHTML.length > 10) {
      output1.style.fontSize = "50px";
      if (contador == 0) {
        output1.innerHTML = output2.innerHTML + a;
        output2.innerHTML = "";
        contador++;
        console.log(contador + "contador");
        travaCaracter = false;
        console.log(travaCaracter);
      } else {
        let res = eval(output1.innerHTML + output2.innerHTML);
        output1.innerHTML = res + a;
        output2.innerHTML = "";
        travaCaracter = false;
        console.log(travaCaracter);
      }
    } else {
      if (contador == 0) {
        output1.innerHTML = output2.innerHTML + a;
        output2.innerHTML = "";
        contador++;
        console.log(contador + "contador");
        travaCaracter = false;
        console.log(travaCaracter);
      } else {
        let res = eval(output1.innerHTML + output2.innerHTML);
        output1.innerHTML = res + a;
        output2.innerHTML = "";
        travaCaracter = false;
        console.log(travaCaracter);
      }
    }
  }

  function apagarTela() {
    output1.innerHTML = "";
    output2.innerHTML = "";
    console.log("apagar tudo da tela");
    contador = 0;
  }

  function apagarCaracter() {
    output2.innerHTML = output2.innerHTML.substring(
      0,
      output2.innerHTML.length - 1
    );
    console.log("apagar caracter");
  }

  function calcular() {
    let res = output1.innerHTML + output2.innerHTML;
    output1.innerHTML = res;
    output2.innerHTML = eval(res);
    contador = 0;
    travaCaracter = true;
    console.log(travaCaracter);
  }

  //corpo do app
  var corpo = document.createElement("div");
  corpo.setAttribute("id", "corpo");
  secund_home.appendChild(corpo);
  //botões
  let botao_ac = document.createElement("button");
  botao_ac.setAttribute("id", "botao_acao");
  botao_ac.setAttribute("class", "btres");
  botao_ac.addEventListener("click", () => {
    apagarTela();
  });
  botao_ac.innerHTML = "AC";
  corpo.appendChild(botao_ac);
  let botao_expo = document.createElement("button");
  botao_expo.setAttribute("id", "botao_acao");
  botao_expo.addEventListener("click", () => {
    sinal("**");
  });
  botao_expo.innerHTML = "^";
  corpo.appendChild(botao_expo);
  let botao_perce = document.createElement("button");
  botao_perce.setAttribute("id", "botao_acao");
  botao_perce.addEventListener("click", () => {
    sinal("%");
  });
  botao_perce.innerHTML = "%";
  corpo.appendChild(botao_perce);
  let botao_divisao = document.createElement("button");
  botao_divisao.setAttribute("id", "botao_acao");
  botao_divisao.addEventListener("click", () => {
    sinal("/");
  });
  botao_divisao.innerHTML = "/";
  corpo.appendChild(botao_divisao);
  let botao_7 = document.createElement("button");
  botao_7.setAttribute("id", "botao_acao");
  botao_7.addEventListener("click", () => {
    adicionarCaracter("7");
  });
  botao_7.innerHTML = "7";
  corpo.appendChild(botao_7);
  let botao_8 = document.createElement("button");
  botao_8.setAttribute("id", "botao_acao");
  botao_8.addEventListener("click", () => {
    adicionarCaracter("8");
  });
  botao_8.innerHTML = "8";
  corpo.appendChild(botao_8);
  let botao_9 = document.createElement("button");
  botao_9.setAttribute("id", "botao_acao");
  botao_9.addEventListener("click", () => {
    adicionarCaracter("9");
  });
  botao_9.innerHTML = "9";
  corpo.appendChild(botao_9);
  let botao_x = document.createElement("button");
  botao_x.setAttribute("id", "botao_acao");
  botao_x.addEventListener("click", () => {
    sinal("*");
  });
  botao_x.innerHTML = "X";
  corpo.appendChild(botao_x);
  let botao_4 = document.createElement("button");
  botao_4.setAttribute("id", "botao_acao");
  botao_4.addEventListener("click", () => {
    adicionarCaracter("4");
  });
  botao_4.innerHTML = "4";
  corpo.appendChild(botao_4);
  let botao_5 = document.createElement("button");
  botao_5.setAttribute("id", "botao_acao");
  botao_5.addEventListener("click", () => {
    adicionarCaracter("5");
  });
  botao_5.innerHTML = "5";
  corpo.appendChild(botao_5);
  let botao_6 = document.createElement("button");
  botao_6.setAttribute("id", "botao_acao");
  botao_6.addEventListener("click", () => {
    adicionarCaracter("6");
  });
  botao_6.innerHTML = "6";
  corpo.appendChild(botao_6);
  let botao_menos = document.createElement("button");
  botao_menos.setAttribute("id", "botao_acao");
  botao_menos.addEventListener("click", () => {
    sinal("-");
  });
  botao_menos.innerHTML = "-";
  corpo.appendChild(botao_menos);
  let botao_1 = document.createElement("button");
  botao_1.setAttribute("id", "botao_acao");
  botao_1.addEventListener("click", () => {
    adicionarCaracter("1");
  });
  botao_1.innerHTML = "1";
  corpo.appendChild(botao_1);
  let botao_2 = document.createElement("button");
  botao_2.setAttribute("id", "botao_acao");
  botao_2.addEventListener("click", () => {
    adicionarCaracter("2");
  });
  botao_2.innerHTML = "2";
  corpo.appendChild(botao_2);
  let botao_3 = document.createElement("button");
  botao_3.setAttribute("id", "botao_acao");
  botao_3.addEventListener("click", () => {
    adicionarCaracter("3");
  });
  botao_3.innerHTML = "3";
  corpo.appendChild(botao_3);
  let botao_mais = document.createElement("button");
  botao_mais.setAttribute("id", "botao_acao");
  botao_mais.addEventListener("click", () => {
    sinal("+");
  });
  botao_mais.innerHTML = "+";
  corpo.appendChild(botao_mais);
  let botao_0 = document.createElement("button");
  botao_0.setAttribute("id", "botao_acao");
  botao_0.addEventListener("click", () => {
    adicionarCaracter("0");
  });
  botao_0.innerHTML = "0";
  corpo.appendChild(botao_0);
  let botao_pont = document.createElement("button");
  botao_pont.setAttribute("id", "botao_acao");
  botao_pont.addEventListener("click", () => {
    adicionarCaracter(".");
  });
  botao_pont.innerHTML = ".";
  corpo.appendChild(botao_pont);
  let botao_apagar = document.createElement("button");
  botao_apagar.setAttribute("id", "botao_acao");
  botao_apagar.addEventListener("click", () => {
    apagarCaracter();
  });
  corpo.appendChild(botao_apagar);
  let icone_apagar = document.createElement("img");
  icone_apagar.setAttribute("src", "./icone/apagar.png");
  icone_apagar.setAttribute("id", "apagar");
  botao_apagar.appendChild(icone_apagar);
  let botao_res = document.createElement("button");
  botao_res.setAttribute("id", "botao_acao");
  botao_res.setAttribute("class", "btres");
  botao_res.addEventListener("click", () => {
    calcular();
  });
  botao_res.innerHTML = "=";
  corpo.appendChild(botao_res);
}

pagina_home();
