AutoForm.addInputType(
    'bs-iconpicker',
    {
        template: 'afBsIconpicker',
        valueOut: function () {
            return this.attr('value');
        },
        contextAdjust: function (context) {
            // avoid default value from options if passed from autoform:
            if (context.value && context.options && context.options.icon) delete context.options.icon;
            return context;
        }
    }
);