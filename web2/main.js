window.onload = function(){
    //document.write("Hello JavaScript");
    $(function(){
        $("input").on("click",function(){
        //alert("Hi");
            var numberOfListItem = $("li").length;
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            $("h1").text($("li").eq(randomChildNumber).text());
            if(randomChildNumber == 0){
                document.getElementById("img1").src="拉麵.jpg";
            }else if(randomChildNumber == 1){
                document.getElementById("img1").src="滷肉飯.jpg";
            }else if(randomChildNumber == 2){
                document.getElementById("img1").src="水餃.jpg";
            }
        });
    });
};