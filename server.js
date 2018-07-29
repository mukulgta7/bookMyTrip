const express =require('express')

const app = express()

app.use('/',express.static(__dirname + '/public_static'))

app.use('/Cars',express.static(__dirname + '/public_static/Cars.html'))

app.use('/Car-Selection',express.static(__dirname + '/public_static/Car-Selection.html'))

app.listen(3300,()=>{
    console.log('server started at http://localhost:3300')
});

