<template>
	<view>
		<view class="title">
			<text>填写信息可免费收到厂家{{goods.mname}}邮寄的纸画册，</text>
			<text>厂家电话为{{goods.mmobile}} 、{{goods.mtel}}</text>
		</view>
		<view class="content">
			<view class="header">
				<view>
					<text>姓名</text>
					<input type="text" placeholder="请填写姓名"  v-model="name"/>
				</view>
			</view>
			<view class="header">
				<view>
					<text>电话</text>
					<input type="text" placeholder="请填写电话"  v-model="phone"/>
				</view>
			</view>
			<view class="header">
				<view>
					<text>所在地区</text>
					<picker mode="region" @change="chang" >
					  <view class="picker" >
								<input type="text" placeholder="请选择地区" disabled="true" v-model="val"/>
					  </view>
					</picker>
					<!-- <input type="text" placeholder="请选择地区"  disabled="true" @click.stop="xuan" /> -->
				</view>
				<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
			</view>
			<view class="header">
				<view>
					<text>详细地址</text>
					<input type="text" placeholder="请填写详细地址" v-model="add" />
				</view>
			</view>
			<button @click="save">确定</button>
		</view>	
	
	</view>
</template>

<script>
	import my from "../../utils/request.js"
	export default {
		data() {
			return {
				 // region:["请选择地区","",""]
				 id:0,
				 name:"",
				 phone:"",
				 add:"",
				 val:"",
				 goods:{},
			}
		},
		methods: {
			xuan(){
				this.flag=false;
			},
			chang(e){
				this.val="";
				var a=e.detail.value;
				for (let i in a) {
						this.val=this.val+a[i];
				}
				console.log(this.val)
			},
			clo(e){
				console.log(e)
			},
			save(){
				my.huace("mobile/Mipianadmin/getphoto","mid="+this.id,this.name,this.phone,this.add,this.val,getApp().globalData.key).then(res=>{
					if(res.data.success){
						uni.showToast({
							title:"申请成功，商家将尽快发出",
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
			getBanner(){
				my.getData("mobile/Minishop/shopinfo","mid="+this.id,getApp().globalData.key).then(res=>{
					this.goods=res.data.result.info;
					console.log(res)
				})
			},
		},
		onLoad() {
			this.id=7;
			this.getBanner();
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
	align-content: flex-start;
	background-color: #f5f6f8;
	position: relative;
	.title{
		width: 750rpx;
		height: 184rpx;
		background: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding-top: 45rpx;
		box-sizing: border-box;
		text{
			width: 686rpx;
			height: 52rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #D7A761;
			line-height: 52rpx;
		}
	}
	.content{
		width: 750rpx;
		height: 820rpx;
		display: flex;
		flex-wrap: wrap;
		background-color: #FFFFFF;
		justify-content: center;
		align-items: flex-start;
		.header{
			width: 686rpx;
			height: 116rpx;
			background: #FFFFFF;
			display: flex;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			// padding:0rpx 32rpx;
			box-sizing: border-box;
			border-top: 2rpx solid #DDDDDD;
			view{
				width: 650rpx;
				height: 110rpx;
				display: flex;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				background: #FFFFFF;
				padding: 0;
				text{
					width: 136rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #111111;
					line-height: 42rpx;
					text-align: left;
				}
				input{
					width:500rpx;
					height: 116rpx;
					margin-left: 14rpx;
				}
				.picker{
					width:500rpx;
					margin-left: 14rpx;
					color: #999999;
				}
			}
			image{
				width: 32rpx;
			}
		}
		button{
			width: 686rpx;
			height: 96rpx;
			background: #BC4040;
			border-radius: 12rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
			margin-top: 80rpx;
		}
	}

}
</style>
