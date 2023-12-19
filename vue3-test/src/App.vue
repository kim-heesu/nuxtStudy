<template>
  <div>
    <ul>
      <li><RouterLink to="/propsCustom">propsCustom</RouterLink></li>
      <li><RouterLink to="/lifeCycle">lifeCycle</RouterLink></li>
      <li><RouterLink to="/vonce">vonce</RouterLink></li>
      <li><RouterLink to="/computed">Computed</RouterLink></li>
      <li><RouterLink to="/getterSetter">getterSetter</RouterLink></li>
      <li><RouterLink to="/vOnEvent">vOnEvent</RouterLink></li>
      <li><RouterLink to="/PropsView">PropsView</RouterLink></li>
      <li><RouterLink to="/EmitEvent">EmitEvent</RouterLink></li>
      <li><RouterLink to="/SlotView">SlotView</RouterLink></li>
      <li><RouterLink to="/ProvideInject">ProvideInject</RouterLink></li>
      <li><RouterLink to="/RefsView">RefsView</RouterLink></li>
    </ul>
    <RouterView />
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  }
};
</script>

<style>
  li {display: inline-block; margin: 5px; padding: 5px; border: 1px solid #ddd;}
</style>
