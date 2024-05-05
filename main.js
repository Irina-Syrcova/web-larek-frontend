(()=>{"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===_typeof(i)?i:String(i)),n)}var o,i}function LarekAPI_typeof(t){return LarekAPI_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},LarekAPI_typeof(t)}function LarekAPI_defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function LarekAPI_toPrimitive(t,e){if("object"!==LarekAPI_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==LarekAPI_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===LarekAPI_typeof(i)?i:String(i)),n)}var o,i}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _createSuper(t){var e=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function _possibleConstructorReturn(t,e){if(e&&("object"===LarekAPI_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}var t=function(t){!function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(LarekAPI,t);var e=_createSuper(LarekAPI);function LarekAPI(t,r,n){var o;return function LarekAPI_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,LarekAPI),(o=e.call(this,r,n)).cdn=t,o}return function LarekAPI_createClass(t,e,r){return e&&LarekAPI_defineProperties(t.prototype,e),r&&LarekAPI_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(LarekAPI,[{key:"getProductItem",value:function getProductItem(t){var e=this;return this.get("/product/".concat(t)).then((function(t){return Object.assign(Object.assign({},t),{image:e.cdn+t.image})}))}},{key:"getProductList",value:function getProductList(){var t=this;return this.get("/product").then((function(e){return e.items.map((function(e){return Object.assign(Object.assign({},e),{image:t.cdn+e.image})}))}))}}]),LarekAPI}(function(){function Api(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Api),this.baseUrl=t,this.options={headers:Object.assign({"Content-Type":"application/json"},null!==(e=r.headers)&&void 0!==e?e:{})}}return function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(Api,[{key:"handleResponse",value:function handleResponse(t){return t.ok?t.json():t.json().then((function(e){var r;return Promise.reject(null!==(r=e.error)&&void 0!==r?r:t.statusText)}))}},{key:"get",value:function get(t){return fetch(this.baseUrl+t,Object.assign(Object.assign({},this.options),{method:"GET"})).then(this.handleResponse)}},{key:"post",value:function post(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";return fetch(this.baseUrl+t,Object.assign(Object.assign({},this.options),{method:r,body:JSON.stringify(e)})).then(this.handleResponse)}}]),Api}()),e="".concat("","/api/weblarek"),r="".concat("","/content/weblarek");function Model_typeof(t){return Model_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Model_typeof(t)}function Model_defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function Model_toPrimitive(t,e){if("object"!==Model_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==Model_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===Model_typeof(i)?i:String(i)),n)}var o,i}var n=function(){function Model(t,e){!function Model_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Model),this.events=e,Object.assign(this,t)}return function Model_createClass(t,e,r){return e&&Model_defineProperties(t.prototype,e),r&&Model_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(Model,[{key:"emitChanges",value:function emitChanges(t,e){this.events.emit(t,null!=e?e:{})}}]),Model}();function AppData_typeof(t){return AppData_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},AppData_typeof(t)}function AppData_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function AppData_defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function AppData_toPrimitive(t,e){if("object"!==AppData_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==AppData_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===AppData_typeof(i)?i:String(i)),n)}var o,i}function AppData_createClass(t,e,r){return e&&AppData_defineProperties(t.prototype,e),r&&AppData_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function AppData_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&AppData_setPrototypeOf(t,e)}function AppData_setPrototypeOf(t,e){return AppData_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},AppData_setPrototypeOf(t,e)}function AppData_createSuper(t){var e=function AppData_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var r,n=AppData_getPrototypeOf(t);if(e){var o=AppData_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function AppData_possibleConstructorReturn(t,e){if(e&&("object"===AppData_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function AppData_assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function AppData_getPrototypeOf(t){return AppData_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},AppData_getPrototypeOf(t)}var o=function(t){AppData_inherits(ProductItem,t);var e=AppData_createSuper(ProductItem);function ProductItem(){return AppData_classCallCheck(this,ProductItem),e.apply(this,arguments)}return AppData_createClass(ProductItem,[{key:"categoryStyle",get:function get(){switch(this.category){case"софт-скил":return"soft";case"другое":return"other";case"дополнительное":return"additional";case"кнопка":return"button";case"хард-скил":return"hard";default:return this.category}}},{key:"priceText",get:function get(){return null===this.price?"Бесценно":String(this.price)}}]),ProductItem}(n),i=function(t){AppData_inherits(AppState,t);var e=AppData_createSuper(AppState);function AppState(){return AppData_classCallCheck(this,AppState),e.apply(this,arguments)}return AppData_createClass(AppState,[{key:"setCatalog",value:function setCatalog(t){var e=this;this.catalog=t.map((function(t){return new o(t,e.events)})),this.emitChanges("items:changed",{catalog:this.catalog})}}]),AppState}(n);function Component_typeof(t){return Component_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Component_typeof(t)}function Component_defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function Component_toPrimitive(t,e){if("object"!==Component_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==Component_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===Component_typeof(i)?i:String(i)),n)}var o,i}var a=function(){function Component(t){!function Component_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Component),this.container=t}return function Component_createClass(t,e,r){return e&&Component_defineProperties(t.prototype,e),r&&Component_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(Component,[{key:"toggleClass",value:function toggleClass(t,e,r){t.classList.toggle(e,r)}},{key:"setText",value:function setText(t,e){t&&(t.textContent=String(e))}},{key:"setDisabled",value:function setDisabled(t,e){t&&(e?t.setAttribute("disabled","disabled"):t.removeAttribute("disabled"))}},{key:"setHidden",value:function setHidden(t){t.style.display="none"}},{key:"setVisible",value:function setVisible(t){t.style.removeProperty("display")}},{key:"setImage",value:function setImage(t,e,r){t&&(t.src=e,r&&(t.alt=r))}},{key:"render",value:function render(t){return Object.assign(this,null!=t?t:{}),this.container}}]),Component}();function isSelector(t){return"string"==typeof t&&t.length>1}function ensureElement(t,e){if(isSelector(t)){var r=function ensureAllElements(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(isSelector(t))return Array.from(e.querySelectorAll(t));if(t instanceof NodeList)return Array.from(t);if(Array.isArray(t))return t;throw new Error("Unknown selector element")}(t,e);if(r.length>1&&console.warn("selector ".concat(t," return more then one element")),0===r.length)throw new Error("selector ".concat(t," return nothing"));return r.pop()}if(t instanceof HTMLElement)return t;throw new Error("Unknown selector element")}function Page_typeof(t){return Page_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Page_typeof(t)}function _toConsumableArray(t){return function _arrayWithoutHoles(t){if(Array.isArray(t))return Page_arrayLikeToArray(t)}(t)||function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function Page_unsupportedIterableToArray(t,e){if(!t)return;if("string"==typeof t)return Page_arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Page_arrayLikeToArray(t,e)}(t)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Page_arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Page_defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function Page_toPrimitive(t,e){if("object"!==Page_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==Page_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===Page_typeof(i)?i:String(i)),n)}var o,i}function Page_setPrototypeOf(t,e){return Page_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},Page_setPrototypeOf(t,e)}function Page_createSuper(t){var e=function Page_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var r,n=Page_getPrototypeOf(t);if(e){var o=Page_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function Page_possibleConstructorReturn(t,e){if(e&&("object"===Page_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function Page_assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function Page_getPrototypeOf(t){return Page_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},Page_getPrototypeOf(t)}var c=function(t){!function Page_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Page_setPrototypeOf(t,e)}(Page,t);var e=Page_createSuper(Page);function Page(t,r){var n;return function Page_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Page),(n=e.call(this,t)).events=r,n._catalog=ensureElement(".gallery"),n}return function Page_createClass(t,e,r){return e&&Page_defineProperties(t.prototype,e),r&&Page_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(Page,[{key:"catalog",set:function set(t){var e;(e=this._catalog).replaceChildren.apply(e,_toConsumableArray(t))}}]),Page}(a);function Card_typeof(t){return Card_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Card_typeof(t)}function Card_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Card_defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function Card_toPrimitive(t,e){if("object"!==Card_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==Card_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===Card_typeof(i)?i:String(i)),n)}var o,i}function Card_createClass(t,e,r){return e&&Card_defineProperties(t.prototype,e),r&&Card_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Card_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Card_setPrototypeOf(t,e)}function Card_setPrototypeOf(t,e){return Card_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},Card_setPrototypeOf(t,e)}function Card_createSuper(t){var e=function Card_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var r,n=Card_getPrototypeOf(t);if(e){var o=Card_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function Card_possibleConstructorReturn(t,e){if(e&&("object"===Card_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function Card_assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function Card_getPrototypeOf(t){return Card_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},Card_getPrototypeOf(t)}var u=function(t){Card_inherits(CatalogItem,t);var e=Card_createSuper(CatalogItem);function CatalogItem(t,r){return Card_classCallCheck(this,CatalogItem),e.call(this,"card-catalog",t,r)}return Card_createClass(CatalogItem)}(function(t){Card_inherits(Card,t);var e=Card_createSuper(Card);function Card(t,r,n){var o;return Card_classCallCheck(this,Card),(o=e.call(this,r)).blockName=t,o._category=ensureElement(".card__category",r),o._title=ensureElement(".card__title",r),o._image=ensureElement(".card__image",r),o._price=ensureElement(".card__price",r),o}return Card_createClass(Card,[{key:"id",get:function get(){return this.container.dataset.id||""},set:function set(t){this.container.dataset.id=t}},{key:"title",set:function set(t){this.setText(this._title,t)}},{key:"image",set:function set(t){this.setImage(this._image,t,this.title)}},{key:"category",set:function set(t){this.toggleClass(this._category,"card__category_".concat(t))}},{key:"price",set:function set(t){"Бесценно"!==t?this.setText(this._price,"".concat(t," синапсов")):this.setText(this._price,"".concat(t))}}]),Card}(a));function events_typeof(t){return events_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},events_typeof(t)}function events_defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function events_toPrimitive(t,e){if("object"!==events_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==events_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===events_typeof(i)?i:String(i)),n)}var o,i}var f=new(function(){function EventEmitter(){!function events_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,EventEmitter),this._events=new Map}return function events_createClass(t,e,r){return e&&events_defineProperties(t.prototype,e),r&&events_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(EventEmitter,[{key:"on",value:function on(t,e){var r;this._events.has(t)||this._events.set(t,new Set),null===(r=this._events.get(t))||void 0===r||r.add(e)}},{key:"off",value:function off(t,e){var r;this._events.has(t)&&(this._events.get(t).delete(e),0===(null===(r=this._events.get(t))||void 0===r?void 0:r.size)&&this._events.delete(t))}},{key:"emit",value:function emit(t,e){this._events.forEach((function(r,n){(n instanceof RegExp&&n.test(t)||n===t)&&r.forEach((function(t){return t(e)}))}))}},{key:"onAll",value:function onAll(t){this.on("*",t)}},{key:"offAll",value:function offAll(){this._events=new Map}},{key:"trigger",value:function trigger(t,e){var r=this;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.emit(t,Object.assign(Object.assign({},n||{}),e||{}))}}}]),EventEmitter}()),s=new t(r,e);f.onAll((function(t){var e=t.eventName,r=t.data;console.log(e,r)}));var l=ensureElement("#card-catalog"),p=new i({},f),y=new c(document.body,f);f.on("items:changed",(function(){y.catalog=p.catalog.map((function(t){return new u(function cloneTemplate(t){return ensureElement(t).content.firstElementChild.cloneNode(!0)}(l),{onClick:function onClick(){return f.emit("card:select",t)}}).render({title:t.title,image:t.image})}))})),s.getProductList().then(p.setCatalog.bind(p)).catch((function(t){console.error(t)}))})();
//# sourceMappingURL=main.js.map