<template>
  <ChildTest
  class="test02"
  style="color:red">
    이건 상위컴포넌트에서 작성한 텍스트
    </ChildTest>
</template>


<script>
import ChildTest from '@/components/ChildTest.vue';
export default {
  components: {
    ChildTest
  },
  data() {
    return {
    };
  }
};
</script>
