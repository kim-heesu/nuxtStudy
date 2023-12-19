<template>
  <div>
    <ChildComponent :myCustomProp="parentMessage" />

    <MyBtn :color="color" large/>
    <MyBtn :color="color"/>
    <MyBtn>Banana</MyBtn>

  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';
import MyBtn from '@/components/MyBtn.vue';

export default {
  components: {
    ChildComponent,
    MyBtn
  },
  data() {
    return {
      parentMessage: 'Hello',
      color: "red"
    };
  }
};
</script>
