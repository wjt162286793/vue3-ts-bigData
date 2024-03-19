/// <reference types="vite/client" />
declare module "element-plus/dist/locale/zh-cn.mjs"
// 引入文件爆红且不提示的处理
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}