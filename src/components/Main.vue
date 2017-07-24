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
.main-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  >main {
    display: flex;
    flex-grow: 1;
    min-width: 1024px;
    max-width: 1440px;
    justify-content: space-around;
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>
