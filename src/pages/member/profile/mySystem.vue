<template>
	<div class="m-system">
		<m-top>
			<span>系统设置</span>
		</m-top>
		<div class="system-wrapper">
			<scroll class="system-content">
				<div>
					<div class="content-bd">
						<div class="bd-items" @click="isDelCache = !isDelCache">
							<span>清除缓存</span>
							<span class="right">100MB</span>
						</div>
						<div class="bd-items" @click="routerTo('/member/mysystem/version')">
							<span>版本说明</span>
							<span class="right"><i class="iconfont icon-jinru"></i></span>
						</div>
						<div class="bd-items" @click="routerTo('/member/mysystem/about')">
							<span>关于我们</span>
							<span class="right"><i class="iconfont icon-jinru"></i></span>
						</div>
						<div class="bd-button">
							<span class="button">退出登录</span>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<transition name="popup-slide">
			<popup v-show="isDelCache">
				<div class="popup-center">
					<h3 class="center-tips">确定要清除缓存吗?</h3>
					<div class="center-control">
						<span class="button" @click="cancelDelTo">取消</span>
						<span class="button">确定</span>
					</div>
				</div>
			</popup>
		</transition>
		<transition name="router-slide">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	import Popup from '@/components/common/popup'
	export default{
		data(){
			return{
				isDelCache:false
			}
		},
		components:{
			MTop,
			Scroll,
			Popup
		},
		methods:{
			cancelDelTo(){
				this.isDelCache = !this.isDelCache
			},
			routerTo(url){
				this.$router.push(url)
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-system{
		.static-body;
		background-color: @color-white;
		.system-wrapper{
			.static-position(bottom);
			top:@input-height;
			.system-content{
				.body-height;
			}
		}
	}
	.bd-items{
		padding:@box-margin;
		border-bottom:@line-height solid @color-gray;
		position: relative;
		.right{
			position: absolute;
			right:@box-margin;
			top:50%;
			transform:translateY(-50%);
			color:@color-gray-b;
		}
	}
	.bd-button{
		padding:@box-margin*2;
		background-color: @color-white;
		box-sizing: border-box;
		.button{
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