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
        <ul class="personal">
          <li>
            <p>住址</p>
            <p>{{resume.Profile.city}}</p>
          </li>
          <li>
            <p>性别</p>
            <p>{{resume.Profile.sex}}</p>
          </li>
          <li>
            <p>年龄</p>
            <p>{{resume.Profile.age}}</p>
          </li>
        </ul>
      </header>
      <div class="edu">
        <h3>教育背景</h3>
        <p>{{resume.Education.school}}</p>
        <p>{{resume.Education.time}}</p>
      </div>
      <div class="hobbies">
        <h3>兴趣爱好</h3>
        <ul class="hobby-item">
          <li v-for="(item,key) in resume.Hobbys" :key="key">{{item.hobby}}</li>
        </ul>
      </div>
      <div class="self-assessment">
        <h3>自我评价</h3>
        <p>
          {{resume.Profile.assessment}}
        </p>
      </div>
    </section>
    <section class="section-right">
      <div class="blog">
        <h3>Github&Blog</h3>
        <p class="github">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
          <span>Github:
            <a :href="resume.Contacts.github" v-text="resume.Contacts.github"></a>
          </span>
        </p>
        <p class="blog">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-blog"></use>
          </svg>
          <span>Blog:
            <a :href="resume.Contacts.blog" v-text="resume.Contacts.blog"></a>
          </span>
        </p>
      </div>
      <div class="work">
        <div class="title">
          <h3>工作经验</h3>
        </div>
        <div class="work-item" v-for="(item,index) in resume.Work" :key="index">
          <ul>
            <li class="item-title">
              <span>{{item.company}}</span>
              <span>{{item.time}}</span>
            </li>
            <li class="content">{{item.details}}</li>
          </ul>
        </div>
      </div>
      <div class="project">
        <div class="title">
          <h3>项目经验</h3>
        </div>
        <div class="project-item" v-for="(item,index) in resume.Projects" :key="index">
          <ul>
            <li class="item-title">
              <span>{{item.project}}</span>
              <span>{{item.time}}</span>
            </li>
            <li class="content">{{item.details}}</li>
          </ul>
        </div>
      </div>
      <div class="skill">
        <div class="title">
          <h3>技能</h3>
        </div>
        <div class="skill-item" v-for="(item,index) in resume.Skills" :key="index">
          <ul>
            <li class="item-title">
              <span>{{item.skill}}</span>
            </li>
            <li class="content">{{item.content}}</li>
          </ul>
        </div>
      </div>
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
    ...mapState(['resume'])
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
  background-color: #ECECEC;
  >.section-left {
    width: 35%;

    color: #313131;
    text-align: center;
    line-height: 1.8;
    height: auto;
  }
  >.section-right {
    width: 65%;
    color: #313131;
    padding: 1rem;
    line-height: 1.8;
    padding-bottom: 10px;
    >.blog {
      padding-left: 80px;
      background-color: #f5f6f7;
      >h3 {
        font-size: 2rem;
      }
      .github,
      .blog {
        >span {
          margin-left: 5px;
          >a {
            text-decoration: none;
            color: #313131;
          }
        }
      }
    }
  }
}

.profile {
  padding-top: 2rem;
  >h2 {
    font-size: 2.5rem;
  }
  >h3 {
    font-size: 2rem;
  }
}

.icon {
  fill: #000;
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
  &::before {
    content: '';
    display: block;
    height: 100%;
  }
}

.personal {
  display: flex;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  >li {
    flex: 1;
  }
}

.edu {
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
  >h3 {
    font-size: 2rem;
  }
}

.hobbies {
  margin-top: 15px;
  >h3 {
    font-size: 2rem;
  }
  .hobby-item {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    >li {
      width: 50px;
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
}

.self-assessment {
  h3 {
    font-size: 2rem;
  }
  >p {
    text-align: left;
    padding: 1rem;
  }
}

.work,
.project,
.skill {
  padding: .5rem;
  background-color: #f5f6f7;
  .title {
    border-bottom: 2px solid #ccc;
    >h3 {
      font-size: 2rem;
    }
  }
}

.item-title {
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  color: #0093ff;
}

.content {
  padding: .5rem;
}
</style>
