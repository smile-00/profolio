function Tonchange() {
    var sdate = document.querySelector('input[name="pwd"]');
    var month = sdate.value.slice(5, 7);
    var date = sdate.value.slice(8, 10);
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    
    setMonthAndDay(month, date);
    var millisecsPerDay = 24 * 60 * 60 * 1000;
    for (var x = 0; x < topicCount; x++) {
        const dd = (new Date(startDate.getTime() + 7 * x * millisecsPerDay).toLocaleDateString()).slice(5);
        
        if(x < 2){
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td style=\"color:gray;\">${x+1}</td>`);
            $("#courseTable").append(`<td style=\"color:gray;\">${dd}</td>`);
            $("#courseTable").append(`<td style=\"color:gray;\">${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }
        else{
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td>${x+1}</td>`);
            $("#courseTable").append("<td>" + dd + "</td>");
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }
        
    }
}
window.onload = function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    
    setMonthAndDay(month, date);
    var millisecsPerDay = 24 * 60 * 60 * 1000;
    for (var x = 0; x < topicCount; x++) {
        const dd = (new Date(startDate.getTime() + 7 * x * millisecsPerDay).toLocaleDateString()).slice(5);
        
        if(x < 2){
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td style=\"color:gray;\">${x+1}</td>`);
            $("#courseTable").append("<td style=\"color:gray;\">" + dd + "</td>");
            $("#courseTable").append(`<td style=\"color:gray;\">${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }
        else{
            $("#courseTable").append("<tr>");
            $("#courseTable").append(`<td>${x+1}</td>`);
            $("#courseTable").append("<td>" + dd + "</td>");
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }
        
    }
};


