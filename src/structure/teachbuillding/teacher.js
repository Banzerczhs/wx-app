let teacher = {};
let floor=['空闲教室','外语学院教学区','外语学院办公区','计算机学院办公区','文化与传媒学院办公区','文化传媒学院教学区'];
let type=['网络教研室','教研室主任办公室','软件教研室','学生管理中心','学籍打印处','翻译厅','辅导员办公室','院长室','副院长室'];
for (let i = 0; i < 6; i++){
    let a = `${i+1}F`;
    let list = [];
    for(let j=0; j<12;j++){
        let obj = {
            name : `A-${i+1}${j+1>=10?j+1:'0'+(j+1)}`,
            subtitle : floor[i],
            url : `${type[Math.floor(Math.random()*9)]}`
        };
        list.push(obj);
    }
    teacher[a] = list;
}

export default {
    teacher
}