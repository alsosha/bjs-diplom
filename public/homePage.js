const newLogoutButton = new LogoutButton();

newLogoutButton.action = function() {
    ApiConnector.logout((result) => {
        if (result.success) {
            location.reload();
        }
    })
}

ApiConnector.current((result) => {
    if (result.success) {
        ProfileWidget.showProfile(result.data);
    }
});

const newRatesBoard = new RatesBoard();

function stocksUdate() {
    ApiConnector.getStocks((result) => {
        if (result.success) {
            newRatesBoard.clearTable();
            newRatesBoard.fillTable(result.data);
        }
    });
}

stocksUdate();

setInterval(stocksUdate, 60000);


const newMoneyManager = new MoneyManager();

newMoneyManager.addMoneyCallback = function(data) {
    ApiConnector.addMoney(data, (result) => {
        if (result.success) {
            ProfileWidget.showProfile(result.data);
            newMoneyManager.setMessage(result.success, 'Успешно');
        } else {
            newMoneyManager.setMessage(result.success, result.error);
        }
    });
}

newMoneyManager.conversionMoneyCallback = function(data) {
    ApiConnector.convertMoney(data, (result) => {
        console.log(result);
        if (result.success) {
            ProfileWidget.showProfile(result.data);
            newMoneyManager.setMessage(result.success, 'Успешно');
        } else {
            newMoneyManager.setMessage(result.success, result.error);
        }
    });
}

newMoneyManager.sendMoneyCallback = function(data) {
    ApiConnector.transferMoney(data, (result) => {
        console.log(result);
        if (result.success) {
            ProfileWidget.showProfile(result.data);
            newMoneyManager.setMessage(result.success, 'Успешно');
        } else {
            newMoneyManager.setMessage(result.success, result.error);
        }
    });
}


const newFavoritesWidget = new FavoritesWidget();

ApiConnector.getFavorites((result) => {
    if (result.success) {
        newFavoritesWidget.clearTable();
        newFavoritesWidget.fillTable(result.data);
        newMoneyManager.updateUsersList(result.data);
    }
});

newFavoritesWidget.addUserCallback = function(data) {
    ApiConnector.addUserToFavorites(data, (result) => {
        if (result.success) {
            newFavoritesWidget.clearTable();
            newFavoritesWidget.fillTable(result.data);
            newMoneyManager.updateUsersList(result.data);
            newFavoritesWidget.setMessage(result.success, 'Успешно');
        } else {
            newFavoritesWidget.setMessage(result.success, result.error);
        }
    });
}

newFavoritesWidget.removeUserCallback = function(data) {
    ApiConnector.removeUserFromFavorites(data, (result) => {
        if (result.success) {
            newFavoritesWidget.clearTable();
            newFavoritesWidget.fillTable(result.data);
            newMoneyManager.updateUsersList(result.data);
            newFavoritesWidget.setMessage(result.success, 'Успешно');
        } else {
            newFavoritesWidget.setMessage(result.success, result.error);
        }
    })
}
