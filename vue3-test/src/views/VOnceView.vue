<template>
  <div>
    <strong v-once @click="add()">{{ msg }}</strong>

    {{ msg }}
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      msg:'hihi world'
    };
  },
  methods:{
    add(){
      this.msg += '!';
    }
  }
};
</script>
