function drawTable(records){
    let result = document.querySelector('#result');
    let html = '';
    
    for(let record of records){
        html += `<tr>
          <td>${record.id}</td>
          <td>${record.name}</td>
          <td>${record.brewery_type}</td>
          <td>${record.website_url}</td>    
        </tr>`;
    }
    
    result.innerHTML = html;
}

async function getData(url){
   try{
     let response = await fetch(url);
     let result = await response.json();
     drawTable(result);
   }catch(e){
      console.log(e);
   }
}

getData("https://api.openbrewerydb.org/breweries/search?query=harry");

console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);

window.onload = function(){
   console.log("Page has loaded");
}

var bob = 'bob';
const sally = 'sally';

console.log(window.bob === bob);
console.log(window.sally === sally);

var document = 'hello this is my variable';
console.log(document);

console.log(window.document === document);
