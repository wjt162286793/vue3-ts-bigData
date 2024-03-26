//好友
export interface friendItemType {
    userName: string
    time: string
    text: string
    url: string
    unreadTip: number
}

//消息
export interface msgItem {
    from: string,
    text: string,
    time: string,
    url: string,
    id: string
}

//群组
export interface groupItem {
   id:string
   name:string,
   nickname:string,
}

//发现项
export interface shareItem {
   id:string
   name:string,
   cname:string
}

//购物菜单
export interface shopTitleItem{
    id:string
    value:string
    label:string
}

//游戏圈
export interface gameLogItem{
    id:string
    logoUrl:string
    userInfo:string
    attachmentType:string
    attachment:string | Array<string> 
    text:string
    starNum:number
    lookNum:number
    star:boolean
    flow:boolean
    time:string
    comment:Array<{
        user:string
        text:string
        starNum:number
    }>
}

//商品栏
export interface productItemType{
    id:string
    imgUrl:string
    productName:string
    productDesc:string
    productPrice:number
} 

//轮播
export interface carouselItemType{
    id:string
    imgUrl:string
}

export interface anyUserType{
    id:string
    userName:string
    userAvatar:string
}

//评论区
export interface evaluateItem{
    id:string
    ownerInfo:anyUserType
    isFirstFloor:boolean
    text:string
    imgList:string[]
    userTotal:number | null
    textTotal:number | null
    loveTotal:number
    toUserInfo:anyUserType
    time:string
    ip:string
    children:evaluateItem
}

