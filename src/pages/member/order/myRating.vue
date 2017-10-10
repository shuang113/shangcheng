<template>
	<div class="m-rating">
		<m-top>
			<span>发表评价</span>
			<span class="title-link" @click="ratingTo">发布</span>
		</m-top>
		<div class="rating-wrapper">
			<scroll class="rating-content">
				<div>
					<div class="content-hd">
						<img src="/static/images/default.jpg" class="hd-img">
						<div class="msg">
							<span>描述相符</span>
							<div class="star">
								<i class="iconfont icon-pingfenxingji-hui"></i>
							</div>
							<span>非常好</span>
						</div>
					</div>
					<div class="content-bd">
						<!-- textarea 需要实现根据内容自适应高度 -->
						<textarea placeholder="宝贝满足你的期待吗？说说它的优缺点吧！" class="bd-message"></textarea>
						<div class="upload">
							<i class="iconfont icon-xiangji"></i>
							<span>上传图片</span>
						</div>
					</div>
					<div class="content-fd">
						<div class="fd-item title"><i class="iconfont icon-dianpu"></i>店铺评分</div>
						<div class="fd-item">
							<span>物流服务</span>
							<div class="star">
								<i class="iconfont icon-pingfenxingji-hui"></i>
							</div>
						</div>
						<div class="fd-item">
							<span>服务态度</span>
							<div class="star">
								<i class="iconfont icon-pingfenxingji-hui"></i>
							</div>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<transition name="router-slide">
			<div class="rating-success" v-show="isRating">
				<m-top>
					<span>评论成功</span>
				</m-top>
				
			</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	export default{
		data(){
			return{
				isRating:false
			}
		},
		components:{
			MTop,
			Scroll
		},
		methods:{
			ratingTo(){
				this.isRating = !this.isRating
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';

	.m-rating{
		.static-body;
		background-color: @color-white;
		.star{
			display: inline-block;
			color:@color-hover;
			.iconfont{
				font-size:@font-size-medium;
			}
		}
		.rating-success{
			.static-body;
			background-color: @color-white;
		}
	    .router-slide-enter-active, .router-slide-leave-active {
	        transition: all .4s;
	    }
	    .router-slide-enter, .router-slide-leave-active {
	        transform: translate3d(100%, 0, 0);
	        opacity: 0;
	    }
	}
	.rating-wrapper{
		.static-position(bottom);
		top:@input-height;
		.rating-content{
			.body-height;
		}
	}
	.content-hd{
		display: flex;
		align-items:center;
		padding:@box-margin;
		border-bottom:@1px solid @color-gray;
		.hd-img{
			width:1rem;
			height: 1rem;
			margin-right:@box-margin/2;
		}
	}
	.content-bd{
		border-bottom:@bottom-margin solid @color-gray;
		padding:@box-margin/2 @box-margin;
		.bd-message{
			width:100%;
			min-height:1.86rem;
			box-sizing: border-box;
		}
		.upload{
			background-color: @color-white;
			width:2.14rem;
			height: 2.14rem;
			border:@1px*2 dashed @color-gray-b;
			display: flex;
			flex-direction:column;
			justify-content:center;
			align-items:center;
			color:@color-gray-b;
			font-size:@font-size-small;
			.iconfont{
				font-size:@font-size-large;
			}
		}
	}
	.content-fd{
		padding:0 @box-margin;
		display: flex;
		flex-direction:column;
		align-items:center;
		.fd-item{
			width:100%;
			padding:@box-margin/2 0;
			box-sizing: border-box;
			&.title .iconfont{
				font-size:@font-size-large;
				margin-right: @box-margin/2;
			}
			.star{
				color:#000;
			}
		}
	}

</style>