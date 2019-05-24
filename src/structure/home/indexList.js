let indexlist = {
    indexnav:[
        {
            src:"https://www.quyun.online/assets/image/x_0042_%E5%A4%B1%E7%89%A9%E6%8B%9B%E9%A2%861.png",
            name:'失物招领'
        },
        {
            src:"https://www.quyun.online/assets/image/x_0038_%E5%9B%BE%E4%B9%A6%E9%A6%86.png",
            name:'图书馆',
            child:[
                {
                    name:"借阅记录",
                    url:"/pages/library/borrowinfo"
                },
                {
                    name:"书库",
                    url:"/pages/library/library"
                },
                {
                    name:"书架",
                    url:"/pages/library/collection"
                }
            ]
        },
        {
            src:"https://www.quyun.online/assets/image/x_0037_%E6%95%99%E5%AD%A6%E6%A5%BC.png",
            name:'教学楼',
            child:[
                {
                    name:"教室使用情况",
                    url:'/pages/teachbuillding/employ'
                },
                {
                    name:"教师办公室",
                    url:'/pages/teachbuillding/teacher'
                }
            ]
        },
        {
            src:"https://www.quyun.online/assets/image/x_0039_%E7%A4%BE%E5%9B%A2.png",
            name:'社团',
            child:[
                {
                    name:"活动时间表",
                    url:"/pages/association/issue"
                },
                {
                    name:"发布活动",
                    url:"/pages/association/associationform"
                }
            ]
        },
        {
            src:"https://www.quyun.online/assets/image/x_0040_%E5%AE%BF%E8%88%8D.png",
            name:'服务中心',
            child:[
                {
                    name:"费用缴纳",
                    url:"/pages/dorm/pay"
                },
                {
                    name:"维修列表",
                    url:"/pages/dorm/repair"
                }
            ]
        },
        {
            src:"https://www.quyun.online/assets/image/x_0041_%E7%82%B9%E6%AD%8C%E5%8F%B0.png",
            name:'点歌台'
        },
        {
            src:"https://www.quyun.online/assets/image/x_0036_%E7%BD%91%E7%BB%9C%E4%B8%AD%E5%BF%83.png",
            name:'网络中心'
        }
    ]
}

let fish ={
    fishtop:[
        {
            src:"/assets/img/Bubble/x_0011.png",
        },
        {
            src:"/assets/img/Bubble/x_0007.png",
        },
        {
            src:"/assets/img/fish/x_0010.png",
        },
    ],
    fishmiddle:[
        {
            src:"/assets/img/Bubble/x_0011.png",
        },
        {
            src:"/assets/img/Bubble/x_0007.png",
        },
        {
            src:"/assets/img/fish/x_0009.png",
        },
    ],
    fishbottom:[
        {
            src:"/assets/img/Bubble/x_0011.png",
        },
        {
            src:"/assets/img/Bubble/x_0007.png",
        },
        {
            src:"/assets/img/fish/x_0006.png",
        },
    ]
}

export default {
    indexlist
};

