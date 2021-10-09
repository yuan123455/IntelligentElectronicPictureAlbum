<template>
	<view>
		<view class="search">
			<input type="number" placeholder="请输入号码查询" v-model="phone"/>
			<button @click="search">查询</button>
		</view>
		<view class="header">
			<text v-for="(item,i) in title" :key="i">{{item}}</text>
		</view>
		<view class="content">
			<view class="main" v-for="(item,i) in list" :key="i">
				<text>{{item.name}}</text>
				<text>{{item.tel}}</text>
				<text>{{item.ssq}}{item.address}</text>
				<text>{{item.addtime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import my from "../../utils/request.js";
	export default {
		data() {
			return {
				title:["姓名","电话","地址","日期"],
				phone:"",
				list:[],
				pag:2,
			}
		},
		methods: {
			getList(){
				my.getData("mobile/shopadmin/YJList","sign=0",getApp().globalData.key).then(res=>{
					console.log("邮寄列表",res);
					if(!res.data.success){
						uni.showToast({
							title:res.data.message,
							icon:"none",
						});
						return;
					}
					this.list=res.data.result.list.list;
				})
			},
			downLoad(){
				my.load("mobile/shopadmin/YJList","sign=0",this.pag,getApp().globalData.key).then(res=>{
					console.log("邮寄列表",res);
					if(!res.data.success){
						uni.showToast({
							title:res.data.message,
							icon:"none",
						});
						return;
					}
					if(res.data.result.list.list.length>0){
						this.list=[...this.list,...res.data.result.list.list];
						this.pag++;
					}else{
						uni.showToast({
							title:"没有更多信息了",
							icon:"none"
						})
					}
					
				})
			},
			search(){
				my.getData("mobile/shopadmin/YJList","tel="+this.phone,getApp().globalData.key).then(res=>{
					console.log("邮寄列表",res);
					if(!res.data.success){
						uni.showToast({
							title:res.data.message,
							icon:"none",
						});
						return;
					}
					this.list=res.data.result.list.list;
				})
			},
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			this.downLoad();
		}
	}
</script>

<style lang="less" scoped>
view{
	width: 750rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	.search{
		width: 600rpx;
		height: 100rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		input{
			width: 520rpx;
			height: 50rpx;
			text-align: center;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			line-height: 50rpx;
			text-align: left;
		}
		button{
			width: 160rpx;
			height:50rpx;
			background: rgba(188, 64, 64, 0.1);
			border-radius: 8rpx;
			font-size: 26rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #BC4040;
			line-height:50rpx;
		}
	}
	.header{
		width: 750rpx;
		height: 50rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		background-color: #f5f6f8;
		text{
			width:100px;
			height: 42rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #111111;
			line-height: 42rpx;
			text-align: center;
			background-color: #f5f6f8;
		}
	}
	.content{
		width: 750rpx;
		height: calc(100vh - 100rpx);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		.main{
			width: 750rpx;
			height: 50rpx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			text{
				width:100px;
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #111111;
				line-height: 42rpx;
				text-align: center;
			}
		}
		
	}
}
</style>
