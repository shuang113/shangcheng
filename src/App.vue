<template>
	<div id="app">
		<keep-alive>
			<transition name="router-slide" mode="in-out">
				<router-view></router-view>
			</transition>
		</keep-alive>
	</div>
</template>

<script type="text/javascript">
	export default{
	}
</script>

<style lang="less">
	@import '~@/common/style/index.less';
	@import '~@/common/style/variable.less';

	#app{
		font-size:@font-size-medium;
	}
    .router-slide-enter-active, .router-slide-leave-active {
        transition: all .4s;
    }
    .router-slide-enter, .router-slide-leave-active {
        transform: translate3d(100%, 0, 0);
        opacity: 0;
    }
</style>
