<template>
	<div class="business">
		<div class="business-content">
			<div class="content-hd">
				<p>联盟商家 内容更新中...</p>
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
	.business{
		.static-body;
		font-size:@font-size-large;
		z-index:1;
		background-color: @color-gray-l;
		.business-content{
			.body-height;
				display: flex;
				justify-content:center;
				align-items:center;
		}
	}
</style>