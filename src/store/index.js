import Vuex from 'vuex'
import Vue from 'vue'
import AV from '../lib/leancloud'
import getAVuser from '../lib/getAVUser'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'Profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [{
          target: 'Profile',
          icon: 'id'
        },
        {
          target: 'Work',
          icon: 'work'
        },
        {
          target: 'Education',
          icon: 'edu'
        },
        {
          target: 'Projects',
          icon: 'project'
        },
        {
          target: 'Hobbys',
          icon: 'hobby'
        },
        {
          target: 'Contacts',
          icon: 'contact'
        },
        {
          target: 'Skills',
          icon: 'skill'
        }
      ],
      Profile: {
        name: '博格巴',
        city: '曼彻斯特',
        intention: '足球运动员',
        sex: '男',
        age: '24',
        assessment: '这是我的自我评价自我评自我评价这是我的自我评价自我评自我评价这是我的自我评价自我评自我评价这是我的自我评价自我评自我评价这是我的自我评价自我评自我评价这是我的自我评价自我评自我评价'
      },
      Work: [{
          company: '曼联',
          time: '2011-2012',
          content: '我的第一份工作在曼联我的第一份工作在曼联我的第一份工作在曼联我的第一份工作在曼联我的第一份工作在曼联我的第一份工作在曼联我的第一份工作在曼联我的第一份工作在曼联'
        },
        {
          company: '曼联',
          time: '2016-今',
          content: '我的第三份工作在曼联我的第三份工作在曼联我的第三份工作在曼联我的第三份工作在曼联我的第三份工作在曼联我的第三份工作在曼联我的第三份工作在曼联我的第三份工作在曼联'
        }
      ],
      Education: {
        school: '曼彻斯特某某学校(本科)',
        time: '2013.9-2017.7'
      },
      Projects: [{
        project: '项目1',
        time: '2017.3',
        content: '我的第一个项目我的第一个项目我的第一个项目我的第一个项目我的第一个项目我的第一个项目我的第一个项目我的第一个项目我的第一个项目我的第一个项目我的第一个项目'
      }, {
        project: '项目2',
        time: '2017.6',
        content: '我的第二个项目我的第二个项目我的第二个项目我的第二个项目我的第二个项目我的第二个项目我的第二个项目我的第二个项目我的第二个项目我的第二个项目我的第二个项目'
      }, ],
      Hobbys: {
        hobby1: '足球',
        hobby2: '篮球',
        hobby3: '游泳',
        hobby4: 'DAB'
      },
      Contacts: {
        telephone: '15000000000',
        email: 'robbchan@foxmail.com',
        wechat: 'kmac007',
        github: 'https://github.com/kmac007',
        blog: 'https://kmac007.github.io'
      },
      Skills: [{
          skill: '花式过人',
          content: '熟练掌握各种花式过人技巧熟练掌握各种花式过人技巧熟练掌握各种花式过人技巧熟练掌握各种花式过人技巧熟练掌握各种花式过人技巧熟练掌握各种花式过人技巧'
        },
        {
          skill: '远射',
          content: '熟练各种情况下的远射熟练各种情况下的远射熟练各种情况下的远射熟练各种情况下的远射熟练各种情况下的远射熟练各种情况下的远射'
        }
      ]
    }
  },
  mutations: {
    switchTab(state, payload) {
      state.selected = payload
    },
    updateResume(state, {
      path,
      value
    }) {

    }
  }
})
