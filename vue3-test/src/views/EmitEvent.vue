<template>
  <div>
    <EmitComponent @heesu="log" @change-msg="logMsg"/>
  </div>
</template>
<script>
import EmitComponent from '@/components/EmitComponent.vue';

export default{
  components: {
    EmitComponent
  },
  methods:{
    log(event){
      console.log("하이?")
      console.log(event)
    },
    logMsg(msg){
      console.log(msg)
    }
  }
}
</script>
