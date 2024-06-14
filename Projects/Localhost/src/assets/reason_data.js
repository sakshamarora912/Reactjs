import s_1 from './images/shared-01.jpg'
import s_2 from './images/shared-02.jpg'
import s_3 from './images/shared-03.jpg'
import s_4 from './images/shared-04.jpg'
import s_5 from './images/shared-05.jpg'
import s_6 from './images/shared-06.jpg'
import s_7 from './images/shared-07.jpg'
import s_8 from './images/shared-08.jpg'
import s_9 from './images/shared-09.jpg'
import s_10 from './images/shared-10.jpg'

import c_1 from './images/cloud-01.webp'
import c_2 from './images/cloud-02.webp'
import c_3 from './images/cloud-03.webp'
import c_4 from './images/cloud-04.webp'
import c_5 from './images/cloud-05.webp'
import c_6 from './images/cloud-06.webp'
import c_7 from './images/cloud-07.webp'
import c_8 from './images/cloud-08.webp'
import c_9 from './images/cloud-09.webp'
import c_10 from './images/cloud-10.webp'

import v_1 from './images/vps-01.webp'
import v_2 from './images/vps-02.webp'
import v_3 from './images/vps-03.webp'
import v_4 from './images/vps-04.webp'
import v_5 from './images/vps-05.webp'
import v_6 from './images/vps-06.webp'
import v_7 from './images/vps-07.webp'
import v_8 from './images/vps-08.webp'
import v_9 from './images/vps-09.webp'
import v_10 from './images/vps-10.webp'

