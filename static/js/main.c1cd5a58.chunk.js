(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){e.exports={postField:"Posts_postField__33u5B",postsBlock:"Posts_postsBlock__2AH0W"}},113:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(35),r=n(5),s=n(7),c={dialogs:[{id:1,name:"Ivan"},{id:2,name:"Dima"},{id:3,name:"Max"},{id:4,name:"Vova"},{id:5,name:"Andrew"}],messages:[{id:1,message:"Hi"},{id:2,message:"What`s Up"},{id:3,message:"How are you"},{id:4,message:"Hello"},{id:5,message:"Yo"},{id:6,message:"Hi"},{id:7,message:"What`s Up"},{id:8,message:"How are you"},{id:9,message:"Hello"},{id:10,message:"Yo"}]},i=function(e){return{type:s.b.SEND_MESSAGE,payload:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.b.SEND_MESSAGE:var n={id:e.messages.length+1,message:t.payload};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},12:function(e,t,n){e.exports={head:"ProfileInfo_head__3Q3FT",wrapper:"ProfileInfo_wrapper__3boPV",mediaBlock:"ProfileInfo_mediaBlock__KKrQe",photosBlock:"ProfileInfo_photosBlock__3yjLZ",statusBlock:"ProfileInfo_statusBlock__3HLvc",bubble1:"ProfileInfo_bubble1__2ZOgi",bubble2:"ProfileInfo_bubble2__2ACT-",statusDescr:"ProfileInfo_statusDescr__1y0wO",changeStatusBtn:"ProfileInfo_changeStatusBtn__2ECzS",cancelStatusBtn:"ProfileInfo_cancelStatusBtn__2uT7S",infoBlock:"ProfileInfo_infoBlock__Yi3uO",jobBlock:"ProfileInfo_jobBlock__3qX4B",openJobStatus:"ProfileInfo_openJobStatus__2IBJk",jobDescr:"ProfileInfo_jobDescr__2NnqD",circleIndicatorActive:"ProfileInfo_circleIndicatorActive__3GUQ7",circleIndicatorNot:"ProfileInfo_circleIndicatorNot__3OngS",userInfoBlock:"ProfileInfo_userInfoBlock__2F7C3",aboutMe:"ProfileInfo_aboutMe__1mww3",aboutMeTitle:"ProfileInfo_aboutMeTitle__3NHae",nameBlock:"ProfileInfo_nameBlock__3H98C",linkBlock:"ProfileInfo_linkBlock__2I8GX"}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(5),r=n(73),s=(n(1),n(0)),c=function(e){var t=e.input,n=e.meta,c=n.touched,i=n.error,o=Object(r.a)(e,["input","meta"]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("textarea",Object(a.a)(Object(a.a)({},t),o))}),c&&i&&Object(s.jsx)("span",{style:{color:"crimson"},children:i})]})}},135:function(e,t,n){"use strict";var a=n(5),r=n(28),s=n(29),c=n(31),i=n(30),o=n(1),u=n.n(o),l=n(11),d=n(14),p=n(0),j=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(a.a)({},this.props)):Object(p.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(d.b)(j)(t)}},173:function(e,t,n){},174:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(140).create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"a2f60dbc-59e4-4c2c-b4c3-fa8b69b0306e"}}),r={getUsers:function(e,t){return a.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},setFollow:function(e){return a.post("/follow/".concat(e),null).then((function(e){return e.data}))},setUnfollow:function(e){return a.delete("/follow/".concat(e)).then((function(e){return e.data}))},getPage:function(e,t){return a.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},s={getProfile:function(e){return a.get("/profile/".concat(e)).then((function(e){return e.data}))},getStatusProfile:function(e){return a.get("/profile/status/".concat(e)).then((function(e){return e.data}))},setStatus:function(e){return a.put("/profile/status",{status:e})}},c={checkAuth:function(){return a.get("/auth/me").then((function(e){return e.data}))},signOut:function(){return a.delete("/auth/login").then((function(e){return e.data}))},signIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))}}},24:function(e,t,n){e.exports={userInfoWrapper:"Users_userInfoWrapper__3S4n9",userSubscribeBtn:"Users_userSubscribeBtn__22gv2",followBtn:"Users_followBtn__1J35y",unFollowBtn:"Users_unFollowBtn__Oh9oB",userInfoContainer:"Users_userInfoContainer__1A0ol",infoWrapperImg:"Users_infoWrapperImg__2vdnU",info:"Users_info__2Jz7e",location:"Users_location__1uMJl"}},297:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(69),c=n.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(173);var i=n(28),o=n(29),u=n(31),l=n(30),d=(n(174),n(11)),p=n(16),j=n(14),b=n(8),f=n(5),O=n(7),h={initialized:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.c.SET_INITIALIZED:return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}},m=n(70),g=n(35),v={profile:[],status:"",posts:[{id:1,message:"Hi, how are you",likeCount:50},{id:2,message:"It`s my first post",likeCount:40},{id:3,message:"Hi, how are you",likeCount:30},{id:4,message:"How are you",likeCount:20},{id:5,message:"Hi",likeCount:10}]},x=function(e){return{type:O.d.GET_STATUS,payload:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.d.ADD_POST:var n={id:e.posts.length+1,message:t.payload,likeCount:0};return Object(f.a)(Object(f.a)({},e),{},{posts:[].concat(Object(g.a)(e.posts),[n])});case O.d.DELETE_POST:return Object(f.a)(Object(f.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});case O.d.SET_PROFILE_DATA:return Object(f.a)(Object(f.a)({},e),{},{profile:t.payload});case O.d.GET_STATUS:return Object(f.a)(Object(f.a)({},e),{},{status:t.payload});default:return e}},k=n(113),y={friendList:[{id:1,name:"Ivan"},{id:2,name:"Dima"},{id:3,name:"Max"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return e},T=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(f.a)(Object(f.a)({},e),a):e}))},w={users:[],pageSize:5,totalCount:400,currentPage:1,isLoading:!1,isDisabledBtn:[]},I=function(e){return{type:O.e.FOLLOW,payload:e}},P=function(e){return{type:O.e.UNFOLLOW,payload:e}},C=function(e){return{type:O.e.SET_USERS,payload:e}},E=function(e){return{type:O.e.SET_PAGE,payload:e}},A=function(e){return{type:O.e.IS_FETCHING,payload:e}},B=function(e,t){return{type:O.e.IS_DISABLED_BTN,payload:e,userId:t}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.e.FOLLOW:return Object(f.a)(Object(f.a)({},e),{},{users:T(e.users,t.payload,"id",{followed:!0})});case O.e.UNFOLLOW:return Object(f.a)(Object(f.a)({},e),{},{users:T(e.users,t.payload,"id",{followed:!1})});case O.e.SET_USERS:return Object(f.a)(Object(f.a)({},e),{},{users:t.payload});case O.e.SET_PAGE:return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.payload});case O.e.SET_TOTAL_COUNT:return Object(f.a)(Object(f.a)({},e),{},{totalCount:t.payload});case O.e.IS_FETCHING:return Object(f.a)(Object(f.a)({},e),{},{isLoading:t.payload});case O.e.IS_DISABLED_BTN:return Object(f.a)(Object(f.a)({},e),{},{isDisabledBtn:t.payload?[].concat(Object(g.a)(e.isDisabledBtn),[t.userId]):e.isDisabledBtn.filter((function(e){return e!==t.userId}))});default:return e}},L=n(55),U=n(141),F=n(138),H=Object(b.c)({app:_,profilePage:S,dialogPage:k.a,userPage:D,sidebar:N,auth:L.a,form:F.a}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,W=Object(b.e)(H,M(Object(b.a)(U.a))),z=n(48),G=n.n(z),R=n(143),J=n.n(R),V=n(73),Z=n(24),Q=n.n(Z),X=n(0),K=function(e){var t=e.user,n=Object(V.a)(e,["user"]);return Object(X.jsxs)("div",{className:Q.a.userInfoWrapper,children:[Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:Object(X.jsx)(p.b,{to:"/profile/"+t.id,children:Object(X.jsx)("img",{className:Q.a.infoWrapperImg,src:t.photos.small||"https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg",alt:"avatar"})})}),Object(X.jsx)("div",{children:t.followed?Object(X.jsx)("button",{className:"".concat(Q.a.unFollowBtn," ").concat(Q.a.userSubscribeBtn),onClick:function(){return n.setUnfollowHandler(t.id)},disabled:n.isDisabled.some((function(e){return e===t.id})),children:"Unfollow"}):Object(X.jsx)("button",{className:"".concat(Q.a.followBtn," ").concat(Q.a.userSubscribeBtn),onClick:function(){return n.setFollowHandler(t.id)},disabled:n.isDisabled.some((function(e){return e===t.id})),children:"Follow"})})]}),Object(X.jsxs)("div",{className:Q.a.userInfoContainer,children:[Object(X.jsxs)("div",{children:[Object(X.jsxs)("span",{className:Q.a.info,children:["User name:",Object(X.jsx)("p",{children:t.name?t.name:"Not indicated"})]}),Object(X.jsxs)("span",{className:Q.a.info,children:["User status:",Object(X.jsx)("p",{children:t.status?t.status:"Not indicated"})]})]}),Object(X.jsxs)("div",{children:[Object(X.jsxs)("span",{className:Q.a.location,children:["Country:",Object(X.jsx)("p",{children:t.location?t.location.country:"Not indicated"})]}),Object(X.jsxs)("span",{className:Q.a.location,children:["City:",Object(X.jsx)("p",{children:t.location?t.location.city:"Not indicated"})]})]})]})]})},Y=n(99),q=n.n(Y),$=n.p+"static/media/35.64407753.svg",ee=function(){return Object(X.jsx)("div",{className:q.a.userLoading,children:Object(X.jsx)("div",{className:q.a.spinner,children:Object(X.jsx)("img",{src:$,alt:"spinner"})})})},te=function(e){var t=Math.ceil(e.totalCount/e.pageSize),n=e.usersPage.map((function(t){return Object(X.jsx)(K,{user:t,setUnfollowHandler:function(t){return e.setUnfollowHandler(t)},setFollowHandler:function(t){return e.setFollowHandler(t)},isDisabled:e.isDisabled},t.id)}));return Object(X.jsxs)("div",{className:G.a.usersContainer,children:[Object(X.jsx)("h2",{children:"Users"}),Object(X.jsx)("div",{className:G.a.usersField,children:Object(X.jsxs)("div",{className:G.a.usersItems,children:[Object(X.jsx)(J.a,{previousLabel:"<",nextLabel:">",breakLabel:"~",pageCount:t,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(t){return e.selectPage(t.selected+1)},containerClassName:G.a.reactPaginate,activeClassName:G.a.reactPaginationBtn}),e.isLoading?Object(X.jsx)(ee,{}):Object(X.jsx)("div",{children:n})]})})]})},ne=n(13),ae=n.n(ne),re=n(19),se=n(22),ce=function(){var e=Object(re.a)(ae.a.mark((function e(t,n,a,r){var s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0,n)),e.next=3,a(n);case 3:0===(s=e.sent).resultCode?(t(r(n)),t(B(!1,n))):console.log("Error AXIOS",s.messages);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ie=n(75),oe=function(e){return e.userPage.users},ue=function(e){return e.userPage.pageSize},le=function(e){return e.userPage.totalCount},de=function(e){return e.userPage.currentPage},pe=function(e){return e.userPage.isLoading},je=function(e){return e.userPage.isDisabledBtn},be=(Object(ie.a)([],(function(){})),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).setFollowHandler=function(t){e.props.setFollowThunkCreator(t)},e.setUnfollowHandler=function(t){e.props.setUnfollowThunkCreator(t)},e.selectPage=function(t){var n=e.props.pageSize;e.props.getPageThunkCreator(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsersThunkCreator(t,n)}},{key:"render",value:function(){var e=this;return Object(X.jsx)(te,{usersPage:this.props.usersPage,totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,isLoading:this.props.isLoading,isDisabled:this.props.isDisabledBtn,selectPage:function(t){return e.selectPage(t)},setFollowHandler:function(t){return e.setFollowHandler(t)},setUnfollowHandler:function(t){return e.setUnfollowHandler(t)}})}}]),n}(r.a.Component)),fe=Object(b.d)(Object(j.b)((function(e){return{usersPage:oe(e),pageSize:ue(e),totalCount:le(e),currentPage:de(e),isLoading:pe(e),isDisabledBtn:je(e)}}),{getUsersThunkCreator:function(e,t){return function(){var n=Object(re.a)(ae.a.mark((function n(a){var r;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(A(!0)),n.next=3,se.c.getUsers(e,t);case 3:r=n.sent,a(C(r.items)),a((s=r.totalCount,{type:O.e.SET_TOTAL_COUNT,payload:s})),a(A(!1));case 7:case"end":return n.stop()}var s}),n)})));return function(e){return n.apply(this,arguments)}}()},getPageThunkCreator:function(e,t){return function(){var n=Object(re.a)(ae.a.mark((function n(a){var r;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(E(e)),a(A(!0)),n.next=4,se.c.getPage(e,t);case 4:r=n.sent,a(C(r.items)),a(A(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setFollowThunkCreator:function(e){return function(){var t=Object(re.a)(ae.a.mark((function t(n){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(n,e,se.c.setFollow,I);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUnfollowThunkCreator:function(e){return function(){var t=Object(re.a)(ae.a.mark((function t(n){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(n,e,se.c.setUnfollow,P);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(be),Oe=n(76),he=n.n(Oe),_e=n(12),me=n.n(_e),ge=n(103),ve=function(e){var t=Object(a.useState)(!1),n=Object(ge.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(e.status),i=Object(ge.a)(c,2),o=i[0],u=i[1];return Object(a.useEffect)((function(){u(e.status)}),[e.status]),Object(X.jsxs)("div",{className:me.a.statusBlock,children:[r?Object(X.jsxs)("div",{className:me.a.statusDescr,children:[Object(X.jsx)("div",{children:Object(X.jsx)("input",{onChange:function(e){return u(e.target.value)},type:"text",autoFocus:"true",placeholder:"Change status",value:o})}),Object(X.jsxs)("div",{children:[Object(X.jsx)("button",{type:"submit",className:me.a.changeStatusBtn,onClick:function(){s(!1),e.updateStatus(o)},children:"Change"}),Object(X.jsx)("button",{type:"button",className:me.a.cancelStatusBtn,onClick:function(){return s(!1)},children:"Cancel"})]})]}):Object(X.jsx)("div",{className:me.a.statusDescr,onClick:function(){return s(!0)},children:Object(X.jsx)("p",{children:e.status||"Not indicated"})}),Object(X.jsx)("div",{className:me.a.bubble2}),Object(X.jsx)("div",{className:me.a.bubble1})]})},xe=function(e){return Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{className:me.a.head}),Object(X.jsxs)("div",{className:me.a.wrapper,children:[Object(X.jsxs)("div",{className:me.a.mediaBlock,children:[Object(X.jsx)("div",{className:me.a.photosBlock,children:e.profile.photos?Object(X.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:"https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg",alt:"ava"}):Object(X.jsx)(ee,{})}),Object(X.jsx)(ve,{status:e.status,updateStatus:e.updateStatus})]}),Object(X.jsxs)("div",{className:me.a.infoBlock,children:[Object(X.jsx)("div",{className:me.a.nameBlock,children:Object(X.jsx)("h4",{children:e.profile.fullName})}),Object(X.jsxs)("div",{className:me.a.userInfoBlock,children:[Object(X.jsxs)("div",{className:me.a.aboutMe,children:[Object(X.jsx)("p",{className:me.a.aboutMeTitle,children:"About me:"}),Object(X.jsx)("p",{children:e.profile.aboutMe?e.profile.aboutMe:"Not indicated"})]}),Object(X.jsxs)("div",{className:me.a.linkBlock,children:[Object(X.jsx)("a",{rel:"noreferrer",href:e.contacts?e.contacts.facebook:"#",target:"_blank",children:"Facebook"}),Object(X.jsx)("a",{rel:"noreferrer",href:e.contacts?e.contacts.website:"#",target:"_blank",children:"Website"}),Object(X.jsx)("a",{rel:"noreferrer",href:e.contacts?e.contacts.vk:"#",target:"_blank",children:"VK"}),Object(X.jsx)("a",{rel:"noreferrer",href:e.contacts?e.contacts.twitter:"#",target:"_blank",children:"Twitter"}),Object(X.jsx)("a",{rel:"noreferrer",href:e.contacts?e.contacts.instagram:"#",target:"_blank",children:"Instagram"}),Object(X.jsx)("a",{rel:"noreferrer",href:e.contacts?e.contacts.github:"#",target:"_blank",children:"Github"}),Object(X.jsx)("a",{rel:"noreferrer",href:e.contacts?e.contacts.mainLink:"#",target:"_blank",children:"mainLink"})]})]}),Object(X.jsxs)("div",{className:me.a.jobBlock,children:[e.profile.lookingForAJob?Object(X.jsx)("div",{className:me.a.jobDescr,children:Object(X.jsx)("div",{children:e.profile.lookingForAJobDescription})}):Object(X.jsx)("div",{}),Object(X.jsxs)("div",{className:me.a.openJobStatus,children:[Object(X.jsxs)("p",{children:["Open for job :",Object(X.jsx)("span",{children:"\xa0\xa0"})]}),e.profile.lookingForAJob?Object(X.jsx)("div",{className:me.a.circleIndicatorActive}):Object(X.jsx)("div",{className:me.a.circleIndicatorNot})]})]})]})]})]})},Se=n(100),ke=n.n(Se),ye=n(136),Ne=n(137),Te=n(124),we=n(71),Ie=Object(we.a)(200),Pe=Object(we.b)(1),Ce=Object(Ne.a)({form:"post"})((function(e){var t=e.handleSubmit,n=e.reset;return Object(X.jsxs)("form",{onSubmit:t,children:[Object(X.jsx)("div",{children:Object(X.jsx)(ye.a,{component:Te.a,name:"body",type:"text",placeholder:"Add new post",validate:[we.c,Ie,Pe]})}),Object(X.jsx)("div",{children:Object(X.jsx)("button",{onClick:function(){return setTimeout(n,0)},children:"Send message"})})]})})),Ee=n(37),Ae=n.n(Ee),Be=function(e){return Object(X.jsxs)("div",{className:Ae.a.item,children:[Object(X.jsx)("div",{className:Ae.a.ava_wrapper,children:Object(X.jsx)("img",{className:Ae.a.ava_item,src:"https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg",alt:"avatar"})}),Object(X.jsx)("div",{className:Ae.a.body_wrapper,children:Object(X.jsx)("p",{className:Ae.a.post_body_item,children:e.message})}),Object(X.jsx)("div",{className:Ae.a.like_wrapper,children:Object(X.jsxs)("div",{className:Ae.a.like_item,children:["likes ",e.likeCount]})})]})},De=r.a.memo((function(e){var t=Object(g.a)(e.posts).reverse().map((function(e){return Object(X.jsx)(Be,{message:e.message,likeCount:e.likeCount},e.id)}));return Object(X.jsxs)("div",{className:ke.a.postField,children:[Object(X.jsx)("h3",{children:"My posts"}),Object(X.jsx)("div",{children:Object(X.jsx)(Ce,{onSubmit:function(t){e.createPost(t.body)}})}),Object(X.jsx)("div",{className:ke.a.postsBlock,children:t})]})})),Le=Object(j.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{createPost:function(t){e(function(e){return{type:O.d.ADD_POST,payload:e}}(t))}}}))(De),Ue=function(e){return Object(X.jsxs)("div",{className:he.a.profileContainer,children:[Object(X.jsx)(xe,{profile:e.profile,contacts:e.contacts,status:e.status,updateStatus:e.updateStatus}),Object(X.jsx)(Le,{})]})},Fe=n(135),He=function(e){return e.profilePage.profile},Me=function(e){return e.profilePage.status},We=function(e){return e.auth.userId},ze=function(e){return e.auth.isAuth},Ge=(Object(ie.a)([],(function(){})),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserID),this.props.getProfileThunkCreator(e)}},{key:"render",value:function(){return Object(X.jsx)("div",{className:he.a.profileContainer,children:Object(X.jsx)(Ue,Object(f.a)(Object(f.a)({},this.props),{},{contacts:this.props.profile.contacts,updateStatus:this.props.setStatusThunkCreator}))})}}]),n}(r.a.Component)),Re=Object(b.d)(Object(j.b)((function(e){return{profile:He(e),status:Me(e),authUserID:We(e),isAuth:ze(e)}}),{getProfileThunkCreator:function(e){return function(){var t=Object(re.a)(ae.a.mark((function t(n){var a,r;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se.b.getProfile(e);case 2:return a=t.sent,n((s=a,{type:O.d.SET_PROFILE_DATA,payload:s})),t.next=6,se.b.getStatusProfile(e);case 6:r=t.sent,n(x(r));case 8:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},setStatusThunkCreator:function(e){return function(){var t=Object(re.a)(ae.a.mark((function t(n){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se.b.setStatus(e);case 2:0===t.sent.data.resultCode&&n(x(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Fe.a,d.f)(Ge),Je=n(42),Ve=n.n(Je),Ze=n.p+"static/media/logo.30954a56.svg",Qe=function(e){return Object(X.jsxs)("div",{className:Ve.a.headerWrapper,children:[Object(X.jsxs)("header",{className:Ve.a.mediaBlock,children:[Object(X.jsx)("img",{src:Ze,alt:"logo"}),Object(X.jsx)("h2",{children:"Social App"})]}),Object(X.jsxs)("div",{className:Ve.a.loginBlock,children:[Object(X.jsx)(p.b,{to:"/profile",children:e.isAuth?Object(X.jsx)("div",{className:Ve.a.userName,children:e.login}):null}),e.isAuth?Object(X.jsx)("button",{className:Ve.a.authBtn,onClick:e.signOut,children:"LOGOUT"}):Object(X.jsx)(p.b,{to:"/login",children:Object(X.jsx)("button",{className:Ve.a.authBtn,children:"LOGIN"})})]})]})},Xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(X.jsx)(Qe,Object(f.a)(Object(f.a)({},this.props),{},{signOut:this.props.signOutThunkCreator}))}}]),n}(r.a.Component),Ke=Object(b.d)(Object(j.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{signOutThunkCreator:m.c}))(Xe),Ye=n(38),qe=n.n(Ye),$e=n(78),et=n.n($e),tt=function(e){return Object(X.jsxs)("div",{className:et.a.item,children:[Object(X.jsx)("img",{src:"https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg",alt:"avatar"}),Object(X.jsx)("p",{children:e.name})]})},nt=function(e){var t=e.sidebar.friendList.map((function(e){return Object(X.jsx)(tt,{name:e.name},e.id)}));return Object(X.jsx)("div",{className:et.a.container,children:t})},at=Object(j.b)((function(e){return{sidebar:e.sidebar}}))(nt),rt=function(e){return Object(X.jsxs)("nav",{className:qe.a.nav,children:[Object(X.jsx)("div",{className:qe.a.item,children:Object(X.jsx)(p.b,{to:"/profile",children:"Profile"})}),Object(X.jsx)("div",{className:qe.a.item,children:Object(X.jsx)(p.b,{to:"/dialogs",children:"Messages"})}),Object(X.jsx)("div",{className:qe.a.item,children:Object(X.jsx)(p.b,{to:"/users",children:"Users"})}),Object(X.jsx)("div",{className:qe.a.item,children:Object(X.jsx)(p.b,{to:"/news",children:"News"})}),Object(X.jsx)("div",{className:qe.a.item,children:Object(X.jsx)(p.b,{to:"/music",children:"Music"})}),Object(X.jsx)("div",{className:qe.a.item,children:Object(X.jsx)(p.b,{to:"/setting",children:"Setting"})}),Object(X.jsx)(at,{})]})},st=function(e){return function(t){return Object(X.jsx)(a.Suspense,{fallback:Object(X.jsx)(ee,{}),children:Object(X.jsx)(e,Object(f.a)({},t))})}},ct=r.a.lazy((function(){return n.e(3).then(n.bind(null,308))})),it=r.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),ot=r.a.lazy((function(){return n.e(6).then(n.bind(null,304))})),ut=r.a.lazy((function(){return n.e(5).then(n.bind(null,305))})),lt=r.a.lazy((function(){return n.e(7).then(n.bind(null,306))})),dt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.InitializeApp()}},{key:"render",value:function(){return this.props.init?Object(X.jsxs)("div",{className:"app-wrapper",children:[Object(X.jsx)(Ke,{}),Object(X.jsx)(rt,{}),Object(X.jsxs)("div",{className:"app-wrapper-content",children:[Object(X.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(X.jsx)(Re,{})}}),Object(X.jsx)(d.b,{path:"/users",render:function(){return Object(X.jsx)(fe,{})}}),Object(X.jsx)(d.b,{path:"/login",render:st(ct)}),Object(X.jsx)(d.b,{path:"/dialogs",render:st(it)}),Object(X.jsx)(d.b,{path:"/news",render:st(ot)}),Object(X.jsx)(d.b,{path:"/music",render:st(ut)}),Object(X.jsx)(d.b,{path:"/setting",render:st(lt)})]})]}):Object(X.jsx)(ee,{})}}]),n}(r.a.Component),pt=Object(b.d)(Object(j.b)((function(e){return{init:e.app.initialized}}),{InitializeApp:function(){return function(e){e(Object(m.a)()).then((function(){e({type:O.c.SET_INITIALIZED})}))}}}),d.f)(dt),jt=function(){return Object(X.jsx)(p.a,{children:Object(X.jsx)(j.a,{store:W,children:Object(X.jsx)(pt,{})})})};c.a.render(Object(X.jsx)(jt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){e.exports={item:"Post_item__CDI8g",ava_wrapper:"Post_ava_wrapper__2wRuV",ava_item:"Post_ava_item__1V1Sk",body_wrapper:"Post_body_wrapper__2qi5o",post_body_item:"Post_post_body_item__3AFMu",like_wrapper:"Post_like_wrapper__3OBgG",like_item:"Post_like_item__1bLVO"}},38:function(e,t,n){e.exports={nav:"NavBar_nav__1FWUI",item:"NavBar_item__2RAQQ"}},42:function(e,t,n){e.exports={headerWrapper:"Header_headerWrapper__1oKyh",mediaBlock:"Header_mediaBlock__3QNG4",loginBlock:"Header_loginBlock__6mma5",userName:"Header_userName__2h_yj",authBtn:"Header_authBtn__1ELyC"}},48:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__1OedU",usersField:"Users_usersField__13PIe",usersItems:"Users_usersItems__3D9Hj",reactPaginate:"Users_reactPaginate__2Tm98",reactPaginationBtn:"Users_reactPaginationBtn__3fV12",pagination:"Users_pagination__2Njh9"}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(5),r=n(7),s={userId:null,email:null,login:null,isAuth:!1,isLoading:!1},c=function(e,t,n,a){return{type:r.a.SET_AUTH_DATA,payload:{userId:e,email:t,login:n,isAuth:a}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a.SET_AUTH_DATA:return Object(a.a)(Object(a.a)({},e),t.payload);default:return e}}},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var a={SEND_MESSAGE:"my-app/dialogs/SEND_MESSAGE"},r={FOLLOW:"my-app/users/FOLLOW",UNFOLLOW:"my-app/users/UNFOLLOW",SET_USERS:"my-app/users/SET_USERS",SET_PAGE:"my-app/users/SET_PAGE",SET_TOTAL_COUNT:"my-app/users/SET_TOTAL_COUNT",IS_FETCHING:"my-app/users/IS_FETCHING",IS_DISABLED_BTN:"my-app/users/IS_DISABLED_BTN"},s={ADD_POST:"my-app/profile/ADD_POST",DELETE_POST:"my-app/profile/DELETE_POST",SET_PROFILE_DATA:"my-app/profile/SET_PROFILE_DATA",GET_STATUS:"my-app/profile/GET_STATUS"},c={SET_AUTH_DATA:"my-app/auth/SET_AUTH_DATA"},i={SET_INITIALIZED:"my-app/init/SET_INITIALIZED"}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(13),r=n.n(a),s=n(19),c=n(22),i=n(55),o=n(59),u=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s,o,u,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.checkAuth();case 2:0===(n=e.sent).resultCode&&(a=n.data,s=a.id,o=a.login,u=a.email,l=a.isAuth,d=void 0===l||l,t(Object(i.b)(s,u,o,d)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.signOut();case 2:0===e.sent.resultCode&&t(Object(i.b)(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var a=Object(s.a)(r.a.mark((function a(s){var i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.signIn(e,t,n);case 2:0===(i=a.sent).resultCode?s(u()):s(Object(o.a)("login",{_error:i.messages}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},71:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var a=function(e){return e?void 0:"Required"},r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},s=function(e){return function(t){return t&&t<e?"Must be at least ".concat(e):void 0}}},76:function(e,t,n){e.exports={profileContainer:"Profile_profileContainer__3lONb"}},78:function(e,t,n){e.exports={container:"Sidebar_container__3CgDZ",item:"Sidebar_item__3zPF1"}},99:function(e,t,n){e.exports={userLoading:"spinner_userLoading__pYkc6",spinner:"spinner_spinner__xCXbS"}}},[[297,1,2]]]);
//# sourceMappingURL=main.c1cd5a58.chunk.js.map