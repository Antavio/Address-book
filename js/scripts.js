//Back-end
function Contact(first,last){
  this.firstName = first;
  this.lastName = last;
}
Contact.prototype.fullName = function(){
  return this.firstName + " " +this.lastName;
}

//Front-end
$(document).ready(function(){
  $("#new-contact").submit(function(event){
    event.preventDefault();
    var inputtedName1 = $("#new-first-name").val();
    var inputtedName2 = $("#new-last-name").val();

    var newContact = new Contact(inputtedName1,inputtedName2);

    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");
    //$("ul#contacts").append("<li><span class = 'contact'>" + newContact.lastName + "</span></li>");

    $("#new-first-name").val("");
    $("#new-last-name").val("");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

  });
});
