// api clasını import et 
import { API } from "./api.js";
import { UI } from "./ui.js";
// classın örneğini aldık 
const ui = new UI();
const api = new API();


document.addEventListener("DOMContentLoaded", () => {
    // loaderı render et 
    ui.renderLoader();
    // apı a istek at ve gelen verilerle ekrana card render et 
    api.getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
        console.log('hataa:', err);
        alert("üzgünüz bir hata oluştu :(");
    });
});

// formun gönderilme olayını izle 
ui.form.addEventListener('submit', (e) => {
    // form gönderildiğinde sayfa yenilemeyi engelle 
    e.preventDefault();
    // inputtaki arama parametresine eriş 
    const query = e.target[0].value;
    // aratılan kelime yoksa fonksiyonu durdur bu sayede api hakkımızı boş harcamadık
    if(query.trim() === "") return alert("lütfen geçerli bir arama gerçekleştiriniz");
    // loaderı render et 
    ui.renderLoader();
    // başlığı güncelle 
    ui.updateTitle(query +  " için sonuçlar");
//    api da aratılan kelimeye istek at 
    api.searchMusics(query)
    .then((data) => ui.renderCards(data))
    .catch((err) => {
        alert("işlem gerçekleştirilemedi");
        console.log(err);
    });
});

// liste alanında gerçekleşen tıklanma olaylarını izle 
ui.list.addEventListener("click", (e) => {
    // eğer play clasına sahip bir elemana tıklandıysa sarkı cagırma gercekleştir 
    if (e.target.className === "play") {
       const card = e.target.closest(".card");
       const data = card.dataset;
       ui.renderPlayer(data);
    }
});