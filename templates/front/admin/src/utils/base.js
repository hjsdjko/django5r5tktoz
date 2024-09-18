const base = {
    get() {
        return {
            url : "http://localhost:8080/django5r5tktoz/",
            name: "django5r5tktoz",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python的可视化学习系统"
        } 
    }
}
export default base
