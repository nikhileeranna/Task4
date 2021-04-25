var req = new XMLHttpRequest();
req.open('get','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
var data = JSON.parse(this.response);
   
var Asian = data.filter((x)=>x.region === 'Asia');
console.log("The Asian countries are ");
for(let i in Asian)
{
    console.log(Asian[i].name);
}

var PopulationLessThan2lac = data.filter((x)=>x.population<200000);
console.log("The countries with population less than 2 lakhs are ");
for(let i in PopulationLessThan2lac)
{
    console.log(PopulationLessThan2lac[i].name);
}

data.forEach(element =>{ console.log(`${element.name} -${element.capital}- ${element.flag}`)});

var total=data.reduce((sum,cv)=>sum+cv.population,0);
console.log(`The total population of the world : ${total}`);

var usd = data.filter((x)=>x.currencies[0].code ==='USD');
console.log("The countries with USD as currency are ");
for(let i in usd)
{
    console.log(usd[i].name);
}
}