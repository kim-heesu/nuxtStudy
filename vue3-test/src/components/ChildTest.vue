<template>
  <div class="test01">자식컴포넌트에 작성한 텍스트 <slot></slot></div>
  <div :class="$attrs.class">안녕</div>
  <div v-bind="$attrs">안녕</div>
</template>

<script>
export default {
  inheritAttrs: false,
  created(){
    console.log(this.$attrs)
  }
};
</script>
