$(document).ready(function() {               
	$(window).scroll(function(event) {			//слушать скролл 

		var s=$(this).scrollTop();					//пременная скролл вверх
		var w=$(this).outerWidth();				//ширина окна
		var h=$('.content').outerHeight();		//высота контентной части
		var h_b=$('.parallax').outerHeight();	//высота верхнего блока
		var p = s/h*100;								//процент прокрутки
		var p_b = s/h_b*100;							//проц прокрутки верх части
		var o = 1-1/100*p_b;							//вычесление непрозрачности

		var z_1=1+(w/10000*p_b)						//туман

	$('.parallax__fog').css('transform','scale('+z_1+')');				//зум
	$('.parallax__fog').css('opacity',o);										//прозрачность тумана

	var z_2=1+(w/5000000*p);														//гора фон
		$('.parallax__mountain_1').css('transform','scale('+z_2+')');	//увеличение

	var hr=w/2000*p_b 						//	правая гора
	var z_3=1+(w*0.000005*p_b);			
	
	$('.parallax__mountain_2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');


	var hr_2=w/1500*p_b 						//левая гора
	var z_4=1+(w*0.00001*p_b);
	$('.parallax__mountain_3').css('transform','translate3d('+hr_2+'px,0,0) scale('+z_4+')');

	})
})
