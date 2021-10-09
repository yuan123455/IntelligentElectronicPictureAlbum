<template>
	<view>
		<view class="header">
			<swiper indicator-dots="true" indicator-color="#FFF" autoplay circular >
				<swiper-item v-for="(item,i) in bgimg" :key="i">
					<image :src="item" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="select">
			<view class="renwu">
				<view class="left">
					<text>{{list.name}}</text>
					<text>{{list.mposition}}</text>
				</view>
				<view class="right">
					<image :src="list.bannerimgs" mode="widthFix"></image>
				</view>
			</view>
			<view class="jieshao">
				<text>{{list.introduce}}</text>
				<!-- <text></text> -->
			</view>
			<view class="content">
				<view>
					<image src="../../static/image/mingcheng.png" mode="widthFix"></image>
					<text>{{list.company}}</text>
				</view>
				<view>
					<image src="../../static/image/dizhi.png" mode="widthFix"></image>
					<text>{{list.address}}</text>
				</view>
				<view>
					<image src="../../static/image/dianhua.png" mode="widthFix"></image>
					<text>{{list.phone}}</text>
				</view>
			</view>
		</view>
		
		<view class="other">
			<button open-type="share">发名片</button>
			<button @click="savephone">保存到通讯录</button>
		</view>
		<view class="footer">
			<view @click="call">
				<image src="../../static/image/bodianhua.png" mode="widthFix"></image>
				<text>拨打电话</text>
				<text>{{phone}}</text>
			</view>
			<view @click="copy">
				<image src="../../static/image/weixin.png" mode="widthFix"></image>
				<text>复制微信</text>
				<text selectable="true">{{WX}}</text>
			</view>
			<view>
				<image src="../../static/image/gongshi.png" mode="widthFix"></image>
				<text>公司名称</text>
				<text>{{list.company}}</text>
			</view>
		</view>
		<view class="other">
			<button @click="create()">创建名片</button>
			<button @click="add()">添加好友</button>
		</view>
		
	</view>
</template>

