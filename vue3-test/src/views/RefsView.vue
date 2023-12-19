<template>
  <div id="hi">hihi heesu</div>
  <div ref="hiHeesu">hihi heesu</div>
  <HiRefs ref="hello"/>
</template>
<script>
import HiRefs from '@/components/HiRefs.vue'
export default{
  components: {
    HiRefs
  },
  mounted(){
    const divEl=document.querySelector('#hi');
    console.log(divEl);

    console.log(this.$refs.hiHeesu)

    console.log(this.$refs.hello)
    console.log(this.$refs.hello.$el)

    console.log(this.$refs.hello.$refs)
    console.log(this.$refs.hello.$refs.hellllo)

  }
}
</script>
