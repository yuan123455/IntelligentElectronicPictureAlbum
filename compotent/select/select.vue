<template>
	<view @click="none">
		<view class="select-box" @click.stop="show">
			<text>{{menu}}</text>
		  <view class="swiper" v-if="flag" v-for="(item,i) in content" :key="i">
		  	<text @click="change" :data-con="item">{{item}}</text>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:false,
				content:['1','2','3'],
				menu:"一级",
			}
		},
		methods: {
			show(){
				this.flag=!this.flag;
			},
			none(){
				this.flag=false;
			},
			change(e){
				this.menu=e.currentTarget.dataset.con;
				console.log(this.menu)
				console.log(e)
			}
		},
		
	}
</script>

<style lang="less" scoped>
.select-box{
	width: 80rpx;
	background-color: #FFFFFF;
	display: inline-block;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	position: relative;
	text{
		width: 80rpx;
		height: 36rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #111111;
		line-height: 36rpx;
	}
	.swiper{
		width: 80rpx;
		height: 36rpx;
		display: inline-block;
		border: 1rpx solid #4c99e5;
		box-sizing: border-box;
		margin: 0;
		position: relative;
		top: 36rpx;
		background-color: #FFFFFF;
		text{
			width: 80rpx;
			height: 36rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #111111;
			line-height: 36rpx;
			box-sizing: border-box;
			
		}
	}
}
</style>
