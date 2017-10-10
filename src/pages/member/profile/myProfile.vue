<template>
	<div class="edit-member">
		<m-top>
			<span>编辑资料</span>
		</m-top>
		<div class="edit-wrapper">
			<scroll class="edit-content">
				<div>
					<div class="margin">
						<div class="edit-item">
							<label class="title">头像</label>
							<img src="" class="avatar">
						</div>
						<div class="edit-item">
							<label class="title">昵称</label>
							<input type="text" placeholder="小仙女">
						</div>
					</div>
					<div class="margin">
						<div class="edit-item">
							<label class="title">姓名</label>
							<input type="text" placeholder="小仙女">
						</div>
						<div class="edit-item">
							<label class="title">手机号码</label>
							<input type="text" placeholder="12121458796" maxlength="11">
						</div>
						<div class="edit-item">
							<label class="title">身份证号</label>
							<input type="text" placeholder="458712369856236981">
						</div>
						<div class="edit-item">
							<label class="title">性别</label>
							<input type="text" placeholder="女">
						</div>
					</div>
					<div class="margin">
						<div class="edit-item">
							<label class="title">所在城市</label>
							<input type="text" placeholder="湖南-长沙-芙蓉区">
						</div>
						<div class="edit-item">
							<label class="title">生日</label>
							<input type="text" placeholder="2017-09-04">
						</div>
					</div>
					<div class="edit-submit">
						<span>确认修改</span>
					</div>
				</div>
			</scroll>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Scroll from '@/components/common/scroll'
	import MTop from '@/components/member/top'
	
	export default{
		components:{
			Scroll,
			MTop
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.edit-member{
		.static-body;
		background-color: @color-gray-l;
		.edit-wrapper{
			.static-position(bottom);
			top:@input-height;
			background-color: @color-white;
		}
	}
	.edit-content{
		.body-height;
		display: flex;
		flex-direction:column;
		.margin{
			border-top:@bottom-margin solid @color-gray;
		}
		.edit-item{
			height: @input-height;
			line-height: @input-height;
			background-color: @color-white;
			padding:0 @box-margin;
			border-bottom: @line-height solid @color-gray;
			display: flex;
			justify-content:flex-start;
			align-items:center;
			overflow: hidden;
			.title{
				flex:0 0 1.88rem;
			}
			.avatar{
				width:1rem;
				height:1rem;
				background-color: @color-gray;
				border-radius: 100%;
				overflow: hidden;
			}
			input{
				margin:0.2rem 0;
				height: 0.9rem;
				text-indent: 0.2rem;
				width:70%;
				&::-webkit-input-placeholder{
					color:#626262;
				}
			}
			

		}
	}
	.edit-submit{
		padding:@box-margin*2;
		background-color: @color-white;
		box-sizing: border-box;
		span{
			display: block;
			text-align: center;
			background-color:@color-theme;
			padding:0.3rem 0;
			border-radius: 0.6rem;
			color:@color-white;
			font-size:@font-size-medium-x;
		}
	}
</style>