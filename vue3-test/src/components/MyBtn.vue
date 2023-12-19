<template>
  <div>
    <div :style="{backgroundColor: color}" :class="{large}" class="btn">Button  <slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    color:{
      type:String,
      default: 'gray'
    },
    large:{
      type: Boolean,
      default: false
    },
  }
};
</script>

<style scoped>
	.btn{margin:5px;font-size:15px;background:gray;}
  .btn.large{font-size: 20px;}
</style>
