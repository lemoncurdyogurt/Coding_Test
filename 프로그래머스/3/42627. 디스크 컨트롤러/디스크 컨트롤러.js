// 현재 시각이랑 같거나 작은 요청시각을 가진 작업을 선택
// 선택할 작업이 두 개 이상인 경우 
// 1. 작업 소요시간이 짧은 것 
// 2. 요청 시각이 빠른 것
// 3. 작업의 번호가 작은 것

function solution(jobs) {
    let answer = 0;
    
    let jobsIdx = 0; // jobs배열을 훑을 인덱스
    let heap = [] // 대기할 작업을 저장할 배열
    let curTime = 0; // 현재 시간
    let returnTime = 0; // 반환 시간
    let finishJob = 0; // 작업 완료한 작업 수
    
    // 요청시간 순으로 정렬
    jobs.sort((a, b) => a[0] - b[0]);
    
    while(finishJob < jobs.length){
        
        while (jobsIdx < jobs.length && jobs[jobsIdx][0] <= curTime) {
            heap.push(jobs[jobsIdx]);
            jobsIdx++;
        }
        
        if(heap.length > 0){
            // 소요 시간 기준 내림차순으로 정렬
            heap.sort((a, b) => b[1] - a[1]);
            const [requestTime, duration] = heap.pop(); // 꺼낸 작업의 정보 저장

            curTime += duration;
            returnTime += (curTime - requestTime);
            finishJob++
        } else {
            // 대기열이 비어있는 경우
            curTime = jobs[jobsIdx][0];
        }
    }
    
    answer = Math.floor(returnTime / jobs.length);
    return answer;
}