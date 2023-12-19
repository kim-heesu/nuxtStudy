<template>
  <div>
    <button @click="$emit('heesu',$event)">heesu</button>
    <input type="text" v-model="msg" />
  </div>
</template>

<script>
export default {
  emits:['heesu','changeMsg'],
  data(){
    return{
      msg: ""
    }
  },
  watch:{
    msg(){
      this.$emit('changeMsg',this.msg)
    }
  }
};
</script>

