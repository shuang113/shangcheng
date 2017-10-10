<template>
	<div class="index">
		<div class="index-content">
			<div class="content-hd">
				<p>首页 内容更新中...</p>
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
	.index{
		.static-body;
		font-size:@font-size-large;
		z-index:1;
		background-color: @color-gray-l;
		.index-content{
			.body-height;
				display: flex;
				justify-content:center;
				align-items:center;
		}

	}
</style>