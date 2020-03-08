$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "http://ec2-13-233-128-170.ap-south-1.compute.amazonaws.com:3000/products",
		success: function(products) {
			let divContent = document.getElementsByClassName("content");
			let divRow1 = document.getElementsByClassName("row1");
			let divRow2 = document.getElementsByClassName("row2");
			products.forEach((product, index) => {
				let labelN = document.createElement('label')
				$(labelN).text('Name: ');
				$(labelN).css('font-weight', '800');
				let labelD = document.createElement('label')
				$(labelD).text('Description: ');
				$(labelD).css('font-weight', '800');
				let labelR = document.createElement('label')
				$(labelR).text('Rating: ');
				$(labelR).css('font-weight', '800');
				let labelT = document.createElement('label')
				$(labelT).text('User Count: ');
				$(labelT).css('font-weight', '800');

				let div;
				let divColumn = document.createElement('div');
				$(divColumn).attr('class', 'column');
				if(index < 5)
					div = divRow1;
				else
					div = divRow2;
				$(div).append(divColumn);
				let labelName = document.createElement('label')
				$(labelName).attr('id', 'name');
				$(labelName).text(product.name);

				let labelDesc = document.createElement('label')
				$(labelDesc).attr('id', 'description');
				$(labelDesc).text(product.description);

				let labelRating = document.createElement('label')
				$(labelRating).attr('id', 'rating');
                
                //spans for star
                for(let i = 0; i < Math.round(product.averageRating); i++){
                    let starSpan = document.createElement('span');
                    $(starSpan).attr('class', 'fa fa-star checked');
                    labelRating.append(starSpan);
                }

                $(labelRating).append(' (');
                $(labelRating).append(product.averageRating);
                $(labelRating).append(')');

				let labelCount = document.createElement('label')
				$(labelCount).attr('id', 'count');
				$(labelCount).text(product.ratingUsersCount);
				
				$(divColumn).append(labelN);
				$(divColumn).append(labelName);
				$(divColumn).append('<br/>');
				$(divColumn).append(labelD);
				$(divColumn).append(labelDesc);
				$(divColumn).append('<br/>');
				$(divColumn).append(labelR);
				$(divColumn).append(labelRating);
				$(divColumn).append('<br/>');
				$(divColumn).append(labelT);
				$(divColumn).append(labelCount);
				$(divColumn).append('<br/>');
			});
		}
	});
});
