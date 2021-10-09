<template>
	<view>
		<view class="header">
			<text v-for="(item,i) in title" :key="i">{{item}}</text>
		</view>
		<view class="main" v-for="(item,i) in list" :key="i">
			<view>
				<text @click="tofx(item.mid)">{{item.mname}}</text>
				<text>{{item.mtel}}</text>
				<text v-if="item.status==1">审核中</text>
				<text v-if="item.status==2">已通过</text>
				<text v-if="item.status==3">未通过</text>
				<text>{{item.addtime}}</text>
			</view>
			<!-- <button @click="shenghe(item.mid,item.fxname,item.name,item.tel)">通过审核</button> -->
			<button @click="tofx(item.id)">分销店铺</button>
		</view>
	</view>
</template>

<script>
	import my from "../../utils/request.js"
	export default {
		data() {
			return {
				title:["厂家","厂家电话","审核状态","申请时间"],
				list:[],
				pag:2,
			}
		},
		methods: {
			tofx(id){
				getApp().globalData.mpid=id;
				uni.switchTab({
					url:"../store/store",
				})
			},
			shenghe(id){
				my.sheng("mobile/Mipianadmin/checkFxDo",id,fxname,name,tel,getApp().globalData.key).then(res=>{
					
					if(res.data.code=="200"){
						uni.showToast({
							title:"通过审核",
							icon:"none"
						})
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none"
						})
					}
				})
			},
			getList(){
				my.getData("mobile/shopadmin/MyFx","sign=0",getApp().globalData.key).then(res=>{
					console.log(res);
					this.list=res.data.result.list.list;
				})
			},
			downLoad(){
				my.load("mobile/shopadmin/MyFx","sign=0",this.pag,getApp().globalData.key).then(res=>{
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
			
		},
		onLoad() {
			this.getList()
		},
		onReachBottom() {
			this.downLoad()
		}
	}
</script>

<style lang="less" scoped>
view{
	width: 750rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	.header{
		width: 750rpx;
		height: 50rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: center;
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
	.main{
		width: 700rpx;
		height:160rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: space-around;
		background-color: #f5f6f8;
		margin-top: 10rpx;
		border-radius: 5rpx;
		view{
			width: 700rpx;
			height:50rpx ;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-around;
			align-items: center;
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
		button:nth-of-type(1){
			width: 160rpx;
			height: 64rpx;
			background: rgba(77, 98, 107, 0.1);
			border-radius: 8rpx;
			font-size: 26rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #4D626B;
		}
		button:nth-of-type(2){
			width: 160rpx;
			height: 64rpx;
			background: rgba(215, 167, 97, 0.1);
			border-radius: 8rpx;
			font-size: 26rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #D7A761;
		}
	}
}
</style>

 
 <!-- <template>
 	<view>
 		<view class="business" v-for="(item,i) in list" :key="i">
 			<view class="top">
 				<image :src="item.headimg" mode="widthFix"></image>
 				<text>{{item.name}}·{{item.mposition}}</text>
 			</view>
 			<view class="bom">
 				<button @click="del(item.id)">删除</button>
 				<button @click="chakan(item.id)">查看</button>
 			</view>
 		</view>
 	</view>
 </template>
 
 <script>
 	import my from "../../utils/request.js";
 	export default {
 		data() {
 			return {
 				list:[],
 				id:0,
 			}
 		},
 		methods: {
 			del(id){
 				let param="mpid="+this.id+"&seller_id="+id;
 				let that=this;
 				console.log(id)
 				my.getData("mobile/mipianadmin/del_seller",param,getApp().globalData.key).then(res=>{
 					uni.showToast({
 						title:res.data.message,
 						icon:"none",
 						success() {
 							that.getList();
 						}
 					})
 				})
 			},
 			xiugai(){
 				uni.navigateTo({
 					url:"./xiugai/xiugai"
 				})
 			},
 			chakan(id){
 				uni.switchTab({
 				url:"../business/business?id="+id,
 				})
 			},
 			getList(id){
 				my.getData("mobile/mipianadmin/my_seller","mpid="+id,getApp().globalData.key).then(res=>{
 					console.log(res)
 					if(res.data.result.length>0){
 						this.list=res.data.result;
 					}else{
 						uni.showToast({
 							title:"暂无销售",
 							icon:"none"
 						})
 					}
 				})
 			},
 		},
 		onLoad(options) {
 			this.id=options.id;
 			this.getList(options.id);
 		}
 	}
 </script>
 
 <style lang="less" scoped>
 view{
 	width: 750rpx;
 	height: 100vh;
 	display: flex;
 	flex-wrap: wrap;
 	justify-content: center;
 	align-items: flex-start;
 	background: #F5F6F8;
 	.business{
 		width: 686rpx;
 		height: 236rpx;
 		background: #FFFFFF;
 		border-radius: 8rpx;
 		display: flex;
 		flex-wrap: wrap;
 		justify-content: center;
 		align-items: center;
 		margin-top: 30rpx;
 		.top{
 			width: 100%;
 			height: 118rpx;
 			display: flex;
 			flex-wrap: nowrap;
 			justify-content: flex-start;
 			align-items: center;
 			background: #FFFFFF;
 			padding-left: 34rpx;
 			image{
 				width: 80rpx;
 			}
 			text{
 				width: 196rpx;
 				height: 42rpx;
 				font-size: 30rpx;
 				font-family: PingFangSC-Regular, PingFang SC;
 				font-weight: 400;
 				color: #111111;
 				line-height: 42rpx;
 				margin-left: 32rpx;
 			}
 		}
 		.bom{
 			width: 100%;
 			height: 118rpx;
 			display: flex;
 			flex-wrap: nowrap;
 			justify-content: space-between;
 			align-items: center;
 			background: #FFFFFF;
 			button:nth-of-type(1),button:nth-of-type(4){
 				width: 110rpx;
 				height: 64rpx;
 				background: rgba(77, 98, 107, 0.1);
 				border-radius: 8rpx;
 				font-size: 26rpx;
 				font-family: PingFangSC-Regular, PingFang SC;
 				font-weight: 400;
 				color: #4D626B;
 				margin: 0;
 			}
 			button:nth-of-type(2),button:nth-of-type(5){
 				width: 110rpx;
 				margin: 0;
 				height: 64rpx;
 				background: rgba(215, 167, 97, 0.1);
 				border-radius: 8rpx;
 				font-size: 26rpx;
 				font-family: PingFangSC-Regular, PingFang SC;
 				font-weight: 400;
 				color: #D7A761;
 			}
 			button:nth-of-type(3){
 				width: 110rpx;
 				margin: 0;
 				background: rgba(188, 64, 64, 0.1);
 				border-radius: 8rpx;
 				text-align: center;
 				line-height: 64rpx;
 				font-size: 26rpx;
 				font-family: PingFangSC-Regular, PingFang SC;
 				font-weight: 400;
 				color: #BC4040;
 			}
 		}
 	}
 }
 </style> -->
 