"use strict"
$(document).ready(function(){
   $('.accordion-heading').click(function(){
      let heading_attr = $(this).attr('accordion-name');
      $(`[accordion-content = "${heading_attr}"]`).slideToggle();
      $(this).toggleClass('active');
   });
});
