/*Attention!
//If you try to steal the code, you will be reported to the DMCA. 
//Attention, the code of this site is officially registered.
//We strongly do not recommend copying it in order to avoid fines!*/
/*function reloadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.documentElement.appendChild(script);
}
reloadScript('url to reload');*/
/*window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    document.querySelector('.custombg').style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    document.querySelector('.custombg1').style.transform = 'translate(-' + x * 80 + 'px, -' + y * 80 + 'px)';
    document.querySelector('.custombg2').style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
    document.querySelector('.custombg3').style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
});*/

document.addEventListener('load', () => document.querySelectorAll('.product__price').forEach(elem => parseInt(elem.innerText) == 0 ? elem.innerText = 'БЕСПЛАТНО' : ''), true);
window.addEventListener("hashchange", function () {
  UpdateServerList();
  UpdateCategories();
  Remove();
  $("button.btn-block")?.remove();
});

UpdateCategories();
Remove();
function Remove() {
  var navbuttons = document.getElementsByClassName("nav");
  if (navbuttons.length == 0) {
    setTimeout(function () {
      Remove();
    }, 10);
    return;
  } injectScriptAndUse();
}

function injectScriptAndUse() {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
  script.onload = function () { main(); };
  head.appendChild(script);
  //начало 

  //конец
}
function main() {
  $(document).on = () => {
  };
  $("button.btn-block").remove();
}

