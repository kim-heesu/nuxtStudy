<template>
  <div>

    <button @click="add02">!@추가02</button>

    <p>{{ reveserdMsg02 }}</p>

    {{ msg }}
  </div>

</template>

<script>
export default {
  data(){
    return{
      //데이터 부분에서는 Getter(값은 얻어내는용도) , Setter(값을 지정하는용도) 둘다 사용가능하다
      msg:'hi computed!'
    }
  },
  methods:{

    add02(){
      //화면에 아무런 반응ㅇ이없다.
      this.reveserdMsg02 += '!@'

      // 얘는 잘 추가됨
      // this.msg += '!@'
    }

  },
  computed:{

    // getter,setter의 기능을 모두 갖게 만들기
    reveserdMsg02:{
      get(){
        // 기존에 사용했던 것처럼 기존 로직을 추가
        // 얻어오는 데이터
        return this.msg.split('').reverse().join('')
      },
      // set은 매개변수를 지정할 수도 있다.
      set(newValue){
        // add02버튼을 클릭할 경우 setter부분의 set 메소드가 실행되고
        // neweValue부분에 add02에 만든 것처럼 !@이 붙어져있는 새로운 값이 들어와진다.
        // 그 값이 newValue로 사용되고, msg라는 데이터에 할당이 될 수 있는 구조
        // 원본인 msg데이터가 바뀌었기 때문에 get으로 가져올때 변경된 데이터를 가져와서 실제 화면에  reveredMsg002를 출력했을때 원본데이터에 !@가 붙은 바뀐 데이터로 보이는것
        this.msg=newValue
      }
    }
  }
};
</script>
