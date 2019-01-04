/*****************************************************************************************
Create a .js file that contains the JavaScript code necessary to handle the click events 
for two images: the previous image (right click to SAVE) and the next image.
The page should include a center image. When the next image is clicked, the center image
 should change to the next image in the slideshow.  When there are no more images in the 
 collection, clicking the next image should do nothing. 

When the previous image is clicked, the center image should change to the previous image 
in the slideshow.  When the beginning of the slideshow is reached, clicking the previous 
image should do nothing.

NEXT: When the user clicks the next image, the src tag for the center image should be 
changed to the next image in the array.  This should only happen if the current 
image is not the last image in the array. 

PREVIOUS: When the user clicks the previous image, the src tag for the center image 
should be changed to the previous image in the array.  This should only happen if the 
current image is not the first image in the array.

Optional Extra Challenge:
This is not required, but can be a fun challenge if you are interested.  For this 
challenge, create the slideshow as described above, but do not stop the show when the end 
of the array is reached, or when the beginning of the array is reached.  Instead, keep 
it going by wrapping around the array. 

So, when the end of the array is reached, clicking the next button will display image 0. 
When the beginning of the array is reached, clicking the previous button will display 
image at position length-1.

*****************************************************************************************/


var myImage = document.getElementById("center");
var imageArray = ["center.jpg","IslandOasis.jpg", "LakeShore.jpg", "MountainView.jpg", 
                  "NewHaven.jpg","SanDiego.jpg"];
var backImage = document.getElementById("back");
var nextImage = document.getElementById("next");
var imageIndex = 0;

backImage.onclick =  function() 
{
  backwardChange();
} 

nextImage.onclick =  function() 
{
  forwardChange();
}

function forwardChange() 
{
   myImage.setAttribute("src", imageArray[imageIndex]);
   imageIndex++;
   if(imageIndex >= imageArray.length) 
   {
      imageIndex = imageArray.length - 1;
   }
}

function backwardChange() 
{
   myImage.setAttribute("src", imageArray[imageIndex]);
   imageIndex--;
   if(imageIndex < 0) 
   {
      imageIndex = 0;
   }
}