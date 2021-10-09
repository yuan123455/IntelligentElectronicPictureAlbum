<template>
	<view>
		<view class="content">
			<view class="header">
				<view>
					<text>姓名</text>
					<input type="text" placeholder="请填写姓名"  v-model="name"/>
				</view>
			</view>
			<view class="header">
				<view>
					<text>职位</text>
					<input type="text" placeholder="请选择职位" v-model="mposition" />
				</view>
				<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
			</view>
			<view class="header">
				<view>
					<text>手机</text>
					<input type="text" placeholder="请填写手机号(必填)" v-model="phone" @blur="ph"/>
				</view>
			</view>
			<view class="header">
				<view>
					<text>邮箱</text>
					<input type="text" placeholder="请填写邮箱"  v-model="mail" @blur="mai"/>
				</view>
			</view>
			<view class="header">
				<view>
					<text>公司/部门</text>
					<input type="text" placeholder="请选择公司或部门" v-model="company" />
				</view>
				<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
			</view>
			<view class="header">
				<view>
					<text>地址</text>
					<input type="text" placeholder="请填写地址" v-model="address" />
				</view>
				<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
			</view>
			<view class="header">
				<view>
					<text>微信号</text>
					<input type="text" placeholder="请填写微信好" v-model="wx_number" />
				</view>
				<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
			</view>
			<view class="header" >
				<view>
					<text>口令</text>
					<input type="text" placeholder="请填写免审口令" v-model="joinpasswd" />
				</view>
			</view>
		<button @click="save1" v-if="i==3">保存</button>
		<button @click="save" v-if="i==1">保存</button>
		<button @click="create" v-if="i==-1">立即创建</button>
		</view>		
		</view>
		<!-- //选择器 -->
		  <!-- <picker mode="region"  :value="region" >
		    <view class="picker">
		      当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
		    </view>
		  </picker> -->
		  <!-- <picker mode="selector"  :value="region" >
		    <view class="picker">
		      当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
		    </view>
		  </picker> -->
	</view>
</template>

<script>
	import my from "../../utils/request.js"
	export default {
		data() {
			return {
				  region: ['北京市', '北京市', '东城区'],
				  name:"",
				  company:"",
				  phone:"",
				  mposition:"",
				  mail:"",
				  joinpasswd:"",
				  id:0,
				  i:-1,
				  address:"",
				  wx_number:"",
			}
		},
		methods: {
			//创建销售
			save1(){
				if(this.name=="" || this.phone=="" ||this.company==""){
					uni.showToast({
						title:"姓名、电话、公司必须填写",
						icon:"none"
					})
					return;
				}
					console.log("woyongyuksal1","pid=",this.id,this.name,this.company,this.phone,this.wx_number,this.address,this.mposition,this.mail,this.joinpasswd,)
				my.xioashou("mobile/mipianadmin/add_mp_do","pid="+this.id,this.name,this.company,this.phone,this.wx_number,this.address,this.mposition,this.mail,this.joinpasswd,getApp().globalData.key).then(res=>{
					console.log(res)
					if(res.data.success){
						uni.showToast({
							title:"创建成功",
							icon:"none"
						});
						setTimeout(function(){
							var pages = getCurrentPages();
							var prevPage = pages[pages.length - 1];
							uni.navigateBack({
								url:"../businessmesage/businessmesage"
							})
						},500);
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none"
						});
					}
				});
			},
			//个人名片
			create(){
				if(this.name=="" || this.phone=="" ||this.company==""){
					uni.showToast({
						title:"姓名、电话、公司必须填写",
						icon:"none"
					})
					return;
				}
				console.log(getApp().globalData.key)
				my.crea("mobile/mipianadmin/add_mp_do","sign=0",this.name,this.company,this.phone,this.wx_number,this.address,this.mposition,this.mail,this.joinpasswd,getApp().globalData.key).then(res=>{
					console.log(res)
					if(res.data.success){
						uni.showToast({
							title:"创建成功",
							icon:"none"
						});
						uni.redirectTo({
							url:"../businessmesage/businessmesage"
						})
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none"
						});
					}
				});
			},
			ph(){
				let tel=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;//11位手机号码正则
					if(this.phone==""){
						uni.showToast({
							title:"请输入手机号后重试",
							icon:"none"
						})
					}else if(!tel.test(this.phone)){
						uni.showToast({
							title:"请输入正确的手机号码",
							icon:"none"
						})
						this.phone="";
					}
			},
			mai(){
				let tel=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;//11位手机号码正则
					if(this.mail==""){
						uni.showToast({
							title:"请输入邮箱后重试",
							icon:"none"
						})
					}else if(!tel.test(this.mail)){
						uni.showToast({
							title:"请输入正确的邮箱",
							icon:"none"
						})
						this.mail="";
					}
			},
			//找出对应值
			getList(){
				my.getData("mobile/mipianadmin/mplist","mpid="+this.id,getApp().globalData.key).then(res=>{
					console.log("获取修改名片",res)
					for (let i in res.data.result) {
						if(res.data.result[i].id==this.id){
							this.name=res.data.result[i].name;
							this.mposition=res.data.result[i].mposition;
							this.company=res.data.result[i].company;
							this.phone=res.data.result[i].phone;
							this.address=res.data.result[i].address;
							this.wx_number=res.data.result[i].wxnumber;
							this.mail=res.data.result[i].mail;
						}
					}
				})
			},
			save(){
				if(this.name=="" || this.phone=="" ||this.company==""){
					uni.showToast({
						title:"姓名、电话、公司必须填写",
						icon:"none"
					})
					return;
				}
				my.crea("mobile/mipianadmin/edit_mp_do","mpid="+this.id,this.name,this.company,this.phone,this.wx_number,this.address,this.mposition,this.mail,this.joinpasswd
				,getApp().globalData.key).then(res=>{
					if(res.data.success){
						uni.showToast({
							title:"修改成功",
							icon:"none",
							success() {
								setTimeout(function(){
									var pages = getCurrentPages();
									var prevPage = pages[pages.length - 2];
									uni.navigateBack({
										url:"../businessmesage/businessmesage"
									})
								},1000);
							}
						})
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none"
						})
					}
				})
			}
		},
		onLoad(options) {
			console.log(options)
			if(options.i){
				this.i=options.i;
				this.id=options.d;
			}
			if(options.id){
				this.id=options.id;
				this.i=options.a;
				this.getList()
			}
			if(options.x=="0"){
				this.id=options.id;
				this.i="3";
				let that=this;
				uni.getStorage({
					key:"token",
					success(data) {
						let res=JSON.parse(data.data);
						my.getData("mobile/mipianadmin/mplist","sign=0",res.key).then(res=>{
							if(res.data.code=="300"){
								
							}else{
								uni.getStorage({
									key:"token",
									success(data) {
										let res=JSON.parse(data.data);
										getApp().globalData.key=res.key;
									}
								})
							}
						})
					},
					fail() {
						
					}
				})
			}
		},
		
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
			border-bottom: 2rpx solid #DDDDDD;
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
	.picker{
		width: 750rpx;
		height: 200rpx;
		background-color: skyblue;
		position: absolute;
		bottom: 0;
		left: 0;
	}
}
</style>
