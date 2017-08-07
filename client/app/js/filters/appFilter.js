videoApp.filter('removeArrayinTitle', function () {
    return function (text) {
        var str = text.replace(/^[{1}[0-9]{1,}]{1}\s/g, '');
        return str;
    };
});