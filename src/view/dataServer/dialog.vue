
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="dialogTitle"
    :width="dialogWidth"
    :destroy-on-close="true"
  >
    <el-form
      v-show="handlerType !== 'delete'"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      size="default"
      status-icon
    >
      <el-form-item label="数据名称" prop="dataName">
        <el-input
          class="formItem"
          v-model="ruleForm.dataName"
          :disabled="handlerType === 'edit'"
        />
      </el-form-item>
      <el-form-item label="数据来源" prop="source">
        <el-select
          class="formItem"
          v-model="ruleForm.source"
          :disabled="handlerType === 'edit'"
        >
          <el-option
            v-for="(item, index) in sourceOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="应用领域" prop="domain">
        <el-checkbox-group v-model="ruleForm.domain">
          <el-checkbox
            v-for="(item, index) in domainOptions"
            :key="index"
            :label="item.value"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="数据编号" prop="code">
        <el-input class="formItem" v-model="ruleForm.code" />
      </el-form-item>
      <el-form-item label="安全等级" prop="safeLevel">
        <el-radio-group v-model="ruleForm.safeLevel">
          <el-radio label="常规" size="large">常规</el-radio>
          <el-radio label="高级" size="large">高级</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="数据状态" prop="status">
        <el-switch v-model="ruleForm.status" />
      </el-form-item>
    </el-form>
    <p v-show="handlerType === 'delete'">是否移除该数据</p>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelHandler">取消</el-button>
        <el-button type="primary" @click="sureHandler"> 保存 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
  <script lang="ts" setup>
import { ElMessageBox } from "element-plus";
import { RuleForm } from "./type";
import {
  dialogVisible,
  activeRow,
  dialogTitle,
  dialogWidth,
  sourceOptions,
  domainOptions,
  statusOptions,
  tableData,
  ruleForm,
  handlerType,
} from "./data";
import type { FormInstance, FormRules } from "element-plus";
import { cloneDeep } from "lodash";

const ruleFormRef = ref<FormInstance | null>(null);
const cancelHandler = () => {
  dialogVisible.value = false;
  ruleForm.value = {
    dataName: "",
    source: "",
    status: false,
    safeLevel: "常规",
    code: "",
    domain: [],
  };
};
const sureHandler = () => {
  if (!ruleFormRef.value) return;
  if (handlerType.value === "delete") {
    let index: number = tableData.value.findIndex(
      (item: any) => item.id === activeRow.value.id
    );
    tableData.value.splice(index, 1);
  } else {
    ruleFormRef.value.validate((valid: boolean, fields: any) => {
      if (valid) {
        if (handlerType.value === "add") {
          //新增
          let newRow: any = cloneDeep(ruleForm.value);
          newRow.id = tableData.value.length + 1;
          newRow.usageAmount = 0;
          tableData.value.push(newRow);
        } else if (handlerType.value === "edit") {
          //编辑
          let index: number = tableData.value.findIndex(
            (item: any) => item.id === ruleForm.value.id
          );
          tableData.value[index] = ruleForm.value;
          console.log(tableData.value,ruleForm.value,'???')
        }
        cancelHandler();
      } else {
        console.log("error submit!", fields);
      }
    });
  }
  
};

const rules = reactive<FormRules<RuleForm>>({
  dataName: [
    { required: true, message: "请输入名称", trigger: "blur" },
    { min: 5, max: 20, message: "长度在5到20之间", trigger: "blur" },
  ],
  source: [
    {
      required: true,
      message: "请选择数据来源",
      trigger: "change",
    },
  ],
  status: [
    {
      required: true,
      message: "请选择是否打开",
      trigger: "change",
    },
  ],
  safeLevel: [
    {
      required: true,
      message: "请选择安全等级",
      trigger: "change",
    },
  ],
  domain: [
    {
      required: true,
      message: "请选择服务领域",
      trigger: "change",
    },
  ],
  code: [
    { required: true, message: "请输入数据编号", trigger: "blur" },
    { min: 9, max: 9, message: "长度为9位数", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
  <style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
  <style lang="less" scoped>
.formItem {
  width: 90%;
}
</style>
  