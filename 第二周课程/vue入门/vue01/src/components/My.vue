<template>
<div id="wrapper">
  <div id="name">江西软件职业技术大学</div>
 <div>{{test}}</div>
  <div id="concent">江西软件大学简介</div>
  <!--vue的指令--> 
  <div v-for="index in list" :key="index">{{index.name}}</div>
</div>
</template>

<script>

export default {

  data () {
    return {
     list:[{name:"张三"},{name:"李四"}]
    }
  }
}
import axios from 'axios'
export default {

  data () {
    return {
     stuInform:[],
     test:null
    }
  },
  mounted(){
    axios.get("https://www.fastmock.site/mock/4374b55d0c92bba3cf7ec656e8103e56/_information_09/api/users").then((result=>{
    this.test=result.data;
    this.test=JSON.stringify(thid.test);
     this.test=JSON.parse(thid.test);
     for(var s in this.test){
       this.stuInform.push(this.test[s]);
     }
     this.test=this.stuInform
    }))
  }
}

</script>
<!--npm i less@3.13.1 less-loader@4.1.0 --save版本问题-->
<style scoped lang="less" rel="stylesheet/less">
  #wrapper{
   background-color:red;
   #name{
     background-color:chocolate;
   }
  }
  </style>