let teacher = {};
    for (let i = 0; i < 26; i++){
      let a = String.fromCharCode(65 + i);
      let random = Math.ceil(Math.random()*5);
      let list = [];
        for(let j=0; j< random;j++){
            let obj = {
                name:`${a+j}老师`,
                url:`${a}10${j}办公室`
            };
            list.push(obj);
        }
      teacher[a] = list;
    }

export default {
    teacher
}