import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import news from '@/views/modules/news/list'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import tushuziyuan from '@/views/modules/tushuziyuan/list'
    import examquestion from '@/views/modules/examquestion/list'
    import exampaper from '@/views/modules/exampaper/list'
    import menu from '@/views/modules/menu/list'
    import systemnotice from '@/views/modules/systemnotice/list'
    import discussxuexishipin from '@/views/modules/discussxuexishipin/list'
    import tushufenlei from '@/views/modules/tushufenlei/list'
    import chengjixinxi from '@/views/modules/chengjixinxi/list'
    import discusstushuziyuan from '@/views/modules/discusstushuziyuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import shipinleixing from '@/views/modules/shipinleixing/list'
    import xuexiqingkuang from '@/views/modules/xuexiqingkuang/list'
    import examquestionbank from '@/views/modules/examquestionbank/list'
    import xuexishipin from '@/views/modules/xuexishipin/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'
    import xuexiqiandao from '@/views/modules/xuexiqiandao/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '通知公告',
        component: news
      }
      ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
      ,{
	path: '/tushuziyuan',
        name: '图书资源',
        component: tushuziyuan
      }
      ,{
	path: '/examquestion',
        name: '试题管理',
        component: examquestion
      }
      ,{
	path: '/exampaper',
        name: '在线测试管理',
        component: exampaper
      }
      ,{
	path: '/menu',
        name: '菜单列表',
        component: menu
      }
      ,{
	path: '/systemnotice',
        name: '系统公告',
        component: systemnotice
      }
      ,{
	path: '/discussxuexishipin',
        name: '学习视频评论',
        component: discussxuexishipin
      }
      ,{
	path: '/tushufenlei',
        name: '图书分类',
        component: tushufenlei
      }
      ,{
	path: '/chengjixinxi',
        name: '成绩信息',
        component: chengjixinxi
      }
      ,{
	path: '/discusstushuziyuan',
        name: '图书资源评论',
        component: discusstushuziyuan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/exampaperlist',
        name: '在线测试列表',
        component: exampaperlist
      }
      ,{
	path: '/shipinleixing',
        name: '视频类型',
        component: shipinleixing
      }
      ,{
	path: '/xuexiqingkuang',
        name: '学习情况',
        component: xuexiqingkuang
      }
      ,{
	path: '/examquestionbank',
        name: '试题库管理',
        component: examquestionbank
      }
      ,{
	path: '/xuexishipin',
        name: '学习视频',
        component: xuexishipin
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/examrecord',
        name: '测试记录',
        component: examrecord
      }
      ,{
	path: '/xuexiqiandao',
        name: '学习签到',
        component: xuexiqiandao
      }
      ,{
	path: '/newstype',
        name: '通知公告分类',
        component: newstype
      }
    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
