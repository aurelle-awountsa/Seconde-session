function  callPrixNup(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getPrixCategorie?catId="+document.getElementById('catNup').value,true);
    xhr.onload=function(){
        console.log(xhr.responseText);
        takeId(JSON.parse(xhr.responseText));
    }
    xhr.send();
}
function takeId(data){
    console.log(data);
    document.getElementById('idPrixNup').innerHTML += data[0].prix +  "€"
}

// ajouter la description des chambres

function  callDescription(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getDescriptionChambre",true);
    xhr.onload=function(){
        console.log(xhr.responseText);
        takeDesc(JSON.parse(xhr.responseText));
    }
    xhr.send();
}

function takeDesc(data){

    console.log(data);
    for(let i in data){

        let numChambre = data[i].chambre
        switch (numChambre) {
            case document.getElementById('chm6').value:
                document.getElementById('description6').innerHTML += data[i].descrip
                break;

            case document.getElementById('chm7').value:
                document.getElementById('description7').innerHTML += data[i].descrip
                break;


        }
    }
}