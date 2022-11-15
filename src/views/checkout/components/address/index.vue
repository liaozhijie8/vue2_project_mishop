<template>
  <div class="address-container">
    <div class="header">收货地址</div>
    <ul>
      <li
        v-for="item in newData"
        :key="item.id"
        @click="choseItem(item)"
        :class="{ active: chose_item === item.id }"
      >
        <p>{{ item.consigness }}</p>
        <p>{{ item.phone | phoneFilter }}</p>
        <p>{{ item.address }}</p>
        <p class="edit" @click="isDialog(item)">修改</p>
        <p class="delete" @click="deleteAddress(item)" v-show="isUser">删除</p>
      </li>
      <li v-if="is_active" class="add" @click="addNewAddress">
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
    <AddressDialog :is-visible="is_dialog" @close-event="test"></AddressDialog>
  </div>
</template>
<script>
import AddressDialog from '../addressEdit/index.vue'
import { deleteAddress_api } from '@/api/address'
import { notification } from '@/utils/notification'
import store from '@/store'
export default {
  name: 'address-box',
  components: {
    AddressDialog
  },
  props: {
    // 判断是否处于主页下的地址
    isUser: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    phoneFilter(val) {
      if (val) {
        const reg = /^(.{3}).*(.{4})$/
        return val.replace(reg, '$1****$2')
      }
    }
  },
  data() {
    return {
      chose_item: '',
      isLoadMore: true,
      // displayList: '',
      is_active: false,
      is_dialog: false
    }
  },
  methods: {
    choseItem(val) {
      this.chose_item = val.id
      return this.$emit('chose-address', val)
    },
    isLoading() {
      this.isLoadMore = !this.isLoadMore
    },
    // 弹出修改层
    isDialog(val) {
      store.commit('address/setIs_add', false)
      store.commit('address/updateAddress', val.id)
      this.is_dialog = true
    },
    test(val) {
      this.is_dialog = val
    },
    // 添加新地址
    addNewAddress() {
      store.commit('address/setIs_add', true)
      this.is_dialog = true
    },
    // 删除地址
    deleteAddress(val) {
      deleteAddress_api(val.id).then((res) => {
        notification(this, '删除收货地址', res.message, 'success')
        store.dispatch('address/getAddress_store')
      })
    }
  },
  computed: {
    displayList() {
      return store.state.address.addressList
    },
    newData() {
      if (this.isLoadMore) {
        return this.displayList.slice(0, 4)
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
  .header {
    margin-bottom: 20px;
    font-size: 16px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    .active {
      border: solid 1px red;
      .edit,
      .delete {
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
        .edit,
        .delete {
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
      .delete {
        position: absolute;
        bottom: 10px;
        right: 50px;
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
