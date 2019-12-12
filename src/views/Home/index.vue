<template>
  <div class="wrapper">
    <div class="row_topic">
      <p>第一题</p>
      <van-row type="flex" justify="center">
        <van-col span="12">
          <van-radio-group v-model="radio">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
    </div>

    <div class="row_topic">
      <p>第一题</p>
      <van-row type="flex" justify="center">
        <van-col span="12">
          <van-radio-group v-model="radio">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
    </div>
    <div class="row_topic">
      <p>第一题</p>
      <van-row type="flex" justify="center">
        <van-col span="12">
          <van-radio-group v-model="radio">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { asyncBanner, asyncCan } from "@/service/home";
export default {
  data() {
    return {
      radio: "1"
    };
  },
  mounted() {
    asyncBanner();
    asyncCan();
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  .row_topic {
    margin: 3px auto;
    width: 95%;
    background-color: #fff;
  }
}
</style>
