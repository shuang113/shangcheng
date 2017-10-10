<template>
	<div class="m-version">
		<m-top>
			<span>版本说明</span>
		</m-top>
		<div class="version-wrapper">
			<scroll class="version-content">
				<div>
					<div class="content-hd">
						<div class="logo"><img src="/static/images/logo.png"></div>
						<div class="title">
							<h3>哪哪哪</h3>
							<p>版本不息，优化不止</p>
						</div>
					</div>
					<div class="content-bd">
						<div class="bd-items">
							<div class="title">
								<span>V 2.3.0</span>
								<span class="time">2018-04-01</span>
							</div>
							<ul class="content">
								<li>1.优化个人资料设置</li>
								<li>2.商品模式开启</li>
								<li>3.优化界面，修复bug，用户体验升级</li>
								<li>4.分类频道改造，商品查找更加快捷方便</li>
							</ul>
						</div>
						<div class="bd-items">
							<div class="title">
								<span>V 2.3.0</span>
								<span class="time">2018-04-01</span>
							</div>
							<ul class="content">
								<li>1.优化个人资料设置</li>
								<li>2.商品模式开启</li>
								<li>3.优化界面，修复bug，用户体验升级</li>
								<li>4.分类频道改造，商品查找更加快捷方便</li>
							</ul>
						</div>
					</div>
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
	.m-version{
		.static-body;
		background-color: @color-gray-l;
		.version-wrapper{
			.static-position(bottom);
			top:@input-height;
			.version-content{
				.body-height;
			}
		}
	}
	.content-hd{
		display: flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		border-bottom:@1px solid @color-gray;
		background-color: @color-white;
		padding:@box-margin;
		.logo{
			width: 2.5rem;
		}
		.title{
			font-size: @font-size-large;
			margin-top:@box-margin;
			text-align: center;
			p{
				font-size: @font-size-medium;
				color:#888;
				margin-top:@element-margin;
			}
		}
	}
	.content-bd{
		color:#9c9c9c;
		.bd-items{
			margin-top:@box-margin;
			background-color: @color-white;
			.title{
				color:@color-text;
				padding:0 @box-margin;
				box-sizing: border-box;
				height: @title-height;
				line-height: @title-height;
				border-bottom:@line-height solid @color-gray;
				position: relative;
				.time{
					color:#888;
					position: absolute;
					right:@box-margin;
				}
			}
			.content{
				padding:@box-margin;
				line-height: 1.8;
			}
		}
	}
</style>