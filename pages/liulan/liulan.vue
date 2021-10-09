<template>
	<view>
		<view class="select" v-for="(item,i) in list" :key="i">
			<view class="right">
					<image :src="item.mlogo" mode="widthFix"></image>
				</view>
			<view class="content">
				<view class="neirong">
					<image src="../../static/image/mingcheng.png" mode="widthFix"></image>
					<text>{{item.mname}}</text>
				</view>
				<view class="neirong">
					<image src="../../static/image/dizhi.png" mode="widthFix"></image>
					<text>{{item.maddress}}</text>
				</view>
				<view class="neirong">
					<image src="../../static/image/dianhua.png" mode="widthFix"></image>
					<text>{{item.mmobile}}</text>
				</view>
				<view class="neirong">
					<image src="../../static/image/dianhua.png" mode="widthFix"></image>
					<text>{{item.time}}</text>
				</view>
			</view>
			<view class="bom">
				<button @click="del(item.mid)">删除记录</button>
				<button @click="to(item.mid)">查看网站</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import my from "../../utils/request.js"
	export default {
		data() {
			return {
				list:[],
				pag:2,
			}
		},
		methods: {
			del(){
				
			},
			to(id){
				getApp().globalData.mpid=id;
				uni.switchTab({
					url:"../store/store",
				})
			},
			getList(){
				uni.showLoading({
					title:"加载较慢请稍等",
				})
				my.load("mobile/Mipianadmin/site_history","sign=0","1",getApp().globalData.key).then(res=>{
					console.log(res);
					uni.hideLoading()
					this.list=res.data.result.list;
				})
			},
			down(){
				my.load("mobile/Mipianadmin/site_history","sign=0",this.pag,getApp().globalData.key).then(res=>{
					console.log(res);
					if(res.data.result.list.length>0){
						this.list=[...this.list,...res.data.result.list];
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
			this.down()
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
	background-color: #f5f6f8;
	.select{
		width: 690rpx;
		height:400rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(32, 3, 3, 0.13);
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 30rpx;
		padding: 30rpx;
		box-sizing: border-box;
			.right{
				width: 200rpx;
				height: 200rpx;
				background-color: #FFFFFF;
				image{
					width:120rpx ;
				}
			}
		.content{
			width: 430rpx;
			height: 200rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: start;
			align-items: flex-start;
			background-color: #FFFFFF;
			.neirong{
				width:100% ;
				height: 40rpx;
				display: flex;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				background-color: #FFFFFF;
				
				image{
					width: 40rpx;
				}
				text{
					width:440rpx;
					height: 36rpx;
					font-size: 26rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #555555;
					line-height: 36rpx;
					margin-left:4rpx;
				}
			}
		}
		.bom{
			width: 686rpx;
			height: 100rpx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			background-color: #FFFFFF;
			button{
				width: 200rpx;
				height: 80rpx;
				background: rgba(77, 98, 107, 0.1);
				border-radius: 4px;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #4D626B;
				line-height: 80rpx;
			}
			button:nth-of-type(2){
				width: 200rpx;
				height: 80rpx;
				background: rgba(188, 64, 64, 0.1);
				border-radius: 8rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #BC4040;
				line-height: 80rpx;
			}
		}
	}
	
}
</style>
