<template>
  <div class="address-container">
    <div class="header">收货地址</div>
    <ul>
      <li
        v-for="item in newData"
        :key="item.id"
        @click="choseItem(item.id)"
        :class="{ active: chose_item === item.id }"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.phone }}</p>
        <p>{{ item.address }}</p>
        <p class="edit" @click="dialogFormVisible = true">修改</p>
      </li>
      <li v-if="is_active" class="add">
        <div>
          <i class="el-icon-circle-plus-outline"></i>
          <p>添加新地址</p>
        </div>
      </li>
    </ul>
    <div class="loadMore" @click="isLoading" v-if="!isActive">
      <span>{{ isLoadMore ? '显示更多地址' : '收起更多地址' }}</span
      ><i class="el-icon-arrow-up" v-if="!isLoadMore"></i>
      <i class="el-icon-arrow-down" v-else></i>
    </div>
    <!-- 弹出修改层 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'address-box',
  props: {
    addressData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      chose_item: '',
      isLoadMore: true,
      displayList: this.$props.addressData,
      is_active: true,
      dialogFormVisible: false,
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
    choseItem(val) {
      this.chose_item = val
    },
    isLoading() {
      this.isLoadMore = !this.isLoadMore
    }
  },
  computed: {
    newData() {
      if (this.isLoadMore) {
        return this.addressData.slice(0, 4)
      }
      return this.displayList
    },
    isActive() {
      return this.displayList.length < 4
    }
  },
  watch: {
    isLoadMore() {
      if (this.isLoadMore) {
        if (this.displayList.length > 3) {
          this.is_active = false
        }
      }
      if (!this.isLoadMore) {
        this.is_active = true
      }
    }
  },
  mounted() {
    this.is_active = this.isActive
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
* {
  box-sizing: border-box;
}
.address-container {
  padding: 20px;
  .header {
    margin-bottom: 20px;
    font-size: 16px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    .active {
      border: solid 1px red;
      .edit {
        opacity: 1;
        color: red;
      }
    }
    li {
      position: relative;
      width: 270px;
      height: 180px;
      border: 1px solid $colorF;
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 20px;
      cursor: pointer;
      &:hover {
        .edit {
          opacity: 1;
        }
      }
      .edit {
        position: absolute;
        bottom: 10px;
        right: 20px;
        opacity: 0;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      p {
        &:first-child {
          font-size: 16px;
          margin-bottom: 20px;
        }
      }
    }
    .add {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        text-align: center;
        color: $colorF;
        .el-icon-circle-plus-outline {
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 10px;
        }
      }
    }
  }
  .loadMore {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: $colorF;
    cursor: pointer;
  }
}
</style>
