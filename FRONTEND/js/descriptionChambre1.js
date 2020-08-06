function  callDescription(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getDescriptionChambre",true);
    xhr.onload=function(){
        console.log(xhr.responseText);
        takeId(JSON.parse(xhr.responseText));
    }
    xhr.send();
}

function takeDesc(data){
    console.log(data);
    for(let i in data){

        if(data[i].chambre == "CHM09"){

        }

    }
    document.getElementById('description').innerHTML += data[0].descrip
}