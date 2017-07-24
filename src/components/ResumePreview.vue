<template>
  <div id="resume-preview">
    <section class="section-left">
      <header class="profile">
        <h2>{{resume.Profile.name}}</h2>
        <h3>求职意向:{{resume.Profile.intention}}</h3>
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tel"></use>
          </svg>
        </p>
        <p>
          {{resume.Contacts.telephone}}
        </p>
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-email"></use>
          </svg>
        </p>
        <p>{{resume.Contacts.email}}</p>
      </header>
    </section>
    <section class="section-right">

    </section>
  </div>
</template>

<script>
import store from '../store/index'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ResumePreview',
  store,
  computed: {
    ...mapState(["resume"]),
  },
  methods: {
    // changeResumePanels(path, value){
    //   this.$store.commit('updateResume',{path,value})
    // }
  }
}

</script>

<style lang="scss" scoped>
#resume-preview {
  width: 62%;
  background-color: #f5f6f7;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .5);
  overflow: auto;
  display: flex;
  >.section-left{
    width: 35%;
    background-color: #ECECEC;
    color: #313131;
    text-align: center;
    line-height: 1.8;
  }
  >.section-right{
    width: 65%;
  }
}
.profile{
  padding-top: 2rem;
  >h2{
    font-size: 2.5rem;
  }
  >h3{
    font-size: 2rem;
  }
}
.icon {
  fill: #7f8d9a;
  width: 1.5rem;
  height: 1.5rem;
}
</style>
