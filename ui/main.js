console.log('Loaded!');


button.onclick = function () {
    
     //create a request object 
     var request = new XMLHttpRequest();
     
     //Capture the response and store it in a variable
     request.onreadystatechange = function () {
         if (request.readystate === XMLHttprequest.DONE) {
             //take some action
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.tostring();
         }
     } 
     //not done yet
};

    //Make the request
    request.open('GET','http://u1629076.hasura-app.io/counter' , true);
    request.send(null);
};
 
  //submit name
 
  var submit = document.getElementById('submit_btn');
  submit.onclick = function () {
      // Make a Request to the server and send the name
      var request = new XMLHttpRequest();
      
      //capture a list of name and render it as a list
      request.onreadystatechange = functionn () {
          if (request.readystate === XMLHttpRequest.DONE)
           //take some action
           if(request.status ===200) {
               
               //capture a list of names and render it as a list
               var names = request.responseText;
               names = JSON.parse(names);
               var list=''
            for (var i =0; i<names.length; i++) {
          list == '<li>' + names[i] + '<li>';
      }
       var ul =  document.getElementById('namelist');
       ul.innerHTML = list;
           }
      }
  };
  
  //make request 
   var nameInput = document.getElementById('name');
   var name = nameInput.value;
    request.open('GET','http://u1629076.imad.hasura-app.io/submit-name?name' +name ,true);
    request.send(null);