/*
    한 번호가 다른 번호의 접두어인 경우가 있는지 확인
    구조대 전화번호는 영석이의 전화번호의 접두사
    구조대 : 119
    박준영 : 9674223
    지영석 : 1195524421
*/

function solution(phone_book) {
    phone_book.sort();
    // console.log(phone_book);
    var answer = true;
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            answer = false;
            break;
        }
    }

    return answer;
}
