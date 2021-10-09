<template>
	<view>
		<view class="header">
			<text v-for="(item,i) in title" :key="i">{{item}}</text>
		</view>
		<view class="main" v-for="(item,i ) in list" :key="i">
			<text>{{item.mname}}</text>
			<text>{{item.mmobile}}</text>
			<text>{{item.expire}}</text>
			<text @click="to(item.mid)">预览</text>
		</view>
	</view>
</template>

<script>
	import my from "../../utils/request.js"
	export default {
		data() {
			return {
				title:["厂家","厂家电话","时间","查看"],
				pag:2,
				list:[],
			}
		},
		methods: {
			to(id){
				getApp().globalData.mpid=id;
				uni.switchTab({
					url:"../store/store?",
				})
			},
			getList(){
				my.getData("mobile/shopadmin/Myyj","sign=0",getApp().globalData.key).then(res=>{
					console.log(res)
					this.list=res.data.result.list.list;
				})
			},
			downLoad(){
				my.load("mobile/shopadmin/Myyj","sign=0",this.pag,getApp().globalData.key).then(res=>{
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
			}
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
		width: 750rpx;
		height: 50rpx;
		margin-top: 15rpx;
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
}
</style>
