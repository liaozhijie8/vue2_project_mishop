<template>
  <div class="address-container">
    <el-dialog
      title="收货地址"
      :visible.sync="dialogFormVisible"
      :before-close="toggleDialog"
      width="660px"
    >
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeClick">确定</el-button>
        <el-button type="primary" @click="confirmClick">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'address-deit',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogFormVisible: this.$props.isVisible,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    confirmClick() {
      this.dialogFormVisible = false
      return this.$emit('close-event', false)
    },
    closeClick() {
      this.dialogFormVisible = false
      return this.$emit('close-event', false)
    },
    toggleDialog() {
      this.dialogFormVisible = false
      return this.$emit('close-event', false)
    }
  },
  watch: {
    isVisible() {
      if (this.$props.isVisible) {
        this.dialogFormVisible = this.$props.isVisible
      }
    }
  }
}
</script>
<style scoped lang="scss">
.address-container {
  ::v-deep(.el-dialog) {
    .el-dialog__header,
    .el-dialog__footer {
      background-color: #f5f5f5;
    }
    .el-dialog__footer{
      text-align: center;
      button{
        width: 160px;
        height: 40px;
        border: none;
        border-radius: 0;
      }
      .el-button--primary{
        background-color: rgb(174, 169, 169);
        &:hover{
          background-color: rgb(134, 131, 131);
        }
      }
      .el-button--default{
        background-color: rgb(219, 82, 82);
        color: white;
      }
    }
  }
}
</style>
