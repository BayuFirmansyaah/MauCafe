$('.cari').on('click',function(){
    $('.wrap-success').html(`
      <div class="wrap-input">
        <input type="text" class="f-pps-m" disabled style="background: white;" value="Bayu Firmansyah">
        <label for="" class="f-pps-m">Nama Penerima</label>
      </div>
      <div class="wrap-input">
        <input type="text" class="f-pps-m"  style="background: white;">
        <label for="" class="f-pps-m">Jumlah Saldo</label>
        </div>`)

    $('.cari').html("Kirim Saldo")
})

$('.button-back').on('click',()=>{
  history.back();
})