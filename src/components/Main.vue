<template>
  <div class="main-page">
    <header>
      <top-bar></top-bar>
    </header>
    <main>
      <resume-editor></resume-editor>
      <resume-preview></resume-preview>
    </main>
  </div>
</template>

<script>
import TopBar from './TopBar'
import ResumePreview from './ResumePreview'
import ResumeEditor from './ResumeEditor'

export default {
  name: 'Main',
  components: {
    TopBar, ResumeEditor, ResumePreview
  }
}
</script>

<style lang="scss" scoped>
  .main-page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    >main {
      display: flex;
      min-width: 1024px;
      max-width: 1440px;
      margin: 0;
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
</style>
