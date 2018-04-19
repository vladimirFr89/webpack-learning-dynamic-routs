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