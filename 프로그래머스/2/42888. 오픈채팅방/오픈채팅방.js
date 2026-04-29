function solution(record) {
    const cmd = [];
    const nickName_map = new Map();

    for (const r of record) {
        let line = [];
        const [action, uid, nickname] = r.split(" ");

        if (action !== "Leave") {
            nickName_map.set(uid, nickname);
        }

        // 출력해야 하는 메시지는 Enter와 Leave뿐이므로 따로 관리합니다.
        if (action !== "Change") {
            cmd.push([action, uid]);
        }
    }

    // console.log(cmd);
    // console.log(nickName_map);

    var answer = [];

    for (let i = 0; i < cmd.length; i++) {
        let str = "";
        if (cmd[i][0] === "Enter") {
            let nickname = nickName_map.get(cmd[i][1]);
            str = `${nickname}님이 들어왔습니다.`;
        } else if (cmd[i][0] === "Leave") {
            let nickname = nickName_map.get(cmd[i][1]);
            str = `${nickname}님이 나갔습니다.`;
        } else if (cmd[i][0] === "Change") {
            continue;
        }
        answer.push(str);
    }

    return answer;
}
