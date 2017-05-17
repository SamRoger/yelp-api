$("document").ready(function(){


// Yelp API Assignment

// Create a site with a search bar and a list of Philadelphia neighborhoods and/or 
// towns and cities in the metro region. 
// These can be listed in a dropdown menu or just as a collection of buttons/divs. 
// There should also be a button or div 
// that when clicked runs a function that: 

// -  Searches the Yelp API for businesses in the selected neighborhood that match 
// the search criteria from the search bar. 
// - Lists the results on the page with some of the data associated 
// with each result (name, address, image, etc.)

// Additionally: 

// - When a result is clicked, it opens the Yelp page for that business in a new window.
// - When a user makes a new search, the old results go away and the new results  populate
// the page and are also clickable.

// Use SASS and the forEach loop instead of the for loop.

// EXTRA!

// Create functionality so that a user can "save" results and make more searches. 
// A user can continue "saving" those results and view all of the saved results. 
// These "saved" results should be stored in objects.

// When a user clicks on a result, instead of opening that result in a new tab, 
// pop up a modal with that business' more specific information.
// var results = document.getElementsByClassName("resuts")[0];
var results = document.getElementsByClassName("results")[0];
button = document.getElementsByClassName("button")[0];
var userInput = document.getElementById("userInput");
var userInputCity = document.getElementById("userInputCity");
var list = document.getElementsByTagName("ul");

window.addEventListener("keydown", function() {
    if (event.keyCode === 13) {
        searchShow()
    }
})
button.addEventListener("click", function(){
    searchShow();
});

function searchShow() {
    userInput1 = userInput.value;
    userInputCity1 = userInputCity.value;
     $.ajax({
         url: "https://yelp-search.herokuapp.com/search",
         method: "GET",
         data: {
            term: userInput1,
            location: userInputCity1
        },
         success: function(response){   
             // results.innerHTML = (response.businesses[1].name)
             counter = 0
             counter +=1
             test = response.businesses
            //  test.forEach(function(element) {
            //     // results.innerHTML = element.name
            //     // console.log(element.display_phone)
            //     console.log(element.name)

            // })

             for (var i = 0; i < test.length; i++) {
                list.innerHTML = (test[i].name)
                console.log(test[i].name)
             }
             // console.log(response.businesses[1].name)
             // console.log(response.businesses.name)
             // // for (var i = 0; i < restaurants.length; i++) {`
                // results.innerHTML = restaurants[i].name
             // }
         }
     })
}



})//document.ready

   
        
            
        










