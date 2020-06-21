<template>
  <div>
      <h5>{{prosMsg}}</h5>
    <!--
    API地址 : https://cn.vuejs.org/v2/api/
    指令：
        v-model： 将数据和模板进行双向绑定, 不同的输入元素会使用不同的属性
        v-for:  迭代数据渲染元素
        v-on: 绑定事件
            v-on:click缩写为@click： 添加点击事件，将info的值添加到list数组中

    -->
    <input type="text" value="" v-model="info">
    <button @click="addNew">新增</button>
    <button v-on:click="addNew2">新增</button>
    <p>{{info}}</p>
    <ul>
      <!--<li v-for="(v,k) in list">{{k}}-{{v}}</li>-->
      <!--<todo-item v-for="(v, k) in list" :item="v" :key2="k" :key="v"></todo-item>-->

      <!--
      插槽的用法
       -->
      <todo-item3 v-for="(v, k) in list" :key="v" :abc="msg">
        <!--
        slot="" 是2.6之前的语法
        -->
        <!--<span slot="helloworld" style="font-size: 30px">{{k}} &#45;&#45; {{v}}</span>-->

        <!--<template v-slot:helloworld>-->
          <!--<span style="font-size: 30px;color: green">{{k}} &#45;&#45; {{v}}</span>-->
        <!--</template>-->


        <!--slotResult:访问子组件中的数据-->
        <!--怎样获取这些数据并在控制台打印出来呢？？？-->
        <template v-slot:helloworld="slotResult">
          <span :style="{fontSize: '30px',color: slotResult.checked ? 'blue' : 'green'}">{{k}} -- {{v}} {{slotResult.abcinfo}}</span>
        </template>

        <template v-slot:slot2>
          <span>slot2: {{v}}</span>
        </template>

      </todo-item3>
    </ul>
  </div>
</template>

<script>
  import TodoItem3 from './components/TodoItemV2.vue'

  export default {
    name: 'app',
    props: {
        prosMsg: String
    },
    components: {
      TodoItem3
    },
    data: function () {
      return {
        msg: 'hello world',
        info: 'default value',
        list: ['default']
      }
    },
    methods: {
      addNew(){
        if (this.info) {
          this.list.push(this.info);
          this.info = ''//将输入框中的数据清空
        }
      },
      addNew2(){
        if (this.info) {
          this.list.push(this.info+" addNew2");
          this.info = ''//将输入框中的数据清空
        }
      }
    }
  }
</script>

<style>

</style>
