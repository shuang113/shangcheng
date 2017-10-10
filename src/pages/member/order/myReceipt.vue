<template>
	<div class="m-receipt">
		<m-top>
			<span>确认收货</span>
		</m-top>
		<div class="receipt-wrapper">
			<scroll class="receipt-content">
				<div>
					<div class="content-bd"></div>
				</div>
			</scroll>
		</div>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	export default{
		components:{
			MTop,
			Scroll
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-receipt{
		.static-body;
		background-color: @color-gray-l;
		.receipt-wrapper{
			.static-position(bottom);
			top:@input-height;
			.receipt-content{
				.body-height;
			}
		}
	}
</style>