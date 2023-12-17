<template>
  <div>
    <fruits />
  </div>
</template>

<script>
import fruits from '@/components/FruitsComponent.vue'
export default {
  components: {
    fruits
  },
  data() {
    return {
    };
  },
  methods:{
    add(){
      this.msg += '!';
    }
  }
};
</script>
