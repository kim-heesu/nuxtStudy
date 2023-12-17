<template>
  <div>
    <p>{{ myCustomProp }}</p>
  </div>
</template>

<script>
export default {
  props: {
    myCustomProp: {
      type: String,
      validator: function (value) {
        return value.length <= 10;
      }
    }
  }
};
</script>
