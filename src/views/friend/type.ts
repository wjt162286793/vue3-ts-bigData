export interface friendItemType {
    userName: string
    time: string
    text: string
    url: string
    unreadTip: number
}

export interface msgItem {
    from: string,
    text: string,
    time: string,
    url: string,
    id: string
}
export interface groupItem {
   id:string
   name:string,
   nickname:string,
}
export interface shareItem {
   id:string
   name:string,
   cname:string
}
export interface shopTitleItem{
    id:string
    value:string
    label:string
}