function solution(progresses, speeds) {
    
    const needDay = []
    for(let i=0; i<progresses.length; i++){
        let day = Math.ceil((100 - progresses[i]) / speeds[i]);
        needDay.push(day)
    }
    let answer = []
    let deployDay = 0; // 배포된 날짜
    let lastDay = 0;
    let jobCompleted = 0;
    //	[ 7, 3, 9 ]
    // 7, 3 / 9
    //	[ 5, 10, 1, 1, 20, 1 ]
    // 5 / 10, 1, 1 / 20, 1
    // console.log("NeedDay:", needDay)
    for(let i=0; i<needDay.length;i++){
        // 배포 날짜 >= 필요 날짜: jobCompleted++
        if(deployDay >= needDay[i]){
            jobCompleted++;
        }else{
            // 배포날짜 < 필요날짜: answer에 jobCompleted 넣기
            // 맨 처음의 경우 때문에
            deployDay = needDay[i];
            
            if(jobCompleted === 0){
                jobCompleted++;
            }else if(jobCompleted > 0){
                answer.push(jobCompleted);
                jobCompleted = 1;
            }
        }
    }
    answer.push(jobCompleted);
    return answer;
}