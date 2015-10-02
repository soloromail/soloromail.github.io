// ==Userscript==
// @name legendsgame_bot
// @description бот для какой-то игры изм
// @author vk.com/it256
// @include http://epoxa.mobi/*
// ==/Userscript==
(function(){
if(location.href.match('epoxa.mobi')) {
var i=0;
var tx='';
speed=1;
/*
Поиск текста на странице
пример: legendsFindText("Победа");
*/
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}


/*
Поиск ссылок на странице
пример: legendsFindLink("Бой");
*/

function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkA(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkEnd(tx) {l=0;
for(i=0;i<document.links.length;i++){
if(document.links[i].text.match(tx)) {l=document.links[i].href;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinker(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
/*
Переход по ссылке с интервалом

*/
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}

/*
Проверка значения хранилища
*/
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}

/*
Назначение для хранилища
*/
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}

function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}

 
 
 
 

if(legendsFindLinkA('Босс')) {
legendsLink(legendsFindLink("Босс"), 1);
}
if(legendsFindText('время восстановления')||legendsFindText('осталось')) {
legendsLink(legendsFindLink('Обновить'), 2000);
}
if(legendsFindText('Вы воскрешены')) {
legendsLink(legendsFindLink('Продолжить'), 2);
}

if(legendsFindText('Высокие горы')) {
t=1000;
if(legendsFindText('Босс возродиться')) t=1000;
if(legendsFindText('Паук')) {
t=1;
}

if(document.getElementsByClassName('progress-blue')[0].style.width=='100%'&&document.getElementsByClassName('progress-blue')[1].style.width=='100%') {
legendsLink(legendsFindLinker('use_spell=3'), t);
}else{
legendsLink(legendsFindLinker('key'), t);
}
}
if(legendsFindLink('Босс')) {
//legendsLink(legendsFindLink("Босс"), 1);
}


if(legendsFindLink('Сумка заполнена')&&!legendsFindLink("Главная")) {
legendsLink(legendsFindLink("Сумка заполнена"), 500/speed);
}
//if(legendsFindLink('Сумка заполнена')&&legendsFindLink("Главная")) {

if(legendsFindLink("одеть")) {
legendsLink(legendsFindLink("одеть"), 500/speed);
}else{
legendsLink(legendsFindLink("Разобрать все"), 500/speed);
}
//}
if(legendsFindText('В сумке вещей не найдено')) {
legendsLink(legendsFindLink("Главная"), 500/speed);
}



legendsLink(legendsFindLink("Разбить"), 500/speed);
//Подземелье
if(!legendsFindLink('Главная')) {
legendsLink('http://epoxa.mobi/', 5000);
}
if(legendsFindText('Вы отправились')) {
legendsLink(legendsFindLink("Главная"), 500/speed);
}
if(legendsFindLinkD('Подземелье','lime')) {
legendsLink(legendsFindLink("Подземелье"), 500/speed);
}
if(legendsFindText('Подземелье')&&legendsFindLink('Главная')) {
legendsLink(legendsFindLink("Начать бой"), 500/speed);
if(!legendsFindLink('Начать бой')&&!document.getElementsByClassName('progress-blue')[0]) {
legendsLink(legendsFindLink("Главная"), 500/speed);
}
if(legendsFindLinker('id')) {
//if(document.getElementsByClassName('progress-blue')[0].style.width=='100%'&&document.getElementsByClassName('progress-blue')[1].style.width=='100%') {
//legendsLink(legendsFindLinker('use_spell=3'), 500/speed);
//}else{
legendsLink(legendsFindLinker('key'), 500/speed);
//}
}
}
//Поход
if(legendsFindLinkD('Поход','lime')) {
legendsLink(legendsFindLink("Поход"), 500/speed);
}
if(legendsFindText('Поход')&&legendsFindLink('Главная')) {
if(legendsFindLinkEnd('Отправиться')) {
legendsLink(legendsFindLinkEnd("Отправиться"), 2000);
}
if(legendsFindLinkEnd('Начать бой')) {
legendsLink(legendsFindLinkEnd("Начать бой"), 500/speed);
}
if(legendsFindLinker('attack')) {
//if(document.getElementsByClassName('progress-blue')[0].style.width=='100%'&&document.getElementsByClassName('progress-blue')[1].style.width=='100%') {
//legendsLink(legendsFindLinker('use_spell=3'), 500/speed);
//}else{
legendsLink(legendsFindLinker('attack'), 500/speed);
//}
}
}
//Арена
if(legendsFindLinkD('Арена','lime')) {
legendsLink(legendsFindLink("Арена"), 500/speed);
}
if(legendsFindText('Арена')&&legendsFindLink('Главная')) {
legendsLink(legendsFindLinkEnd("Сразиться"), 500/speed);
if(legendsFindLinker('attack')) {
//if(document.getElementsByClassName('progress-blue')[0].style.width=='100%'&&document.getElementsByClassName('progress-blue')[1].style.width=='100%') {
//legendsLink(legendsFindLinker('use_spell=3'), 500/speed);
//}else{
legendsLink(legendsFindLinker('attack'), 500/speed);
//}
}
}
if(legendsFindText('Вы устали')) {
legendsLink(legendsFindLink("Главная"), 500/speed);
}
if(legendsFindLink('Забрать награду')) {
legendsLink(legendsFindLink("Забрать награду"), 500/speed);
}
//Выживание
if(legendsFindLinkD('Выживание','lime')) {
legendsLink(legendsFindLink("Выживание"), 500/speed);
}
//&&!legendsFindText('Поход')
if(legendsFindLink('Главная')) {
legendsLink(legendsFindLink("Продолжить"), 500/speed);
legendsLink(legendsFindLinkEnd("Отправиться"), 500/speed);
if(legendsFindLinker('attack')) {
//if(document.getElementsByClassName('progress-blue')[0].style.width=='100%'&&document.getElementsByClassName('progress-blue')[1].style.width=='100%') {
//legendsLink(legendsFindLinker('use_spell=3'), 500/speed);
//}else{
legendsLink(legendsFindLinker('attack'), 500/speed);
//}
}
}



if(legendsFindText("Призрачный Разлом")) {
if(legendsFindLink("150%")) {
legendsLink(legendsFindLink("150%"), 500/speed);
}else if(legendsFindLink("100%")) {
legendsLink(legendsFindLink("100%"), 500/speed);
} else if(legendsFindLink("50%")) {
legendsLink(legendsFindLink("50%"), 500/speed);
}
}
if(legendsFindText("Вы занимаете")) {
legendsLink(legendsFindLink("прoтивник"), 500/speed);
}
if(legendsFindText("Арена Смерти")) {
if(legendsFindLink("В атаку")) {
legendsLink(legendsFindLink("В атаку"), 500/speed);
}
if(legendsFindLink("бить прoтивникa")) {
legendsLink(legendsFindLink("бить прoтивникa"), 500/speed);
}


}
if(legendsFindText("Колизей")) {
if(legendsFindLink("Отправиться в Колизей!")) {
legendsLink(legendsFindLink("Отправиться в Колизей!"), 500/speed);
}
if(legendsFindText("Ожидают")) {
legendsLink(legendsFindLink("Обновить..."), 1500);
}
if(legendsFindLink("Атаковать")) {
legendsLink(legendsFindLink("Атаковать"), 1000);
}
if(legendsFindText("Бой окончен")) {
legendsLink(legendsFindLink("Вернуться в Колизей"), 1500);
}
}
if(legendsFindText("Осада Замка")) {
legendsLink(legendsFindLink("B aтaкy"), 500);
legendsLink(legendsFindLink("бить eщё"), 500);
legendsLink(legendsFindLink("Продолжить"), 500);
legendsLink(legendsFindLink("Aтaкoвaть"), 500);
}

if(legendsFindText("Пески Забвения")) {
legendsLink(legendsFindLink("Отправиться в бой!"), 500);
legendsLink(legendsFindLink("Обновить"), 2000);




}
legendsLink(legendsFindLink("Вернуться в Бездну"), 500);




legendsLink(legendsFindLink("Атаковать"), 500);

legendsLink(legendsFindLink("Зaвepшить пoeдинки"), 500/speed);
}
}
)();
