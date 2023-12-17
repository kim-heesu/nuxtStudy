<template>
  <div v-if="hasFruit">
    <h2>Fruits</h2>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
  <div>
    <h2>Reverse Fruits</h2>
    <ul>
      <li v-for="fruit in reverseFruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>

  <div>
    <h2>Computed</h2>
    <p>{{ msg }}</p>

    <!-- 같은 내용의 로직이 4번이나 반복된다 -->
    <p>{{ msg.split('').reverse().join('') }}</p>
    <p>{{ msg.split('').reverse().join('') }}</p>
    <p>{{ msg.split('').reverse().join('') }}</p>
    <p>{{ msg.split('').reverse().join('') }}</p>

    <!-- methodes에 만든것처럼 reverseMsg라는 함수를 반복적으로 실행할 수 도 있다 -->
    <!-- 어쨋든 함수안의 로직이 4번이나 동작한다 -->
    <p>{{ reverseMsg() }}</p>
    <p>{{ reverseMsg() }}</p>
    <p>{{ reverseMsg() }}</p>
    <p>{{ reverseMsg() }}</p>

    <!-- coumputed라는 계산된 데이터를 가지고 최적화를 시켜줄 수 있다. -->
    <!-- computed안의 데이터는 메소드처럼(함수처럼) 만들기는 했지만 계산된 하나의 데이터이다.
    그래서 괄호를 열고닫지 않아도 된다. -->
    <p>{{ reversedMsg }}</p>
    <p>{{ reversedMsg }}</p>
    <p>{{ reversedMsg }}</p>
    <p>{{ reversedMsg }}</p>
  </div>

</template>

<script>
export default {
  data(){
    return{
      fruits:['Apple','Banana','Cherry'],
      msg: 'hi Computed!'
    }
  },
  methods:{
    reverseMsg(){
      return this.msg.split('').reverse().join('')
    }
  },
  computed:{
    //계산된 데이터
    // 캐싱이라는 기능이 있기 때문에 한번 연산을 해놓은 그 값이 있으면 반복적으로 화면에 데이터처럼 출력할 떄 다시 연산을 하지 않는다.
    // caching이 되어져있기때문에 계산되어있는, 즉, 캐싱된 값으로 해당하는 내용을 화면에 출력한다.
    // 반복적으로 계산되어야하는 데이터는 computed안에 작성하는것이 연산이 복잡해지더라고 반복 사용하는 데에 있어서 부담이 적어진다.
    hasFruit(){
      return this.fruits.length > 0
    },
    reverseFruits(){
      // split('') = 'Apple' => ['A','p','p','l','e']
      // reverse() = ['e','l','p','p','A']
      // join('') = 'elppA'
      return this.fruits.map(fruit =>
        fruit.split('').reverse().join('')
      )
    },
    reversedMsg(){
      return this.msg.split('').reverse().join('')
    }
  }
};
</script>
