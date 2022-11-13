<!-- 地址选择 & 省市区三级联动 -->
<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
    <el-row>
      <el-col :span="12">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="phone">
          <el-input
            v-model="ruleForm.phone"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item prop="province">
          <el-select
            v-model="ruleForm.province"
            placeholder="请选择省"
            @change="changePro"
          >
            <el-option
              v-for="item in addressData"
              :key="item.code"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item prop="city">
          <el-select
            v-model="ruleForm.city"
            placeholder="请选择市"
            @change="changeCity"
          >
            <el-option
              v-for="item in cityData"
              :key="item.code"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item prop="district">
          <el-select
            v-model="ruleForm.district"
            placeholder="请选择区"
            @change="changeArea"
          >
            <el-option
              v-for="item in areaData"
              :key="item.code"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-form-item prop="detail">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="详细地址"
          v-model="ruleForm.detail"
        >
        </el-input>
      </el-form-item>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-col>
      <el-col :span="8" v-show="is_display">
        <div class="display-tip">
          <div>
            <el-button type="success" icon="el-icon-check" circle></el-button
            >{{ tip }}
          </div>
        </div>
      </el-col>
      <el-col :span="8"  v-show="is_display">
        <el-switch v-model="is_default" active-text="设为默认地址"> </el-switch>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { validatePhone, formatAddress } from './validator'
import { addAddress } from '@/api/address'
import address from '@/utils/address.json' // 全国省市区街道数据
export default {
  data() {
    return {
      // 是否设置为默认地址
      is_default: true,
      //  省数据
      addressData: [],
      //  市数据
      cityData: [],
      // 区数据
      areaData: [],
      // 街道数据
      ruleForm: {
        name: '',
        phone: '',
        // 省
        province: '',
        // 市
        city: '',
        // 区
        district: '',
        // 详细地址
        detail: ''
      },
      // 验证规则
      rules: {
        name: [
          { required: true, message: '请输入收件人姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '输入手机号码', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        province: [
          {
            type: 'string',
            required: true,
            message: '请选择省份',
            trigger: 'change'
          }
        ],
        city: [
          {
            type: 'string',
            required: true,
            message: '请选择城市',
            trigger: 'change'
          }
        ],
        district: [
          {
            type: 'string',
            required: true,
            message: '请选择地区',
            trigger: 'change'
          }
        ],
        detail: [{ required: true, message: '请填写详细地址', trigger: 'blur' }]
      },
      // 添加地址的反馈提示
      tip: '',
      is_display: false
    }
  },
  created() {
    // 省份数据初始化
    this.addressData = address
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const address = formatAddress(this.ruleForm)
          const { phone, name } = this.ruleForm
          addAddress({ consigness: name, phone, address })
            .then((res) => {
              this.tip = res.message
              console.log(res)
            })
            .catch((err) => {
              this.tip = err.message
              console.log(err)
            })
            .finally(() => {
              this.is_display = true
            })
        } else {
          console.log('error submit!!')
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 省份更改
    changePro(e) {
      // 从省中过滤出市的数据
      this.cityData = this.addressData.filter((item) => {
        return item.name === e
      })[0].children
      // 省发生改变的时候 清空输入框市区街道的内容
      this.ruleForm.district = ''
      this.ruleForm.city = ''
      // 省发生更改时 该表空区街道数据的内容
      this.areaData = []
    },
    // 市更改
    changeCity(e) {
      // 获取到区的数据
      this.areaData = this.cityData.filter(
        (item) => item.name === e
      )[0].children
      // 清空数据后面对应数组的数据
      this.ruleForm.district = ''
    },
    // 区更改
    changeArea(e) {
      const temp = this.areaData.filter((item) => item.name === e)
      // 获取到区的code码
      this.ruleForm.regionalNumber = temp[0].code
      // 获取到街道的数据
      this.jdData = this.areaData.filter((item) => item.name === e)[0].children
    }
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
  .el-col {
    padding-right: 10px;
    &:last-child {
      padding: 0;
    }
  }
}
</style>
