const apiKey = 'rk6IQEYMnGbVUuBBfNnne16RzepE4l0c';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp => resp.json())
.then(({data})=>{
    const {url}=data.images.original;

    const img= document.createElement('img');
    img.src=url;
    document.body.append(img);
}).catch(console.warn);