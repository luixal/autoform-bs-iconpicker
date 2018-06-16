Template.afBsIconpicker.onRendered(function() {
    console.log(this);
    // get data from template data if present:
    let options = this.data.options || {};
    let _afId = this.data.atts.id;
    // create iconPicker instance on element and set onChange callback:
    if (_afId)
        $('#' + _afId)
            .iconpicker(options)
            .on(
                'change',
                function (e) {
                    $('#' + _afId).attr("value", e.icon);
                }
            );
});