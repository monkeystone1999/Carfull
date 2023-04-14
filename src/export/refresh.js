// 쿠키의 유효기간 검색 쿠키 get set del
export function setCookie(name = "", value = "") {
    if (value == "") {
        document.cookie = name + '=' + JSON.stringify(value) + "; path=/; expires =" + "" + ';';
    } else {
        let today = new Date();
        document.cookie = name + '=' + JSON.stringify(value) + "; path=/; expires =" + today.getTime() + ';';
    }
}

//setCookie('refresh_token',get_data['refresh_token'])
export const getCookie = (name) => {
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); /*이상한 문자는 아무거나 들어가도 name 만 찾겠다는 정규식*/
    return value ? value[1] : null;
}
// getCookie('refresh_token')
// export const delCookie = (name = "") =>{
//     let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//     const Cookie_time = value[2].match(/expires=([^;]*)/);
//     const check_time = new Date().getTime();
//     if(Cookie_time+900000 < check_time){
//         document.cookie = name + '=' + '' + "; path=/; expires ="+''+';';
//     }
// }
// delCookie('refresh_token')

// refresh 가 없으면 아예 안되게 하고 그냥 시간이 지나면 refresh를 다시 보내주는 역할 보안은 나중에 보자