function GetUserLang() {  //ЭТА КРУТАЯ ФУНКЦИЯ ПОМОЖЕТ УЗНАТЬ КАКОЙ ЯЗЫК УСТАНОВЛЕН У ЮЗЕРА В КУКАХ ))) (en or ru)   console.log(GetUserLang()); = en  Это самый лучший вариант
  var nameEQ = "lang=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


ReplaceButton();
async function ReplaceButton() {
  var navbuttons = document.getElementsByClassName("nav");

  if (navbuttons.length == 0) {
    setTimeout(function () {
      ReplaceButton();
    }, 10);
    return;
  }

  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
  head.appendChild(script);

  for (let i = 0; i < navbuttons.length; i++) {
    var el = navbuttons[i];

    var buttons = el.getElementsByTagName("a");
    for (let s = 0; s < buttons.length; s++) {
      var button = buttons[s];
      if (button.getAttribute("href") == "/files/stores/backend/steam.php?login" || button.innerHTML == "Войти") {
        button.innerHTML = "Авторизация";
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030460726785081414/Group_209.png");
        imageElem.classList.add("ico_login");
        button.appendChild(imageElem);
      }
      if (button.innerHTML == "Магазин" || button.innerHTML == "Store") {
        button.innerHTML = "Товары";
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", "https://i.imgur.com/z3BbkXC.png");
        imageElem.classList.add("icons_product");
        button.appendChild(imageElem);
        //Начало
        const findedSlider = document.getElementsByClassName('slider');
        if (findedSlider.length == 0) {
          const elem = document.createElement('div');
          const container = document.getElementsByClassName('container')[0];
          elem.classList.add('slider');
          let sliderprepare = sliderHtml;
          if (GetUserLang() == "en") {
            sliderprepare = sliderprepare.replace(/class="slider__item"/g, "class=\"slider__item enslider\"");
          }
          elem.innerHTML = sliderprepare;

          container.appendChild(elem);
          ItcSlider.createInstances();
        }
        //Конец
      }

      if (button.innerHTML == "Russian") {
        button.innerHTML = " RU ";
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030462893449297920/Group_210.png");
        imageElem.classList.add("iconss");
        button.appendChild(imageElem);
      }
      if (button.innerHTML == "English") {
        button.innerHTML = " EN ";
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030811419391823944/197374.png");
        imageElem.classList.add("iconss");
        button.appendChild(imageElem);
      }
      if (button.innerHTML == " RU ") {
        button.innerHTML = " RU ";
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030462893449297920/Group_210.png");
        imageElem.classList.add("iconss");
        button.appendChild(imageElem);
      }
      if (button.innerHTML == " EN ") {
        button.innerHTML = " EN ";
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1030811419391823944/197374.png");
        imageElem.classList.add("iconss");
        button.appendChild(imageElem);
      }
      if (button.innerHTML == "Информация") {
        button.innerHTML = "Информация";
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", "https://i.imgur.com/AL4cULD.png");
        imageElem.classList.add("iconss");
        button.appendChild(imageElem);
      }
      if ((button.innerHTML == "Профиль" || button.innerHTML == "Profile") && button.getAttribute("role") == "button") {

        // el.classList.remove("nav"); //удаляем класс nav
        const ava = await apiRequest();
        button.innerHTML = "";
        var imageElem = document.createElement("img");
        imageElem.setAttribute("src", ava.data.avatar);
        imageElem.classList.add("ava");
        button.appendChild(imageElem);
      }
    }
  }

  UpdateServerList();



  // storage.modal.banContainer.innerHTML = sliderHtml;
}

function UpdateCategories() {
  var catClass = document.getElementsByClassName("store-categories");
  if (catClass.length == 0) {
    setTimeout(function () {
      UpdateCategories();
    }, 10);
    return;
  }
  //Если будет багать переписать календарь
  const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(),
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
      lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
      let currentDate = new Date(currYear, currMonth, i);
      let dayOfWeek = currentDate.getDay();
      let dayClass = "";
      let tooltiptext = "";
      switch (dayOfWeek) {
        case 1: // Monday
          dayClass = "monday";
          if (i <= 4) {
            dayClass += " first-monday";
            tooltiptext = "Первая среда месяца";
          } else if (i >= 11 && i <= 17) {
            dayClass += " two-global-monday";
            tooltiptext = "Две глобальные среда месяца";
          } else if (i >= 25 && i <= 30) {
            dayClass += " two-global-monday";
            tooltiptext = "Две глобальные среда месяца";
          } else if (i >= 5 && i <= 26) {
            dayClass += " wipe-monday";
          }
          break;
        case 2: // Tuesday
          dayClass = "tuesday";
          if (i >= 1 && i <= 31) {
            dayClass += " wipe-tuesday";
          }
          break;
        case 3: // Wednesday
          dayClass = "wednesday";
          if (i <= 5) {
            dayClass += " first-wednesday";
            tooltiptext = "Первая среда месяца";
          } else if (i >= 13 && i <= 19) {
            dayClass += " two-global-wednesday";
            tooltiptext = "Две глобальные среда месяца";
          } else if (i >= 27 && i <= 30) {
            dayClass += " two-global-wednesday";
            tooltiptext = "Две глобальные среда месяца";
          } else if (i >= 7 && i <= 26) {
            dayClass += " wipe-wednesday";
          }
          break;
        case 4: // Thursday
          dayClass = "thursday";
          if (i <= 7) {
            dayClass += " first-thursday";
            tooltiptext = "Первый четверг месяца";
          } else if (i >= 14 && i <= 20) {
            dayClass += " two-global-thursday";
            tooltiptext = "Две глобальные четверги месяца";
          } else if (i >= 28 && i <= 31) {
            dayClass += " two-global-thursday";
            tooltiptext = "Две глобальные четверги месяца";
          } else if (i >= 4 && i <= 27) {
            dayClass += " wipe-thursday";
          }
          break;
        case 5: // Friday
          dayClass = "friday";
          if (i <= 7) {
            dayClass += " first-friday";
            tooltiptext = "Первая пятница месяца";
          } else if (i > 14 && i <= 21) {
            dayClass += " two-global-friday";
            tooltiptext = "Две глобальные пятницы месяца";
          } else if (i >= 29 && i <= 31) {
            dayClass += " two-global-friday";
            tooltiptext = "Две глобальные пятницы месяца";
          } else if (i >= 8 && i <= 28) {
            dayClass += " wipe-friday";
          }
          break;
        case 6: // Saturday
          dayClass = "saturday";
          if (i <= 8) {
            dayClass += " first-saturday";
            tooltiptext = "Глобал вайп Paradise";
          } else if (i > 15 && i <= 22) {
            dayClass += " two-global-saturday";
            tooltiptext = "Две глобальные субботы месяца";
          } else if (i >= 30 && i <= 31) {
            dayClass += " two-global-saturday";
            tooltiptext = "Две глобальные субботы месяца";
          } else if (i >= 8 && i <= 29) {
            dayClass += " wipe-saturday";
          }
          break;
        default:
          dayClass = "allday";
      }
      liTag += `<li class="${isToday} ${dayClass}">${i}</li>`;
      liTag += `<span class="tooltiptext">${tooltiptext}</span>`;
    }
    for (let i = lastDayofMonth; i < 7; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
  }
  renderCalendar();
  prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

      if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth, new Date().getDate());
        currYear = date.getFullYear();
        currMonth = date.getMonth();
      } else {
        date = new Date();
      }
      renderCalendar();
    });
  });
  //конец
  ReplaceButton();
  var categoryList = catClass[0].getElementsByTagName("button");

  for (let i = 0; i < categoryList.length; i++) {
    var cat = categoryList[i];

    if (cat.innerHTML == "Все") {
      if (cat.classList.contains("allitems")) return;
      //  cat.innerHTML = "";
      cat.classList.add("allitems");
      var imageElem = document.createElement("img");
      imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031689319674556568/all.png");

      imageElem.classList.add("catitem");
      cat.appendChild(imageElem);
    }
    if (cat.innerHTML == "Привилегии") {
      // cat.innerHTML = "";
      cat.classList.add("product_item");
      var imageElem = document.createElement("img");
      imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031978335531696159/94c7b834ecd8ba60.png");

      imageElem.classList.add("catitem");
      cat.appendChild(imageElem);
    }
    if (cat.innerHTML == "Кейсы") {
      // cat.innerHTML = "";
      cat.classList.add("case_item");
      var imageElem = document.createElement("img");
      imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031996464383152128/1.png");

      imageElem.classList.add("catitem");
      cat.appendChild(imageElem);
    }
    if (cat.innerHTML == "Наборы") {
      // cat.innerHTML = "";
      cat.classList.add("box_item");
      var imageElem = document.createElement("img");
      imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031980806207443026/db226f06b5e5a80b.png");

      imageElem.classList.add("catitem");
      cat.appendChild(imageElem);
    }
  }
}

