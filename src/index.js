//retrieving data based on user input
//will pass a function into an event listener that when called, sends a fetch request
//then does something with the retrieved data
//WIll use JSON server as a mock API and build  out a form to get specific data from our API

//hired to build the frontend for a movie database company specializing in kids movies
// //We have an API with some starter data and some nitial HTML

//get this form working 
//WHen the user inputs a valid ID, the movie info shoulkd appear on the page
//Add event listener to capture form data and override a form's default behavior
//Fetch data based on what the user types into that form
//Display the data on the page

//Add event listener to capture form data and override a form's default behavior
//By default form element will refresh when a submit input is clicked 
//Before we can run the code for fetching data i need to override this behaviour
const init = () => {
    //Target the DOM form element
    //Add an event listener to the form  element
    const inputForm = document.querySelector('form');
    //EVentLIstener
//TYpe of event - submit
//A string
//The listener
// A callback function- that will be called to 'handle' the event
//When the event is triggered the callback function we've provided wll execute
// AN object representing the event will be passed in as an argument
    inputForm.addEventListener('submit', (event)=>{
        //Form still refresh automatically, as we haven't done anything to override it
        //THe event- object that gets passed in to our callback contains a particular method we need 
        //in order to override our forms behavior
        //preventDefault()
        event.preventDefault();
        //ACCESS INPUT VALUE DIRECTLY
        //We dont necessarily need to use the event to get the value we need
        //Accessing the input element directly
        const input = document.querySelector('input#searchByID')
        console.log(input.value)//user input is accessible

        //FETCH DATA BASED ON USER INPUT
        //set up the basic shell of our fetch request
        //connect to the JSON server, we'll send a basic request
        fetch(`http://localhost:3000/movies/${input.value}`)
        //MOdify the URL we pass to our fetch function based on the input typed into
        //the HTML form
        //NOw if you type a valid ID into the form a specific movie object will be logged
        .then(response => response.json())
        //I captured some user input and used it to customize a fetch request to our JSON SERVER
        //I will display some of the retrieved dataon the page
        //target the section with movieDEtails
        .then(data => {
            //REplacing title and summary with data we retrieved from our server
            //we'll work inside the second then of our fetch request
            //First we'll access the DOM and store the two elements in js
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            //changing the contents based on the retrieved data
            //Set their inner innerText values to the appropriate values in our data
            title.innerText = data.title;
            summary.innerText = data.summary;
            //Basic mechanisms for providing a better experience
            //By capturing user input via event listener, using fetch requests and DOM manipulation, 
            //I can update page content as a user requests it
            //We have successfully fetched data on demand
           // console.log(data)//each obvject has an ID
            //the 3 objects represent the three records available from the movies API

        })
        //calling it inside our call back function will stop the page from refreshing and allow us to do
        //something else
        //Get the value from our event object 
       //We first want to access event.target
       //event.target returns the DOM element targeted by our event a form in our case
       //event.target has a propeerty children that returns an HTMLCollection
       //containing all the nested elements of the event.target element
        event.target.children[1].value
        console.log(event)
    })

  
}

document.addEventListener('DOMContentLoaded', init);
//Make sure the js we write executes  WHEN THE dom IS fully loaded
//ANy code related to DOM Manipulation shyould either go in init or 
//in a function called within init

//Target the DOM form element
//Add an event listener to the form  element
//const inputForm = document.querySelector('form');

//EVentLIstener
//TYpe of event - submit
//A string
//The listener
// A callback function- that will be called to 'handle' the event
//When the event is triggered the callback function we've provided wll execute
// AN object representing the event will be passed in as an argument
// inputForm.addEventListener('submit', (event)=>{
//     //Form still refresh automatically, as we haven't done anything to override it
//     //THe event- object that gets passed in to our callback contains a particular method we need 
//     //in order to override our forms behavior
//     //preventDefault()
//     event.preventDefault();
//     console.log(event)
// })
//Access input value from an Event Object
//Get the value from our event object 
//We first want to access event.target
//event.target returns the DOM element targeted by our event a form in our case
