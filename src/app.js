$(".js-searchbtn").on('click', function(e){
	
	function findItems() {
		$.get("../rest/searchresult-items.json?", function(data){
			console.log(data);
			$.each(data, function(index,value){
				$("<div class='t-searchresult-item'>"+value.type+value.name+value.description+value.shopname+value.address+"</div>").appendTo(".js-searchresult");
			});
			
		});
	}
	function findShops() {
		$.get("../rest/searchresult-shops.json", function(data){
			console.log(data);
			$.each(data, function(index,value){
				$("<div class='t-searchresult-item'>"+value.type+"</div>").appendTo(".js-searchresult");
			});
			
		});
	}
	$('.js-searchresult').empty();
	if($(".js-searchtype").val() === 'item'){
	
		findItems();
	} else if($(".js-searchtype").val() === 'shop'){
		
		findShops();
	}
});