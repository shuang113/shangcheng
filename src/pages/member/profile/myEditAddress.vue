<template>
	<div class="edit-address">
		<m-top>
			<span>收货地址修改</span>
		</m-top>
		<div class="margin">
			<div class="edit-item">
				<label class="title">收货人：</label>
				<input type="text" placeholder="小仙女">
			</div>
			<div class="edit-item">
				<label class="title">联系电话：</label>
				<input type="text" placeholder="12369852236">
			</div>
			<div class="edit-item">
				<label class="title">所在地区：</label>
				<span class="right">湖南省 长沙市 雨花区<i class="iconfont icon-jinru"></i></span>
			</div>
			<div class="edit-item">
				<label class="title">所在街道</label>
				<span class="right">圭塘街道<i class="iconfont icon-jinru"></i></span>
			</div>
			<div class="edit-item">
				<label class="title">详细地址（门牌号）：</label>
				<input type="text" placeholder="万家丽路10000号">
			</div>
		</div>
		<div class="control">
			<span class="item">删除地址</span>
			<span class="item">保存地址</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	export default{
		components:{
			MTop
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';

	.edit-address{
		.static-body;
		background-color: @color-white;
		.margin{
			border-bottom:@bottom-margin solid @color-gray;
			.edit-item{
				padding:@box-margin;
				border-bottom:@1px solid @color-gray;
				position: relative;
				.right{
					position: absolute;
					right:@box-margin;
					top:50%;
					transform:translateY(-50%);
					.iconfont{
						font-size:@font-size-medium-x;
					}
				}
				input{
					margin:0.2rem 0;
					text-indent: 0.2rem;
					width:70%;
					&::-webkit-input-placeholder{
						color:#626262;
					}
				}
			}
		}
		.control{
			padding:@box-margin*2 @box-margin;
			display: flex;
			justify-content:space-between;
			color:@color-white;
			.item{
				background-color:@color-hover;
				width:50%;
				padding:@box-margin 0;
				text-align: center;
				box-sizing: border-box;
				border-radius: @box-margin/4;
				&:nth-child(2){
					background-color:@color-theme;
					margin-left:@box-margin;
				}
			}
		}
	}
</style>