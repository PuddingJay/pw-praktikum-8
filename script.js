function allMenu(){
    $.getJSON('data.json', function(data) {
        let menu=data.menu;
        
        $.each(menu, function(i, data){
      
            let max_char = 80;
            // console.log(data.Deskripsi.length);
            if(data.Deskripsi.length > max_char) {
                Deskripsi = data.Deskripsi.substring(0, max_char) + '...';
            } else  {
                Deskripsi = data.Deskripsi;
            }

            $('#daftarMenu').append(`<div class="col-md-3 d-flex">
            <div class="card mb-5 " style="min-height:max-content; width:100%">
                <div class="card-header">${data.Jenis}</div>
                <img src="img/${data.Gambar}" style="object-fit:contain; height:180px !important; align:center">
                    <div class="card-body">
                    <h5 class="card-title">${data.Nama}</h5>
                        <p class="card-text">${data.Deskripsi}</p><br>
                        <p class="card-text">Rp.${data.Harga}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted my-2" style="float:right">${data.Estimasi}</small>
                        <a href="#" class="btn btn-primary" style="background-color:rgba(255, 217, 0, 0.829); border:solid black 1px">Pesan Sekarang</a>
                     </div>
                </div>
            </div>`);
        });
    });
}

allMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let Jenis = $(this).html();
    $('h1').html(Jenis);

    if(Jenis=='All menu'){
        $('#daftarMenu').empty();
        allMenu();
        return;
    }

    $.getJSON('data.json', function(data){
        let menu = data.menu;
        let content = '';
        $.each(menu, function(i,data){
                if(data.Jenis == Jenis){
                    content +=`<div class="col-md-3 d-flex">
                    <div class="card mb-5" style="min-height:max-content; width:100%">
                        <div class="card-header">${data.Jenis}</div>
                        <img src="img/${data.Gambar}" style="object-fit:contain; height:180px !important; align:center">
                        <div class="card-body">
                            <h5 class="card-title">${data.Nama}</h5>
                            <p class="card-text">${data.Deskripsi}</p><br>
                            <p class="card-text">Rp.${data.Harga}</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted my-2" style="float:right">${data.Estimasi}</small>
                        <a href="#" class="btn btn-primary" style="background-color:rgba(255, 217, 0, 0.829); border:solid black 1px">Pesan Sekarang</a>
                        </div>
                    </div>
                    </div>`;
                }
        });
        $('#daftarMenu').html(content);
    });

});

// function tampilkanAllMenu() {
//     $.getJSON("data.json", function (data) {
//       let menu = data.menu;
//       $.each(menu, function (i, data) {
//         $("#daftarMenu").append(
//           '<div class="col-md-4 d-flex justify-content-evenly"><div class="card mt-2 mb-4" style="width: 20rem"><img src="img/' +
//             data.Gambar +
//             '" class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
//             data.Nama +
//             '</h5><p class="card-text" style="height: 110px;">' +
//             data.Deskripsi +
//             '<div class="d-flex flex-row-reverse"></h5><p class="card-text">' +
//             data.Estimasi +
//             '</div></p><h5 class="card-title">' +
//             data.Harga +
//             '</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
//         );
//       });
//     });
//   }
  
//   tampilkanAllMenu();
  
//   $(".nav-item").on("click", function () {
//     $(".nav-item").removeClass("active");
//     $(this).addClass("active");
  
//     let jenis = $(this).html();
  
//     $.getJSON("data.json", function (data) {
//       let menu = data.menu;
//       let content = "";
  
//       if (jenis == "All Menu") {
//         tampilkanAllMenu();
//       }
  
//       $.each(menu, function (i, data) {
//         if (data.jenis == jenis) {
//           content +=
//             '<div class="col-md-4 d-flex justify-content-evenly"><div class="card mt-2 mb-4" style="width: 20rem"><img src="img/' +
//             data.Gambar +
//             '" class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
//             data.Nama +
//             '</h5><p class="card-text" style="height: 110px;">' +
//             data.Deskripsi +
//             '<div class="d-flex flex-row-reverse"></h5><p class="card-text">' +
//             data.Estimasi +
//             '</div></p><h5 class="card-title">' +
//             data.Harga +
//             '</p><a href="#" class="btn btn-primary">Beli Sekarang!</a></div></div></div>';
//         }
//       });
  
//       $("#daftarMenu").html(content);
//     });
//   });