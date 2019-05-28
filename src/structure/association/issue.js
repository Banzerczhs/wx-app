let date    = [];
let weekdate    = ['日','一','二','三','四','五','六',]
let TimeNow = new Date().getTime();
for( let i=0;i<7;i++){  //获取当前起7天时间
    let day =60*60*24*1000*i;
    let Today = new Date(TimeNow+day);
    let b = Today.getMonth()+1 +'-'+Today.getDate();
    let c = weekdate[Today.getDay()];

    let random = Math.ceil(Math.random()*30);
    let list = [];
    for(let j=0; j< random;j++){
        let obj = {
            title:`${i+1}--${j}青春如我，踏步时光飞逝青春`,
            start:'2019-5-15 14:30 - 2019-5-16 14:30',
            end  :"2019-5-14 14:30 - 2019-5-15 14:30"
        };
        list.push(obj);
    }
    
    let a = {
        date: b,
        week:c,
        list
    }
    date.push(a)

} 


export default {
    date
}