async function UpdateServerList() {
  var serverList = document.getElementsByClassName("xserver");
  if (serverList.length == 0) {
    setTimeout(function () {
      UpdateServerList();
    }, 10);
    return;
  }

  var serversRequest = await GetServers();
  for (let i = 0; i < serverList.length; i++) {
    var server = serverList[i];
    if (serverList.length - 1 == i) {
      if (server.classList.contains("allonline")) continue;
      var title = server.getElementsByClassName("xserver__title")[0];
      var isEn = title.innerHTML.indexOf('Общий') > -1 ? "Наслаждаются игрой:" : "Enjoy the game:";
      title.innerHTML = isEn;
      server.classList.add("allonline");
    }
    var online = server.getElementsByClassName("xserver__status")[0];
    var onlineText = online.innerHTML;

    if (onlineText.indexOf('Выключен') > -1) {
      online.classList.add("offlineserver");
      continue;
    }
    if (online.childNodes.length > 1) continue;
    var imageElem = document.createElement("img");
    imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031603386031808603/Vectorpeople.png");
    imageElem.classList.add("onlineimage");
    online.appendChild(imageElem);
    if (server.classList.contains("allonline")) continue;
    var currentServer = serversRequest.data.servers[i];
    var buttonToCopyServer = document.createElement("span");
    buttonToCopyServer.classList.add("server-copy-ip");
    buttonToCopyServer.dataset.serverip = `${currentServer.ip}:${currentServer.port}`;

    server.appendChild(buttonToCopyServer);
    var imageElem = document.createElement("img");
    imageElem.setAttribute("src", "https://cdn.discordapp.com/attachments/701511982456635433/1031965803274305577/copy.png");
    imageElem.classList.add("copyicon");
    imageElem.onclick = function (t) {
      var n = null;
      for (const child of t?.path[1]?.children) {
        if (child.className === "server-copy-ip") {
          n = child;
        }
      }
      n.dataset.serverip && navigator.clipboard && (navigator.clipboard.writeText("client.connect ".concat(n.dataset.serverip)), ShowNotify("IP сервера успешно скопирован", false));
    };
    server.appendChild(imageElem);
  }
}

function ShowNotify(text, error) {
  var t, n = this,
    o = Date.now();
  document.querySelector(".toast-wrapper").insertAdjacentHTML("beforeend", '\n      <div data-toastid="'.concat(o, '" class="toast-wrapper__toast toast-wrapper__toast_').concat(error ? "error" : "success", '">\n          <p class="toast-wrapper__text">\n              ').concat(text, '\n          </p>\n\n          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M18 6L6 18" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n              <path d="M6 6L18 18" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n          </svg>\n      </div>\n    ')), document.querySelector('div[data-toastid="'.concat(o, '"] svg')).addEventListener("click", (function () {
    clearTimeout(t), RemoveToasts(o)
  })), t = setTimeout((function () {
    RemoveToasts(o)
  }), 2000)
}
function RemoveToasts(e) {
  document.querySelector('div[data-toastid="'.concat(e, '"]')).classList.add("toast-wrapper__toast_out"), setTimeout((function () {
    document.querySelector('div[data-toastid="'.concat(e, '"]')).remove()
  }), 201)
}

const GetServers = async () => {
  return await new Promise((res) => {
    const request = new XMLHttpRequest();

    request.open('POST', `${window.location.origin}/files/stores/backend/store.info.php`);
    request.setRequestHeader('Accept', "application/json");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    request.onload = () => {
      res(JSON.parse(request.response));
    }

    request.send(JSON.stringify({
      action: "servers"
    }));
  });
}
const apiRequest = async () => {
  return await new Promise((res) => {
    const request = new XMLHttpRequest();

    request.open('POST', `${window.location.origin}/files/stores/backend/store.users.php`);
    request.setRequestHeader('Accept', "application/json");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    request.onload = () => {
      res(JSON.parse(request.response));
    }

    request.send(JSON.stringify({
      action: "info"
    }));
  });
}

const sliderHtml = `<div class="cursor"></div><div class="slider" data-slider="itc-slider" data-loop="true">
      <div class="slider__container">
        <div class="slider__wrapper">
          <div class="slider__items">
            <div class="slider__item">
              <!-- Контент 1 слайда -->
            </div>
            <div class="slider__item">
              <!-- Контент 2 слайда -->
            </div>
            <div class="slider__item">
              <!-- Контент 3 слайда -->
            </div>
            <div class="slider__item">
              <!-- Контент 4 слайда -->
            </div>
            <div class="slider__item">
              <!-- Контент 5 слайда -->
            </div>
          </div>
        </div>
      </div>
      <button class="slider__control" data-slide="prev"></button>
      <button class="slider__control" data-slide="next"></button>
 <ol class="slider__indicators">
        <li data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
        <li data-slide-to="3"></li>
        <li data-slide-to="4"></li>
      </ol>
    </div>
`;


class ItcSlider {
  static WRAPPER_SELECTOR = '.slider__wrapper';
  static ITEMS_SELECTOR = '.slider__items';
  static ITEM_SELECTOR = '.slider__item';
  static CONTROL_CLASS = 'slider__control';
  static SELECTOR_PREV = '.slider__control[data-slide="prev"]';
  static SELECTOR_NEXT = '.slider__control[data-slide="next"]';
  static SELECTOR_INDICATOR = '.slider__indicators>li';
  static SLIDER_TRANSITION_OFF = 'slider_disable-transition';
  static CLASS_CONTROL_HIDE = 'slider__control_hide';
  static CLASS_ITEM_ACTIVE = 'slider__item_active';
  static CLASS_INDICATOR_ACTIVE = 'active';
  static contains = [];

