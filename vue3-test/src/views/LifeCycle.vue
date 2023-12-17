<template>
  <div class="about">
   <span>{{ count }}</span>
  </div>
</template>

<script>
export default{
  data(){
    return{
      count:2
    }
  },
  beforeCreate(){
    console.log('beforeCreate',this.count)
    // undefined 출력
    // beforeCreate는 이 컴포넌트가 생선되기 직전에 실행되는 라이프 사이클이기 때문에 데이터가 정의 되기전에 실행되어 this.count가 undefined가 뜨는것
  },
  created(){
    console.log('Created!',this.count)
    // 2 출력
    // created단게에서는 컴포넌트가 생성된 직후이기 때문에 count라는 데이터가 무엇인지 알 수 있다.
  },
  beforeMount(){
    console.log('beforeMount')
    console.log(document.querySelector('span'))
    // null 이 출력
    // beforemount는 html구조에 연결되기 전이기 때문에 html구조를 조회할 수 없다.
    // 동일한 이유로 beforeCreate, created에서도 html구조를 조회할 수 없어서 document.querySelector로 DOM요소 접근시 null이 뜬다.
  },
  mounted(){
    console.log('mounted!')
    console.log(document.querySelector('span'))
    // <span>2</span>이 출력
    // mounted는 실제 현재컴포넌트가 html구조에 연결되어 있기 때문에 html구조를 조회하여 출력할 수 있는 반면에
  }
}
</script>
