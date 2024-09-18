import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import ExamPaper from '../pages/exam/examPaper'
import Exam from '../pages/exam/exam'
import ExamList from '../pages/exam/examList'
import ExamRecord from '../pages/exam/examRecord'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shipinleixingList from '../pages/shipinleixing/list'
import shipinleixingDetail from '../pages/shipinleixing/detail'
import shipinleixingAdd from '../pages/shipinleixing/add'
import xuexishipinList from '../pages/xuexishipin/list'
import xuexishipinDetail from '../pages/xuexishipin/detail'
import xuexishipinAdd from '../pages/xuexishipin/add'
import chengjixinxiList from '../pages/chengjixinxi/list'
import chengjixinxiDetail from '../pages/chengjixinxi/detail'
import chengjixinxiAdd from '../pages/chengjixinxi/add'
import tushufenleiList from '../pages/tushufenlei/list'
import tushufenleiDetail from '../pages/tushufenlei/detail'
import tushufenleiAdd from '../pages/tushufenlei/add'
import tushuziyuanList from '../pages/tushuziyuan/list'
import tushuziyuanDetail from '../pages/tushuziyuan/detail'
import tushuziyuanAdd from '../pages/tushuziyuan/add'
import xuexiqiandaoList from '../pages/xuexiqiandao/list'
import xuexiqiandaoDetail from '../pages/xuexiqiandao/detail'
import xuexiqiandaoAdd from '../pages/xuexiqiandao/add'
import xuexiqingkuangList from '../pages/xuexiqingkuang/list'
import xuexiqingkuangDetail from '../pages/xuexiqingkuang/detail'
import xuexiqingkuangAdd from '../pages/xuexiqingkuang/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemnoticeList from '../pages/systemnotice/list'
import systemnoticeDetail from '../pages/systemnotice/detail'
import systemnoticeAdd from '../pages/systemnotice/add'
import menuList from '../pages/menu/list'
import menuDetail from '../pages/menu/detail'
import menuAdd from '../pages/menu/add'
import discussxuexishipinList from '../pages/discussxuexishipin/list'
import discussxuexishipinDetail from '../pages/discussxuexishipin/detail'
import discussxuexishipinAdd from '../pages/discussxuexishipin/add'
import discusstushuziyuanList from '../pages/discusstushuziyuan/list'
import discusstushuziyuanDetail from '../pages/discusstushuziyuan/detail'
import discusstushuziyuanAdd from '../pages/discusstushuziyuan/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'examPaper',
					component: ExamPaper
				},
				{
					path: 'examList',
					component:ExamList
				},
				{
					path: 'examRecord/:type',
					component:ExamRecord
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shipinleixing',
					component: shipinleixingList
				},
				{
					path: 'shipinleixingDetail',
					component: shipinleixingDetail
				},
				{
					path: 'shipinleixingAdd',
					component: shipinleixingAdd
				},
				{
					path: 'xuexishipin',
					component: xuexishipinList
				},
				{
					path: 'xuexishipinDetail',
					component: xuexishipinDetail
				},
				{
					path: 'xuexishipinAdd',
					component: xuexishipinAdd
				},
				{
					path: 'chengjixinxi',
					component: chengjixinxiList
				},
				{
					path: 'chengjixinxiDetail',
					component: chengjixinxiDetail
				},
				{
					path: 'chengjixinxiAdd',
					component: chengjixinxiAdd
				},
				{
					path: 'tushufenlei',
					component: tushufenleiList
				},
				{
					path: 'tushufenleiDetail',
					component: tushufenleiDetail
				},
				{
					path: 'tushufenleiAdd',
					component: tushufenleiAdd
				},
				{
					path: 'tushuziyuan',
					component: tushuziyuanList
				},
				{
					path: 'tushuziyuanDetail',
					component: tushuziyuanDetail
				},
				{
					path: 'tushuziyuanAdd',
					component: tushuziyuanAdd
				},
				{
					path: 'xuexiqiandao',
					component: xuexiqiandaoList
				},
				{
					path: 'xuexiqiandaoDetail',
					component: xuexiqiandaoDetail
				},
				{
					path: 'xuexiqiandaoAdd',
					component: xuexiqiandaoAdd
				},
				{
					path: 'xuexiqingkuang',
					component: xuexiqingkuangList
				},
				{
					path: 'xuexiqingkuangDetail',
					component: xuexiqingkuangDetail
				},
				{
					path: 'xuexiqingkuangAdd',
					component: xuexiqingkuangAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemnotice',
					component: systemnoticeList
				},
				{
					path: 'systemnoticeDetail',
					component: systemnoticeDetail
				},
				{
					path: 'systemnoticeAdd',
					component: systemnoticeAdd
				},
				{
					path: 'menu',
					component: menuList
				},
				{
					path: 'menuDetail',
					component: menuDetail
				},
				{
					path: 'menuAdd',
					component: menuAdd
				},
				{
					path: 'discussxuexishipin',
					component: discussxuexishipinList
				},
				{
					path: 'discussxuexishipinDetail',
					component: discussxuexishipinDetail
				},
				{
					path: 'discussxuexishipinAdd',
					component: discussxuexishipinAdd
				},
				{
					path: 'discusstushuziyuan',
					component: discusstushuziyuanList
				},
				{
					path: 'discusstushuziyuanDetail',
					component: discusstushuziyuanDetail
				},
				{
					path: 'discusstushuziyuanAdd',
					component: discusstushuziyuanAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/exam',
			component: Exam
		}
	]
})
