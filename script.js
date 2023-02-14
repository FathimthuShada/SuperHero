const input=document.getElementById("input");
const searchBtn=document.getElementById("SearchBtn");
const result=document.getElementById("result");

// let superHeroes=[];

function SearchHero(){
    console.log("I am the Hero");
    const Heroname=input.value;
    APIdata(Heroname);
    // input.value="";
}

async function APIdata(Heroname){
    try {
        const res=await fetch(`https://www.superheroapi.com/api.php/1628132770683309/search/${Heroname}`);
        const data= await res.json();
        console.log(data);
        //'results' comes from api - check console 
        for(let i = 0; i < data.results.length; i++)
        {
            renderSuperHero(data.results[i]);
        }
        if(data.response == "error")//this is how userdefined error is displayed 
        {
            throw new Error();
        }
    }catch (error){
        console.log("No such Hero");
    }
    
}

function renderSuperHero(data){
    console.log(data);
    let div=document.createElement("div");//creating a nee div in html
    div.innerHTML=
    `
    <h1>${data.name}</h1>
    <img src=${data.image.url} />
    `;
    div.classList.add("SuperHeroCards");
    result.appendChild(div);//connecting the 'div' with html 'result'
}

searchBtn.addEventListener("click",SearchHero);