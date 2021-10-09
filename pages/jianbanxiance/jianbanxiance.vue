<template>
	<view>
		<swiper @click="none"  autoplay circular  @change="cu" >
			<swiper-item v-for="(item,i) in list" :key="i">
				<image :src="item.itempic" ></image>
			</swiper-item>
		</swiper>
		<view class="header" @click="none">
			<text class="txt">{{size}}/{{allsize}}</text>
			<text class="tt" @click="tostore">官网</text>
			<view class="select-box" @click.stop="show">
				<text class="t">{{text}}</text>
			 <view class="swiper" v-if="flag" v-for="(item,i) in menu" :key="i" >
			  	<text class="ico" @click="change" :data-con="item.catename" :data-dp="item.mid" :data-fl="item.mcid">{{item.catename}}</text>
			  </view>
			</view>
		</view>
	</view>
</template>

<script>
	import my from "../../utils/request.js";
	export default {
		data() {
			return {
				wh:"",
				flag:false,
				content:[],
				menu:[],//分类
				innerAudioContext:null,
				id:"",
				text:"菜单分类",
				list:[],
				allsize:0,
				size:1,
				music:"",
			}
		},
		methods: {
			tostore(){
				uni.navigateBack({
					delta:1
				})
			},
			show(){
				this.flag=!this.flag;
			},
			none(){
				this.flag=false;
			},
			change(e){
				console.log(e)
				this.size=1;
				this.text=e.currentTarget.dataset.con;
				let dp1=e.currentTarget.dataset.dp;
				let fl1=e.currentTarget.dataset.fl;
				my.getData("mobile/Minishop/photos","mid="+dp1+"&mcid="+fl1,getApp().globalData.key).then(res=>{
					this.list=res.data.result.photos;
					this.allsize=this.list.length;
					
				})
			},
			getclass(){
				my.getData("mobile/Minishop/shopinfo","mid="+this.id,getApp().globalData.key).then(res=>{
					this.menu=res.data.result.menu;
					console.log("分类",res)
					// this.menu=res.data.result.menu.slice(1,res.data.result.menu.length-1)
					this.text=res.data.result.menu[0].catename;
					this.gethua(res.data.result.menu[0].mid,res.data.result.menu[0].mcid);
				})
			},
			gethua(dp,fl){
				// +"&mcid="+fl
				my.getData("mobile/Minishop/photos","mid="+dp,getApp().globalData.key).then(res=>{
					console.log("图片",res)
					this.list=res.data.result.photos;
					this.allsize=this.list.length;
					this.music=res.data.result.music;
					this.autoplay();
				})
			},
			autoplay(){
				this.innerAudioContext =wx.getBackgroundAudioManager();
				this.innerAudioContext.title="后来";
				console.log(this.music)
				this.innerAudioContext.src=this.music;
				this.innerAudioContext.onEnded(()=>{
					this.autoplay();
				});
				this.innerAudioContext.play();
			},
			cu(e){
				this.size=e.detail.current+1;
				console.log(e.detail.current)
			}
		},
		onLoad(options) {
			//店铺id
			if(options.id){
				this.id=options.id;
			}
			this.getclass();
			
		},
		onUnload() {
			this.innerAudioContext.stop();
		}
	}
</script>

<style lang="less" scoped>
view{
	width: 100vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	position: relative;
	background-color: #f5f6f8;
	swiper{
		width:750rpx;
		height:100vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		margin: 0;
		padding: 0;
		swiper-item{
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			image{
				width: 100%;
				height: 100%;
				margin: 0;
				padding: 0;
			}
		}
	}
	.header{
		width: 100%;
		height: 50rpx;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-end;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #FFFFFF;
		.txt{
			width: 80rpx;
			height: 36rpx;
			font-size: 20rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #4D626B;
			line-height: 36rpx;
			background: rgba(77, 98, 107, 0.1);
			border-radius: 8rpx;
			text-align: center;
			margin-right: 10rpx;
		}
		.tt{
			width: 80rpx;
			height: 36rpx;
			font-size: 20rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #D7A761;
			line-height: 36rpx;
			background: rgba(215, 167, 97, 0.1);
			border-radius: 8rpx;
			margin-right:  215rpx;
			text-align: center;
		}
		.select-box{
			width: 200rpx;
			background-color: #FFF;
			display: inline-block;
			text-align: center;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 10rpx;
			margin-right: 10rpx;
			background-color: reed;
			.t{
				width:200rpx;
				height: 36rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #111111;
				line-height: 36rpx;
				box-sizing: border-box;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				text-align: center;
				margin: 0;
				padding: 0;
			}
			.swiper{
				width:200rpx;
				height: 36rpx;
				display: inline-block;
				border: 1rpx solid #4c99e5;
				box-sizing: border-box;
				margin: 0;
				display: flex;
				flex-wrap: nowrap;
				justify-content: center;
				align-items: center;
				.ico{
					width:200rpx;
					height: 36rpx;
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					// font-weight: 400;
					color: #111111;
					line-height: 36rpx;
					box-sizing: border-box;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					text-align: center;
					margin: 0;
					padding: 0;
				}
			}
		}
	}
}
</style>
