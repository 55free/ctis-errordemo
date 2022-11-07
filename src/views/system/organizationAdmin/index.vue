<template>
  <div class="flex main">
    <div class="flex-1">
      <el-tree :data="treeData">
        <template #default="{ node, data }">
          <span class="custom-tree-node">
            <span>{{ node.label }}</span>
            <span>
              {{ data.id }}
            </span>
          </span>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getOrganzationList } from "@/api/system";
import { ref, onMounted } from "vue";

defineOptions({
  name: "OrganizationAdmin",
});

let organizationList = ref([]);
let treeData = ref([]);

function recursionOrganizationList(list: any[]) {
  let result = [];
  list.forEach(item => {
    let obj = {
      label: item.orgName,
      id: item.orgId,
      children: item.childOrganize
        ? recursionOrganizationList(item.childOrganize)
        : [],
    };
    result.push(obj);
  });
  return result;
}
onMounted(async () => {
  let { data } = await getOrganzationList();
  organizationList.value = data.list;
  treeData.value = recursionOrganizationList(data.list);
});

// recursion organizationList into a object array with label and children

//
</script>

<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

:deep(.el-tree-node__label) {
  flex: 1;
}

:deep(.el-tree-node__content) {
  height: 40px;
}
</style>
