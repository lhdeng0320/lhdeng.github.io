var i = 1;
setInterval(function(){
        i++;
        if(i>4){i=1;}
        document.getElementById('pic').src="images/"+i+".jpg";
},2000);
