<template>
  <div>
    <button @click="hiTest">버튼</button>
    <button @click="hiTest02(),hiTest03()">호호안녕버튼</button>
    <a href="https://www.naver.com" target="_blank" @click="preventTest">네이버로</a>
  </div>

  <div @click="hiTest02">
    <button @click="propagation">propagation</button>
  </div>

  <div class="wrap" @wheel.passive="wheelPassive">
    <div class="box"></div>
  </div>

  <input type="text" placeholder="tab" @keydown.tab="keyTest">
  <input type="text" placeholder="enter" @keydown.enter="keyTest">
  <input type="text" placeholder="delete" @keydown.delete="keyTest">
  <input type="text" placeholder="esc" @keydown.esc="keyTest">
  <input type="text" placeholder="space" @keydown.space="keyTest">
  <input type="text" placeholder="up" @keydown.up="keyTest">
  <input type="text" placeholder="down" @keydown.down="keyTest">
  <input type="text" placeholder="right" @keydown.right="keyTest">
  <input type="text" placeholder="left" @keydown.left="keyTest">
<br>
  <input type="text" placeholder="ctrl" @keydown.ctrl="keyTest">
  <input type="text" placeholder="alt" @keydown.alt="keyTest">
  <input type="text" placeholder="shift" @keydown.shift="keyTest">
  <input type="text" placeholder="meta" @keydown.meta="keyTest">
  <br>
  <input type="text" placeholder="ctrl.enter" @keydown.ctrl.enter="keyTest">
  <br>
  <span @click.left="console.log('dd')">안녕</span>
  <span @click.right="console.log('dd')">안녕</span>
  <span @click.middle="console.log('dd')">안녕</span>
  <br>
  <!-- Ctrl과 함께 Alt 또는 Shift를 누른 상태에서도 클릭하면 실행됩니다. -->
<button @click.ctrl="console.log('dd')">A</button>

<!-- 오직 Ctrl만 누른 상태에서 클릭해야 실행됩니다. -->
<button @click.ctrl.exact="console.log('dd')">A</button>

<!-- 시스템 입력키를 누르지 않고 클릭해야지만 실행됩니다. -->
<button @click.exact="console.log('dd')">A</button>
</template>
<style scoped>
  .wrap{width: 200px; height: 300px; background: orange; overflow:auto;}
  .box{width: 100px; height: 1000px; background: blue;}

</style>
<script>
export default {
  methods:{
    hiTest(event){
      console.log('hi')
      console.log(event)
      console.log(event.target)
    },
    hiTest02(){
      console.log('hohoho')
    },
    hiTest03(){
      console.log('hihi')
    },
    preventTest(event){
      event.preventDefault()
      console.log('안녕')
    },
    propagation(){
      // event.stopPropagation()
      console.log('dd');
    },
    wheelPassive(event){
      for(let i=0; i<5; i++){
        console.log(event)
      }
    },
    keyTest(){
      console.log('dd')
    }
  }
};
</script>
