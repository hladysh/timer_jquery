$(function(){
	
	var note = $('#note'),
		ts = new Date(2017, 1, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
		// Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += "Днів: " + days +", ";
			message += "Годин: " + hours + ", ";
			message += "Хвилин: " + minutes + " и ";
			message += "Секунд: " + seconds + " <br />";
			
			if(newYear){
				message += "Залишилось кінця акції!";
			}
			else {
				message += "Залишилось кінця акції!";
			}
			
			note.html(message);
		}
	});
	
});
