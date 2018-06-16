Package.describe({
  name: 'luixal:autoform-bs-iconpicker',
  version: '0.0.1',
  summary: 'BootStrap IconPicker packaged for Meteor as an AutoForm component',
  git: 'https://github.com/luixal/autoform-bs-iconpicker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.6');
  api.use('ecmascript');
  api.use('luixal:bs-iconpicker');
  api.use('aldeed:autoform@5.0.0');
  api.use('templating');

  api.addFiles(
    [
      'bootstrap-iconpicker/dist/css/bootstrap-iconpicker.min.css',
      'bootstrap-iconpicker/dist/js/bootstrap-iconpicker-iconset-all.min.js',
      'bootstrap-iconpicker/dist/js/bootstrap-iconpicker.min.js',
      'template/template.html',
      'template/template.js'
    ],
    'client'
  );

  api.addFiles(
    'main.js',
    'client'
  );

  api.mainModule('autoform-bs-iconpicker.js');
});
