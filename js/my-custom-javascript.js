$(document).ready(function(){
"use strict";//can go outside/above function as well but better if self-contained
    // alert('The DOM has finished loading!');
//put all code in here...it is more important than an iife


//Exercise ID Selectors
// var contents = $('#lister').html();
// alert(contents);


//Exercise Class Selectors
// $('.codeup').css('border', '1px solid blue');

//Element Selectors Exercise

// $('li').css('font-size', '20px');
//
// $('h1, p, li').css('background-color', 'yellow');



    // Remove your custom jQuery code from previous exercises.
    //
    //     Add jQuery code that will change the background color of a h1 element when clicked.
    //
    //     Make all paragraphs have a font size of 18px when they are double clicked.
    //
    //     Set all li text color to red when the mouse is hovering, reset to black when it is not.


    $('h1').click(function(){
        $('h1').css('background','red')
    });

    $('p').dblclick(function(){
        $('p').css('font-size', '18px')
    });

    $('li').hover(
        function() {
            $(this).css('color','red');
        },
        function() {
            $(this).css('color','black');
        }
    )
    // $('li').hover(mouseenter, mouseleave)



});

//Walk thru notes 2/27/19
//$('testDiv') jQuery methods often return an obj
//.text just shows text, .html returns html tags with text
//can pass in obj for key value pairs for all css you want to add
//if you have inline css...jquery will override it

//jQuery Events lecture

//bootstrap added

//add event listener review
//document.getElementById('btn3').addEventListener('click', function(){alert{'You clicked the button'};})

//jQuery way: synonymous with above

//$('#btn3').click(function() {
// alert('You clicked the button')
//})

//$('#btn2').dblclick(function() {
//  $('#panel2').css('background','papayawhip');
//};})

//on button 1 when we press enter, set background to white and when we leave set to black
//this is a very roundabout way...not needed
//var night = function(elem) {
//  elem.css('background', 'black')}
//
//var day = function(elem) {
//  elem.css('background', 'white')}

//now we have two variables to use

//$('#btn1').mouseenter(function() {
//  night($('#panel1')); })

//
//$('#btn1').mouseleave(function() {
//  day($('#panel1')); })

//----------------------------------------------aaannnd, I'm lost.
//$('#btn3').click(function() {
// alert('You clicked the button')
//})

//$('#btn2').dblclick(function() {
//  $('#panel2').css('background','papayawhip');
//};})

//var night = function(elem) {
//   elem.css('background', 'black')}