  static createInstances() {
    if (GetUserLang() == "en") {
      this.ITEM_SELECTOR = ".slider__item,.enslider";
    }
    document.querySelectorAll('[data-slider="itc-slider"]').forEach((el) => {
      if (this.contains.find((item) => item.el === el)) {
        return;
      }
      const dataset = el.dataset;
      const params = {};
      Object.keys(dataset).forEach((key) => {
        if (key === 'slider') {
          return;
        }
        let value = dataset[key];
        value = value === 'true' ? true : value;
        value = value === 'false' ? false : value;
        value = Number.isNaN(Number(value)) ? Number(value) : value;
        params[key] = value;
      });
      this.contains.push({ el, slider: new ItcSlider(el, params) });
      el.dataset.sliderId = this.contains.length;
      el.querySelectorAll('.slider__control').forEach((el) => {
        el.dataset.sliderTarget = this.contains.length;
      });
    });

    var toasts = document.createElement("div");
    toasts.classList.add("toast-wrapper");
    document.body.appendChild(toasts);
  }

  constructor(selector, config) {
    // элементы слайдера
    const $root = typeof selector === 'string' ? document.querySelector(selector) : selector;
    this._$root = $root;
    this._$wrapper = $root.querySelector(ItcSlider.WRAPPER_SELECTOR);
    this._$items = $root.querySelector(ItcSlider.ITEMS_SELECTOR);
    this._$itemList = $root.querySelectorAll(ItcSlider.ITEM_SELECTOR);
    this._$controlPrev = $root.querySelector(ItcSlider.SELECTOR_PREV);
    this._$controlNext = $root.querySelector(ItcSlider.SELECTOR_NEXT);
    this._$indicatorList = $root.querySelectorAll(ItcSlider.SELECTOR_INDICATOR);
    // экстремальные значения слайдов
    this._minOrder = 0;
    this._maxOrder = 0;
    this._$itemWithMinOrder = null;
    this._$itemWithMaxOrder = null;
    this._minTranslate = 0;
    this._maxTranslate = 0;
    // направление смены слайдов (по умолчанию)
    this._direction = 'next';
    // determines whether the position of item needs to be determined
    this._balancingItemsFlag = false;
    this._activeItems = [];
    // текущее значение трансформации
    this._transform = 0;
    // swipe параметры
    this._hasSwipeState = false;
    this.__swipeStartPos = 0;
    // slider properties
    this._transform = 0; // текущее значение трансформации
    this._intervalId = null;
    // configuration of the slider
    this._config = {
      loop: true,
      autoplay: true,
      interval: 10000,
      refresh: true,
      swipe: true,
    };
    this._config = Object.assign(this._config, config);
    // create some constants
    const $itemList = this._$itemList;
    const widthItem = $itemList[0].offsetWidth;
    // const widthWrapper = this._$wrapper.offsetWidth;
    const widthWrapper = this._$wrapper.getBoundingClientRect().width;
    const itemsInVisibleArea = Math.round(widthWrapper / widthItem);
    // initial setting properties
    this._widthItem = widthItem;
    this._widthWrapper = widthWrapper;
    this._itemsInVisibleArea = itemsInVisibleArea;
    this._transformStep = 100 / itemsInVisibleArea;

    this._widthStep = $itemList[0].getBoundingClientRect().width;

    this._el = $root;

    // initial setting order and translate items
    for (let i = 0, length = $itemList.length; i < length; i++) {
      $itemList[i].dataset.index = i;
      $itemList[i].dataset.order = i;
      $itemList[i].dataset.translate = 0;
      if (i < itemsInVisibleArea) {
        this._activeItems.push(i);
      }
    }
    if (this._config.loop) {
      // перемещаем последний слайд перед первым
      const count = $itemList.length - 1;
      // const translate = -$itemList.length * 100;
      const translate = -$itemList.length * this._widthStep;
      $itemList[count].dataset.order = -1;
      $itemList[count].dataset.translate = translate;
      $itemList[count].style.transform = `translateX(${translate}px)`;
      this._refreshExtremeValues();
    } else if (this._$controlPrev) {
      this._$controlPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
    }
    this._setActiveClass();
    this._addEventListener();
    this._updateIndicators();
    this._autoplay();

  }

  _addEventListener() {
    const $root = this._$root;
    const $items = this._$items;
    const config = this._config;

    function onClick(e) {
      const $target = e.target;
      this._autoplay('stop');
      if ($target.classList.contains(ItcSlider.CONTROL_CLASS)) {
        e.preventDefault();
        this._direction = $target.dataset.slide;
        this._move();
      } else if ($target.dataset.slideTo) {
        const index = parseInt($target.dataset.slideTo, 10);
        this._moveTo(index);
      }
      if (this._config.loop) {
        this._autoplay();
      }
    }

    function onMouseEnter() {
      this._autoplay('stop');
    }

    function onMouseLeave() {
      this._autoplay();
    }

    function onTransitionStart() {
      if (this._balancingItemsFlag) {
        return;
      }
      this._balancingItemsFlag = true;
      window.requestAnimationFrame(this._balancingItems.bind(this));
    }

    function onTransitionEnd() {
      this._balancingItemsFlag = false;
    }

    function onResize() {
      window.requestAnimationFrame(this._refresh.bind(this));
    }

    function onSwipeStart(e) {
      this._autoplay('stop');
      const event = e.type.search('touch') === 0 ? e.touches[0] : e;
      this._swipeStartPos = event.clientX;
      this._hasSwipeState = true;
    }

    function onSwipeEnd(e) {
      if (!this._hasSwipeState) {
        return;
      }
      const event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
      const diffPos = this._swipeStartPos - event.clientX;
      if (diffPos > 50) {
        this._direction = 'next';
        this._move();
      } else if (diffPos < -50) {
        this._direction = 'prev';
        this._move();
      }
      this._hasSwipeState = false;
      if (this._config.loop) {
        this._autoplay();
      }
    }

    function onDragStart(e) {
      e.preventDefault();
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        this._autoplay('stop');
      } else if (document.visibilityState === 'visible') {
        if (this._config.loop) {
          this._autoplay();
        }
      }
    }

