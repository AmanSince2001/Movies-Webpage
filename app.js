
let left_btn = document.getElementsByClassName("bi-chevron-left")[0];
let right_btn = document.getElementsByClassName("bi-chevron-right")[0];
let cards = document.getElementsByClassName("cards")[0];
let search = document.getElementsByClassName("search")[0];
let search_input = document.getElementById("search_input");


console.log("🔍 script loaded, search_input:", search_input);
fetch("./movie.json")
  .then(res => console.log("Fetch response:", res))
  .catch(err => console.error("Fetch failed:", err));





left_btn.addEventListener("click", () => {
    cards.scrollLeft -= 140;

})
right_btn.addEventListener("click", () => {
    cards.scrollLeft += 140;
})
 
 let json_url ="movie.json";
 

fetch(json_url).then(Response => Response.json())
.then((data) => {
    data.forEach((ele, i) => {
      let {name, imdb, date, sposter, bposter, genre,  url } = ele;  
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML =`
      <img src="${sposter}" alt="${name}" class="poster">
                    <div class="rest_card">
                        <img src="${bposter}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                 <h3><span>IMDB</spani><i class="bi bi-star-fill"></i> ${imdb}</h3>
                            </div>
                        </div>
                    </div>
                `
                 cards.appendChild(card);
    });

document.getElementById('title').innerText = data[0].name;
document.getElementById('gen').innerText = data[0].genre;
document.getElementById('date').innerText = data[0].date;
document.getElementById('rate').innerHTML = `<span>IMDB</span> <i class="bi bi-star-fill"></i> ${data[0].imdb}`;
   
    //search data load
    data.forEach(element => {
     let {name, imdb, date, sposter, genre,  url } = element; 
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML =`
       <img src="${sposter}" alt="">
                   <div class="cont">
                     <h3>${name} </h3>
                     <p>${genre},${date}, <span>IMDB</span> <i class="bi bi-star-fill"></i> ${imdb}</p>
               </div>
      
               ` 
               search.appendChild(card); 

    })

       // search_input
   
       search_input.addEventListener("keyup",()=>{
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName("a");

        for(let index =0; index < a.length; index++){
            let b =a[index].getElementsByClassName("cont")[0];
           // console.log(a.textContent)
           let TextValue = b.textContent || b,innerText;
           if(TextValue.toUpperCase().indexOf(filter) > -1 ){
            a[index].style.display ="flex";
            search.style.visibility = "visible";
            search.style.opacity = 1;

           } else{
              a[index].style.display ="none";
           }

        
          
        }

       })

      let video = document.getElementsByTagName("video")[0];
      let play = document.getElementById("play");

      play.addEventListener("click", () => {
       if (video.paused) {
       video.play();
         play.innerHTML = `Play <i class="bi bi-pause-fill"></i>`;
       } else {
       video.pause();
       play.innerHTML = `Watch <i class="bi bi-play-fill"></i>`;
      }


      });

      series.addEventListener("click", () => {
  cards.innerHTML = "";

  let series_array = data.filter(ele => ele.type === "series");

  series_array.forEach(ele => {
    let { name, imdb, date, sposter, bposter, genre, url } = ele;
    let card = document.createElement("a");
    card.classList.add("card");
    card.href = url;
    card.innerHTML = `
      <img src="${sposter}" alt="${name}" class="poster">
      <div class="rest_card">
        <img src="${bposter}" alt="">
        <div class="cont">
          <h4>${name}</h4>
          <div class="sub">
            <p>${genre}, ${date}</p>
            <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
          </div>
        </div>
      </div>
    `;
    cards.appendChild(card);
  });
});

movies.addEventListener("click", () => {
  cards.innerHTML = "";

  let movies_array = data.filter(ele => ele.type === "movie");

  movies_array.forEach(ele => {
    let { name, imdb, date, sposter, bposter, genre, url } = ele;
    let card = document.createElement("a");
    card.classList.add("card");
    card.href = url;
    card.innerHTML = `
      <img src="${sposter}" alt="${name}" class="poster">
      <div class="rest_card">
        <img src="${bposter}" alt="">
        <div class="cont">
          <h4>${name}</h4>
          <div class="sub">
            <p>${genre}, ${date}</p>
            <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
          </div>
        </div>
      </div>
    `;
    cards.appendChild(card);

         })

       })
         
    });