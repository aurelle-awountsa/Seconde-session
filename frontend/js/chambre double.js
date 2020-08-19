function  callPrixDouble(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getPrixCategorie?catId="+document.getElementById('catDouble').value,true);
    xhr.onload=function(){
        console.log(xhr.responseText);
        takeId(JSON.parse(xhr.responseText));
    }
    xhr.send();
}
function takeId(data){
    console.log(data);
    document.getElementById('idPrixDouble').innerHTML += data[0].prix +  "€"
}

//ajouter la description des chambres

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
            case document.getElementById('chm11').value:
                document.getElementById('description11').innerHTML += data[i].descrip
                break;

            case document.getElementById('chm12').value:
                document.getElementById('description12').innerHTML += data[i].descrip
                break;
            case document.getElementById('chm13').value:
                document.getElementById('description13').innerHTML += data[i].descrip
                break;
            case document.getElementById('chm14').value:
                document.getElementById('description14').innerHTML += data[i].descrip
                break;
            case document.getElementById('chm15').value:
                document.getElementById('description15').innerHTML += data[i].descrip
                break;

        }
    }
}