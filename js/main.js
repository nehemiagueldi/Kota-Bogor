/*==================== SHOW LOADER ====================*/
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

/*==================== SHOW DATE AND TIME ====================*/
function displayDate() {
  var now = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var date = now.toLocaleDateString("id-ID", options);
  // en-US, en-GB, id-ID, en-AU, en-CA, en-NZ, en-ZA, en-IN, en-PH, en-SG, en-ZW, en-MY, en-HK, en-TW, en-IE, en-BE, en-LU, en-NL, en-DE, en-AT, en-CH, en-IT, en-ES, en-PT, en-FR, en-GR, en-SE, en-NO, en-DK, en-FI, en-IS, en-TR, en-IL, en-JP, en-KR, en-CN, en-TH, en-VN, en-MX
  document.getElementById("date").innerHTML = date;
}

setInterval(displayDate, 1000);

function displayTime() {
  var now = new Date();
  var options = { hour: "numeric", minute: "numeric", second: "numeric" };
  var time = now.toLocaleTimeString("en-GB", options);
  document.getElementById("time").innerHTML = time;
}

setInterval(displayTime, 1000);

/*==================== GREETINGS MESSAGES ====================*/
async function getGreeting() {
  try {
    const greetings = [
      "Bogor, kota yang terkenal dengan keindahan alamnya dan berbagai warisan sejarah yang menarik untuk dijelajahi.",
      "Bogor adalah sebuah kota yang terletak di provinsi Jawa Barat, Indonesia.",
      "Kota Bogor dikenal sebagai kota hujan karena curah hujannya yang cukup tinggi sepanjang tahun.",
      "Bogor memiliki Taman Nasional Gunung Halimun Salak yang menjadi tempat wisata alam yang populer.",
      "Salah satu destinasi wisata terkenal di Bogor adalah Kebun Raya Bogor yang memiliki koleksi tumbuhan yang sangat lengkap.",
      "Kota Bogor memiliki sejarah yang kaya dan banyak warisan budaya yang masih lestari hingga saat ini.",
      "Di Bogor, Anda dapat menemukan banyak kuliner lezat, seperti nasi uduk, soto, dan keripik singkong.",
      "Pusat perbelanjaan yang terkenal di Bogor adalah Botani Square dan IPB Square.",
      "Stasiun kereta Bogor merupakan salah satu stasiun kereta api tertua di Indonesia yang masih beroperasi hingga kini.",
      "Kota Bogor juga terkenal dengan universitasnya, Institut Pertanian Bogor, yang telah berdiri sejak tahun 1963.",
      "Bogor memiliki berbagai jenis akomodasi, mulai dari hotel mewah hingga penginapan yang lebih sederhana untuk para wisatawan.",
      "Kota Bogor terletak sekitar 60 km dari Jakarta dan dapat dijangkau dengan berbagai jenis transportasi.",
      "Di kota Bogor terdapat Istana Bogor yang merupakan kediaman resmi Presiden Republik Indonesia.",
      "Bogor dikenal sebagai kota bunga karena memiliki banyak kebun dan taman yang indah.",
      "Saat mengunjungi Bogor, jangan lupa mencoba minuman khasnya yaitu es kelapa muda.",
      "Bogor memiliki banyak pasar tradisional yang menawarkan berbagai macam barang dagangan.",
      "Bagi pecinta olahraga golf, Bogor memiliki banyak lapangan golf yang menawarkan pemandangan indah.",
      "Di Bogor, Anda dapat menemukan banyak pilihan tempat makan yang menyajikan masakan Indonesia, Asia, dan Barat.",
      "Salah satu destinasi wisata yang sangat populer di Bogor adalah Kampung Wisata Sindangbarang.",
      "Bogor juga dikenal sebagai kota sejarah karena memiliki banyak bangunan tua yang masih terjaga dengan baik.",
      "Di kota Bogor terdapat banyak tempat wisata sejarah, seperti Museum Zoologi, Museum Perjuangan, dan Museum Ethnobotani.",
      "Kota Bogor juga memiliki beberapa tempat ibadah yang indah, seperti Gereja Katedral Santo Yakobus dan Masjid Agung Bogor.",
      "Bogor memiliki banyak tempat penginapan yang nyaman dan terjangkau, mulai dari hotel mewah hingga homestay.",
      "Bogor dikenal sebagai kota pendidikan karena memiliki banyak perguruan tinggi ternama, seperti Universitas Pakuan dan Institut Pertanian Bogor.",
      "Kota Bogor juga terkenal dengan produk kerajinan tangan, seperti batik Bogor dan patung kayu.",
    ]; // daftar kata atau kalimat sapaan yang ingin ditampilkan
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)]; // ambil kata atau kalimat sapaan secara acak dari daftar
    const message = `${randomGreeting}`; // gabungkan kata atau kalimat sapaan dengan data API
    document.getElementById("greeting-message").innerText = message; // tampilkan kata atau kalimat sapaan di elemen HTML
  } catch (error) {
    console.error(error);
  }
}

async function getGreet() {
    try {
        // const response = await fetch('https://api.adviceslip.com/advice');
        // const data = await response.json();
        const greet = [
            'Bogor',
            'Kota Bogor',
            'Bogor City',
            'Buitenzorg',
            'Bogor, Indonesia',
            'Bogor, Jawa Barat',
            'Bogor, West Java',
            'Rain City',
            'Bogor, Rain City',
            'Bogor, Tây Java',
            'Bogor, Java Occidental',
            'Bogor, Batı Cava',
            'Bogor, västra Java',
            'Bogor, Západná Jáva',
            'Bogor, Giava occidentale',
            'Bogor, Java Magharibi',
            'Bogor, Indonésie',
            'Bogor, Indonésia',
            'Kota Bogor, Indonesia',
            'Kota Bogor, Jawa Barat',
            'Bogor City, West Java',
            'Bogor City, Indonesia',
            'Bogor City, Rain City',
        ]; // daftar kata atau kalimat sapaan yang ingin ditampilkan
        const randomGreet = greet[Math.floor(Math.random() * greet.length)]; // ambil kata atau kalimat sapaan secara acak dari daftar
        const message = `~ ${randomGreet} ~`; // gabungkan kata atau kalimat sapaan dengan data API
        document.getElementById('greet-message').innerText = message; // tampilkan kata atau kalimat sapaan di elemen HTML
    } catch (error) {
        console.error(error);
    }
}

/*==================== QUOTE OF THE DAY ====================*/

const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new-quote-btn");

function generateRandomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteEl.textContent = data.content;
      authorEl.textContent = `- ${data.author} -`;
    })
    .catch((error) => console.log(error));
}

newQuoteBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();


