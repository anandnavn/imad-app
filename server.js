var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*var articles = 
    { 
           'article-one':
        { 
         title: 'article one | Navneet Anand',
         heading: 'article one',
         date:'13th sept 2k17',
            content:'
            <p>
                this is the first article written by me. the coding is fun on this module.<br>
                I love doing this.
            </p>
            <p> This is Wonderful feeling.....</p>'
         
        },
           'article-two':{ 
         title: 'article two | Navneet Anand',
         heading: 'article two',
         date:'13th sept 2k17',
         content:'
            <p>
                this is the second article written by me. the coding is fun on this module.<br>
                I love doing this...NICE ONE :-)
            </p>
            <p> This is Wonderful feeling.....</p>'
         
     },
           'article-three':{ 
         title: 'article three | Navneet Anand',
         heading: 'article three',
         date:'13th sept 2k17',
            content:'<p>
                this is the third article written by me. the coding is fun on this module.<br>
                I love doing this.
                HOLAAA
            </p>
            <p> This is Wonderful feeling.....</p> '
         
     }
};
 function createtemplate (data){
     var title = data.title;
     var heading = data.heading;
     var date = data.date;
     var content = data.content;
     var htmltemplate ='
     <html>
     <head>
     <title>${title}</title>
     <meta name="viewport" content="width=device-width, intial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
     </head>
            
     <body>
        <div class="container">
            <div>
            <a href="/">home</a>
        </div>
        <h2>${heading}</h2>
        <div>
            ${date}
        </div>
        <div>
            <p>
            ${content}
            </p>
        </div>
        </div>
        
    </body>
    </html>
     ';
     return htmltemplate;
     
 } */
 
    var counter = 0;
    app.get('/counter', function(req,res){
       counter = counter +1;
       res.send(counter.tostring());
    });
    
    var names =[];
    app.get('/submit-name', function(req,res){
        //submit-name?name-xxx
        //get the name from the request
        var name = req.query.name;
        
        names.push(name);
        //JSON:javascript object natationn
        res.send(JSON.stringify(names));
    });
    
app.get('/:articlename', function (req, res) {
    res.send(createtempelate(articles[articlename]));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