    $root.addEventListener('click', onClick.bind(this));
    $root.addEventListener('mouseenter', onMouseEnter.bind(this));
    $root.addEventListener('mouseleave', onMouseLeave.bind(this));
    // on resize
    if (config.refresh) {
      window.addEventListener('resize', onResize.bind(this));
    }
    // on transitionstart and transitionend
    if (config.loop) {
      $items.addEventListener('transition-start', onTransitionStart.bind(this));
      $items.addEventListener('transitionend', onTransitionEnd.bind(this));
    }
    // on touchstart and touchend
    if (config.swipe) {
      $root.addEventListener('touchstart', onSwipeStart.bind(this));
      $root.addEventListener('mousedown', onSwipeStart.bind(this));
      document.addEventListener('touchend', onSwipeEnd.bind(this));
      document.addEventListener('mouseup', onSwipeEnd.bind(this));
    }
    $root.addEventListener('dragstart', onDragStart.bind(this));
    // при изменении активности вкладки
    document.addEventListener('visibilitychange', onVisibilityChange.bind(this));
  }
  _refreshExtremeValues() {
    const $itemList = this._$itemList;
    this._minOrder = +$itemList[0].dataset.order;
    this._maxOrder = this._minOrder;
    this._$itemByMinOrder = $itemList[0];
    this._$itemByMaxOrder = $itemList[0];
    this._minTranslate = +$itemList[0].dataset.translate;
    this._maxTranslate = this._minTranslate;
    for (let i = 0, length = $itemList.length; i < length; i++) {
      const $item = $itemList[i];
      const order = +$item.dataset.order;
      if (order < this._minOrder) {
        this._minOrder = order;
        this._$itemByMinOrder = $item;
        this._minTranslate = +$item.dataset.translate;
      } else if (order > this._maxOrder) {
        this._maxOrder = order;
        this._$itemByMaxOrder = $item;
        this._maxTranslate = +$item.dataset.translate;
      }
    }
  }
  _balancingItems() {
    if (!this._balancingItemsFlag) {
      return;
    }
    const $wrapper = this._$wrapper;
    const $wrapperClientRect = $wrapper.getBoundingClientRect();
    const widthHalfItem = $wrapperClientRect.width / this._itemsInVisibleArea / 2;
    const count = this._$itemList.length;
    let translate;
    let clientRect;
    if (this._direction === 'next') {
      const wrapperLeft = $wrapperClientRect.left;
      const $min = this._$itemByMinOrder;
      translate = this._minTranslate;
      clientRect = $min.getBoundingClientRect();
      if (clientRect.right < wrapperLeft - widthHalfItem) {
        $min.dataset.order = this._minOrder + count;
        // translate += count * 100;
        translate += count * this._widthStep;
        $min.dataset.translate = translate;
        $min.style.transform = `translateX(${translate}px)`;
        // update values of extreme properties
        this._refreshExtremeValues();
      }
    } else {
      const wrapperRight = $wrapperClientRect.right;
      const $max = this._$itemByMaxOrder;
      translate = this._maxTranslate;
      clientRect = $max.getBoundingClientRect();
      if (clientRect.left > wrapperRight + widthHalfItem) {
        $max.dataset.order = this._maxOrder - count;
        // translate -= count * 100;
        translate -= count * this._widthStep;
        $max.dataset.translate = translate;
        $max.style.transform = `translateX(${translate}px)`;
        // update values of extreme properties
        this._refreshExtremeValues();
      }
    }
    // updating...
    requestAnimationFrame(this._balancingItems.bind(this));
  }
  _setActiveClass() {
    const activeItems = this._activeItems;
    const $itemList = this._$itemList;
    for (let i = 0, length = $itemList.length; i < length; i++) {
      const $item = $itemList[i];
      const index = +$item.dataset.index;
      if (activeItems.indexOf(index) > -1) {
        $item.classList.add(ItcSlider.CLASS_ITEM_ACTIVE);
      } else {
        $item.classList.remove(ItcSlider.CLASS_ITEM_ACTIVE);
      }
    }
  }
  _updateIndicators() {
    const $indicatorList = this._$indicatorList;
    const $itemList = this._$itemList;
    if (!$indicatorList.length) {
      return;
    }
    for (let index = 0, length = $itemList.length; index < length; index++) {
      const $item = $itemList[index];
      if ($item.classList.contains(ItcSlider.CLASS_ITEM_ACTIVE)) {
        $indicatorList[index].classList.add(ItcSlider.CLASS_INDICATOR_ACTIVE);
      } else {
        $indicatorList[index].classList.remove(ItcSlider.CLASS_INDICATOR_ACTIVE);
      }
    }
  }
  _move() {
    // const step = this._direction === 'next' ? -this._transformStep : this._transformStep;
    const step = this._direction === 'next' ? -this._widthStep : this._widthStep;
    let transform = this._transform + step;
    if (!this._config.loop) {
      // const endTransformValue = this._transformStep * (this._$itemList.length - this._itemsInVisibleArea);
      const endTransformValue = this._widthStep * (this._$itemList.length - this._itemsInVisibleArea);
      // transform = Math.round(transform * 10) / 10;
      if (transform < -endTransformValue || transform > 0) {
        return;
      }
      if (this._$controlPrev) {
        this._$controlPrev.classList.remove(ItcSlider.CLASS_CONTROL_HIDE);
        this._$controlNext.classList.remove(ItcSlider.CLASS_CONTROL_HIDE);
        if (transform === -endTransformValue) {
          this._$controlNext.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
        } else if (transform === 0) {
          this._$controlPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
        }
      }
    }
    const activeIndex = [];
    let i = 0;
    let length;
    let index;
    let newIndex;

    if (this._direction === 'next') {
      for (i = 0, length = this._activeItems.length; i < length; i++) {
        index = this._activeItems[i];
        index += 1;
        newIndex = index;
        if (newIndex > this._$itemList.length - 1) {
          newIndex -= this._$itemList.length;
        }
        activeIndex.push(newIndex);
      }
    } else {
      for (i = 0, length = this._activeItems.length; i < length; i++) {
        index = this._activeItems[i];
        index -= 1;
        newIndex = index;
        if (newIndex < 0) {
          newIndex += this._$itemList.length;
        }
        activeIndex.push(newIndex);
      }
    }
    this._activeItems = activeIndex;
    this._setActiveClass();
    this._updateIndicators();
    this._transform = transform;
    this._$items.style.transform = `translateX(${transform}px)`;
    this._$items.dispatchEvent(new CustomEvent('transition-start', {
      bubbles: true,
    }));

    if (index >= this._$itemList.length)
      index = 0;
  }
  _moveToNext() {
    this._direction = 'next';
    this._move();
  }
  _moveToPrev() {
    this._direction = 'prev';
    this._move();
  }
  _moveTo(index) {
    const $indicatorList = this._$indicatorList;
    let nearestIndex = null;
    let diff = null;
    let i;
    let length;
    for (i = 0, length = $indicatorList.length; i < length; i++) {
      const $indicator = $indicatorList[i];
      if ($indicator.classList.contains(ItcSlider.CLASS_INDICATOR_ACTIVE)) {
        const slideTo = +$indicator.dataset.slideTo;
        if (diff === null) {
          nearestIndex = slideTo;
          diff = Math.abs(index - nearestIndex);
        } else if (Math.abs(index - slideTo) < diff) {
          nearestIndex = slideTo;
          diff = Math.abs(index - nearestIndex);
        }
      }
    }
    diff = index - nearestIndex;
    if (diff === 0) {
      return;
    }
    this._direction = diff > 0 ? 'next' : 'prev';
    for (i = 1; i <= Math.abs(diff); i++) {
      this._move();
    }
  }
  _autoplay(action) {
    if (!this._config.autoplay) {
      return;
    }

    if (action === 'stop') {
      clearInterval(this._intervalId);
      this._intervalId = null;
      return;
    }
    if (this._intervalId === null) {
      this._intervalId = setInterval(() => {
        this._direction = 'next';
        this._move();
      }, this._config.interval);
    }
  }
  _refresh() {
    // create some constants
    const $itemList = this._$itemList;
    const widthItem = $itemList[0].getBoundingClientRect().width;
    const widthWrapper = this._$wrapper.getBoundingClientRect().width;
    const itemsInVisibleArea = Math.round(widthWrapper / widthItem);

    if (widthItem === this._widthStep && itemsInVisibleArea === this._itemsInVisibleArea) {
      return;
    }

    this._autoplay('stop');

    this._$items.classList.add(ItcSlider.SLIDER_TRANSITION_OFF);
    this._$items.style.transform = 'translateX(0)';

    // setting properties after reset
    this._widthItem = widthItem;
    this._widthWrapper = widthWrapper;
    this._itemsInVisibleArea = itemsInVisibleArea;
    this._transform = 0;
    this._transformStep = 100 / itemsInVisibleArea;
    this._widthStep = widthItem;
    this._balancingItemsFlag = false;
    this._activeItems = [];

    // setting order and translate items after reset
    for (let i = 0, length = $itemList.length; i < length; i++) {
      const $item = $itemList[i];
      const position = i;
      $item.dataset.index = position;
      $item.dataset.order = position;
      $item.dataset.translate = 0;
      $item.style.transform = 'translateX(0)';
      if (position < itemsInVisibleArea) {
        this._activeItems.push(position);
      }
    }

    this._setActiveClass();
    this._updateIndicators();
    window.requestAnimationFrame(() => {
      this._$items.classList.remove(ItcSlider.SLIDER_TRANSITION_OFF);
    });

    // hide prev arrow for non-infinite slider
    if (!this._config.loop) {
      if (this._$controlPrev) {
        this._$controlPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
      }
      return;
    }

    // translate last item before first
    const count = $itemList.length - 1;
    // const translate = -$itemList.length * 100;
    const translate = -$itemList.length * this._widthStep;
    $itemList[count].dataset.order = -1;
    $itemList[count].dataset.translate = translate;
    $itemList[count].style.transform = `translateX(${translate}px)`;
    // update values of extreme properties
    this._refreshExtremeValues();
    // calling _autoplay
    this._autoplay();
  }
  next() {
    this._moveToNext();
  }
  prev() {
    this._moveToPrev();
  }
  moveTo(index) {
    this._moveTo(index);
  }
  refresh() {
    this._refresh();
  }
}
//

