export const API = {
    LOGIN : `/withcar/login-process`,
    SIGN : `/withcar/signup`,
    BASEURL : `/withcar/`,
    WRITE : '/withcar/recruit/new',
    RECRUIT : '/withcar/recruit',
    RECRU_DEL : '/withcar/recruit/delete',
    RECRU_APL : '/withcar/recruit/apply',
    RECRU_APL_LIST : '/withcar/recruit/applyList',
    RECRU_APL_WITH_LIST : '/withcar/recruit/carfullMember',
    RECRU_APL_ACCEPT : '/withcar/recruit/accept',
    RECRU_APL_DENY : '/withcar/recruit/deny',
    RECRU_APL_KICK : '/withcar/recruit/kick',
    RECRU_START : '/withcar/recruit/start',
    RECRU_START_AGREE : '/withcar/recruit/start/agree',
    RECRU_ARRIVE : '/withcar/recruit/arrive',
    RECRU_ARRIVE_AGREE : '/withcar/recruit/arrive/agree',
    RECRU_CAN : '/withcar/recruit/cancel',
    RECRU_OWN : '/withcar/recruit/isowner',
    CHK_RECRU_APL : '/withcar/recruit/isApply',
    CHK_RECRU_ACC : '/withcar/recruit/isAccept',
    INFO : '/withcar/myInfo',
    INFO_APL : '/withcar/myInfo/apply',
    INFO_WRT : '/withcar/myInfo/recruit',
    CHANGE_PAWD : '/withcar/myInfo/change-pw',
    CHAT : '/withcar/gs-guide-websocket',
    GREET : '/withcar/topic/greetings',
    CHAT_SEND : '/withcar/app/hello',
    LOAD_CHAT : '/withcar/recruit/init'

}














//var stompClient = null;
//
// function setConnected(connected) {
//     $("#connect").prop("disabled", connected);
//     $("#disconnect").prop("disabled", !connected);
//     if (connected) {
//         $("#conversation").show();
//     }
//     else {
//         $("#conversation").hide();
//     }
//     $("#greetings").html("");
// }
//
// function connect() {
//     var socket = new SockJS('/gs-guide-websocket');
//     stompClient = Stomp.over(socket);
//     stompClient.connect({}, function (frame) {
//         setConnected(true);
//         console.log('Connected: ' + frame);
//         stompClient.subscribe('/topic/greetings', function (greeting) {
//             showGreeting(JSON.parse(greeting.body).content);
//         });
//     });
// }
//
// function disconnect() {
//     if (stompClient !== null) {
//         stompClient.disconnect();
//     }
//     setConnected(false);
//     console.log("Disconnected");
// }
//
// function sendName() {
//     stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
// }
//
// function showGreeting(message) {
//     $("#greetings").append("<tr><td>" + message + "</td></tr>");
// }
//
// $(function () {
//     $("form").on('submit', function (e) {
//         e.preventDefault();
//     });
//     $( "#connect" ).click(function() { connect(); });
//     $( "#disconnect" ).click(function() { disconnect(); });
//     $( "#send" ).click(function() { sendName(); });
// });