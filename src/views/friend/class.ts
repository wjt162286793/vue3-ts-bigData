import {anyUserType} from './type'

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
    // id  //评论id
    // ownerInfo  //评论发布者信息
    // isFirstFloor
    // text
    // imgList
    // userTotal
    // textTotal
    // loveTotal
    // toUserInfo
    // time
    // ip
    // children
    
    
    constructor(id:string,ownerInfo:anyUserType,isFirstFloor:boolean,text:string){
        console.log(arguments,'arguments的值')
        console.log(Array.from(arguments),'数组')
        Array.from(arguments).forEach((item:any,index:number)=>{
            let key = EvaluateItemKeyList[index]
           this[key] = item
        })
        // this.id = id
        // this.ownerInfo = ownerInfo
        // this.isFirstFloor = isFirstFloor
        // this.text = text
    }
}