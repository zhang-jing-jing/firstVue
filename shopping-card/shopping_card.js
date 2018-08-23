new Vue({
    el:'#shopping-cart',
    data:{
        productList:[
            {
                'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                'pro_brand': 'skc',//品牌名称
                'pro_place': '韩国',//产地
                'pro_purity': '99.7%',//规格
                'pro_min': "215千克",//最小起订量
                'pro_depot': '上海仓海仓储',//所在仓库
                'pro_num': 3,//数量
                'pro_img': 'shopping_cart.png',//图片链接
                'pro_price': 800//单价
            },
            {
                'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                'pro_brand': 'skc',//品牌名称
                'pro_place': '韩国',//产地
                'pro_purity': '99.7%',//规格
                'pro_min': "215千克",//最小起订量
                'pro_depot': '上海仓海仓储',//所在仓库
                'pro_num': 3,//数量
                'pro_img': 'shopping_cart.png',//图片链接
                'pro_price': 800//单价
            },
            {
                'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                'pro_brand': 'skc',//品牌名称
                'pro_place': '韩国',//产地
                'pro_purity': '99.7%',//规格
                'pro_min': "215千克",//最小起订量
                'pro_depot': '上海仓海仓储',//所在仓库
                'pro_num': 3,//数量
                'pro_img': 'shopping_cart.png',//图片链接
                'pro_price': 800//单价
            }
        ]
    },
    computed:{
        isSelectAll:function(){
            if (this.productList.length === 0) {
                return false;
            }
           var select = this.productList.every(function(val){
               return val.select;
           })
           return select;
        },
        getTotal:function(){
            var _proList = this.productList.filter(function(val){return val.select});
            var totalPrice = 0;
            for (let i = 0; i < _proList.length; i++) {
                totalPrice += _proList[i].pro_num * _proList[i].pro_price;
            }
            return { totalNum: _proList.length, totalPrice: totalPrice}
        }
    },
    mounted:function(){
        // Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = 'hi')
        // var _this = this;
        // _this.productList.forEach(item => {
        //     item.select = true;
        // });
        var _this = this;
        //为productList添加select（是否选中）字段，初始值为true
        this.productList.map(function (item) {
            _this.$set(item, 'select', true);
        })
    },
    methods:{
        deleteOneProduct: function (index){
            this.productList.splice(index,1);
        },
        // 删除选中
        deleteProduct: function () {
            this.productList = this.productList.filter(function(val){return !val.select})
        },
        selectProduct: function (isSelectAll){
            for (let i = 0; i < this.productList.length; i++) {
                this.productList[i].select = !isSelectAll;  
            }
        }
    }
})