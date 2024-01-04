export interface searchData {
    dataName:string | null
    domain:Array<string | null>
    status:boolean | string
    source:string
}
export interface globalOptions{
    label:string
    value:string | boolean
}
export interface RuleForm {
    dataName: string
    source: string
    status: boolean
    safeLevel: string
    code: string
    domain: Array<string | null>
    id?:number
    usageAmount?:number
  }