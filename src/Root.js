
 import React  from 'react';
 import Routes  from './Routes.jsx';
 import Client  from 'react-engine/lib/client';

 // Export React so the dev tools can find it
 (window !== window.top ? window.top : window).React = React;

 // Include all view handler files. Browerify doesn't do
 // this automatically as it can only operate on
 // static require statements.
 require('./views/*.jsx', {glob: true});

 // boot options
 var options = {
     routes: Routes,

     // supply a function that can be called
     // to resolve the file that was rendered.
     viewResolver: function(viewName) {
         return require('./views/' + viewName);
     }
 };

 document.addEventListener('DOMContentLoaded', function onLoad() {
     Client.boot(options);
 });