'use strict'

const newForm = new UserForm();

const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', newForm.loginFormAction);

newForm.loginFormCallback = function(data) {
    ApiConnector.login(data, serverCheck);

    function serverCheck(loginResult) {
        if (!loginResult.success) {
            const message = loginResult.error
            newForm.setLoginErrorMessage(message)
        } else {
            location.reload();
        };
    };
};