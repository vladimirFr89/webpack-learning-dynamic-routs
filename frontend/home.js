'use strict';

import welcome from './welcome';

import total from './calc';

const summ = total(3,3,3);
console.log(`The total summ is ${summ}`);

welcome(`webpack learning! ${summ}`);

document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('loginBtn').onclick = function () {

        //require.ensure будет при необходимости динамически выполнять require для модуля
        //третий параметр require.ensure позволяет объединять динамически подгружаемые модули в одну сборку
        // под заданным именем
        require.ensure(['./login'], function () {
            let login = require('./login');
            login();
        }, 'auth');
    };

    document.getElementById('logoutBtn').onclick = function () {

        require.ensure(['./logout'], function () {
            let login = require('./logout');
            login();
        }, 'auth');

    }
});

