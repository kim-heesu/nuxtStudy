<template>
  <div>
    <ChildComponent :myCustomProp="parentMessage" />
  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello'
    };
  }
};
</script>
