<template>
  <div class="chatBox">
    <div class="top">
      <div class="title">{{ userName }}</div>
      <div class="msgBox">
        <div v-for="item in msgList" :key="item.id">
          <div v-if="item.from === 'others'" class="others">
            <img class="innerAvatar" :src="require(item.url)" alt="" />
            <p class="otherText">{{ item.text }}</p>
          </div>
          <div v-else-if="item.from === 'self'" class="self">
            <p class="selfText">{{ item.text }}</p>
            <img class="innerAvatar" :src="require(item.url)" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="handleChange"
        @onDestroyed="handleDestroyed"
        @onFocus="handleFocus"
        @onBlur="handleBlur"
        @customAlert="customAlert"
        @customPaste="customPaste"
      />
      <div class="footer">
        <el-button class="btn" type="primary" @click="submitHandler"
          >发送</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { require } from "@/utils/require.ts";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { DomEditor } from "@wangeditor/editor";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { msgItem } from "./type";

//props
const props = defineProps({
  msgList:Array<msgItem>,
  userName:String
})

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const mode = ref("default");
// 内容 HTML
const valueHtml = ref("");

// 模拟 ajax 异步获取内容
onMounted(() => {
  //error2 使用延迟渲染
  nextTick(() => {
    valueHtml.value = "";
    console.log(editorRef.value.getAllMenuKeys(), "???配置");
  });
});

const toolbarConfig = reactive({});

//自定义工具栏
toolbarConfig.toolbarKeys = [
  "color", //颜色
  "fontFamily", //字体类型
  "fontSize", //字体大小
  "emotion", //表情
  "uploadImage", //图片
  "divider", //分割线
];
const editorConfig = reactive({ placeholder: "请输入内容..." });

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});


//操作监听事件
const handleCreated = (editor) => {
  editorRef.value = editor;
  console.log("created", editor);
};
const handleChange = (editor) => {
  // console.log("change:", editor.children);
};
const handleDestroyed = (editor) => {
  // console.log("destroyed", editor);
};
const handleFocus = (editor) => {
  // console.log("focus", editor);
};
const handleBlur = (editor) => {
  // console.log("blur", editor);
};
const customAlert = (info, type) => {
  // alert(`【自定义提示】${type} - ${info}`);
};
const customPaste = (editor, event, callback) => {
  // console.log("ClipboardEvent 粘贴事件对象", event);
  // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
  // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
  // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

  // 自定义插入内容
  // editor.insertText("xxx");

  // 返回 false ，阻止默认粘贴行为
  event.preventDefault();
  callback(false); // 返回值（注意，vue 事件的返回值，不能用 return）

  // 返回 true ，继续默认的粘贴行为
  // callback(true)
};



const submitHandler = () => {
  let editor = editorRef.value;
  console.log(editor, "组件");
  console.log(editor.getText());
  console.log(props,'??props')
  const newMsg: msgItem = {
    from: "self",
    text: editor.getText(),
    time: "2024-3-20 / 10:22",
    url: "@/assets/friend/avatar.png",
    id: `${props.msgList.length}`,
  };
  props.msgList.push(newMsg);
  editor.clear();
};

// const msgList: Ref<Array<msgItem>> = ref([
//   {
//     from: "others",
//     text: "你好啊,我是皇子嘉文四世,我们现在是好朋友了!",
//     time: "2024-3-20 / 10:20",
//     url: "@/assets/friend/jiawen.png",
//     id: "1",
//   },
//   {
//     from: "self",
//     text: "你好啊,皇子殿下,我是王惊涛",
//     time: "2024-3-20 / 10:21",
//     url: "@/assets/friend/avatar.png",
//     id: "2",
//   },
//   {
//     from: "others",
//     text: "有没有兴趣计入我们伟大的德玛西亚帝国",
//     time: "2024-3-20 / 10:20",
//     url: "@/assets/friend/jiawen.png",
//     id: "3",
//   },
//   {
//     from: "others",
//     text: "欢迎你的到来,王惊涛阁下!",
//     time: "2024-3-20 / 10:20",
//     url: "@/assets/friend/jiawen.png",
//     id: "4",
//   },
// ]);
</script>

<style lang="less" scoped>
.chatBox {
  flex: 1;
  max-width: calc(100vw - 405px);
  // display: flex;
  // flex-direction: column;
  .top {
    flex: 1;
    // height: 70%;
    display: flex;
    flex-direction: column;
    .title {
      background: #000;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      height: 40px;
    }
    .msgBox {
      min-height: calc(100vh - 340px);
      max-height: calc(100vh - 340px);
      overflow-y: auto;
      overflow-x: hidden;
      flex: 1;
      background: #262525;
      div {
        margin: 20px;
      }
      .innerAvatar {
        width: 50px;
        height: 50px;
      }
      .others {
        display: flex;
        .otherText {
          margin-left: 20px;
          min-height: 50px;
          background: #fff;
          padding: 12px 24px;
          color: #000;
          border-radius: 16px;
          max-width: 60%;
        }
      }
    }
    .self {
      display: flex;
      justify-content: flex-end;
      .selfText {
        margin-right: 20px;
        min-height: 50px;
        background: rgb(61, 235, 9);
        padding: 12px 24px;
        color: #000;
        border-radius: 16px;
        max-width: 60%;
      }
    }
  }
  .bottom {
    // border-top: 2px #fff solid;
    max-height: 300px;
    background: #262525;
    border: 1px #fff solid;
    display: flex;
    flex-direction: column;
    position: relative;
    .footer {
      position: absolute;
      bottom: 0px;
      right: 0px;
      background: #000;
      display: flex;
      justify-content: flex-end;
      .btn {
        margin: 16px;
      }
    }
  }
}

::v-deep(.w-e-bar) {
  background-color: #000;
  color: #fff;
}
::v-deep(.w-e-text-container) {
  background-color: #000;
  color: #fff;
}
::v-deep(.w-e-bar-item button) {
  background-color: #000;
  color: #fff;
}
::v-deep(.w-e-select-list) {
  background-color: #000;
  color: #fff;
}
::v-deep(.w-e-select-list ul li:hover) {
  background-color: #fff;
  color: #000;
}
::v-deep(.w-e-select-list ul .selected) {
  background-color: #000;
  color: #fff;
}
::v-deep(.w-e-bar svg) {
  color: #fff !important;
}
</style>