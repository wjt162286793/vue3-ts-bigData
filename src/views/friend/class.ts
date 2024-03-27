const EvaluateItemKeyList = [
    'id',
    'ownerInfo',
    'isFirstFloor',
    'text',
    'imgList',
    'userTotal',
    'textTotal',
    'loveTotal',
    'toUserInfo',
    'time',
    'ip',
    'children'
]
export class EvaluateItem{
    //这些属性都是和EvaluateItemKeyList一一对应,而且顺序也必须对得上才行
    // id  //评论id
    // ownerInfo  //评论发布者信息
    // isFirstFloor //是否为楼主
    // text //评论信息
    // imgList  //附件图片
    // userTotal //评论者人数
    // textTotal  //评论数量
    // loveTotal  //点赞数量
    // toUserInfo  //评论指向者
    // time  //评论时间
    // ip  //评论的ip
    // children  //该评论下方的其余评论
    
    
    constructor(){
        // console.log(arguments,'arguments的值')
        // console.log(Array.from(arguments),'数组')
        Array.from(arguments).forEach((item:any,index:number)=>{
            let key = EvaluateItemKeyList[index]
           this[key] = item
        })
    }
}