(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{4820:function(e,l,t){Promise.resolve().then(t.t.bind(t,46868,23)),Promise.resolve().then(t.bind(t,20273)),Promise.resolve().then(t.t.bind(t,76304,23)),Promise.resolve().then(t.t.bind(t,68326,23))},20273:function(e,l,t){"use strict";t.r(l),t.d(l,{Carousel:function(){return Carousel},DotButton:function(){return DotButton}});var n=t(57437),r=t(57042),o=t(58),s=t(2265),c=t(61233),a=t.n(c);function Carousel(e){let{children:l}=e,[t,c]=(0,o.Z)({align:"start"}),[_,i]=(0,s.useState)({prev:!1,next:!0}),[u,d]=(0,s.useState)([]),[p,v]=(0,s.useState)(0),k=(0,s.useCallback)(e=>{d(e.scrollSnapList())},[]),x=(0,s.useCallback)(e=>{v(e.selectedScrollSnap()),i({prev:(null==e?void 0:e.canScrollPrev())||!1,next:(null==e?void 0:e.canScrollNext())||!1})},[]),f=(0,s.useCallback)(e=>null==c?void 0:c.scrollTo(e),[c]),m=(0,s.useCallback)(()=>null==c?void 0:c.scrollPrev(),[c]),C=(0,s.useCallback)(()=>null==c?void 0:c.scrollNext(),[c]);return(0,s.useEffect)(()=>{c&&(k(c),c.on("select",x))},[c,k,x]),(0,n.jsxs)("div",{className:a().wrapper,children:[(0,n.jsx)("div",{className:(0,r.Z)(a().viewport,_.next&&a().canScrollNext,_.prev&&a().canScrollPrev),ref:t,children:(0,n.jsx)("ul",{className:a().container,children:l})}),(0,n.jsxs)("div",{className:a().controls,"aria-hidden":!0,children:[(0,n.jsx)("button",{className:(0,r.Z)(a().scrollBtn,a().left),onClick:m,disabled:!_.prev,children:"<"}),(0,n.jsx)("div",{className:a().progress,children:u.map((e,l)=>(0,n.jsx)(DotButton,{selected:l===p,onClick:()=>f(l)},l))}),(0,n.jsx)("button",{className:a().scrollBtn,onClick:C,disabled:!_.next,children:">"})]})]})}function DotButton(e){let{selected:l,onClick:t}=e;return(0,n.jsx)("button",{onClick:t,className:(0,r.Z)(a().dotBtn,l&&a().selected),title:"Slide to"})}},46868:function(e){e.exports={wrapper:"carousel-page_wrapper__1Dh1G",example:"carousel-page_example__diCnY"}},61233:function(e){e.exports={wrapper:"carousel_wrapper__ZrrEk",viewport:"carousel_viewport__jsL88",canScrollNext:"carousel_canScrollNext__1EZ9V",canScrollPrev:"carousel_canScrollPrev__9oxuB",container:"carousel_container__3pyO9",controls:"carousel_controls__H4TTA",scrollBtn:"carousel_scrollBtn__k1UMR",left:"carousel_left__MHa1W",progress:"carousel_progress__PvXcw",dotBtn:"carousel_dotBtn__IWrSa",selected:"carousel_selected__UnWM4"}},76304:function(e){e.exports={linkContainer:"key-date_linkContainer___YXRl",date:"key-date_date__niDeB",content:"key-date_content__Pl4Jd",title:"key-date_title__L_sgy",summary:"key-date_summary__N5EqK",link:"key-date_link__n6ClT"}}},function(e){e.O(0,[854,971,472,744],function(){return e(e.s=4820)}),_N_E=e.O()}]);