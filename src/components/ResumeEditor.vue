<template>
  <div id="resume-editor">
    <nav>
      <ol>
        <li v-for="item in resume.config" :class="{active:item['target']===selected}" @click="selected=item['target']">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
          {{item.target}}
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item['target']===selected">
        <div v-if="resume[item.target] instanceof Array">
          <div class="subitem" v-for="(subitem,i) in resume[item.target]">
            <div class="resumePanels" v-for="(value, key) in subitem">
              <label>{{key}}</label>
              <input type="text" :placeholder="value" @input="changeResumePanels(`${item.target}.${i}.${key}`,$event.target.value)">
            </div>
          </div>
        </div>
        <div v-else class="resumePanels" v-for="(value,key) in resume[item.target]">
          <label>{{key}}</label>
          <input type="text" :placeholder="value" @input="changeResumePanels(`${item.target}.${key}`,$event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import store from '../store/index'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ResumeEditor',
  store,
  computed: {
    ...mapState(["resume"]),
    selected: {
      get() {
        return this.$store.state.selected
      },
      set(value) {
        return this.$store.commit('switchTab', value)
      }
    }
  },
  methods: {
    // changeResumePanels(path, value){
    //   this.$store.commit('updateResume',{path,value})
    // }
  }
}
</script>

<style lang="scss" scoped>
#resume-editor {
  background-color: #f5f6f8;
  width: 33%;
  display: flex;
  flex-direction: row;
  >nav {
    background-color: #15222a;
    width: 100px;
    >ol {
      >li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        min-height: 90px;
        cursor: pointer;
        &.active {
          background-color: #fff;
          color: #000;
          .icon {
            fill: #000;
          }
        }
      }
    }
  }
}

.icon {
  width: 36px;
  height: 36px;
  fill: #fff;
  overflow: hidden;
  display: block;
}
.resumePanels{
  display: flex;
  flex-direction: column;
  >label{
    margin: 10px 20px;
  }
  >input{
    margin-left: 20px;
    width: 280px;
    height: 50px;
    vertical-align: top;
    white-space: wrap;
  }
}
.panels{
  margin: 20px 0 0 10px;
}
</style>
