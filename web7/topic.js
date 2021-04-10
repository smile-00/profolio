var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay) {
    //一次設定好月份與日期
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
var month = 4;
var date = 1;
function Tonchange() {
    var sdate = document.querySelector('input[name="pwd"]');
    var month = sdate.value.slice(5, 7);
    var date = sdate.value.slice(8, 10);
    alert(month);
    alert(date);
}