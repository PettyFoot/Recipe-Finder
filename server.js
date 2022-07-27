const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));
const PORT = process.env.PORT || 8000;

const coolObjects = {
    'coolObjectOne' :{
        'height': 100,
        'width': 100,
        'density': 1.5,
        'specialAbility': 'ducking really fast'
        
    },
    'coolObjectTwo' : {
        'height': 200,
        'width': 200,
        'density': 2.5,
        'specialAbility': 'ducking really really fast'
        
    },
    'coolObjectThree' : {
        'height': 300,
        'width': 300,
        'density': 3.5,
        'specialAbility': 'ducking really really really fast'
        
    }
     
}



app.get('/api/:fetchObject', (request, response) => {
    
    response.json(coolObjects)
    
    /**const objectToFetch = request.params.fetchObject;
    console.log(objectToFetch);
    if(coolObjects[objectToFetch])
    {
        response.json(coolObjects[objectToFetch])
    }else
    {
        response.json(coolObjects['coolObjectThree'])
    } */
   

    
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})