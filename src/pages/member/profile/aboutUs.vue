<template>
	<div class="m-aboutus">
		<m-top>
			<span>关于我们</span>
		</m-top>
		<div class="aboutus-wrapper">
			<scroll class="aboutus-content">
				<div>
					<div class="content-hd">
						<div class="logo"><img src="/static/images/logo.png"></div>
						<div class="title">哪哪哪</div>
					</div>
					<div class="content-bd">
						<p>客服热线：400-1000-000</p>
						<p>客服邮箱：service@site.com</p>
						<p>当前版本：V2.0.0</p>
					</div>
					<div class="content-fd">
						<p class="link">《哪哪哪用户协议》</p>
						<p>CopyRight @ 哪哪哪2017-2019</p>
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
	.m-aboutus{
		.static-body;
		background-color: @color-gray-l;
		.aboutus-wrapper{
			.static-position(bottom);
			top:@input-height;
			.aboutus-content{
				.body-height;
				display: flex;
				flex-direction:column;
				justify-content:space-around;
			}
		}
	}
	.content-hd{
		display: flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		.logo{
			width: 2.5rem;
		}
		.title{
			font-size: @font-size-large;
			margin-top:@box-margin;
		}
	}
	.content-bd{
		margin:@box-margin*2 @box-margin;
		padding:1rem;
		background-color: @color-white;
		border:@line-height solid @color-gray;
		font-size:@font-size-medium-x;
		line-height: 1.6;
	}
	.content-fd{
		text-align: center;
		line-height: 1.6;
		.link{
			color:@color-theme;
		}
	}
</style>