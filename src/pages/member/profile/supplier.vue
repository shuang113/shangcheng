<template>
	<div class="m-supplier">
		<m-top>
			<span>供应商申请</span>
		</m-top>
		<div class="supplier-wrapper">
			<scroll class="supplier-content">
				<div>
					<div class="content-hd">
						<div class="pr">
							<div class="user">
								<span>女王大人</span>
								<p class="vip">
									<span>银牌会员</span>
									<i>个人中心</i>
									<i>财富中心</i>
								</p>
							</div>
							<div class="avatar">
								<img src="/static/images/default.jpg" class="bd-img">
								<i class="iconfont icon-jinru"></i>
							</div>
						</div>
						<div class="hd-step">
							<div class="item complete">
								<i class="iconfont icon-dui3"></i>
								<h4>已完成</h4>
								<p>步骤的描述的描述的描述信息</p>
							</div>
							<div class="item complete">
								<i class="iconfont icon-dui1"></i>
								<h4>进行中</h4>
								<p>步骤的描述信息</p>
							</div>
							<div class="item">
								<i class="iconfont icon-daiwancheng"></i>
								<h4>未完成</h4>
								<p>步骤的描述信息</p>
							</div>
						</div>
					</div>
					<div class="content-bd">
						<div class="margin">
							<div class="bd-items">
								<label class="title">用户名</label>
								<input type="text" placeholder="请输入用户名">
							</div>
							<div class="bd-items">
								<label class="title">密码</label>
								<input type="text" placeholder="请输入密码">
							</div>
							<div class="bd-items">
								<label class="title">姓名</label>
								<input type="text" placeholder="请输入姓名">
							</div>
							<div class="bd-items">
								<label class="title">手机号码</label>
								<input type="text" placeholder="请输入您的手机号码">
							</div>
						</div>
						<div class="margin">
							<div class="bd-items">
								<label class="title">微信号</label>
								<input type="text" placeholder="请输入微信号">
							</div>
							<div class="bd-items">
								<label class="title">身份证号</label>
								<input type="text" placeholder="请输入身份证号">
							</div>
							<div class="bd-items">
								<label class="title">组织机构号</label>
								<input type="text" placeholder="请输入组织机构代码证">
							</div>
							<div class="bd-items">
								<label class="title">营业执照号</label>
								<input type="text" placeholder="请输入营业执照号">
							</div>
						</div>
						<div class="margin">
							<div class="bd-items">
								<label class="title">税务登记号</label>
								<input type="text" placeholder="请输入税务登记号">
							</div>
							<div class="bd-items">
								<label class="title">行业分类</label>
								<input type="text" placeholder="请选择您的行业">
							</div>
						</div>
					</div>
					<div class="content-fd">
						<div class="tips" :class="{'active':isChecked}">
							<i class="iconfont" 
								:class="[isChecked ===true ? 'icon-dui1' : 'icon-xuanzequan']"
								@click="isChecked = !isChecked"></i>
							已阅读并同意<span @click="readTo">《商家入驻协议》</span>
						</div>
						<div class="submit">
							<span class="button">提交申请</span>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<!-- 商家入驻协议 -->
		<transition name="router-slide">
			<m-agree v-show="isRead" :dataList="dataList">
				<div slot="top">
					<div class="m-top">
						<i class="iconfont icon-fanhui" @click="isRead = !isRead"></i>
						<span>商家入驻协议</span>
					</div>
				</div>
				<div slot="footer" class="content-fd">
					<div class="tips" :class="{'active':isChecked}">
						<i class="iconfont" 
						:class="[isChecked ===true ? 'icon-dui1' : 'icon-xuanzequan']"
						 @click="isChecked = !isChecked"></i>
						<i>我已阅读并同意相关服务条款和隐私政策</i>
					</div>
					<span class="button" @click="isRead = !isRead">同意</span>
				</div>				
			</m-agree>
		</transition>
		<!-- end -->
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	import MAgree from '@/pages/member/profile/agreement'

	export default{
		data(){
			return{
				isChecked:false,
				isRead:false,
				dataList:[]
			}
		},
		components:{
			MTop,
			Scroll,
			MAgree
		},
		methods:{
			readTo(){
				this.isRead = !this.isRead
				this.dataList.push(this.isRead)
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-supplier{
		.static-body;
		background-color: @color-gray-l;
		.supplier-wrapper{
			.static-position(bottom);
			top:@input-height;
			.supplier-content{
				.body-height;
			}
		}
	}
	.content-hd{
		padding:@box-margin;
		background-color: @color-white;
		.user{
			display: flex;
			flex-direction:column;
			.vip{
				margin-top:@element-margin;
				span{
					padding:0.05rem 0.3rem;
					background-color: @color-theme;
					color:@color-white;
					margin-right: @element-margin;
					border-radius: 0.3rem;
				}
				i{
					padding:0.05rem 0;
					color:@color-theme;
					text-decoration: underline;
					margin-right: @element-margin;
				}
			}
		}
		.avatar{
			position: absolute;
			right:0;
			top:50%;
			transform:translateY(-50%);
			display: flex;
			align-items:center;
			.bd-img{
				width:1.5rem;
				height:1.5rem;
				border-radius:100%;
				border:@1px dashed @color-theme;
				overflow: hidden;
			}
		}
		.hd-step{
			margin-top:@box-margin;
			display: flex;
			justify-content:space-between;
			.item{
				width:3.33rem;
				overflow: hidden;
				text-align: center;
				position: relative;
				&:nth-child(1),&:nth-child(2){
					&::before{
						content:'';
						position: absolute;
						top:0.22rem;
						right:0;
						width:1.35rem;
						height: @line-height;
						background-color: #b5b5b5;
					}
				}
				&:nth-child(2),&:nth-child(3){
					&::after{
						content:'';
						position: absolute;
						top:0.22rem;
						left:0;
						width:1.35rem;
						height: @line-height;
						background-color: #b5b5b5;
					}
				}
				&.complete{
					color:@color-theme;
					.iconfont{
						color:@color-theme;
					}
					&::after,&::before{
						background-color: @color-theme;
					}
				}
				p{
					color:#b5b5b5;
					width:100%;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.iconfont{
					font-size: @font-size-medium-x;
					color:#b5b5b5;
				}
			}
		}
	}
	.content-bd{
		.margin{
			border-top:@bottom-margin solid @color-gray;
			background-color: @color-white;
			.bd-items{
				display: flex;
				align-items:center;
				padding:@box-margin;
				border-top:@1px solid @color-gray;
				position: relative;
				.title{
					flex:0 0 2.64rem;
				}
				input{
					margin:0.2rem 0;
					text-indent: 0.2rem;
					width:70%;
				}
			}
			.tips{
				color:@color-theme;
				font-size:@font-size-small;
				padding-left:@box-margin;
				padding-bottom:@box-margin;
			}
		}
	}
	.content-fd{
		padding:@box-margin;
		background-color: @color-white;
		.tips{
			height: 1rem;
			line-height: 1rem;
			color:#b5b5b5;
			&.active{
				.iconfont{
					color:@color-theme;
				}
			}
			.iconfont{
				font-size: @font-size-medium-x;
			}
			span{
				color:@color-theme;
			}
		}
		.submit{
			height:@input-height;
			margin:0.6rem;
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
	}

.m-agreement{
	.m-top{
		height:@input-height;
		line-height: @input-height;
		background-color: @color-theme;
		text-align: center;
		font-size:@font-size-medium-x;
		color:@color-white;
		box-sizing: border-box;
		position: relative;
		.icon-fanhui{
			font-size:@font-size-large;
			position: absolute;
			left:@box-margin;
			top:50%;
			transform:translateY(-50%);
		}
	}

	.content-fd{
		.static-position(bottom);
		display: flex;
		align-items:center;
		padding:@element-margin @box-margin;
		border-top:@line-height solid @color-gray;
		.tips{
			height: 1rem;
			line-height: 1rem;
			color:#b5b5b5;
			margin-right: @element-margin;
			&.active{
				.iconfont{
					color:@color-theme;
				}
			}
			.iconfont{
				font-size: @font-size-medium-x;
			}
		}
		.button{
			padding:0.15rem 0.5rem;
			border-radius: 0.2rem;
			background-color: @color-theme;
			color:@color-white;
		}
	}

}
</style>