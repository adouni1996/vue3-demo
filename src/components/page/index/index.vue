<template>
  <div class="index">
    主页
  </div>
</template>

<script>
import { getUserInfo } from '@/api/getData'
export default {
  async mounted() {
    const res = await getUserInfo()
    console.log(res)
  }

}
</script>

<style>

</style>
