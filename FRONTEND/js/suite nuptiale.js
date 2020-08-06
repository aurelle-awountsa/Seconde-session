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