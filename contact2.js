/*****************************************************************************************
You will need to create a new .js file for the contact.html file that will:

Pull the data from the listings.html file and append its entire contents to the aboutUs
div in the contact.html page

Create and call a getXMLData function.  This function should perform these tasks for all
realtors in the file.  Wright Realty is planning on hiring more realtors, so make sure 
your JavaScript will get all realtors, even if the number of realtors changes in the file:
format the contents of the <name> and <phone> tags for each realtor in the realtors.xml
file into a string like this: realtorname : realtorphone

Create a new DOM node to hold the formatted string for each realtor.  For example, this 
could be a paragraph node or some kind of list node.  You can choose any type of element 
that you would like to use.  Append the new node to the aboutUs div in the contact.html page.
*****************************************************************************************/

$("document").ready(function(){
  getData();
  getXMLData();
});

function getData(){
  $("#aboutUs").load("listings.html");
}

function getXMLData() {
  $.get("realtors.xml", function(result) {
    var name1 = result.getElementsByTagName("name")[0];
    var phone1 = result.getElementsByTagName("phone")[0];
    var name2 = result.getElementsByTagName("name")[1];
    var phone2 = result.getElementsByTagName("phone")[1];
    var name3 = result.getElementsByTagName("name")[2];
    var phone3 = result.getElementsByTagName("phone")[2];
    
    var name1 = name1.firstChild.nodeValue;
    var name2 = name2.firstChild.nodeValue;
    var name3 = name3.firstChild.nodeValue;
    var number1 = phone1.firstChild.nodeValue;
    var number2 = phone2.firstChild.nodeValue;
    var number3 = phone3.firstChild.nodeValue;

    document.getElementsByClassName("tab")[0].innerHTML = name1;
    document.getElementsByClassName("tab")[1].innerHTML = name2;
    document.getElementsByClassName("tab")[2].innerHTML = name3;
    document.getElementsByClassName("panel_content")[0].innerHTML = number1;
    document.getElementsByClassName("panel_content")[1].innerHTML = number2;
    document.getElementsByClassName("panel_content")[2].innerHTML = number3;
  });
}

var panelWidth = 0;
var startPanel = 2;

$(document).ready(function() {
  $('.sp .tabs').css('display','block');
  $('.sp .panel_container .panel').css({'position':'absolute', 'height':'400px'});
  $('.sp .panel_container .panels').css({'position':'absolute', 'top':'0px'});

  panelWidth = $('.sp').width();

  $('.panel_container .panel').each(function(index){
    
    $(this).css({'width':panelWidth+'px','left':(index*panelWidth)});
    $('.sp .panels').css('width',(index+1)*panelWidth+'px'); 
  });
  
  $('.sp .tabs span').each(function(){
    $(this).on('click', function(){
      changePanels( $(this).index() );
    });
  });

  $('.sp .tabs span:nth-child('+startPanel+')').trigger('click');
  
});


function changePanels(newIndex){
  
  var newPanelPosition = ( panelWidth * newIndex ) * -1;
  var newPanelHeight = $('.sp .panel:nth-child('+(newIndex+1)+')').find('.panel_content').height() + 15;

  $('.sp .tabs span').removeClass('selected');
  $('.sp .tabs span:nth-child('+(newIndex+1)+')').addClass('selected');

  $('.sp .panels').animate({left:newPanelPosition},1000);
  $('.sp .panel_container').animate({height:newPanelHeight},1000);

}