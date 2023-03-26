import { JSXInternal } from 'preact/src/jsx'
import clx from 'classnames'
import $ from './index.module.scss'
import { Link } from 'preact-router'

export const DefaultLayout = ({
	children,
}: {
	children: JSXInternal.Element
}) => {
	return (
		<div class={$.app}>
			<div class={$.fixed_header}>
				<div class={clx('container', $.banner)}>
					<span>
						Talkdesk Appoints William Welch as President and Chief Operating
						Officer. <span class={$.hightlight}>Learn More</span>
					</span>
					<span class="material-symbols-rounded">close</span>
				</div>
				<div class={clx('container', $.header)}>
					<img
						class={$.header__logo}
						src="https://prd-cdn-talkdesk.talkdesk.com/cdn-assets/latest/talkdesk/brand/main_brand/logo/talkdesk_logo_purple.svg"
						alt="Talkdesk logo"
						height="20"
						width="124"
					></img>
					<nav class={$.header__nav}>
						<Link>PRODUCTS</Link>
						<Link>SOLUTIONS</Link>
						<Link>CUSTOMERS</Link>
						<Link>SUPPORT</Link>
						<Link>RESOURCES</Link>
						<Link>ABOUT</Link>
						<div class={clx('container', $.header__dropdown)}>
							<div>
								<div class={$.header__dropdown_title}>BY INDUSTRY</div>
								<ul>
									<li>Overview of Industries</li>
									<li>Communications, Media & Internet</li>
									<li>Financial Services & Insurance</li>
									<li>Government & Education</li>
									<li>Healthcare & Life Sciences</li>
									<li>Retail & Consumer Goods</li>
									<li>Transportation & Hospitality</li>
								</ul>
								<div class={$.header__dropdown_title}>OTHER TYPES</div>
								<ul>
									<li>By Business Type </li>
									<li>By Solution Type </li>
									<li>By Role</li>
								</ul>
							</div>
							<div>
								<div class={$.header__dropdown_title}>BY INDUSTRY</div>
								<ul>
									<li>Overview of Industries</li>
									<li>Communications, Media & Internet</li>
									<li>Financial Services & Insurance</li>
									<li>Government & Education</li>
									<li>Healthcare & Life Sciences</li>
									<li>Retail & Consumer Goods</li>
									<li>Transportation & Hospitality</li>
								</ul>
								<div class={$.header__dropdown_title}>OTHER TYPES</div>
								<ul>
									<li>By Business Type </li>
									<li>By Solution Type </li>
									<li>By Role</li>
								</ul>
							</div>
							<div class={$.header__dropdown_right}>
								<img
									sizes="(max-width: 767px) 690px, (max-width: 1179px) 260px, (max-width: 1919px) 340px, 510px"
									alt="Customer Engagement Omnichannel"
									src="https://infra-cloudfront-talkdeskcom.svc.talkdeskapp.com/talkdesk_com/customer-engagement-omnichannel-435x290.png"
									srcset="https://infra-cloudfront-talkdeskcom.svc.talkdeskapp.com/talkdesk_com/customer-engagement-omnichannel-435x290.png 435w, https://infra-cloudfront-talkdeskcom.svc.talkdeskapp.com/talkdesk_com/customer-engagement-omnichannel-870x580.png 870w, https://infra-cloudfront-talkdeskcom.svc.talkdeskapp.com/talkdesk_com/customer-engagement-omnichannel-1740x1160.png 1740w"
								/>
								Customer Experience Analytics
							</div>
						</div>
					</nav>
					<div class={$.header__right}>
						<span class="material-symbols-rounded">account_circle</span>
						<span class="material-symbols-rounded">search</span>
						<span>
							EN
							<span class="material-symbols-rounded">expand_more</span>
						</span>
					</div>
				</div>
			</div>
			<main class={$.main}>{children}</main>
			<footer class={$.footer}>Footer</footer>
		</div>
	)
}
