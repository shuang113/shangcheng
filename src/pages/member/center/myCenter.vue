<template>
	<div class="m-center">
		<m-top>
			<span>善客中心</span>
		</m-top>
		<div class="m-center-wrapper">
			<div class="m-center-content">

					<ul class="content-bd">
						<li class="bd-items" @click="routerTo('/member/mycenter/order')">
							<i class="iconfont icon-dingdan"></i>
							<div class="msg">
								<h4>善客订单</h4>
								<p>20个</p>
							</div>
						</li>
						<li class="bd-items" @click="routerTo('/member/mycenter/team')">
							<i class="iconfont icon-tuandui"></i>
							<div class="msg">
								<h4>我的团队</h4>
								<p>11个</p>
							</div>
						</li>
						<li class="bd-items" @click="routerTo('/member/mycenter/qrcode')">
							<i class="iconfont icon-erweima"></i>
							<div class="msg">
								<h4>二维码</h4>
								<p>我的推广二维码</p>
							</div>
						</li>
						<li class="bd-items" @click="routerTo('/member/mycenter/business')">
							<i class="iconfont icon-shenqingren"></i>
							<div class="msg">
								<h4>联盟商家申请</h4>
								<p>未认证</p>
							</div>
						</li>
					</ul>
			</div>
		</div>
		<transition name="router-slide">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	export default{
		components:{
			MTop
		},
		methods:{
			routerTo(url){
				this.$router.push(url)
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';

	.m-center{
		.static-body;
		background-color: @color-white;
		.m-center-wrapper{
			.static-position(bottom);
			top:@input-height;
			.code-content{
				.body-height;
			}
		}


	}
	.content-hd{
		height:4rem;
		padding:0.8rem @box-margin 0;
		background: url('~@/pages/member/images/bg-head.jpg') no-repeat @color-white;
		background-size: cover;
		font-size:@font-size-medium;
		.avatar{
			float:left;
			width:2rem;
			height:2rem;
			box-sizing: border-box;
			border-radius: 100%;
			border:@1px dashed @color-white;
			overflow: hidden;
			img{
				display: block;
				border:none;
			}
		}
		.m-user{
			margin-left:2.6rem;
			height:2rem;
			color:@color-white;
			display:flex;
			flex-direction:column;
			justify-content:center;
			.item{
				flex:1;
				line-height: 1.5;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.vip{
				background-color:@color-hover;
				padding:0.06rem 0.35rem;
				border-radius: 0.3rem;
				margin-right:0.4rem;
			}
		}
	}
	.content-bd{
		background-color: @color-white;
		padding-top:@box-margin;
		display: flex;
		flex-wrap:wrap;
		align-items:center;
		.bd-items{
			width:50%;
			padding:0.4rem 0.6rem;
			box-sizing: border-box;
			display: flex;
			border-right:@1px solid @color-gray;
			border-bottom:@1px solid @color-gray;
			&:nth-child(1){
				color:@color-theme;
			}
			&:nth-child(2){
				color:@color-hover;
				border-right:none;
			}
			&:nth-child(3){
				color:@color-hover;
				border-bottom: none;
			}
			&:nth-child(4){
				color:@color-theme;
				border:none;
			}
			.iconfont{
				font-size:0.8rem;
				margin-right: @box-margin;
			}
			.msg{
				p{
					color:@color-text;
					line-height: 2;
				}
			}
		}
	}
</style>