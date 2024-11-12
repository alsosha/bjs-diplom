const newLogoutButton = new LogoutButton();

newLogoutButton.action = function() {
    ApiConnector.logout((result) => {
        if (result.success) {
            location.reload();
        }
    })
}

ApiConnector.current((result) => {
    console.log(result);
    if (result.success) {
        ProfileWidget.showProfile(result.data);
    }
});