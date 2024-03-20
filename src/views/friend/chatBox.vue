<template>
    <div class="chatBox">
        <div class="top">
     <div class="title">嘉文四世</div>
     <div class="msgBox">
     </div>
  </div>
  <div class="bottom">
  <!-- <div class="tip">
     选择文本
  </div>
  <el-input type="textarea" :rows="5"></el-input> -->
  <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
        @onCreated="handleCreated" @onChange="handleChange" @onDestroyed="handleDestroyed" @onFocus="handleFocus"
        @onBlur="handleBlur" @customAlert="customAlert" @customPaste="customPaste" />
        <el-button>按钮</el-button>
  </div>
    </div>

</template>

<script lang="ts" setup>
 import '@wangeditor/editor/dist/css/style.css' // 引入 css
 import { DomEditor } from '@wangeditor/editor'
 import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
      // 编辑器实例，必须用 shallowRef
      const editorRef = shallowRef()
      const mode = ref('default')
      // 内容 HTML
      const valueHtml = ref('<p>hello wangjingtao</p>')
  
      // 模拟 ajax 异步获取内容
      onMounted(() => {
        //error2 使用延迟渲染
        nextTick(()=>{
          valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
          console.log(editorRef.value.getAllMenuKeys(),'???配置')
        })
      })
  
      const toolbarConfig = reactive({})

      //自定义工具栏
      toolbarConfig.toolbarKeys = [
      'color', //颜色
      'fontFamily', //字体类型
      'fontSize', //字体大小
      'emotion', //表情
      'uploadImage', //图片
      'divider' //分割线
      ]
      const editorConfig = reactive({ placeholder: '请输入内容...' })
  
      // 组件销毁时，也及时销毁编辑器
      onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
      })
  
      const handleCreated = (editor) => {
        editorRef.value = editor
        console.log('created', editor)
      }
      const handleChange = (editor) => { console.log('change:', editor.children) }
      const handleDestroyed = (editor) => { console.log('destroyed', editor) }
      const handleFocus = (editor) => { console.log('focus', editor) }
      const handleBlur = (editor) => { console.log('blur', editor) }
      const customAlert = (info, type) => { alert(`【自定义提示】${type} - ${info}`) }
      const customPaste = (editor, event, callback) => {
        console.log('ClipboardEvent 粘贴事件对象', event)
        // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
        // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
        // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）
  
        // 自定义插入内容
        editor.insertText('xxx')
  
        // 返回 false ，阻止默认粘贴行为
        event.preventDefault()
        callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）
  
        // 返回 true ，继续默认的粘贴行为
        // callback(true)
      }
    
</script>

<style lang="less" scoped>
.chatBox{
  flex: 1;
  .top{
    height: 70%;
    display: flex;
    flex-direction: column;
    .title{
        background: #000;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        height: 40px;
    }
    .msgBox{
        flex: 1;
        background: #262525;
    }
  }
  .bottom{
    // border-top: 2px #fff solid;
    height: 30%;
    background: #262525;
    border: 1px #fff solid;
  }
}

::v-deep(.w-e-bar){
    background-color: #000;
    color: #fff;
}
::v-deep(.w-e-text-container){
    background-color: #000;
    color: #fff;
}
  
::v-deep(.w-e-select-list){
    background-color: #000;
}
::v-deep(.w-e-select-list ul li:hover){
    background-color: #fff;
    color: #000;
}
::v-deep(.w-e-select-list ul .selected){
    background-color: #000;
}

</style>