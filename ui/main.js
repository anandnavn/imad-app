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
    request.open('GET','http://u1629076.imad.hasura-app.io/counter' , true);
    request.send(null);
};
 
  //submit name
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  var submit = document.getElementById('submit_btn');
  submit.onclick = function () {
      // Make a Request to the server and send the name
       
      //capture a list of name and render it as a list
      var names = ['name1', 'name2', 'name3'];
      var list = '';
      for (var i =0; i<names.length; i++) {
          list == '<li>' + names[i] + '<li>';
      }
       var ul =  document.getElementById('namelist');
       ul.innerHTML = list;
  };