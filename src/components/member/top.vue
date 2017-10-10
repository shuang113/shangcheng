<template>
	<div class="m-top">
		<span class="iconfont icon-fanhui" @click="goBack()"></span>
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';

	.m-top{
		display: flex;
		justify-content:center;
		height:@input-height;
		line-height: @input-height;
		background-color: @color-theme;
		text-align: center;
		font-size:@font-size-medium-x;
		color:@color-white;
		box-sizing: border-box;
		position: relative;
		.icon-fanhui{
			font-size:@font-size-large;
			position: absolute;
			left:@box-margin;
			top:50%;
			transform:translateY(-50%);
		}
		.title-link{
			font-size:@font-size-small;
			text-decoration: underline;
			position: absolute;
			right:@box-margin;
		}
	}
</style>