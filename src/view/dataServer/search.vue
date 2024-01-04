<template>
  <div class="searchBox">
    <span class="searchLabel">数据名称</span>
    <el-input
      @change="reqList"
      class="searchItem"
      clearable
      v-model="query.dataName"
      placeholder="请输入数据源名称"
    >
    </el-input>
    <span class="searchLabel">数据来源</span>
    <el-select
      @change="reqList"
      class="searchItem"
      clearable
      v-model="query.source"
      placeholder="请选择业务领域"
    >
      <el-option
        v-for="item in sourceOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <span class="searchLabel">数据源状态</span>
    <el-select
      @change="reqList"
      class="searchItem"
      clearable
      v-model="query.status"
      placeholder="请选择数据源状态"
    >
      <el-option
        v-for="item in statusOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <span class="searchLabel">应用领域</span>
    <el-select
      @change="reqList"
      class="searchItem"
      clearable
      multiple
      collapse-tags
      collapse-tags-tooltip
      v-model="query.domain"
      placeholder="请选择业务领域"
    >
      <el-option
        v-for="item in domainOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button type="primary" @click="reqList">查询</el-button>
    <el-button @click="addDataHandler">新建数据源</el-button>
  </div>
</template>

<script lang="ts" setup>
import { searchData } from "./type";
import { domainOptions, sourceOptions, statusOptions, tableData, dialogVisible,dialogTitle,dialogWidth,activeRow } from "./data";
let query: Ref<searchData> = ref({
  dataName: null,
  domain: [],
  status: "",
  source: "",
});

const reqList = () => {
  tableData.value = [
    {
      dataName: "王者荣耀英雄胜率排行榜",
      source: "tx",
      status: true,
      usageAmount: 2132112,
      id: 1,
      safeLevel: "常规",
      code: "010-10001",
      domain: ["game"],
    },
    {
      dataName: "支付宝总收支比例",
      source: "al",
      status: false,
      usageAmount: 189321231,
      id: 2,
      safeLevel: "高级",
      code: "010-10002",
      domain: ["finance","business"],
    },
    {
      dataName: "昨日京东商城交易数额",
      source: "jd",
      status: true,
      usageAmount: 32423532,
      id: 3,
      safeLevel: "高级",
      code: "010-10003",
      domain: ["business"],
    },
    {
      dataName: "美女视频点赞率总数",
      source: "dy",
      status: true,
      usageAmount: 3287682,
      id: 4,
      safeLevel: "常规",
      code: "010-10004",
      domain: ["media","business"],
    },
  ];
};

const addDataHandler = ()=>{
    dialogVisible.value = true
    dialogTitle.value = '新建数据源'
    dialogWidth.value = '700px'
    activeRow.value = null
}

onMounted(() => {
  reqList();
});
</script>

<style lang="less" scoped>
.searchBox {
  width: 100%;
  padding: 16px;
  display: flex;
  border-bottom: #f0f0f4 1px solid;
  .searchLabel {
    line-height: 30px;
  }
  .searchItem {
    width: 200px;
    margin-left: 8px;
    margin-right: 16px;
  }
}
</style>