function Open(Page, usefade = true) {
  closepage();
  var div1 = document.createElement("div");
  div1.style = 'position: relative; z-index: 1050;';
  div1.id = 'ExtModal';
  var div2 = document.createElement("div");
  div2.className = 'modal fade show';
  if (!usefade) div2.classList.add("show");
  div2.style = 'display: block;';
  div2.id = 'quit';
  var div3 = document.createElement("div");
  div3.className = "modal-dialog modal-lg";
  var div4 = document.createElement("div");
  div4.className = "modal-content";
  var div5 = document.createElement("div");
  div5.className = "modal-header";
  div5.innerHTML = '<h4 class="modal-title">' + PageCode[Page].title + '</h4>';
  var div6 = document.createElement("div");
  div6.className = "modal-body";
  div6.innerHTML = PageCode[Page].content;
  var div7 = document.createElement("div");
  div7.className = "modal-footer";
  div7.innerHTML = '<center><button class="btn btn-danger" id="quit"onclick="closepage();">Закрыть</button><center>';
  var div8 = document.createElement("div");
  div8.className = "modal-backdrop fade show";

  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div4.appendChild(div7);
  div1.appendChild(div8);
  if (usefade) setTimeout(() => div2.classList.add("show"), 0);

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(div1);
  body.className = "modal-open";

  if (PageCode[Page].func != null) {
    PageCode[Page].func();
  }
}
/*.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀created by flouONEs with love
      for ultimaterust.com⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡄⠀⣸⣿⢹⣿⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣷⣶⣿⡇⢸⣿⣷⣶⡾⢛⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣹⡇⣿⣿⡛⠋⣠⣾⣧⣀⣤⣤⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⡇⣿⣿⢃⣴⣏⣿⣿⠟⠋⠙⣷⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⠿⡿⠿⠷⢿⣥⣾⣿⣿⠋⠁⢠⠀⠀⣿⡄⠀⠀⠀
⠀⠀⠀⠀⠀⣰⣿⣿⣿⠟⠻⡄⠀⠀⠀⠀⣽⣿⣿⠇⠀⠐⢻⠋⠀⢹⡇⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣿⣿⡀⠀⢿⠀⠀⠀⠀⢻⣿⣿⡀⠰⡄⠀⠀⠀⣿⠃⠀⠀⠀
⠀⠀⠀⢰⣿⡿⠟⠋⠁⠙⢦⣸⡇⠀⠀⠀⠀⠙⢿⣧⠀⢻⣦⡀⢀⣿⠀⠀⠀⠀
⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠈⠹⠇⠀⠀⠀⠀⠀⠀⠙⢷⣼⡿⢷⣾⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//If you try to steal the code, you will be reported to the DMCA. 
//Attention, the code of this site is officially registered. 
//We strongly do not recommend copying it in order to avoid fines!⠀
*/
function closepage() {
  var Modal = document.getElementById('ExtModal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}


var PageCode = new Array();


PageCode["set-ak47"] = {
  title: 'НАБОР "AK-47"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "AK-47" - <span>каждые 3Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1461508848.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-46848560.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1265861812.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1108136649.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/586484018.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>'
};
PageCode["set-lr300"] = {
  title: 'НАБОР "LR300"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "LR300" - <span>каждые 3Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1716193401.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-46848560.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1265861812.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1108136649.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/586484018.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>'
};
PageCode["set-sniper"] = {
  title: 'НАБОР "СНАЙПЕР"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Снайпера" - <span>каждые 3Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-55660037.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-141135377.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/516382256.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-46848560.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1265861812.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1108136649.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/586484018.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>'
};
PageCode["set-semi"] = {
  title: 'НАБОР "БЕРДАНКА"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Берданка" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1745053053.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2128719593.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1108136649.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/586484018.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>'
};
PageCode["set-build"] = {
  title: 'НАБОР "СТРОИТЕЛЬ"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Строитель" - <span>каждые 8Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-505639592.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/271534758.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/447918618.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2104481870.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-975723312.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/97409.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-307490664.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1224598842.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-ubivashka"] = {
  title: 'ПРИВИЛЕГИЯ "УБИВАШКА"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Убивашки" - <span>каждые 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1461508848.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-55660037.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-46848560.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1265861812.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1108136649.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы и Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1471284746.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x12</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/498591726.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/649603450.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1308622549.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>каждые 60М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Инструменты" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-apasniy"] = {
  title: 'ПРИВИЛЕГИЯ "АПАСНЫЙ"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Апасного" - <span>каждые 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/456448245.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-533875561.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2128719593.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-699558439.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы и Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x7500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x4500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x450</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x750</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/384204160.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1308622549.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>каждые 60М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Инструменты" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1440143841.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/790921853.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-hacker"] = {
  title: 'ПРИВИЛЕГИЯ "ХАЦКЕР"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Хацкера" - <span>каждые 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/548699316.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/-533875561.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/523855532.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы и Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/384204160.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1308622549.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>каждые 60М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Инструменты" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-jackpot"] = {
  title: 'ПРИВИЛЕГИЯ "ДЖЕКПОТ"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Джекпота" - <span>каждые 8Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1461508848.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-55660037.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/586484018.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1184406448.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-46848560.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1265861812.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1108136649.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1471284746.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x12</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/498591726.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/649603450.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1308622549.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Всё для дома" - <span>каждые 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416620.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1987447227.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1026117678.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/108061910.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1571725662.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/447918618.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/640562379.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/97409.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-luck"] = {
  title: 'ПРИВИЛЕГИЯ "ФАРТОВЫЙ"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Фартовый" - <span>каждые 8Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109552593.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-533875561.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/586484018.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2128719593.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-699558439.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x7500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x4500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x450</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x750</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1308622549.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Всё для дома" - <span>каждые 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416621.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1987447227.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1026117678.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/108061910.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/447918618.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/97409.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-huzhenekuda"] = {
  title: 'ПРИВИЛЕГИЯ "ХУЖЕ НЕКУДА"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Хуже Некуда" - <span>каждые 8Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/548699316.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-533875561.png">\
<div class="kit-item__quantity">x64</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/586484018.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1785231475.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/919780768.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/384204160.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1308622549.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Всё для дома" - <span>каждые 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416622.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1987447227.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1026117678.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/108061910.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1598790097.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1253290621.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-ultpro"] = {
  title: 'ПРИВИЛЕГИЯ "ULTIMATE PRO"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ultimate Pro" - <span>каждые 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1461508848.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/193190034.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778367295.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/174866732.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1229879204.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gspics.org/images/2022/12/14/0gEeVa.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x256</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x256</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-46848560.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1265861812.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1108136649.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/523855532.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы и Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x40000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x350</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x3500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/50834473.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1471284746.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/498591726.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/649603450.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png">\
<div class="kit-item__quantity">x256</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>каждые 60М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Инструменты" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-ult"] = {
  title: 'ПРИВИЛЕГИЯ "ULTIMATE"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ultimate" - <span>каждые 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1461508848.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-55660037.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-141135377.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x256</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-46848560.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1265861812.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1108136649.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы и Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/50834473.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x350</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1471284746.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x16</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/498591726.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png">\
<div class="kit-item__quantity">x256</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>каждые 60М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Инструменты" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-elite"] = {
  title: 'ПРИВИЛЕГИЯ "ELITE"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Elite" - <span>каждые 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2094080303.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1745053053.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-533875561.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2128719593.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-699558439.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы и Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/50834473.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1471284746.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x12</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png">\
<div class="kit-item__quantity">x256</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>каждые 60М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Инструменты" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1440143841.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/790921853.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-premium"] = {
  title: 'ПРИВИЛЕГИЯ "PREMIUM"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Premium" - <span>каждые 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/456448245.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-533875561.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2128719593.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1595790889.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1211618504.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1366282552.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/106433500.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2107229499.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы и Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x7500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x4500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x450</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x750</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/50834473.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Взрывчатки" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/384204160.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1308622549.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>каждые 60М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Инструменты" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-vip"] = {
  title: 'ПРИВИЛЕГИЯ "VIP"',
  content: '<div class="info_item_kits">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Vip" - <span>каждые 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/548699316.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-533875561.png">\
<div class="kit-item__quantity">x128</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/523855532.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Ресурсы" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-892070738.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/688032252.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/28178745.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-891243783.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1580059655.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/94756378.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/50834473.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Компоненты" - <span>каждые 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1974032895.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/rope.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3552619.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/sewingkit.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1567404401.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1617374968.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>каждые 60М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Инструменты" - <span>каждые 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

function Open(Page, usefade = true) {
  closepage();
  var div1 = document.createElement("div");
  div1.style = 'position: relative; z-index: 1050; width: 600px;';
  div1.id = 'ExtModal';
  var div2 = document.createElement("div");
  div2.className = 'modal fade show';
  if (!usefade) div2.classList.add("show");
  div2.style = 'display: block;';
  div2.id = 'quit';
  var div3 = document.createElement("div");
  div3.className = "modal-dialog modal-lg";
  var div4 = document.createElement("div");
  div4.className = "modal-content";
  var div5 = document.createElement("div");
  div5.className = "modal-header";
  div5.innerHTML = '<h4 class="modal-title">' + PageCode[Page].title + '</h4>';
  var div6 = document.createElement("div");
  div6.className = "modal-body";
  div6.innerHTML = PageCode[Page].content;
  var div7 = document.createElement("div");
  div7.className = "modal-footer";
  div7.innerHTML = '<center><button class="btn btn-danger" id="quit"onclick="closepage();">Закрыть</button><center>';
  var div8 = document.createElement("div");
  div8.className = "modal-backdrop fade show";

  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div4.appendChild(div7);
  div1.appendChild(div8);
  if (usefade) setTimeout(() => div2.classList.add("show"), 0);
  div2.addEventListener("click", function (e) {
    closepage();
  });
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(div1);
  body.className = "modal-open";

  if (PageCode[Page].func != null) {
    PageCode[Page].func();
  }
}
const disabledKeys = ["u", "I", "J", "ctrl", "shift", "i", "j", "ctrl+shift+i", "ctrl+shift+j"]; const showAlert = e => { e.preventDefault(); return alert("Упс, вы не можете просматривать код сайта таким способом!"); }
document.addEventListener("contextmenu", e => { showAlert(e); }); document.addEventListener("keydown", e => { if (e.ctrlKey && disabledKeys.includes(e.key) || e.key === "F12") { showAlert(e); } });
/*/////////////////////////////////////////////////////*/