// when enter the web, all anime will be shown using jquery and jikan api
let currentPage = 1;

window.onload = function () {
  page();
};

function page() {
  $(document).ready(function () {
    fetch("https://api.jikan.moe/v4/anime?page=" + currentPage)
      .then((response) => response.json())
      .then((result) => {
        let data = result.data;
        let card = "";
        data.forEach((item) => {
          card += `
          <div class="card">
            <div class="poster">
                <img src="${item.images.jpg.image_url}" alt="" />
            </div>
            <div class="card-description">
             <h2>${item.title}</h2>
              <div class="sinopsis">
                <p>${item.synopsis}</p>
              </div>
                <div class="button">
                  <button>Detail</button>
                </div>
            </div>
          </div>`;
        });
        $(".container-card").html(card);
      });

    fetch("https://api.jikan.moe/v4/anime?page=" + currentPage)
      .then((response) => response.json())
      .then((result) => {
        let data = result.data;
        let card = "";
        data.forEach((item) => {
          card += `
          <div class="card">
            <div class="poster">
                <img src="${item.images.jpg.image_url}" alt="" />
            </div>
            <div class="card-description">
             <h2>${item.title}</h2>
              <div class="sinopsis">
                <p>${item.synopsis}</p>
              </div>
                <div class="button">
                  <button>Detail</button>
                </div>
            </div>
          </div>`;
        });
        $(".container-card").html(card);
      });
  });
}

$("#next").click(function () {
  currentPage++;
  page();
});

$("#prev").click(function () {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
  }
  page();
});

$("#search").click(function () {
  let search = $("#search-input").val();
  fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
    .then((response) => response.json())
    .then((result) => {
      let data = result.data;
      let card = "";
      data.forEach((item) => {
        card += `
          <div class="card">
            <div class="poster">
                <img src="${item.images.jpg.image_url}" alt="" />
            </div>
            <div class="card-description">
             <h2>${item.title}</h2>
              <div class="sinopsis">
                <p>${item.synopsis}</p>
              </div>
                <div class="button">
                  <button>Detail</button>
                </div>
            </div>
          </div>`;
      });
      $(".container-card").html(card);

      // gunakan foreach untuk setiap card yang ada di dalam list dan tambahkan fungsi readmore
    });
});

// button next

// button prev

// tampilkan value dari local storage ke dalam card list
// untuk setiap isi konten dari card tambahkan sebuah fungsi readmore
