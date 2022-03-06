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