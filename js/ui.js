export class UI {
    // kurucu metot
    constructor(){
      this.list = document.querySelector(".list");  
      this.form = document.querySelector("form");
      this.title = document.getElementById("title");
      this.player = document.querySelector(".player");
 }  
//  popüler müzik cartı render eden fonksiyon
renderCards(songs) {
// öncesinde list kısmındaki html i temizle 
this.list.innerHTML = "";

    // her müzik verisi için ekrana bir html olustur 
    songs.forEach((song) => {  
        // card oluştur 
        const card = document.createElement("div");
        // cardın classını belirle
        card.className = "card";

        // card eelmanına sarkı verilerini aktar 
        card.dataset.title = song.title;
        card.dataset.subtitle = song.subtitle;
        card.dataset.img = song.images.coverarthq;
        card.dataset.mp3 = song.hub.actions[1].uri;

        // cardın içeriğini belirle 
        card.innerHTML = `<figure>
        <img src="${song.images.coverarthq}" alt="resim">
        <div class="play">
            <i class="bi bi-play-fill"></i>
        </div>
    </figure>


     <div class="card-info">
        <h4>${this.sliceText(song.title)}</h4>
        <h4>${song.subtitle}</h4>
     </div>`;
    //  cardı html içerisine yerleştir 
     this.list.appendChild(card);
    });
}
// ekrana loader render eden fonksiyon 
renderLoader(){
    this.list.innerHTML = `<!-- From Uiverse.io by xXJollyHAKERXx --> 
    <div class="spinner">
        <div class="spinner1"></div>
    </div>`
 }

//  arama işlemi sonucunda title ı güncelleyen fonksiyon 
updateTitle(text) {
  this.title.textContent = text;
}
sliceText(text) {
    if(text.length > 16) {
        return text.slice(0, 16) + "...";
    }

    return text;

}
// oynatma alanını güncelleyen fonkiyon 
renderPlayer(song) {
    this.player.innerHTML = `
    
      <div class="info">
            <img src="${song.img}" alt="resim">
            <div>

                <h5>${song.title}</h5>
                <p>${song.subtitle}</p>
            </div>
        </div>
          
             <audio autoplay src="${song.mp3}" controls ></audio>
            
              <div class="icons">
                <i class="bi bi-music-note-list"></i>
                <i class="bi bi-boombox-fill"></i>
                <i class="bi bi-pc-display"></i>
         </div>
    
    
    `;
    const audio = this.player.querySelector("audio");
    // audio elemanın oynat-durdur durumunu kontrol et 
    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
}

// animasyonunu dinamik şekilde ekle cıkar yapan fonksiyon 
toggleAnimation() {
    const image = document.querySelector(".info img");
    image.classList.toggle("animate");
}
}

