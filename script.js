
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		 var radius = canvas.height  / 2; // Նոր փոփոխականին տալիս ենք արժեք մեր կանվասի տեսքը բարձրության կեսը - 200, ստացվում է շրջանի քառորդ մասը
		ctx.translate(radius, radius ) ; // Այնուհետև կրկնում ենք մեր փոփոխականի ստացված տեսքը translate function-ի միջոցով և
		// ստանում ենք լիարժեք շրջան
		radius = radius * 0.90; // տալիս ենք նոր արժեք մեր շրջանին, որպեսզի տեղավորվի մեր կանվասի մեջ չդիպչելով կանվասի արժեքին,
		// որքան թիվը փոքրացնենք այնքան անգամ մեր շրջանը կփոքրանա 
		setInterval(drawClock, 1000);  // կանչում ենք շրջանի function-ին , steInterval function-ի մեջ
		
		function drawClock() {
			drawFace(ctx,radius);
			drawNumbers(ctx,radius);
			drawTime(ctx,radius);
		}

		function drawFace(ctx, radius){
			var border;
			ctx.beginPath();
			ctx.arc(0,0, radius, 0, 2 * Math.PI); //շրջանի քարրորդ մասը որպեսզի ստանա շրջանի տեսք, բազմապատկում ենք math pi-ով
			ctx.fillStyle ='bisque' ; // տալիս ենք գույն  
			ctx.fill(); // լցնում ենք տվյալ արժեքներով: գույն և չափեր
			border = ctx.createRadialGradient(0,0, radius*0.15,0,0,radius*1.05);
			border.addColorStop(0, ' #623024'); 
			border.addColorStop(0.5, '#623024 ');
			border.addColorStop(1, '#e0968c');
			ctx.strokeStyle = border;
			ctx.lineWidth = radius*0.1;
  			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0, 0, radius*0.03, 0, 2* Math.PI);
			ctx.fillStyle = '#623024';
			ctx.fill();
		}

		function drawNumbers(ctx,radius){
			var tab;
			var num;
			ctx.font = "25px cursive";
			ctx.textAlign = "center";	

			for(num = 1; num < 13; num++){
				tab = num * Math.PI / 6;
				ctx.rotate(tab);
				ctx.translate(0, -radius*0.85);
				ctx.rotate(-tab);
				ctx.fillText(num.toString(), 0, 0);
				ctx.rotate(tab);
				ctx.translate(0, radius * 0.85);
				ctx.rotate(-tab);	
			}
		}

		function drawTime(ctx, radius){
			var now = new Date();
			var hour = now.getHours();
			var minute = now.getMinutes();
			var second = now.getSeconds();

			hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
			drawHand(ctx, hour, radius*0.4, radius*0.05);

			minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
			drawHand(ctx, minute, radius*0.6, radius*0.05);

			second=(second*Math.PI/30);
			drawHand(ctx, second, radius*0.7, radius*0.02);
		}

 	   	function drawHand(ctx, pos,  length, width) {
 	   		
 	   		ctx.beginPath();
  	  		ctx.lineWidth = width;
			ctx.lineCap = "round";
			ctx.moveTo(0,0);
			ctx.rotate(pos);
			ctx.lineTo(0, -length);
			ctx.stroke();
			ctx.rotate(-pos);

}