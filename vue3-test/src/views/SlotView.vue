<template>
  <div>
    <SlotComponent/>
    <SlotComponent>Banana</SlotComponent>
    <SlotComponent>
      <template v-slot:emoji><span>(^^)</span></template>
      <template v-slot:text><span>Orange</span></template>
    </SlotComponent>
  </div>
</template>
<script>
import SlotComponent from '@/components/SlotComponent.vue';

export default{
  components: {
    SlotComponent
  }

}
</script>
