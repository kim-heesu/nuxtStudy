<template>
  <div>
    ProvideInject {{ msg }}
    <ProvideParent />
    <button type="button" @click="this.msg = '빠이지롱'">msg변경</button>
  </div>
</template>

<script>
import ProvideParent from '@/components/ProvideParent.vue'
import { computed } from 'vue';
export default {
  components: {
    ProvideParent
  },
  data() {
    return {
      msg:'안녕이다'
    };
  },
  provide(){
    return{
      msg: computed(()=>{
        return this.msg
      })
    }
  }
};
</script>
