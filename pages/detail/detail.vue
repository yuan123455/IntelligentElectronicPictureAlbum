<template>
	<view>
		<view class="footer">
			<view class="biaoti">
					<view></view>
					<text>{{title}}</text>
					<view></view>
			</view>
			<view class="content" v-for="(item,i) in list" :key="i">
				<image :src="item.itempic" mode="widthFix"></image>
				<text @click="toprice">微信询问价格</text>
			</view>
		</view>
		<view class="b">
			——没有更多了——
		</view>
	</view>
</template>

<script>
	import my from "../../utils/request.js"
	export default {
		data() {
			return {
				dp:0,
				fl:0,
				pag:2,
				title:"",
				list:[],
			}
		},
		methods: {
			toprice(){
				uni.navigateTo({
					url:"../price/price"
				})
			},
			downLoad(){
				let that=this;
				let param="mid="+this.dp+"&mcid="+this.fl;
				my.load("mobile/Minishop",param,this.pag,getApp().globalData.key).then(res=>{
					if(this.pag<=res.data.result.page_total){
						if(res.data.result.list.length>0){
							that.pag++;
							that.list=[...that.list,...res.data.result.list]
						}
					}else{
						uni.showToast({
							title:"没有更多产品了",
							icon:"none"
						})
					}
				})
			}
		},
		onLoad(options) {
			this.dp=options.dp;
			this.fl=options.fl;
			this.title=options.name;
			let param="mid="+this.dp+"&mcid="+this.fl;
			my.load("mobile/Minishop",param,1,getApp().globalData.key).then(res=>{
				console.log(res);
				this.list=res.data.result.list;
			})
		},
		onReachBottom() {
			this.downLoad();
		}
	}
</script>

<style lang="less" scoped>
view{
	width: 750rpx;
	// height: 100vh;
	background-color: #f5f6f8;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	.footer{
		width: 750rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		background-color: #F5F6F8;
		.biaoti{
			width: 750rpx;
			height: 120rpx;
			background: #FFFFFF;
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
			align-content: center;
			view{
				width: 100rpx;
				height: 6rpx;
				background: linear-gradient(90deg, #F0E5E5 0%, #BC4040 100%);
			}
			view:nth-of-type(2){
				background: linear-gradient(90deg, #BC4040 0%, #F0E5E5 100%);
			}
			text{
				// width: 136rpx;
				height: 48rpx;
				font-size: 34rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #BC4040;
				line-height: 48rpx;
				margin: 0rpx 38rpx;
			}
		}
		.content{
			width: 710rpx;
			// height: 560rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: flex-start;
			align-content: flex-start;
			background-color: #FFF;
			padding-bottom: 20rpx;
			margin-top: 20rpx;
			// background-color: red;
			image{
				width: 100%;
				margin: 0;
			}
			text{
				width: 710rpx;
				height: 50rpx;
				font-size: 30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #BC4040;
				line-height: 50rpx;
				text-align: center;
				background-color: #f5f6f8;
				// background-color: skyblue;
			}
		}
	}
	.b{
		width: 750rpx;
		height: 114rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #CCCCCC;
		line-height: 114rpx;
		text-align: center;
		background-color: #F5F6F8;
		// background-color: blue;
	}
}
</style>
