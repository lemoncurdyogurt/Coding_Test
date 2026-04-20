function solution(citations) {
    const maxH = citations.length;
    
    citations.sort((a,b)=> a-b);
    
    console.log(citations) // 	[ 0, 1, 3, 5, 6 ]
    
    for(let h = maxH; h >= 0 ; h--){
        let numOfHigh = 0 // h번 이하 인용 논문 갯수
        
        for(const citation of citations){
            if(citation>=h){
                numOfHigh++
            }
        }
        
        if(numOfHigh >= h) return h
    }
}