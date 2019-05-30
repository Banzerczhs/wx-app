let datalist = [['东三','东四','东六','东七','东八','东九','东十C'],[]];
    for(let i=0;i<datalist[0].length;i++){
         let list = [];
         for(let h=0;h<6;h++){
            let random = Math.ceil(Math.random()*40);
            for(let j=0; j< random;j++){
                let a = null;
                if(j<= 9 ){
                    a= '0' +j
                }else{
                    a = j
                }
                list.push(`${datalist[0][i]}${h+1}${a}`);
            }
         }
          datalist[1].push(list);
    }
let dataClassRoom = [['凌风楼','逸夫楼','逸思楼','思源楼','逸云楼','凌波楼'],[]];
    for(let i=0;i<dataClassRoom[0].length;i++){
        let list = [];
        for(let h=0;h<6;h++){
        let random = Math.ceil(Math.random()*40);
        for(let j=0; j< random;j++){
            let a = null;
            if(j<= 9 ){
                a= '0' +j
            }else{
                a = j
            }
            list.push(`${dataClassRoom[0][i]}${h+1}${a}`);
        }
        }
        dataClassRoom[1].push(list);
    }
 
export default {
    datalist,
    dataClassRoom
}