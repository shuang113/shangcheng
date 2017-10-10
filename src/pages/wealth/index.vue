<template>
	<div class="wealth">
		<div class="wealth-content">
			<div class="content-hd">
				<p>财富中心 内容更新中...</p>
				<router-link to="/member">返回会员中心</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">

	export default{
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.wealth{
		.static-body;
		font-size:@font-size-large;
		z-index:1;
		background-color: @color-gray-l;
		.wealth-content{
			.body-height;
				display: flex;
				justify-content:center;
				align-items:center;
		}
	}
</style>