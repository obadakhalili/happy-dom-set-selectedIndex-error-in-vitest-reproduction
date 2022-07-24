<script>
export default {
  data() {
    return {
      option: 'a'
    }
  },
  watch: {
    option() {
      console.log(this.option)
    }
  }
}
</script>

<template>
  <select v-model="option">
    <option value="a">a</option>
    <option value="b">b</option>
  </select>
</template>
