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
        }
      ],
      Profile: {
        name: 'DK',
        city: 'LA',
        title: 'id'
      },
      Work: [{
          company: 'AL',
          content: '我的第一份工作是'
        },
        {
          company: 'cf',
          content: '我的第er份工作是'
        }
      ],
      Education: [{
          school: 'AL',
          content: '我的高中'
        },
        {
          school: 'AL',
          content: '我的大学'
        }
      ],
      Projects: [{
          project: 'projectA',
          content: 'project A'
        },
        {
          project: 'projectB',
          content: 'projectB'
        }
      ],
      Hobbys: [{
          hobby: '你以为呢你以为呢你以为呢你以为呢你以为呢',
          content: '我以为我以为我以为我以为我以为我以为我以为我以为'
        },
        {
          hobby: '你好吗你好吗你好吗你好吗你好吗',
          content: '好好哈哈哈哈哈哈哈哈哈哈哈哈'
        }
      ],
      Contacts: [{
          contact: 'wechat',
          content: 'abc123'
        },
        {
          contact: 'qq',
          content: '123456'
        }
      ]
    }
  },
  mutations: {
    switchTab(state, payload) {
      state.selected = payload
    },
    updateResume(state,{path,value}){
      
    }
  }
})