let reason=[
    {plan:"Shared",img:s_1,tag:"Lightning Fast Websites",about:"Super-quick page loads",},
    {plan:"Shared",img:s_2,tag:"Free cPanel",about:"Linux Web Hosting Management simplified",},
    {plan:"Shared",img:s_3,tag:"SSL Certificate",about:"SSL certificate installation made easy",},
    {plan:"Shared",img:s_4,tag:"SNI enabled",about:"Your websites are our priority, we are here to serve you",},
    {plan:"Shared",img:s_5,tag:"Easy 1-click-installer",about:"400+ ready-to-install apps",},
    {plan:"Shared",img:s_6,tag:"Enhanced Security",about:"CloudFlare Protection for your business from threats",},
    {plan:"Shared",img:s_7,tag:"Easy Upgrades",about:"Increase resources as per your need",},
    {plan:"Shared",img:s_8,tag:"Secure Shell Access",about:"Access your Linux Shared Hosting over an encrypted channel",},
    {plan:"Shared",img:s_9,tag:"PHP, MySQL, Ruby & more",about:"Supports leading Server Scripting languages & frameworks",},
    {plan:"Shared",img:s_10,tag:"Free Website Migrations",about:"Move your web hosting to us, with help from our experts",},

    {plan:"Cloud",img:c_1,tag:"Fully Managed Cloud Hosting",about:"We free you up to focus on your business!",},
    {plan:"Cloud",img:c_2,tag:"1-click CPU / RAM upgrade",about:"Ramp up performance on demand",},
    {plan:"Cloud",img:c_3,tag:"Cloud Simplified",about:"Secure, powerful and easily scalable",},
    {plan:"Cloud",img:c_4,tag:"Upto 10x Faster",about:"Your pages will load with blazing fast speed",},
    {plan:"Cloud",img:c_5,tag:"SSD Storage",about:"Fast, reliable and efficient storage",},
    {plan:"Cloud",img:c_6,tag:"50+ Applications",about:"1-click Installs for WordPress, Joomla & more",},
    {plan:"Cloud",img:c_7,tag:"30-Day Money-back",about:"Not happy? Get a refund, no questions asked",},
    {plan:"Cloud",img:c_8,tag:"24x7 Support",about:"Award-winning Cloud Hosting support from pros",},
    {plan:"Cloud",img:c_9,tag:"99.9% Uptime",about:"Top-tier DC, redundant ISP links and Neustar's DDoS protection",},
    {plan:"Cloud",img:c_10,tag:"Free Data Migration",about:"Transfer your hosting to our cloud, effortlessly",},

    {plan:"VPS",img:v_1,tag:"SSD storage",about:"Solid State Drives to boost performance",},
    {plan:"VPS",img:v_2,tag:"Easy upgrade",about:"Increase your resources as per your needs",},
    {plan:"VPS",img:v_3,tag:"Multiple Linux Distros",about:"Choose from various operating systems",},
    {plan:"VPS",img:v_4,tag:"System Admin Support",about:"24/7 Expert Support for your VPS Servers",},
    {plan:"VPS",img:v_5,tag:"Guaranteed Resources",about:"All resources are your own",},
    {plan:"VPS",img:v_6,tag:"Full Root Access",about:"Complete Customisation to fit your hosting needs",},
    {plan:"VPS",img:v_7,tag:"Quick Provisioning",about:"Get fully operational VM within minutes",},
    {plan:"VPS",img:v_8,tag:"DDos Protection",about:"Unlimited Email accounts",},
    {plan:"VPS",img:v_9,tag:"Intuitive Dashboard",about:"Easier server management with our in-house panel",},
    {plan:"VPS",img:v_10,tag:"30 day Money Back",about:"100% risk-free money back guarantee",},

    {plan:"dedicated",img:v_1,tag:"100% server control",about:"No limitations. You'll have the full system resources at your disposal.",},
    {plan:"dedicated",img:v_1,tag:"HDD or SDD hard drives",about:"Choose a hard drive based on your site's needs: space (HDD) or speed (SDD).",},
    {plan:"dedicated",img:v_1,tag:"DDoSprotection",about:"Data-center-level protection keeps your resources safe in case of an attack",},
    {plan:"dedicated",img:v_1,tag:"IP-based firewall",about:"Keep your server safe and performing optimally no matter who or what strikes.",},
    {plan:"dedicated",img:v_1,tag:"Flexible controls",about:"Get cPanel and WHM on Linux or Plesk and Webmatrix on Windows. Your choice.",},
    {plan:"dedicated",img:v_1,tag:"Advanced tech",about:"All dedicated servers are hosted in a US-based, Tier 3 data center.",},
    {plan:"dedicated",img:v_1,tag:"Full control",about:"As promised, you'll call all the shots on your server configuration.",},
    {plan:"dedicated",img:v_1,tag:"Network guarantee",about:"We make sure your site is always up and running so your business can be too.",},
    {plan:"dedicated",img:v_1,tag:"24/7/365 support",about:"We work when you work. Whenever that happens to be.",},
    {plan:"dedicated",img:v_1,tag:"Full or semi-managed",about:"We're up to the task of fully managing your server. Or you can take it on.",},

    {plan:"",img:v_1,tag:"Free Reseller Hosting Account",about:"Resell Domains, Hosting, Email & more",},
    {plan:"",img:v_1,tag:"30-Day Money Back",about:"Unhappy with your purchase? Full refund",},
    {plan:"",img:v_1,tag:"Free WHM & cPanel",about:"Create & sell flexible web hosting plans",},
    {plan:"",img:v_1,tag:"On-call Support",about:"24x7 Expert Support for Hosting Resellers",},
    {plan:"",img:v_1,tag:"Softaculous Installer",about:"400+ Ready-to-install apps and more",},
    {plan:"",img:v_1,tag:"Protected By CloudFlare",about:"High Performance CDN & Network Security",},
    {plan:"",img:v_1,tag:"Performance optimised",about:"Powerful Hardware & Meticulous Design",},
    {plan:"",img:v_1,tag:"Basic Email Included",about:"Unlimited Email accounts",},
    {plan:"",img:v_1,tag:"Steamless upgrages",about:"Increase Resources as you scale",},
    {plan:"",img:v_1,tag:"Free Hosting Migration",about:"Transfer Websites from your current",},

]
export default reason;