<script>
	import my from "../../utils/request.js";
	export default {
		data() {
			return {
				phone:"",
				WX:"",
				list:{},
				bgimg:[],
				id:"",
				friend:0,
				flag:true,
			}
		},
		methods: {
		create(){
			uni.redirectTo({
				url:"../createbusiness/createbusiness",
			})
		},
			savephone(){
				// wx.addPhoneContact({
				//       mobilePhoneNumber:this.phone,//联系人手机号
				// 	  success:res=>{
				// 		  console.log(res)
				// 	  }
				//     })
				 wx.addPhoneContact({
				       firstName: this.list.name,//联系人姓名
				       mobilePhoneNumber:this.list.phone,//联系人手机号
					   remark:this.list.introduce,
					   weChatNumber:this.list.wxnumber,
					   addressStreet:this.list.address,
					   organization:this.list.company,
					   title:this.list.mposition,
					   email:this.list.mail,
						success(res) {
							uni.showToast({
								title:"保存成功",
							})
						},
						fail(err){
							if(err.errMsg=="addPhoneContact:fail cancel"){
								uni.showToast({
									title:"你已取消保存",
									icon:"none"
								})
							}else{
								uni.showToast({
									title:err.errMsg,
									icon:"none"
								})
							}
						},
					 })
					 
			},
			call(){
				if(this.phone!=""){
					wx.makePhoneCall({
						phoneNumber:this.phone,
					})
				}else{
					uni.showToast({
						title:"号码为空，无法拨打",
						icon:"none"
					})
				}
			},
			copy(){
				if(this.WX!=""){
					wx.setClipboardData({
					  data: this.WX,
					  success (res) {
					    wx.getClipboardData({
					      success (res) {
					        console.log(res.data) // data
					      }
					    })
					  }
					})
				}else{
					uni.showToast({
						title:"无内容，无法复制",
						icon:"none"
					})
				}
			},
			getList(id){
				let param="mpid="+id;
				my.getData("mobile/Mipian/index",param,"").then(res=>{
					console.log(res)
					this.list=res.data.result.info;
					this.phone=res.data.result.info.phone;
					this.WX=res.data.result.info.wxnumber;
					this.bgimg=res.data.result.bgpic;
					
				})
			},
			add(id){
				let param="mpid="+this.friend;
				my.getData("mobile/mipianadmin/add_friend",param,getApp().globalData.key).then(res=>{
					uni.showToast({
						title:res.data.message,
						icon:"none"
					})	
				})
			}
		},
		onLoad(options) {
			if(options.friend){
				this.id=options.friend;
				this.friend=options.friend
				this.getList(this.friend);
				this.flag=false;
			}
			// if(options.friend){
			// 	this.friend=options.friend;
			// }else{
				
			// };
			
		},
		onShareAppMessage(res) {
			console.log(this.id)
			return {
				title:"快易销智能电子画册!",
				path:"pages/business/business?friend="+this.id,
			}
		},
		onShow() {
			if(this.flag){
				uni.getStorage({
					key:"id",
					success:(res)=>{
						this.id=res.data;
						this.getList(this.id);
					},
					fail:(err)=> {
						this.id=4;
						this.getList(this.id);
					}
				})
			};
			console.log(this.id);
			my.getData("mobile/mipianadmin/add_log","mpid="+this.id,getApp().globalData.key).then(res=>{
			console.log(res)
			})
			
		},
		onHide() {
			this.flag=true
			
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
	.header{
		width: 686rpx;
		height: 440rpx;
		swiper{
			width: 686rpx;
			height: 440rpx;
			margin: 0;
			padding: 0;
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
			swiper-item{
				width: 686rpx;
				height: 440rpx;
				margin: 0;
				padding: 0;
				display: flex;
				flex-wrap: nowrap;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				image{
					width: 100%;
				}
			}
		}
		
	}
	.select{
		width: 686rpx;
		height: 532rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(32, 3, 3, 0.13);
		border-radius: 0rpx 0rpx 16rpx 16rpx;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		.renwu{
			width:598rpx;
			height: 208rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:48rpx 0rpx ;
			box-sizing: border-box;
			.left{
				width: 150rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				text{
					width: 120rpx;
					height: 56rpx;
					font-size: 40rpx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #111111;
					line-height: 56rpx;
				}
				text:last-of-type{
					width: 90rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #111111;
					line-height: 42rpx;
				}
			}
			.right{
				width: 120rpx;
				height: 100%;
				image{
					width:120rpx ;
				}
			}
		}
		.jieshao{
			width: 100%;
			height: 96rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			text{
				width: 598rpx;
				height: 96rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #555555;
				line-height: 48rpx;
			}
		}
		.content{
			width: 598rpx;
			height: 200rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: start;
			align-items: flex-start;
			view{
				width:100% ;
				height: 40rpx;
				display: flex;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 40rpx;
				}
				text{
					width: 390rpx;
					height: 36rpx;
					font-size: 26rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #555555;
					line-height: 36rpx;
					margin:4rpx 15rpx;
				}
			}
		}
	}
	
	.other{
		width: 686rpx;
		height: 100rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		margin-top: 48rpx;
		button{
			width: 320rpx;
			height: 80rpx;
			border-radius: 40rpx;
			border: 2rpx solid #BC4040;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #BC4040;
			line-height: 80rpx;
			text-align: center;
		}
		button:last-of-type{
			width: 320rpx;
			height: 80rpx;
			background: #BC4040;
			border-radius: 40rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 80rpx;
			text-align: center;
		}
	}
	.footer{
		width: 686rpx;
		height:150rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		margin-top: 48rpx;
		margin-bottom: 60rpx;
		view{
			width: 210rpx;
			height: 134rpx;
			background: #F5F6F8;
			border-radius: 4px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			margin: 0;
			padding:27rpx 0rpx;
			box-sizing: border-box;
			image{
				width: 40rpx;
			}
			text{
				width: 96rpx;
				height: 34rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #BC4040;
				line-height: 34rpx;
				margin-left: 15rpx;
			}
			text:last-of-type{
				width:200rpx;
				height: 34rpx;
				font-size: 20rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #555555;
				line-height: 34rpx;
				margin: 0;
				text-align: center;
			}
		}
	}
	button{
		width: 320rpx;
		height: 80rpx;
		border-radius: 40rpx;
		border: 2rpx solid #BC4040;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #BC4040;
		line-height: 80rpx;
		text-align: center;
	}

}
</style>
