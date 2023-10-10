import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./style.css"
import "./tailwind.css"
import App from './App.vue'
import './samples/node-api'

const app=createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app').$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
