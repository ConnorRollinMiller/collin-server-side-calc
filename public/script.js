import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(() => {
   const form = $('#form');

   form.submit((evt) => {
      evt.preventDefault();
   });
});
