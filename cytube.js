let nav = document.querySelector(".navbar-inverse");
let chatwrap = document.getElementById("chatwrap");
let video = document.querySelector(".video-stream");
let hideVidBtn = document.getElementById("hide-player-btn");
let pageWidth = document.documentElement.clientWidth;
let tabsWidth = tabs.offsetWidth;

nav.style.display = "none";
chatwrap.style.cssText = "height: calc(100%) !important;";
chatwrap.style.width = pageWidth - tabsWidth + "px";

$(document).ready(function () {
  let div = document.createElement("div");
  div.className = "btns_Wall";
  div.insertAdjacentHTML(
    "afterbegin",
    '<a class="rnd_Wallpaper" id="rndWall1"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M78.83333,0v21.5h14.33333v-21.5zM30.26237,20.12826l-10.13411,10.13411l15.20117,15.20117l10.13411,-10.13411zM141.73763,20.12826l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM86,35.83333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c27.6214,0 50.16667,-22.54527 50.16667,-50.16667c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM86,50.16667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333zM0,78.83333v14.33333h21.5v-14.33333zM150.5,78.83333v14.33333h21.5v-14.33333zM35.32943,126.53646l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM136.67057,126.53646l-10.13411,10.13411l15.20117,15.20117l10.13411,-10.13411zM78.83333,150.5v21.5h14.33333v-21.5z"></path></g></g></svg> </a> <a class="rnd_Wallpaper" id="rndWall2"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86.78735,0.0105c-7.26129,-0.21282 -14.29946,2.52296 -19.51078,7.58397c-5.21132,5.06101 -8.15185,12.01612 -8.15157,19.28053v2.19934c0.0003,0.85983 0.41199,1.66761 1.10754,2.1731l8.0625,5.86316c0.45909,0.33406 1.01219,0.51413 1.57996,0.5144h2.6875v2.6875c-0.30771,0.00073 -0.61304,0.05399 -0.90283,0.15747l-37.23132,13.29577c-7.212,0.28179 -12.91675,6.20426 -12.92835,13.42175c0,1.48427 1.20323,2.6875 2.6875,2.6875h123.625c1.48427,0 2.6875,-1.20323 2.6875,-2.6875c-0.01651,-7.20171 -5.70129,-13.11323 -12.89685,-13.41125l-37.26282,-13.30627c-0.28979,-0.10349 -0.59512,-0.15674 -0.90283,-0.15747v-2.6875h2.6875c0.60618,-0.00041 1.19443,-0.20574 1.66919,-0.58264l7.97327,-5.79492c0.69555,-0.50549 1.10725,-1.31327 1.10754,-2.1731v-2.19934c0.00056,-14.53646 -11.55743,-26.43863 -26.08765,-26.8645zM85.37012,5.3855c5.80867,-0.17025 11.43888,2.01809 15.60787,6.06644c4.16899,4.04835 6.52167,9.61189 6.52201,15.42306v0.82935l-3.32788,2.4198c-2.20755,-8.22055 -9.65971,-13.93467 -18.17151,-13.93344c-8.5118,0.00123 -15.96231,5.71751 -18.16748,13.93869l-3.33313,-2.42505v-0.82935c0.00069,-11.62835 9.24676,-21.14883 20.87012,-21.4895zM85.60107,21.49475c6.53767,-0.19491 12.26607,4.34571 13.56873,10.75525h-26.3396c1.24297,-6.11568 6.53289,-10.57069 12.77087,-10.75525zM77.9375,37.625h16.125v2.6875h-16.125zM73.02966,45.6875h25.94067l22.57605,8.0625h-54.35889v5.375h69.875c3.41492,0.00516 6.45774,2.15699 7.60059,5.375h-117.32617c1.14285,-3.21801 4.18567,-5.36984 7.60059,-5.375h26.875v-5.375h-11.35889zM130.8529,74.96655l-0.56689,5.375l5.34351,0.56165l0.56689,-5.375zM41.1471,74.9718l-5.34351,0.56165l8.48767,80.625l5.34351,-0.5669zM48.375,75.25c-0.76167,-0.00379 -1.48918,0.3158 -2.00164,0.87931c-0.51246,0.56351 -0.76174,1.318 -0.68586,2.07589l8.0625,80.625c0.13801,1.37884 1.30179,2.42669 2.6875,2.4198h59.125c1.38571,0.00689 2.54949,-1.04096 2.6875,-2.4198l8.0625,-80.625c0.07588,-0.75789 -0.1734,-1.51239 -0.68586,-2.07589c-0.51246,-0.56351 -1.23997,-0.8831 -2.00164,-0.87931zM54.11218,80.625h63.80188l-29.14258,34.9375h-5.54297zM86,83.3125c-6.56288,0 -10.75,10.58606 -10.75,16.125c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.53894 -4.18712,-16.125 -10.75,-16.125zM129.72436,85.7323l-8.51917,80.8927h-70.4104l-0.60889,-5.6637l-5.34875,0.5564l0.85034,8.0625c0.13801,1.37884 1.30179,2.42669 2.6875,2.4198h75.25c1.38571,0.00689 2.54949,-1.04096 2.6875,-2.4198l8.75537,-83.2915zM51.92334,86.39368l24.62842,29.55725c-0.80666,0.48544 -1.30049,1.3576 -1.30176,2.29907v13.4375h0.07349l-16.85462,20.20349zM120.09241,86.40418l-6.55603,65.52881l-16.87036,-20.24548h0.08398v-13.4375c-0.00127,-0.94147 -0.49509,-1.81363 -1.30176,-2.29907zM86,88.6875c2.01025,0 5.375,6.73219 5.375,10.75c0,2.96853 -2.40647,5.375 -5.375,5.375c-2.96853,0 -5.375,-2.40647 -5.375,-5.375c0,-4.01781 3.36475,-10.75 5.375,-10.75zM80.625,120.9375h0.08398l1.78992,2.14685l-1.8739,2.24658zM91.29102,120.9375h0.08398v4.40393l-1.87915,-2.25183zM85.99475,127.28357l10.38782,12.46643h-5.00757v13.4375h-10.75v-13.4375h-5.02857zM75.25,140.16467v15.71033h-13.10156zM96.75,140.19092l13.07007,15.68408h-13.07007z"></path></g></g></svg> </a> <a class="rnd_Wallpaper" id="rndWall3"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M72.52051,0c-0.18013,0.003 -0.3595,0.0241 -0.5354,0.06299c-32.55961,6.82022 -58.41392,31.55096 -66.6731,63.77563l5.20703,1.31226c7.10726,-27.80777 28.28766,-49.84504 55.79187,-58.04895c-7.9916,13.12598 -12.16344,28.22093 -12.04651,43.58789c0,42.15075 32.36468,78.11718 75.28674,83.66419l0.69287,-5.32776c-40.25069,-5.203 -70.60462,-38.88124 -70.60462,-78.33643c-0.1648,-16.69328 5.12882,-32.98332 15.0752,-46.39087c0.61512,-0.82072 0.70948,-1.91998 0.24323,-2.83352c-0.46625,-0.91354 -1.41181,-1.48205 -2.43732,-1.46543zM4.09424,69.38684c-0.33862,1.84094 -0.61703,3.70984 -0.82935,5.55347l5.33301,0.61938c0.20694,-1.72537 0.47035,-3.47384 0.7821,-5.19653zM2.80298,80.48328c-0.07704,1.48171 -0.11548,2.97254 -0.11548,4.47217c0,47.99606 40.17346,87.04456 89.55359,87.04456c31.04103,0.39169 60.06249,-15.35004 76.66199,-41.58276c0.5924,-0.95171 0.53185,-2.17116 -0.15193,-3.05949c-0.68378,-0.88833 -1.84713,-1.25892 -2.91874,-0.92977c-8.02924,2.33087 -16.36351,3.44034 -24.7229,3.29114c-2.17687,0 -4.37978,-0.08802 -6.52978,-0.25195l-0.40942,5.35925c2.28975,0.17738 4.62527,0.2677 6.93921,0.2677c6.4723,0.05728 12.93423,-0.53001 19.29016,-1.75317c-16.17389,21.2535 -41.45262,33.59793 -68.15857,33.28406c-46.41581,0 -84.17859,-36.63781 -84.17859,-81.66956c0,-1.40467 0.03844,-2.80172 0.11548,-4.19922z"></path></g></g></svg> </a>'
  );
  footer.append(div);

//   rndWall1.onclick = () => sunWall();
//   rndWall2.onclick = () => lampWall();
//   rndWall3.onclick = () => moonWall();

  function sunWall() {
    let arr = [
      "https://wallpaperaccess.com/full/197641.jpg",
      "https://get.wallhere.com/photo/dusk-low-poly-sunset-1350347.jpg",
      "https://images.alphacoders.com/459/thumb-1920-459654.jpg",
    ];
    let rndCount = Math.floor(Math.random() * arr.length);
    queuecontainer.style.backdropFilter = "none";
    chatwrap.style.backdropFilter = "none";
    console.log(chatwrap);
    document.body.style.backdropFilter = "blur(5px)";
    $("body").css({ "background-image": "url(" + arr[rndCount] + ")" });
  }

  function lampWall() {
    let arr = [
      "https://images2.alphacoders.com/855/thumb-1920-855715.jpg",
      "https://phonoteka.org/uploads/posts/2021-04/1618624758_12-phonoteka_org-p-lampochki-fon-14.jpg",
      "https://shabat.am/img/artpic/Light_Bulbs_wallpaper1.jpg",
      "https://w-dog.ru/wallpapers/13/17/324888236654527/lampy-provoda-nebo-fon.jpg",
      "https://images.pexels.com/photos/331767/pexels-photo-331767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://bitcoinist.com/wp-content/uploads/2018/08/shutterstock_265715363-e1535605038792.jpg",
    ];
    let rndCount = Math.floor(Math.random() * arr.length);
    queuecontainer.style.backdropFilter = "none";
    chatwrap.style.backdropFilter = "none";
    console.log(chatwrap);
    document.body.style.backdropFilter = "blur(5px)";
    $("body").css({ "background-image": "url(" + arr[rndCount] + ")" });
  }

  function moonWall() {
    let arr = [
      "https://catherineasquithgallery.com/uploads/posts/2021-03/1614640418_24-p-fon-luni-dlya-fotoshopa-27.jpg",
      "https://images7.alphacoders.com/312/thumb-1920-312304.jpg",
      "https://get.wallhere.com/photo/artwork-city-cityscape-dark-Moon-skyline-1705495.jpg",
      "https://images.wallpapersden.com/image/download/futuristic-4k-cityscape_bGVlZW6UmZqaraWkpJRnamtlrWZpaWU.jpg",
      "https://images.hdqwalls.com/download/beautiful-blue-purple-sky-4k-9g-2880x1800.jpg",
    ];
    let rndCount = Math.floor(Math.random() * arr.length);
    queuecontainer.style.backdropFilter = "none";
    chatwrap.style.backdropFilter = "none";
    console.log(chatwrap);
    document.body.style.backdropFilter = "blur(5px)";
    $("body").css({ "background-image": "url(" + arr[rndCount] + ")" });
  }

  let footerText = document.querySelector("center");
  footerText.insertAdjacentHTML(
    "beforeend",
    '<br><p class="remake" style="margin-top: 15px; font-size: 12px; color: #7a8288;">Remake by waynell</p>'
  );

  // Cursor coordinates relative to the entire document
  $(document).mousemove(function (event) {
    var y = event.pageY;
    if (
      y <= 10 &&
      document.documentElement.offsetWidth - tabs.offsetWidth <= 15
    ) {
      nav.style.display = "block";
      chatwrap.style.display = "none";
      // chatwrap.style.cssText = "height: calc(100% - 50px) !important;";
      // chatwrap.style.width = document.documentElement.offsetWidth - tabs.offsetWidth + "px";
    }
    if (
      y <= 10 &&
      document.documentElement.offsetWidth - tabs.offsetWidth >= 15
    ) {
      nav.style.display = "block";
      chatwrap.style.display = "block";
      chatwrap.style.cssText = "height: calc(100% - 50px) !important;";
      chatwrap.style.width =
        document.documentElement.offsetWidth - tabs.offsetWidth + 14 + "px";
    }
    if (
      y >= 70 &&
      document.documentElement.offsetWidth - tabs.offsetWidth >= 15
    ) {
      nav.style.display = "none";
      chatwrap.style.cssText = "height: calc(100%) !important;";
      chatwrap.style.display = "block";
      chatwrap.style.width =
        document.documentElement.offsetWidth - tabs.offsetWidth + 14 + "px";
    }
    if (
      y >= 70 &&
      document.documentElement.offsetWidth - tabs.offsetWidth <= 15
    ) {
      nav.style.display = "none";
      chatwrap.style.display = "none";
    }
  });
  if (tabs.offsetWidth - document.documentElement.offsetWidth <= 15) {
    chatwrap.style.display = "none";
  } else {
    chatwrap.style.display = "block";
  }

  // snow
  let snowBody = document.createElement("div");
  snowBody.classList.add("snowBody");
  document.body.append(snowBody);

  function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return rand;
  }

  function createSnow() {
    let snow = document.createElement("div");
    snow.className = `snow`;
    snow.style.left = 99 * Math.random() + "%";
    snow.style.animationDelay = Math.random() + "s";
    snow.style.marginTop = -Math.random() * document.body.clientWidth + "px";
    snow.style.opacity = 0.2 + Math.random();
    snow.style.animation = `snowY ${randomInteger(20, 40)}s linear infinite`;
    return snow;
  }

  function makeSnow() {
    let mySnowFlakes = [],
      i = 0,
      numOfsnowflakes = 52;

    for (i; i < numOfsnowflakes; i++) {
      mySnowFlakes.push(createSnow());
      snowBody.appendChild(mySnowFlakes[i]);
    }
  }
  // makeSnow();  больше снег пока не нужен

  const input = document.querySelector("#chatline");

  let message = "";
  input.addEventListener("keyup", (e) => {
    if (e.target.value !== "") {
      message = e.target.value;
    }
    if (
      (e.keyCode === 13 && message === "!r") ||
      (e.keyCode === 13 && message === "!refresh")
    ) {
      document.body.querySelector("#mediarefresh").click();
    }
  });
});
