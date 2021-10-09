<template>
	<view>
		
	</view>
</template>

<script>
	import my from "../../utils/request.js";
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			my.getData("mobile/mipianadmin/my_friend","mpid=4","").then(res=>{
				console.log(res);
			})
		}
	}
</script>

<style>

</style>
