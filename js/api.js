// Api URL
const url = 'https://shazam.p.rapidapi.com/search?term=adele&locale=en-US';
// Headers ==> Api'ın bizi tanıyıp verileri iletmesi için gerekli obje
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ada0d5cda6mshad5f6f27487f5ecp12e687jsn65c10005d127',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

// Apı Clası
export class API {
  // Popüler müzikleri api'dan alan fonksiyon
  async getPopular() {
    //     // Fetch ile api'dan verileri aldık
    //     const res = await fetch(url, options);
    //     // Veriyi js nesnesine çevirdik
    //     const data = await res.json();
    //     // Verinin içerisinde bulunan katmanlı yapıyı düzenledik ve şarkı verisine eriştik
    //     const formatted = data.tracks.hits.map((item) => item.track);

    //     return formatted;

    const data = await this.searchMusics("emircan iğrek");
    const data1 = await this.searchMusics("sezen aksu");
    const data2 = await this.searchMusics("lana del rey");


    return [...data, ...data1, ...data2];
  }
  
  // Aratılan kelimeye göre şarkı verilerini alan fonksiyon
  async searchMusics(query) {
    // Url'i dinamik hale getirdik
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US`;
    // Api'a istek at
    const res = await fetch(url, options);
    // Gelen cevabı js nesnesine çevir
    const data = await res.json();
    // Verinin içerisinde bulunan katmanlı yapıyı düzenledik ve şarkı verisine eriştik
    const formatted = data.tracks.hits.map((item) => item.track);

    return formatted;
  }
}