<template>
  <div class="datasourceList">
    <h4 class="title">数据源列表</h4>
    <el-icon class="addIcon"><Plus /></el-icon>
    <el-input
      class="searchInput"
      :prefix-icon="Search"
      v-model="searchData"
      clearable
      placeholder="搜索"
    ></el-input>
    <div class="list">
      <el-tree
        :data="dataSource"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <template #default="{ node, data }">
          <span class="custom-tree-node">
            <span @click="clickNode(node, data)">{{ node.label }}</span>
            <!-- <span>
              <a @click="append(data)"> Append </a>
              <a style="margin-left: 8px" @click="remove(node, data)">
                Delete
              </a>
            </span> -->
          </span>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Calendar, Search } from "@element-plus/icons-vue";
import type Node from "element-plus/es/components/tree/src/model/node";
import {Tree} from './datasourceListType'

let id = 1000;
let emit = defineEmits(['choseTreeData'])

const append = (data: Tree) => {
  const newChild = { id: id++, label: "testtest", children: [] };
  if (!data.children) {
    data.children = [];
  }
  data.children.push(newChild);
  dataSource.value = [...dataSource.value];
};

const remove = (node: Node, data: Tree) => {
  const parent = node.parent;
  const children: Tree[] = parent.data.children || parent.data;
  const index = children.findIndex((d) => d.id === data.id);
  children.splice(index, 1);
  dataSource.value = [...dataSource.value];
};

// const renderContent = (
//   h,
//   {
//     node,
//     data,
//     store,
//   }: {
//     node: Node;
//     data: Tree;
//     store: Node["store"];
//   }
// ) => {
//   return h(
//     "span",
//     {
//       class: "custom-tree-node",
//     },
//     h("span", null, node.label),
//     h(
//       "span",
//       null,
//       h(
//         "a",
//         {
//           onClick: () => append(data),
//         },
//         "Append "
//       ),
//       h(
//         "a",
//         {
//           style: "margin-left: 8px",
//           onClick: () => remove(node, data),
//         },
//         "Delete"
//       )
//     )
//   );
// };

const dataSource = ref<Tree[]>([
  {
    id: "tencent",
    label: "腾讯",
    type: "company",
    children: [
      {
        id: "honor-of-Kings",
        label: "王者荣耀",
        type: "dataSet",
        children: [
          {
            id: "hokHeroWinList",
            label: "王者荣耀英雄胜率排行榜",
            type: "dataTable",
          },
          {
            id: "hokCountryRankList",
            label: "王者荣耀rank国服选手名单",
            type: "dataTable",
          },
        ],
      },
    ],
  },
  {
    id: "jingdong",
    label: "京东",
    type: "company",
    children: [
      {
        id: "jd-logistics",
        label: "京东物流",
        type: "dataSet",
        children: [
          {
            id: "yesterdayQuantity",
            label: "昨日货物流通数据",
            type: "dataTable",
          },
        ],
      },
      {
        id: "jd-shop",
        label: "京东商城",
        type: "dataSet",
        children: [
          {
            id: "jdShoppingSum",
            label: "昨日京东商城订单数据",
            type: "dataTable",
          },
        ],
      },
    ],
  },
  {
    id: "zijie",
    label: "字节",
    type: "company",
    children: [
      {
        id: "douyin",
        label: "抖音",
        type: "dataSet",
        children: [{
          id: "beautifulGirlLove",
          type: "dataTable",
          label: "美女视频点赞数据",
        },
        {
          id: "loveHeaderSee",
          type: "dataTable",
          label: "恋爱脑视频浏览数据",
        }]
      },
    ],
  },
  {
    id: "fist",
    label: "拳头",
    type: "company",
    children: [
      {
        id: "lol",
        label: "英雄联盟",
        type: "dataSet",
        children: [{
          id: "timoBeKillData",
          type: "dataTable",
          label: "历任版本提莫死亡数据",
        },
]
      },
    ],
  },
]);
const searchData = ref<string>("");


const clickNode = (node: any, data: any) => {
  console.log(node, data, "数据");
  emit('choseTreeData',data)
};
</script>

<style lang="less" scoped>
.datasourceList {
  width: 300px;
  border: 1px solid #e1e5ec;
  overflow: auto;
  .title {
    margin: 8px 16px;
    float: left;
  }
  .searchInput {
    width: 270px;
    margin: 8px 16px;
  }
  .addIcon {
    float: right;
    margin: 12px;
    cursor: pointer;
  }
  .list {
    border-top: 1px solid #e1e5ec;
    width: 400px;
    height: 600px;
    overflow: auto;
  }
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>