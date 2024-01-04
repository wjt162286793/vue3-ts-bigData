import {globalOptions,RuleForm} from './type'


//数据来源选项
export let sourceOptions:Ref<Array<globalOptions>> = ref([
    {
        label:'腾讯',
        value:'tx'
    },
    {
        label:'阿里',
        value:'al'
    },
    {
        label:'京东',
        value:'jd'
    },
    {
        label:'抖音',
        value:'dy'
    },
]) 
//领域选项
export let domainOptions:Ref<Array<globalOptions>> = ref([
    {
        label:'游戏',
        value:'game'
    },
    {
        label:'商务',
        value:'business'
    },
    {
        label:'传媒',
        value:'media'
    },
    {
        label:'金融',
        value:'finance'
    },
]) 
//状态选项
export let statusOptions:Ref<Array<globalOptions>> = ref([
    {
        label:'开启',
        value:true
    },
    {
        label:'关闭',
        value:false
    },
])
//表格数据
export let tableData:Ref<Array<object>> = ref([])
//弹框回显依赖值
export let dialogVisible:Ref<boolean> = ref(false)
//当前被选中的数据
export let activeRow:Ref<object | null> = ref({})
//弹框标题
export let dialogTitle:Ref<string> = ref('')
//弹框宽度
export let dialogWidth:Ref<string> = ref('700px')
//表单数据
export let ruleForm= ref<RuleForm>({
    dataName: "",
    source: "",
    status: false,
    safeLevel: "常规",
    code: "",
    domain: [],
  });