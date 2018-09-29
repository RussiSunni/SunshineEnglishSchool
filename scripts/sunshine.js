//partials

$('#header').load('/views/header.html');
$('#footer').load('../../views/footer.html');









//cookies

function WriteCookie()
{
    cookievalue=  document.getElementById("username").value;
    document.cookie= cookievalue;
}

$( '#usernameButton' ).click(function() {
    WriteCookie();
})

var cookieArray = document.cookie.split(";");

var username = cookieArray[0];


window.onload = function() {
  
    $( '#username' ).html(username);
  };


  //modals

var imgCount = document.getElementsByClassName("img-thumbnail").length;

imgCount = imgCount + 1;



// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

for (var x = 1; x < imgCount; x++) {
    var img = document.getElementById("myImg" + x);

var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");


    if (modalImg != undefined)
        if (img != undefined)
    {
        {
            img.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        }
    }
   
    

}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
if (span) 
{
    span.onclick = function() { 
        modal.style.display = "none";
      }
}





