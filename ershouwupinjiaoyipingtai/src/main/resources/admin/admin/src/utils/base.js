const base = {
    get() {
        return {
            url : "http://localhost:8080/ershouwupinjiaoyipingtai/",
            name: "ershouwupinjiaoyipingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ershouwupinjiaoyipingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "二手物品交易"
        } 
    }
}
export default base
