import { ref } from "vue";

export function useColumns() {
  const columns = ref([
    {
      label: "账号名称",
      prop: "id",
    },
    {
      label: "用户姓名",
      prop: "name",
    },
    {
      label: "电话",
      prop: "tel",
    },
    {
      label: "性别",
      prop: "sex",
      cellRenderer: ({ row, props }) => (
        <el-tag
          size={props.size}
          type={row.sex === 1 ? "danger" : ""}
          effect="plain"
        >
          {row.sex === 1 ? "女" : "男"}
        </el-tag>
      ),
    },
    {
      label: "组织机构",
      prop: "orgName",
    },
    {
      label: "手机号码",
      prop: "mobile",
    },
    {
      label: "操作",
      fixed: "right",
      width: 180,
      slot: "operation",
    },
  ]);

  return {
    columns,
  };
}
