(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){e.exports={postField:"Posts_postField__33u5B",postsBlock:"Posts_postsBlock__2AH0W"}},11:function(e,t,n){e.exports={head:"ProfileInfo_head__3Q3FT",wrapper:"ProfileInfo_wrapper__3boPV",mediaBlock:"ProfileInfo_mediaBlock__KKrQe",photosBlock:"ProfileInfo_photosBlock__3yjLZ",statusBlock:"ProfileInfo_statusBlock__3HLvc",bubble1:"ProfileInfo_bubble1__2ZOgi",bubble2:"ProfileInfo_bubble2__2ACT-",statusDescr:"ProfileInfo_statusDescr__1y0wO",changeStatusBtn:"ProfileInfo_changeStatusBtn__2ECzS",cancelStatusBtn:"ProfileInfo_cancelStatusBtn__2uT7S",infoBlock:"ProfileInfo_infoBlock__Yi3uO",jobBlock:"ProfileInfo_jobBlock__3qX4B",openJobStatus:"ProfileInfo_openJobStatus__2IBJk",jobDescr:"ProfileInfo_jobDescr__2NnqD",circleIndicatorActive:"ProfileInfo_circleIndicatorActive__3GUQ7",circleIndicatorNot:"ProfileInfo_circleIndicatorNot__3OngS",userInfoBlock:"ProfileInfo_userInfoBlock__2F7C3",aboutMe:"ProfileInfo_aboutMe__1mww3",aboutMeTitle:"ProfileInfo_aboutMeTitle__3NHae",nameBlock:"ProfileInfo_nameBlock__3H98C",user_nameBlock:"ProfileInfo_user_nameBlock__1Vh9z",changePhotos:"ProfileInfo_changePhotos__20Roj",linkBlock:"ProfileInfo_linkBlock__2I8GX"}},113:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(35),r=n(3),s=n(7),c={dialogs:[{id:1,name:"Ivan"},{id:2,name:"Dima"},{id:3,name:"Max"},{id:4,name:"Vova"},{id:5,name:"Andrew"}],messages:[{id:1,message:"Hi"},{id:2,message:"What`s Up"},{id:3,message:"How are you"},{id:4,message:"Hello"},{id:5,message:"Yo"},{id:6,message:"Hi"},{id:7,message:"What`s Up"},{id:8,message:"How are you"},{id:9,message:"Hello"},{id:10,message:"Yo"}]},i=function(e){return{type:s.b.SEND_MESSAGE,payload:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.b.SEND_MESSAGE:var n={id:e.messages.length+1,message:t.payload};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(3),r=n(73),s=(n(1),n(0)),c=function(e){var t=e.input,n=e.meta,c=n.touched,i=n.error,o=Object(r.a)(e,["input","meta"]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("textarea",Object(a.a)(Object(a.a)({},t),o))}),c&&i&&Object(s.jsx)("span",{style:{color:"crimson"},children:i})]})}},135:function(e,t,n){"use strict";var a=n(3),r=n(28),s=n(29),c=n(31),i=n(30),o=n(1),u=n.n(o),l=n(13),d=n(14),p=n(0),j=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(a.a)({},this.props)):Object(p.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(d.b)(j)(t)}},173:function(e,t,n){},174:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(140).create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"a2f60dbc-59e4-4c2c-b4c3-fa8b69b0306e"}}),r={getUsers:function(e,t){return a.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},setFollow:function(e){return a.post("/follow/".concat(e),null).then((function(e){return e.data}))},setUnfollow:function(e){return a.delete("/follow/".concat(e)).then((function(e){return e.data}))},getPage:function(e,t){return a.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},s={getProfile:function(e){return a.get("/profile/".concat(e)).then((function(e){return e.data}))},getStatusProfile:function(e){return a.get("/profile/status/".concat(e)).then((function(e){return e.data}))},setStatus:function(e){return a.put("/profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},c={checkAuth:function(){return a.get("/auth/me").then((function(e){return e.data}))},signOut:function(){return a.delete("/auth/login").then((function(e){return e.data}))},signIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))}}},24:function(e,t,n){e.exports={userInfoWrapper:"Users_userInfoWrapper__3S4n9",userSubscribeBtn:"Users_userSubscribeBtn__22gv2",followBtn:"Users_followBtn__1J35y",unFollowBtn:"Users_unFollowBtn__Oh9oB",userInfoContainer:"Users_userInfoContainer__1A0ol",infoWrapperImg:"Users_infoWrapperImg__2vdnU",info:"Users_info__2Jz7e",location:"Users_location__1uMJl"}},297:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(69),c=n.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(173);var i=n(28),o=n(29),u=n(31),l=n(30),d=(n(174),n(13)),p=n(16),j=n(14),b=n(8),f=n(3),h=n(7),O={initialized:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.c.SET_INITIALIZED:return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}},m=n(70),g=n(35),v={profile:[],status:"",posts:[{id:1,message:"Hi, how are you",likeCount:50},{id:2,message:"It`s my first post",likeCount:40},{id:3,message:"Hi, how are you",likeCount:30},{id:4,message:"How are you",likeCount:20},{id:5,message:"Hi",likeCount:10}],isLoading:!1},x=function(e){return{type:h.d.GET_STATUS,payload:e}},S=function(e){return{type:h.d.IS_FETCHING,payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.d.ADD_POST:var n={id:e.posts.length+1,message:t.payload,likeCount:0};return Object(f.a)(Object(f.a)({},e),{},{posts:[].concat(Object(g.a)(e.posts),[n])});case h.d.DELETE_POST:return Object(f.a)(Object(f.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});case h.d.SET_PROFILE_DATA:return Object(f.a)(Object(f.a)({},e),{},{profile:t.payload});case h.d.GET_STATUS:return Object(f.a)(Object(f.a)({},e),{},{status:t.payload});case h.d.IS_FETCHING:return Object(f.a)(Object(f.a)({},e),{},{isLoading:t.payload});case h.d.SET_PHOTO_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{profile:Object(f.a)(Object(f.a)({},e.profile),{},{photos:t.payload})});default:return e}},k=n(113),P={friendList:[{id:1,name:"Ivan"},{id:2,name:"Dima"},{id:3,name:"Max"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return e},T=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(f.a)(Object(f.a)({},e),a):e}))},w={users:[],pageSize:5,totalCount:400,currentPage:1,isLoading:!1,isDisabledBtn:[]},I=function(e){return{type:h.e.FOLLOW,payload:e}},C=function(e){return{type:h.e.UNFOLLOW,payload:e}},E=function(e){return{type:h.e.SET_USERS,payload:e}},A=function(e){return{type:h.e.SET_PAGE,payload:e}},B=function(e){return{type:h.e.IS_FETCHING,payload:e}},D=function(e,t){return{type:h.e.IS_DISABLED_BTN,payload:e,userId:t}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.e.FOLLOW:return Object(f.a)(Object(f.a)({},e),{},{users:T(e.users,t.payload,"id",{followed:!0})});case h.e.UNFOLLOW:return Object(f.a)(Object(f.a)({},e),{},{users:T(e.users,t.payload,"id",{followed:!1})});case h.e.SET_USERS:return Object(f.a)(Object(f.a)({},e),{},{users:t.payload});case h.e.SET_PAGE:return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.payload});case h.e.SET_TOTAL_COUNT:return Object(f.a)(Object(f.a)({},e),{},{totalCount:t.payload});case h.e.IS_FETCHING:return Object(f.a)(Object(f.a)({},e),{},{isLoading:t.payload});case h.e.IS_DISABLED_BTN:return Object(f.a)(Object(f.a)({},e),{},{isDisabledBtn:t.payload?[].concat(Object(g.a)(e.isDisabledBtn),[t.userId]):e.isDisabledBtn.filter((function(e){return e!==t.userId}))});default:return e}},U=n(55),F=n(141),H=n(138),M=Object(b.c)({app:_,profilePage:y,dialogPage:k.a,userPage:L,sidebar:N,auth:U.a,form:H.a}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,z=Object(b.e)(M,G(Object(b.a)(F.a))),W=n(48),R=n.n(W),J=n(143),V=n.n(J),Z=n(73),Q=n(24),X=n.n(Q),K=n(0),Y=function(e){var t=e.user,n=Object(Z.a)(e,["user"]);return Object(K.jsxs)("div",{className:X.a.userInfoWrapper,children:[Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:Object(K.jsx)(p.b,{to:"/profile/"+t.id,children:Object(K.jsx)("img",{className:X.a.infoWrapperImg,src:t.photos.small||"https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg",alt:"avatar"})})}),Object(K.jsx)("div",{children:t.followed?Object(K.jsx)("button",{className:"".concat(X.a.unFollowBtn," ").concat(X.a.userSubscribeBtn),onClick:function(){return n.setUnfollowHandler(t.id)},disabled:n.isDisabled.some((function(e){return e===t.id})),children:"Unfollow"}):Object(K.jsx)("button",{className:"".concat(X.a.followBtn," ").concat(X.a.userSubscribeBtn),onClick:function(){return n.setFollowHandler(t.id)},disabled:n.isDisabled.some((function(e){return e===t.id})),children:"Follow"})})]}),Object(K.jsxs)("div",{className:X.a.userInfoContainer,children:[Object(K.jsxs)("div",{children:[Object(K.jsxs)("span",{className:X.a.info,children:["User name:",Object(K.jsx)("p",{children:t.name?t.name:"Not indicated"})]}),Object(K.jsxs)("span",{className:X.a.info,children:["User status:",Object(K.jsx)("p",{children:t.status?t.status:"Not indicated"})]})]}),Object(K.jsxs)("div",{children:[Object(K.jsxs)("span",{className:X.a.location,children:["Country:",Object(K.jsx)("p",{children:t.location?t.location.country:"Not indicated"})]}),Object(K.jsxs)("span",{className:X.a.location,children:["City:",Object(K.jsx)("p",{children:t.location?t.location.city:"Not indicated"})]})]})]})]})},q=n(99),$=n.n(q),ee=n.p+"static/media/35.64407753.svg",te=function(){return Object(K.jsx)("div",{className:$.a.userLoading,children:Object(K.jsx)("div",{className:$.a.spinner,children:Object(K.jsx)("img",{src:ee,alt:"spinner"})})})},ne=function(e){var t=Math.ceil(e.totalCount/e.pageSize),n=e.usersPage.map((function(t){return Object(K.jsx)(Y,{user:t,setUnfollowHandler:function(t){return e.setUnfollowHandler(t)},setFollowHandler:function(t){return e.setFollowHandler(t)},isDisabled:e.isDisabled},t.id)}));return Object(K.jsxs)("div",{className:R.a.usersContainer,children:[Object(K.jsx)("h2",{children:"Users"}),Object(K.jsx)("div",{className:R.a.usersField,children:Object(K.jsxs)("div",{className:R.a.usersItems,children:[Object(K.jsx)(V.a,{previousLabel:"<",nextLabel:">",breakLabel:"~",pageCount:t,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(t){return e.selectPage(t.selected+1)},containerClassName:R.a.reactPaginate,activeClassName:R.a.reactPaginationBtn}),e.isLoading?Object(K.jsx)(te,{}):Object(K.jsx)("div",{children:n})]})})]})},ae=n(12),re=n.n(ae),se=n(18),ce=n(19),ie=function(){var e=Object(se.a)(re.a.mark((function e(t,n,a,r){var s;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D(!0,n)),e.next=3,a(n);case 3:0===(s=e.sent).resultCode?(t(r(n)),t(D(!1,n))):console.log("Error AXIOS",s.messages);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),oe=n(75),ue=function(e){return e.userPage.users},le=function(e){return e.userPage.pageSize},de=function(e){return e.userPage.totalCount},pe=function(e){return e.userPage.currentPage},je=function(e){return e.userPage.isLoading},be=function(e){return e.userPage.isDisabledBtn},fe=(Object(oe.a)([],(function(){})),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).setFollowHandler=function(t){e.props.setFollowThunkCreator(t)},e.setUnfollowHandler=function(t){e.props.setUnfollowThunkCreator(t)},e.selectPage=function(t){var n=e.props.pageSize;e.props.getPageThunkCreator(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsersThunkCreator(t,n)}},{key:"render",value:function(){var e=this;return Object(K.jsx)(ne,{usersPage:this.props.usersPage,totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,isLoading:this.props.isLoading,isDisabled:this.props.isDisabledBtn,selectPage:function(t){return e.selectPage(t)},setFollowHandler:function(t){return e.setFollowHandler(t)},setUnfollowHandler:function(t){return e.setUnfollowHandler(t)}})}}]),n}(r.a.Component)),he=Object(b.d)(Object(j.b)((function(e){return{usersPage:ue(e),pageSize:le(e),totalCount:de(e),currentPage:pe(e),isLoading:je(e),isDisabledBtn:be(e)}}),{getUsersThunkCreator:function(e,t){return function(){var n=Object(se.a)(re.a.mark((function n(a){var r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(B(!0)),n.next=3,ce.c.getUsers(e,t);case 3:r=n.sent,a(E(r.items)),a((s=r.totalCount,{type:h.e.SET_TOTAL_COUNT,payload:s})),a(B(!1));case 7:case"end":return n.stop()}var s}),n)})));return function(e){return n.apply(this,arguments)}}()},getPageThunkCreator:function(e,t){return function(){var n=Object(se.a)(re.a.mark((function n(a){var r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(A(e)),a(B(!0)),n.next=4,ce.c.getPage(e,t);case 4:r=n.sent,a(E(r.items)),a(B(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setFollowThunkCreator:function(e){return function(){var t=Object(se.a)(re.a.mark((function t(n){return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie(n,e,ce.c.setFollow,I);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUnfollowThunkCreator:function(e){return function(){var t=Object(se.a)(re.a.mark((function t(n){return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie(n,e,ce.c.setUnfollow,C);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(fe),Oe=n(76),_e=n.n(Oe),me=n(11),ge=n.n(me),ve=n(103),xe=function(e){var t=Object(a.useState)(!1),n=Object(ve.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(e.status),i=Object(ve.a)(c,2),o=i[0],u=i[1];return Object(a.useEffect)((function(){u(e.status)}),[e.status]),Object(K.jsxs)("div",{className:ge.a.statusBlock,children:[r?Object(K.jsxs)("div",{className:ge.a.statusDescr,children:[Object(K.jsx)("div",{children:Object(K.jsx)("input",{onChange:function(e){return u(e.target.value)},type:"text",autoFocus:!0,placeholder:"Change status",value:o})}),Object(K.jsxs)("div",{children:[Object(K.jsx)("button",{type:"submit",className:ge.a.changeStatusBtn,onClick:function(){s(!1),e.updateStatus(o)},children:"Change"}),Object(K.jsx)("button",{type:"button",className:ge.a.cancelStatusBtn,onClick:function(){return s(!1)},children:"Cancel"})]})]}):Object(K.jsx)("div",{className:ge.a.statusDescr,onClick:function(){return s(e.isOwner)},children:Object(K.jsx)("p",{children:e.status||"Not indicated"})}),Object(K.jsx)("div",{className:ge.a.bubble2}),Object(K.jsx)("div",{className:ge.a.bubble1})]})},Se=function(e){var t=e.saveNewPhoto,n=e.profile,a=e.status,r=e.updateStatus,s=e.isOwner,c=e.contacts,i=e.isLoading;return Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{className:ge.a.head}),Object(K.jsxs)("div",{className:ge.a.wrapper,children:[Object(K.jsxs)("div",{className:ge.a.mediaBlock,children:[Object(K.jsx)("div",{className:ge.a.photosBlock,children:!n.photos||i?Object(K.jsx)(te,{}):Object(K.jsx)("img",{src:n.photos.large||"https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg",alt:"ava"})}),Object(K.jsx)(xe,{status:a,updateStatus:r,isOwner:s})]}),Object(K.jsxs)("div",{className:ge.a.infoBlock,children:[Object(K.jsxs)("div",{className:ge.a.nameBlock,children:[s?Object(K.jsxs)("label",{className:ge.a.changePhotos,children:[Object(K.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t(e.target.files[0])}}),"Change Photos"]}):null,Object(K.jsx)("h4",{className:ge.a.user_nameBlock,children:n.fullName})]}),Object(K.jsxs)("div",{className:ge.a.userInfoBlock,children:[Object(K.jsxs)("div",{className:ge.a.aboutMe,children:[Object(K.jsx)("p",{className:ge.a.aboutMeTitle,children:"About me:"}),Object(K.jsx)("p",{children:n.aboutMe||"Not indicated"})]}),Object(K.jsxs)("div",{className:ge.a.linkBlock,children:[Object(K.jsx)("a",{rel:"noreferrer",href:c?c.facebook:"#",target:"_blank",children:"Facebook"}),Object(K.jsx)("a",{rel:"noreferrer",href:c?c.website:"#",target:"_blank",children:"Website"}),Object(K.jsx)("a",{rel:"noreferrer",href:c?c.vk:"#",target:"_blank",children:"VK"}),Object(K.jsx)("a",{rel:"noreferrer",href:c?c.twitter:"#",target:"_blank",children:"Twitter"}),Object(K.jsx)("a",{rel:"noreferrer",href:c?c.instagram:"#",target:"_blank",children:"Instagram"}),Object(K.jsx)("a",{rel:"noreferrer",href:c?c.github:"#",target:"_blank",children:"Github"}),Object(K.jsx)("a",{rel:"noreferrer",href:c?c.mainLink:"#",target:"_blank",children:"mainLink"})]})]}),Object(K.jsxs)("div",{className:ge.a.jobBlock,children:[n.lookingForAJob?Object(K.jsx)("div",{className:ge.a.jobDescr,children:Object(K.jsx)("div",{children:n.lookingForAJobDescription})}):Object(K.jsx)("div",{}),Object(K.jsxs)("div",{className:ge.a.openJobStatus,children:[Object(K.jsxs)("p",{children:["Open for job :",Object(K.jsx)("span",{children:"\xa0\xa0"})]}),n.lookingForAJob?Object(K.jsx)("div",{className:ge.a.circleIndicatorActive}):Object(K.jsx)("div",{className:ge.a.circleIndicatorNot})]})]})]})]})]})},ye=n(100),ke=n.n(ye),Pe=n(136),Ne=n(137),Te=n(124),we=n(71),Ie=Object(we.a)(200),Ce=Object(we.b)(1),Ee=Object(Ne.a)({form:"post"})((function(e){var t=e.handleSubmit,n=e.reset;return Object(K.jsxs)("form",{onSubmit:t,children:[Object(K.jsx)("div",{children:Object(K.jsx)(Pe.a,{component:Te.a,name:"body",type:"text",placeholder:"Add new post",validate:[we.c,Ie,Ce]})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(){return setTimeout(n,0)},children:"Send message"})})]})})),Ae=n(37),Be=n.n(Ae),De=function(e){return Object(K.jsxs)("div",{className:Be.a.item,children:[Object(K.jsx)("div",{className:Be.a.ava_wrapper,children:Object(K.jsx)("img",{className:Be.a.ava_item,src:"https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg",alt:"avatar"})}),Object(K.jsx)("div",{className:Be.a.body_wrapper,children:Object(K.jsx)("p",{className:Be.a.post_body_item,children:e.message})}),Object(K.jsx)("div",{className:Be.a.like_wrapper,children:Object(K.jsxs)("div",{className:Be.a.like_item,children:["likes ",e.likeCount]})})]})},Le=r.a.memo((function(e){var t=Object(g.a)(e.posts).reverse().map((function(e){return Object(K.jsx)(De,{message:e.message,likeCount:e.likeCount},e.id)}));return Object(K.jsxs)("div",{className:ke.a.postField,children:[Object(K.jsx)("h3",{children:"My posts"}),Object(K.jsx)("div",{children:Object(K.jsx)(Ee,{onSubmit:function(t){e.createPost(t.body)}})}),Object(K.jsx)("div",{className:ke.a.postsBlock,children:t})]})})),Ue=Object(j.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{createPost:function(t){e(function(e){return{type:h.d.ADD_POST,payload:e}}(t))}}}))(Le),Fe=function(e){return Object(K.jsxs)("div",{className:_e.a.profileContainer,children:[Object(K.jsx)(Se,{profile:e.profile,contacts:e.contacts,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,saveNewPhoto:e.saveNewPhoto,isLoading:e.isLoading}),Object(K.jsx)(Ue,{})]})},He=n(135),Me=function(e){return e.profilePage.profile},Ge=function(e){return e.profilePage.status},ze=function(e){return e.auth.userId},We=function(e){return e.auth.isAuth},Re=function(e){return e.profilePage.isLoading},Je=(Object(oe.a)([],(function(){})),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserID),this.props.getProfileThunkCreator(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){e.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(K.jsx)("div",{className:_e.a.profileContainer,children:Object(K.jsx)(Fe,Object(f.a)(Object(f.a)({},this.props),{},{isOwner:!this.props.match.params.userId,contacts:this.props.profile.contacts,updateStatus:this.props.setStatusThunkCreator,saveNewPhoto:this.props.saveNewPhotoThunkCreator}))})}}]),n}(r.a.Component)),Ve=Object(b.d)(Object(j.b)((function(e){return{profile:Me(e),status:Ge(e),authUserID:ze(e),isAuth:We(e),isLoading:Re(e)}}),{getProfileThunkCreator:function(e){return function(){var t=Object(se.a)(re.a.mark((function t(n){var a,r;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.b.getProfile(e);case 2:return a=t.sent,n((s=a,{type:h.d.SET_PROFILE_DATA,payload:s})),t.next=6,ce.b.getStatusProfile(e);case 6:r=t.sent,n(x(r));case 8:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},setStatusThunkCreator:function(e){return function(){var t=Object(se.a)(re.a.mark((function t(n){return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.b.setStatus(e);case 2:0===t.sent.data.resultCode&&n(x(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveNewPhotoThunkCreator:function(e){return function(){var t=Object(se.a)(re.a.mark((function t(n){var a;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(S(!0)),t.next=3,ce.b.savePhoto(e);case 3:0===(a=t.sent).resultCode&&(n((r=a.data.photos,{type:h.d.SET_PHOTO_SUCCESS,payload:r})),n(S(!1)));case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}}),He.a,d.f)(Je),Ze=n(42),Qe=n.n(Ze),Xe=n.p+"static/media/logo.30954a56.svg",Ke=function(e){return Object(K.jsxs)("div",{className:Qe.a.headerWrapper,children:[Object(K.jsxs)("header",{className:Qe.a.mediaBlock,children:[Object(K.jsx)("img",{src:Xe,alt:"logo"}),Object(K.jsx)("h2",{children:"Social App"})]}),Object(K.jsxs)("div",{className:Qe.a.loginBlock,children:[Object(K.jsx)(p.b,{to:"/profile",children:e.isAuth?Object(K.jsx)("div",{className:Qe.a.userName,children:e.login}):null}),e.isAuth?Object(K.jsx)("button",{className:Qe.a.authBtn,onClick:e.signOut,children:"LOGOUT"}):Object(K.jsx)(p.b,{to:"/login",children:Object(K.jsx)("button",{className:Qe.a.authBtn,children:"LOGIN"})})]})]})},Ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(K.jsx)(Ke,Object(f.a)(Object(f.a)({},this.props),{},{signOut:this.props.signOutThunkCreator}))}}]),n}(r.a.Component),qe=Object(b.d)(Object(j.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{signOutThunkCreator:m.c}))(Ye),$e=n(38),et=n.n($e),tt=n(78),nt=n.n(tt),at=function(e){return Object(K.jsxs)("div",{className:nt.a.item,children:[Object(K.jsx)("img",{src:"https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg",alt:"avatar"}),Object(K.jsx)("p",{children:e.name})]})},rt=function(e){var t=e.sidebar.friendList.map((function(e){return Object(K.jsx)(at,{name:e.name},e.id)}));return Object(K.jsx)("div",{className:nt.a.container,children:t})},st=Object(j.b)((function(e){return{sidebar:e.sidebar}}))(rt),ct=function(e){return Object(K.jsxs)("nav",{className:et.a.nav,children:[Object(K.jsx)("div",{className:et.a.item,children:Object(K.jsx)(p.b,{to:"/profile",children:"Profile"})}),Object(K.jsx)("div",{className:et.a.item,children:Object(K.jsx)(p.b,{to:"/dialogs",children:"Messages"})}),Object(K.jsx)("div",{className:et.a.item,children:Object(K.jsx)(p.b,{to:"/users",children:"Users"})}),Object(K.jsx)("div",{className:et.a.item,children:Object(K.jsx)(p.b,{to:"/news",children:"News"})}),Object(K.jsx)("div",{className:et.a.item,children:Object(K.jsx)(p.b,{to:"/music",children:"Music"})}),Object(K.jsx)("div",{className:et.a.item,children:Object(K.jsx)(p.b,{to:"/setting",children:"Setting"})}),Object(K.jsx)(st,{})]})},it=function(e){return function(t){return Object(K.jsx)(a.Suspense,{fallback:Object(K.jsx)(te,{}),children:Object(K.jsx)(e,Object(f.a)({},t))})}},ot=r.a.lazy((function(){return n.e(3).then(n.bind(null,308))})),ut=r.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),lt=r.a.lazy((function(){return n.e(6).then(n.bind(null,304))})),dt=r.a.lazy((function(){return n.e(5).then(n.bind(null,305))})),pt=r.a.lazy((function(){return n.e(7).then(n.bind(null,306))})),jt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.InitializeApp()}},{key:"render",value:function(){return this.props.init?Object(K.jsxs)("div",{className:"app-wrapper",children:[Object(K.jsx)(qe,{}),Object(K.jsx)(ct,{}),Object(K.jsxs)("div",{className:"app-wrapper-content",children:[Object(K.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(K.jsx)(Ve,{})}}),Object(K.jsx)(d.b,{path:"/users",render:function(){return Object(K.jsx)(he,{})}}),Object(K.jsx)(d.b,{path:"/login",render:it(ot)}),Object(K.jsx)(d.b,{path:"/dialogs",render:it(ut)}),Object(K.jsx)(d.b,{path:"/news",render:it(lt)}),Object(K.jsx)(d.b,{path:"/music",render:it(dt)}),Object(K.jsx)(d.b,{path:"/setting",render:it(pt)})]})]}):Object(K.jsx)(te,{})}}]),n}(r.a.Component),bt=Object(b.d)(Object(j.b)((function(e){return{init:e.app.initialized}}),{InitializeApp:function(){return function(e){e(Object(m.a)()).then((function(){e({type:h.c.SET_INITIALIZED})}))}}}),d.f)(jt),ft=function(){return Object(K.jsx)(p.a,{basename:"/react_redux_SPA_study",children:Object(K.jsx)(j.a,{store:z,children:Object(K.jsx)(bt,{})})})};c.a.render(Object(K.jsx)(ft,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){e.exports={item:"Post_item__CDI8g",ava_wrapper:"Post_ava_wrapper__2wRuV",ava_item:"Post_ava_item__1V1Sk",body_wrapper:"Post_body_wrapper__2qi5o",post_body_item:"Post_post_body_item__3AFMu",like_wrapper:"Post_like_wrapper__3OBgG",like_item:"Post_like_item__1bLVO"}},38:function(e,t,n){e.exports={nav:"NavBar_nav__1FWUI",item:"NavBar_item__2RAQQ"}},42:function(e,t,n){e.exports={headerWrapper:"Header_headerWrapper__1oKyh",mediaBlock:"Header_mediaBlock__3QNG4",loginBlock:"Header_loginBlock__6mma5",userName:"Header_userName__2h_yj",authBtn:"Header_authBtn__1ELyC"}},48:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__1OedU",usersField:"Users_usersField__13PIe",usersItems:"Users_usersItems__3D9Hj",reactPaginate:"Users_reactPaginate__2Tm98",reactPaginationBtn:"Users_reactPaginationBtn__3fV12",pagination:"Users_pagination__2Njh9"}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(3),r=n(7),s={userId:null,email:null,login:null,isAuth:!1,isLoading:!1},c=function(e,t,n,a){return{type:r.a.SET_AUTH_DATA,payload:{userId:e,email:t,login:n,isAuth:a}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a.SET_AUTH_DATA:return Object(a.a)(Object(a.a)({},e),t.payload);default:return e}}},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var a={SEND_MESSAGE:"my-app/dialogs/SEND_MESSAGE"},r={FOLLOW:"my-app/users/FOLLOW",UNFOLLOW:"my-app/users/UNFOLLOW",SET_USERS:"my-app/users/SET_USERS",SET_PAGE:"my-app/users/SET_PAGE",SET_TOTAL_COUNT:"my-app/users/SET_TOTAL_COUNT",IS_FETCHING:"my-app/users/IS_FETCHING",IS_DISABLED_BTN:"my-app/users/IS_DISABLED_BTN"},s={ADD_POST:"my-app/profile/ADD_POST",DELETE_POST:"my-app/profile/DELETE_POST",SET_PROFILE_DATA:"my-app/profile/SET_PROFILE_DATA",GET_STATUS:"my-app/profile/GET_STATUS",SET_PHOTO_SUCCESS:"my-app/profile/SET_PHOTO_SUCCESS",IS_FETCHING:"my-app/profile/IS_FETCHING"},c={SET_AUTH_DATA:"my-app/auth/SET_AUTH_DATA"},i={SET_INITIALIZED:"my-app/init/SET_INITIALIZED"}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(12),r=n.n(a),s=n(18),c=n(19),i=n(55),o=n(59),u=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s,o,u,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.checkAuth();case 2:0===(n=e.sent).resultCode&&(a=n.data,s=a.id,o=a.login,u=a.email,l=a.isAuth,d=void 0===l||l,t(Object(i.b)(s,u,o,d)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.signOut();case 2:0===e.sent.resultCode&&t(Object(i.b)(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var a=Object(s.a)(r.a.mark((function a(s){var i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.signIn(e,t,n);case 2:0===(i=a.sent).resultCode?s(u()):s(Object(o.a)("login",{_error:i.messages}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},71:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var a=function(e){return e?void 0:"Required"},r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},s=function(e){return function(t){return t&&t<e?"Must be at least ".concat(e):void 0}}},76:function(e,t,n){e.exports={profileContainer:"Profile_profileContainer__3lONb"}},78:function(e,t,n){e.exports={container:"Sidebar_container__3CgDZ",item:"Sidebar_item__3zPF1"}},99:function(e,t,n){e.exports={userLoading:"spinner_userLoading__pYkc6",spinner:"spinner_spinner__xCXbS"}}},[[297,1,2]]]);
//# sourceMappingURL=main.fbb7d901.chunk.js.map