<template>
  <div class="flex main">
    <div class="flex-1">
      <el-form
        ref="formRef"
        :inline="true"
        :model="form"
        class="bg-bg_color w-[99/100] pl-8 pt-4"
      >
        <el-form-item label="组织机构：" prop="organization">
          <el-input
            v-model="form.organization"
            placeholder="汽车服务中心"
            clearable
          />
        </el-form-item>
        <el-form-item label="关键字：" prop="keyword">
          <el-input
            v-model="form.keyword"
            placeholder="请输入账户用户名或电话等"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :icon="useRenderIcon('search')"
            @click="onSearch"
          >
            搜索
          </el-button>
          <el-button
            :icon="useRenderIcon('refresh-right')"
            @click="resetForm(formRef)"
          >
            重置
          </el-button>
        </el-form-item>
      </el-form>
      <el-table :data="dataList" border>
        <el-table-column prop="id" label="账号名称" width="180" />
        <el-table-column prop="name" label="用户姓名" width="180" />
        <el-table-column prop="tel" label="电话" />
        <el-table-column prop="sex" label="性别" />
        <el-table-column prop="orgName" label="组织机构" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type FormInstance } from "element-plus";
import { reactive, ref, onMounted } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { getoperatorList } from "@/api/system";

import { PaginationProps } from "@pureadmin/table";
const formRef = ref<FormInstance>();
let dataList = ref([]);
const form = reactive({
  organization: "",
  keyword: "",
});

const pagination = reactive<PaginationProps>({
  total: 0,
  pageSize: 10,
  currentPage: 1,
  background: true,
});

async function onSearch() {
  let { data } = await getoperatorList();

  dataList.value = data.list;
  pagination.total = data.list.length;
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  onSearch();
};

// 挂载时请求数据 ?
onMounted(() => {
  onSearch();
});

// todo
// 搜索 loading 动画 搜索功能
</script>

<style scoped></style>
