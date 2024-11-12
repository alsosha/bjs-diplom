'use strict'

const newForm = new UserForm();

const loginForm = document.getElementById('login');

const registerForm = document.getElementById('register');

loginForm.addEventListener('submit', newForm.loginFormAction);

registerForm.addEventListener('submit', newForm.registerFormAction);


newForm.loginFormCallback = function(data) {
    ApiConnector.login(data, serverCheck);

    function serverCheck(actionResult) {
        if (!actionResult.success) {
            const message = actionResult.error
            newForm.setLoginErrorMessage(message)
        } else {
            location.reload();
        }
    }
}

newForm.registerFormCallback = function(data) {
    ApiConnector.register(data, serverCheck);

    function serverCheck(actionResult) {
        if (!actionResult.success) {
            const message = actionResult.error
            newForm.setRegisterErrorMessage(message)
        } else {
            location.reload();
        }
    }
}