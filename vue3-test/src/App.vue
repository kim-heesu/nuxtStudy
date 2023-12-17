<template>
  <div>
    <ul>
      <li><RouterLink to="/propsCustom">propsCustom</RouterLink></li>
      <li><RouterLink to="/lifeCycle">lifeCycle</RouterLink></li>
      <li><RouterLink to="/vonce">vonce</RouterLink></li>
      <li><RouterLink to="/computed">Computed</RouterLink></li>
      <li><RouterLink to="/getterSetter">getterSetter</RouterLink></li>
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
