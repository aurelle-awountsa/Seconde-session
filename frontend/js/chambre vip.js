function  callPrixVip(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getPrixCategorie?catId="+document.getElementById('catVip').value,true);
    xhr.onload=function(){
        console.log(xhr.responseText);
        takeId(JSON.parse(xhr.responseText));
    }
    xhr.send();
}
function takeId(data){
    console.log(data);
    document.getElementById('idPrixVip').innerHTML += data[0].prix +  "€"
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
            case document.getElementById('chm8').value:
                document.getElementById('description8').innerHTML += data[i].descrip
                break;

            case document.getElementById('chm9').value:
                document.getElementById('description9').innerHTML += data[i].descrip
                break;

            case document.getElementById('chm10').value:
                document.getElementById('description10').innerHTML += data[i].descrip
                break;


        }
    }
}
