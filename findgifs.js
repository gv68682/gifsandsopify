const gifContainer = document.getElementById('gif-container')

async function searchGifs(){
    gifContainer.innerHTML = ' ';
    let searchTerm = document.getElementById('gif-input').value

    let url = 'api.giphy.com/v1/gifs/trending'
    if(searchTerm){
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=YOUR API KEY&q=${searchTerm}`)
        const json = await response.json()  
        renderGifs(json.data)  
    }
    else{
        alert("Provide input value!")
    }
}
function renderGifs(gifs){

    gifs.forEach(gif => {
        console.log(gif)
        let img = document.createElement('img')
        img.setAttribute('src', gif.images.original.url)
        console.log(gif.images.original.url)
        img.setAttribute('alt-src', gif.images.original_still.url)

        img.onClick = () => {
            let currUrl = img.getAttribute('src')
            let altUrl= img.getAttribute('alt-src')

            img.setAttribute('src', altUrl)
            img.setAttribute('alt-src', currUrl)
        } 
        gifContainer.appendChild(img)  
    });
}