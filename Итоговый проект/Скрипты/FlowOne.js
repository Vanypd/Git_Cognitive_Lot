
var fieldsProductOfNumbers = function() {
    var priceInput = $("input[name='Price']");
    var taxInput = $("input[name='Tax']");
    var taxSumInput = $("input[name='TaxSum']");

    if (priceInput.lenght === 0 || taxInput.lenght === 0) {
        return;
    }

    taxSumInput.val(priceInput.value * taxInput.value);
}

scopes.on('change', "input[name='Price']", function () {
    fieldsProductOfNumbers();
});

scopes.on('change', "input[name='Tax']", function () {
    fieldsProductOfNumbers();
});