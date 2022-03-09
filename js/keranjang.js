$('.button-back').on('click',()=>{
	history.back();
})

$('.button-plus').on('click',function(){
	let id = $(this).attr('data-id')
	let value = document.querySelectorAll('.order-list')[id]
		value = value.querySelector('.value-order').innerText;
		value = parseInt(value)
	 	value +=1;

	let value_box = document.querySelectorAll('.order-list')[id]
		value_box = value_box.querySelector('.value-order').innerText=value;
})


$('.button-minus').on('click',function(){
	let id = $(this).attr('data-id')
	let value = document.querySelectorAll('.order-list')[id]
		value = value.querySelector('.value-order').innerText;
		value = parseInt(value)

	if(value>0){
		value -=1;
	}else{
		value = 0;
	}
	
	let value_box = document.querySelectorAll('.order-list')[id]
		value_box = value_box.querySelector('.value-order').innerText=value;
})

// modal location

$(".location-user").on('click',function(){
	$('body').attr("style","overflow-y:hidden;height:100%");
	$('.pop-up-location').removeClass("d-none")
	setTimeout(()=>{
		$('.detail-location-pop-up').addClass("show-pop-up-location");
	},200)
})

$('#close-pop-up-button-location').on('click',function(e){
	setTimeout(()=>{
		$('.detail-location-pop-up').addClass("close-pop-up-location");
	})

	setTimeout(()=>{
		$('body').attr("style"," ");
		$('.pop-up-location').addClass("d-none");
		$('.detail-location-pop-up').removeClass("show-pop-up-location");
		$('.detail-location-pop-up').removeClass("close-pop-up-location");
	},500)
})


$('.location-list').on('click',function(){
	$('.text-location-user').html($(this).text());

	setTimeout(()=>{
		$('.detail-location-pop-up').addClass("close-pop-up-location");
	})

	setTimeout(()=>{
		$('body').attr("style"," ");
		$('.pop-up-location').addClass("d-none");
		$('.detail-location-pop-up').removeClass("show-pop-up-location");
		$('.detail-location-pop-up').removeClass("close-pop-up-location");
	},500)
})


// modal voucher
$(".voucher").on('click',function(){
	$('body').attr("style","overflow-y:hidden;height:100%");
	$('.pop-up-discount').removeClass("d-none")
	setTimeout(()=>{
		$('.detail-discount-pop-up').addClass("show-pop-up-discount");
	},200)
})

$('#close-pop-up-button-voucher').on('click',function(e){
	setTimeout(()=>{
		$('.detail-discount-pop-up').addClass("close-pop-up-discount");
	})

	setTimeout(()=>{
		$('body').attr("style"," ");
		$('.pop-up-discount').addClass("d-none");
		$('.detail-discount-pop-up').removeClass("show-pop-up-discount");
		$('.detail-discount-pop-up').removeClass("close-pop-up-discount");
	},500)
})

$('.discount-list').on('click',function(){
	let diskon = $(this).attr("data-diskon")
	$('.detail-voucher').html(`
		<h2 class="text-voucher f-pps-l" id="text-voucher">Yeayy kamu dapat diskon ${diskon} %</h2>
        </div>`)

	setTimeout(()=>{
		$('.detail-discount-pop-up').addClass("close-pop-up-discount");
	})

	setTimeout(()=>{
		$('body').attr("style"," ");
		$('.pop-up-discount').addClass("d-none");
		$('.detail-discount-pop-up').removeClass("show-pop-up-discount");
		$('.detail-discount-pop-up').removeClass("close-pop-up-discount");
	},500)
})