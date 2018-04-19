'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

    alert("Welcome to webpack dynamic learning!");

    document.getElementById('loginBtn').onclick = function () {

        //Модуль login будет собран и добавлен в сборку
        // let login = require('./login');
        // login();

        //require.ensure будет при необходимости динамически выполнять require для модуля
        //третий параметр require.ensure позволяет объединять динамически подгружаемые модули в одну сборку
        // под заданным именем
        require.ensure(['./login'], function () {
            let login = require('./login');
            login();
        }, 'auth');
    };

    document.getElementById('logoutBtn').onclick = function () {

        //Модуль logout будет собран и добавлен в сборку
        // let logout = require('./logout');
        // logout();

        require.ensure(['./logout'], function () {
            let login = require('./logout');
            login();
        }, 'auth');

    }
});

let moduleName = location.pathname.slice(1, location.pathname.length - 1);

if(moduleName) {
    alert('Go to module ' + moduleName);
    /*
    * Конструкция указывает для webpack в какой директории лежат модули для сборки
    * и далее будет вызываться модуль moduleName, который был указан в адресной строке*/
    let route = require('./routes/' + moduleName + '.js');

    route();
}