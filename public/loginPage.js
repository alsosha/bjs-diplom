'use strict'

const newForm = new UserForm();


newForm.loginFormCallback = function(data) {
    ApiConnector.login(data, serverCheck);

    function serverCheck(actionResult) {
        if (!actionResult.success) {
            newForm.setLoginErrorMessage(actionResult.error)
        } else {
            location.reload();
        }
    }
}

newForm.registerFormCallback = function(data) {
    ApiConnector.register(data, serverCheck);

    function serverCheck(actionResult) {
        if (!actionResult.success) {
            newForm.setRegisterErrorMessage(actionResult.error)
        } else {
            location.reload();
        }
    }
}