"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[40932],{382396:(e,t,i)=>{i.d(t,{Z:()=>s});let s=2},909999:(e,t,i)=>{i.d(t,{j:()=>o});let s={á:"a",à:"a",â:"a",ä:"a",ã:"a",å:"a",æ:"a",ç:"c",é:"e",è:"e",ê:"e",ë:"e",í:"i",ì:"i",î:"i",ï:"i",ñ:"n",ó:"o",ò:"o",ô:"o",ö:"o",õ:"o",ø:"o",œ:"o",ß:"s",ú:"u",ù:"u",û:"u",ü:"u"},r=e=>{if(!e)return"";let t="";for(let i=0;i<e.length;i+=1)t+=s[e.charAt(i)]||e.charAt(i);return t},a=(e,t)=>{let i=t.split(" "),s=e.split(" "),a=0;for(let e=0;e<s.length;e+=1)(r(s[e]).includes(i[a])||s[e].includes(i[a]))&&(a+=1);return a===i.length},o=(e,t,i="name")=>{let s=t.toLowerCase();return e.filter(e=>a(e[i].toLowerCase(),s))}},240932:(e,t,i)=>{i.d(t,{MD:()=>W,xH:()=>V,uC:()=>K,sR:()=>X,DR:()=>Q});var s=i(667294),r=i(545007),a=i(172045),o=i(883119),n=i(573706),l=i(400416),d=i(144326),c=i(512541),_=i(297728),h=i(730212),u=i(338623),g=i(961754),p=i(382396),b=i(383399),x=i(733423),m=i(801621),f=i(451237),y=i(167210),v=i(969119),S=i(785893);function j({boardPickerSuggestedBoards:e,clientTrackingParams:t,imageSignature:i,index:s,item:r,pinId:a,saveSessionId:l,surfaceOriginViewParameter:d,useLegoLayout:c}){let{logContextEvent:_}=(0,n.v)();return(0,v.Z)(()=>{"shortlist"===r.category&&_({aux_data:{board_picker_surface_origin:d,board_picker_suggested_boards:e,image_signature:i,pin_id:a,save_session_id:l},event_type:13,clientTrackingParams:t,view_type:21,view_parameter:3988})}),(0,S.jsx)(o.xu,{marginTop:s>0?2:1,paddingX:c?4:3,paddingY:1,children:(0,S.jsx)(o.xv,{size:c?"100":"200",children:r.title})})}var A=i(640498),B=i(912355);let w=e=>{let{accessibilityLabelText:t,board:i,buttonText:r,clientTrackingParams:a,displayAlreadySavedMsg:n,i18n:l,imageSignature:d,isSectionOpen:c,logContextEvent:_,onButtonClick:h,onClick:u,pinId:g,saveSessionId:p,shouldOpenSections:b=!0,showSaveToProfile:x,showFlyoutSaveButton:m=!0,surfaceOriginViewParameter:f,useLegoLayout:y}=e,[v,j]=(0,s.useState)(!1),w=(0,s.useRef)(null),P=!!i.section_count&&i.section_count>0,{images:C,image_cover_url:z}=i||{},k=!z?.includes("custom")&&C&&C["75x75"]&&C["75x75"][C["75x75"].length-1].url||z;(0,s.useEffect)(()=>{"boardless"===i.type&&_({aux_data:{board_picker_surface_origin:f,image_signature:d,pin_id:g,save_session_id:p},clientTrackingParams:a,event_type:13,view_parameter:3990,view_type:21})},[]);let L=()=>{u(i)};return(0,S.jsx)(o.xu,{"data-test-id":P?"boardWithSection":"boardWithoutSection",children:(0,S.jsx)(o.iP,{ref:w,onBlur:()=>{j(!1)},onFocus:()=>{j(!0)},onMouseEnter:()=>{j(!0)},onMouseLeave:()=>{j(!1)},onTap:L,children:(0,S.jsxs)(o.xu,{alignItems:"center",color:v?"secondary":"default","data-test-id":`board-row-${i.name||""}`,display:"flex",height:y?64:52,marginBottom:y?0:1,marginEnd:y?2:3,marginStart:y?2:3,marginTop:y?0:1,padding:y?2:0,rounding:3,children:[(0,S.jsxs)(o.xu,{"aria-hidden":"true",flex:"none",height:y?48:36,marginBottom:y?0:1,marginEnd:y?2:3,marginStart:y?0:2,marginTop:y?0:1,overflow:"hidden",width:y?48:36,children:[x&&"boardless"===i.type&&(0,S.jsx)(o.zd,{height:"100%",rounding:2,width:"100%",children:(0,S.jsx)(o.xu,{alignItems:"center",color:v?"default":"secondary",display:"flex",height:"100%",justifyContent:"center",width:"100%",children:(0,S.jsx)(o.xu,{children:(0,S.jsx)(o.JO,{accessibilityLabel:l.bt("프로필에 저장하기 아이콘", "Save to profile icon", "BoardRow.TapArea.Icon", undefined, true),color:"default",icon:"history",size:24})})})}),k&&!b&&(0,S.jsx)(o.zd,{height:y?48:36,rounding:2,wash:!0,width:y?48:36,children:(0,S.jsx)(o.Ee,{alt:"",fit:"cover",naturalHeight:y?48:36,naturalWidth:y?48:36,src:k})}),k&&b?(0,S.jsx)(o.zd,{height:y?48:36,rounding:2,wash:!0,width:y?48:36,children:(0,S.jsx)(o.Ee,{alt:"",fit:"cover",naturalHeight:y?48:36,naturalWidth:y?48:36,src:k})}):(0,S.jsx)(o.zd,{height:y?48:36,rounding:2,width:y?48:36,children:(0,S.jsx)(o.xu,{color:b?"secondary":"transparent",height:"100%",width:"100%"})})]}),(0,S.jsxs)(o.xu,{flex:"grow",marginStart:y?0:1,overflow:"hidden",paddingY:1,children:[(0,S.jsx)(o.xv,{lineClamp:1,overflow:"breakAll",weight:b||!b?"bold":"normal",children:i.name}),n&&(0,S.jsx)(o.xu,{marginTop:1,children:(0,S.jsx)(o.xv,{align:"start",color:"default",size:"100",children:l.bt("이미 저장되었습니다", "Saved here already", "BoardFlyout.AlreadySaved.Message", undefined, true)})})]}),i&&(!v||v&&P&&!c)?(0,S.jsx)(o.xu,{children:(0,S.jsx)(B.Z,{board:i,showCollaborativeIcon:!!i.is_collaborative,showPrivateIcon:i.privacy===A.ZP.BoardPrivacy.SECRET,showProtectedIcon:i.privacy===A.ZP.BoardPrivacy.PROTECTED,showSectionsIcon:P&&b,useLegoLayout:y})}):null,(0===i.section_count||!b)&&m&&(0,S.jsx)(o.xu,{"data-test-id":"board-row-save-button-container",flex:"none",marginEnd:y?0:2,opacity:v?1:0,children:(0,S.jsx)(o.zx,{accessibilityLabel:t||l.bt("저장 버튼", "save button", "boardRow.saveButton", undefined, true),color:"red","data-test-id":"board-row-save-button",onClick:({event:e})=>{L(),h&&h(),e.stopPropagation()},text:r||l.bt("저장", "Save", "save button", undefined, true)})})]})})})},P=e=>{let{logContextEvent:t}=(0,n.v)(),i=(0,d.ZP)();return(0,S.jsx)(w,{...e,i18n:i,logContextEvent:t})};var C=i(501912),z=i(605244);function k(e,t,i){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class L extends s.Component{constructor(...e){super(...e),k(this,"state",{hovered:!1}),k(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),k(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),k(this,"handleTouch",()=>{let{board:e,onClick:t,section:i}=this.props;t(i,e)}),k(this,"handleButtonClick",({event:e})=>{let{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),k(this,"tapAreaRef",(0,s.createRef)())}focus(){let e=this.tapAreaRef.current;e&&e.focus()}render(){let{hovered:e}=this.state,{buttonText:t,section:i,showSectionSaveButton:s,useLegoLayout:r}=this.props;return(0,S.jsx)(o.iP,{ref:this.tapAreaRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,children:(0,S.jsxs)(o.xu,{alignItems:"center",color:e?"secondary":"default",dangerouslySetInlineStyle:{__style:r?{}:{marginLeft:53,marginRight:11}},"data-test-id":`section-row-${i.title||""}`,display:"flex",height:r?64:52,marginEnd:r?2:0,marginStart:r?2:0,marginTop:r?0:1,padding:r?2:0,rounding:3,children:[r&&!!i.preview_pins?.length&&(0,S.jsx)(z.Z,{image_url:i.preview_pins[0].image_square_url??"",naturalHeight:i.preview_pins[0].image_square_size_pixels?.height??1,naturalWidth:i.preview_pins[0].image_square_size_pixels?.width??1}),(0,S.jsx)(o.xu,{flex:"grow",marginStart:r?0:4,paddingY:1,children:(0,S.jsx)(o.xv,{lineClamp:1,weight:r?"bold":"normal",children:i.title})}),e&&s&&(0,S.jsx)(o.xu,{flex:"none",marginEnd:r?0:2,children:(0,S.jsx)(o.zx,{accessibilityLabel:"save button",color:"red",onClick:this.handleButtonClick,text:t||this.props.i18n.bt("저장", "Save", "save button", undefined, true)})})]})})}}function T(e){let t=(0,d.ZP)();return(0,S.jsx)(L,{...e,i18n:t})}function I(e){let t=(0,d.ZP)(),{board:i,buttonText:s,onClick:r,onButtonClick:a,showSectionSaveButton:n,useLegoLayout:l}=e,c=(0,C.Z)(),_=(0,b.Z)(),h=(0,m.lJ)(_,c),u=(0,g.Z)({name:"BoardSectionsRepinResource",options:{board_id:i.id,orbac_subject_id:h},noCache:!0}),p=u&&u.data||[];return(0,S.jsxs)(o.xu,{children:[!u.isLoaded&&(0,S.jsx)(o.kC,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:"100%",children:(0,S.jsx)(o.xH,{accessibilityLabel:t.bt("보드 선택기를 불러오는 중", "loading board picker", "accessibility text for loading spinner", undefined, true),show:!0})}),u.isLoaded&&(0,S.jsxs)(o.xu,{children:[l&&(0,S.jsx)(o.xu,{marginStart:4,marginTop:2,paddingY:1,children:(0,S.jsx)(o.xv,{size:"100",children:t.bt("섹션", "Section", "PinBetterSave.BoardFlyout.SectionPlaceholderText", undefined, true)})}),p.map(e=>(0,S.jsx)(T,{board:i,buttonText:s,onButtonClick:a,onClick:r,section:e,showSectionSaveButton:n,useLegoLayout:l},e.id))]})]})}function R({onClick:e,title:t,showIcon:i}){let r=(0,d.ZP)(),[a,n]=(0,s.useState)(!1);return(0,S.jsx)(o.iP,{dataTestId:"board-suggestion-row-button",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onTap:()=>{e({title:t})},children:(0,S.jsxs)(o.xu,{alignItems:"center",color:a?"secondary":"default",display:"flex",height:i?64:52,marginBottom:1,marginEnd:3,marginStart:3,rounding:3,children:[(0,S.jsx)(o.xu,{flex:"none",height:i?48:36,marginBottom:1,marginEnd:3,marginStart:i?1:2,marginTop:1,overflow:"hidden",rounding:i?2:1,width:i?48:36,children:(0,S.jsx)(o.xu,{alignItems:i?"center":void 0,color:"secondary",display:i?"flex":void 0,height:"100%",justifyContent:i?"center":void 0,width:"100%",children:i&&(0,S.jsx)(o.JO,{accessibilityLabel:r.bt("보드 만들기 아이콘", "Create board icon", "BoardSuggestionRow.AccessibilityLabel.Text", undefined, true),color:"default",icon:"add",size:20})})}),(0,S.jsx)(o.xu,{flex:"grow",paddingY:1,children:(0,S.jsx)(o.xv,{lineClamp:1,weight:"bold",children:t})}),a&&(0,S.jsx)(o.xu,{marginEnd:2,children:(0,S.jsx)(o.zx,{accessibilityLabel:"create button",color:"red",text:r.bt("만들기", "Create", "create button to create a new board", undefined, true)})})]})})}function E(e){let t=(0,d.ZP)(),{suggestionsResource:i,onClick:r,pinBuilderSuggestions:a,inWebRepinFlowExp:n}=e,l=a||i&&i.data||[],c=(0,S.jsxs)(s.Fragment,{children:[n&&(0,S.jsx)(o.xu,{marginStart:4,marginTop:2,paddingY:1,children:(0,S.jsx)(o.xv,{size:"100",children:t.bt("추천", "Suggestions", "PinBetterSave.BoardFlyout.SectionPlaceholderText", undefined, true)})}),l.map((e,t)=>(0,S.jsx)(R,{onClick:r,showIcon:n,title:e.title},t))]});return(0,S.jsx)(s.Fragment,{children:l?c:(0,S.jsx)(o.kC,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:"100%",children:(0,S.jsx)(o.xH,{accessibilityLabel:t.bt("보드 제안을 불러오는 중", "loading board suggestions", "accessibility text for loading spinner", undefined, true),show:!0})})})}k(L,"defaultProps",{showSectionSaveButton:!0});var O=i(876594);function F({isBoardCreate:e,onCreateBoardClick:t,useLegoLayout:i}){let r=(0,d.ZP)(),[a,n]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!1);return(0,S.jsx)(o.xu,{"data-test-id":"create-board",display:"flex",height:"100%",rounding:2,children:(0,S.jsx)(o.iP,{dataTestId:e?"create-board-button":"create-section-button",onBlur:()=>c(!1),onFocus:()=>c(!0),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onTap:t,rounding:2,children:(0,S.jsxs)(o.xu,{alignItems:"center",color:a?"secondary":"default",dangerouslySetInlineStyle:{__style:{...l?{border:`2px solid ${O.qtB}`}:{}}},display:"flex",height:"100%",padding:i?4:2,width:"100%",children:[(0,S.jsx)(o.xu,{color:i?"secondary":"transparent",dangerouslySetInlineStyle:{__style:i?{padding:"14px"}:{}},marginEnd:i?2:5,marginStart:i?0:4,rounding:i?2:0,children:(0,S.jsx)(o.JO,{accessibilityLabel:"",color:i?"default":"error",icon:i?"add":"add-circle",size:i?20:28})}),e?(0,S.jsx)(o.xv,{align:"center",lineClamp:1,weight:"bold",children:r.bt("보드 만들기", "Create board", " - ", undefined, true)}):(0,S.jsx)(o.xv,{align:"center",lineClamp:1,weight:"bold",children:r.bt("섹션 만들기", "Create section", " - ", undefined, true)})]})})})}var Z=i(909999),H=i(633493);function D(e,t,i){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let N=e=>e?498:439,J=e=>e?80:52,M="allBoards",$="shortlist",U=`
.BoardsSlideLeft {
  animation: boardFlyoutSlideLeft 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.BoardsSlideRight {
  animation: boardFlyoutSlideRight 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.BoardsSlideLeftRTL {
  animation: boardFlyoutSlideLeftRTL 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.BoardsSlideRightRTL {
  animation: boardFlyoutSlideRightRTL 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

@keyframes boardFlyoutSlideLeft {
  from {
    margin-left: 0%;
  }

  to {
    margin-left: -100%;
  }
}

@keyframes boardFlyoutSlideRight {
  from {
    margin-left: -100%;
  }

  to {
    margin-left: 0%;
  }
}

@keyframes boardFlyoutSlideLeftRTL {
  from {
    margin-right: -100%;
  }

  to {
    margin-right: 0%;
  }
}

@keyframes boardFlyoutSlideRightRTL {
  from {
    margin-right: 0%;
  }

  to {
    margin-right: -100%;
  }
}
`;class W extends s.PureComponent{constructor(...e){super(...e),D(this,"state",{boardSuggestions:[],isSectionOpen:null,selectedBoardId:"",selectedBoardCategory:"",searchQuery:"",searchBoxFocused:!0,saveSessionId:(0,a.Z)()}),D(this,"handleScroll",()=>{let{_container:e}=this,{logContextEvent:t}=this.props;t({event_type:110,component:13282,view_type:21})}),D(this,"refHandler",e=>{this.removeEventListeners(),e&&e.addEventListener("scroll",this.handleScroll,{once:!0}),this._container=e}),D(this,"getItems",e=>{let{boardResource:t,changeBoardModal:i,showSaveToProfile:s}=this.props;if(!t?.data)return[];let{all_boards:r}=t.data,a=r.length>=3&&s,o=[{boardId:"",image_cover_url:"",is_collaborative:!1,isOpen:!1,name:this.props.i18n.bt("프로필", "Profile", "pinBetterSave.initialSelection.boardlessPinsOption", undefined, true),privacy:"public",section_count:0,type:"boardless",url:"/me/"}],n=this.getAllBoards().map((e,t)=>this.mapBoards(e,M,t)),l=this.getShortlist().map((e,t)=>this.mapBoards(e,$,t)),d=!a&&s&&!i&&r.length>=3?[...o,...l.slice(0,2)]:l,{searchQuery:c}=this.state;return c.length>=p.Z?[...(0,Z.j)(n,c)]:[...r.length<3&&s?[{type:"header",title:this.props.i18n.bt("빠른 저장 후 나중에 정리", "Quick save and organize later", "BoardFlyout.inPinBetterSaveAndLessThanThreeBoards.boardlessPinsTitle", undefined, true)},...o]:[],...r.length>=3&&a?o:[],...r.length>=3&&d&&d.length?[{category:$,type:"header",title:e?this.props.i18n.bt("최고 인기 보드", "Top choices", "PinBetterSave.BoardFlyout.TopChoicesSectionTitle", undefined, true):this.props.i18n.bt("최고 보드 제안", "Top board suggestions", "Header for top suggesions in board picker", undefined, true)},...d]:[],...r.length>0?[{type:"header",title:r.length<3&&s?this.props.i18n.bt("보드에 저장", "Save to board", "BoardFlyout.inPinBetterSaveAndLessThanThreeBoards.saveToBoardTitle", undefined, true):this.props.i18n.bt("모든 보드", "All boards", "Header for all boards in board picker", undefined, true)},...n]:[]]}),D(this,"mapBoards",(e,t,i)=>{let{selectedBoardId:s,selectedBoardCategory:r}=this.state,a=e.id===s&&t===r;return{...e,category:t,isOpen:a,gridIndex:i}}),D(this,"handleBack",()=>{let{setBoardWithSection:e}=this.props;this.setState({isSectionOpen:!1,selectedBoardId:"",selectedBoardCategory:""}),e&&e(null)}),D(this,"handleSectionClick",(e,t)=>{let{clientTrackingParams:i,imageSignature:s,logContextEvent:r,onItemChosen:a,pinId:o,surfaceOriginViewParameter:n}=this.props,{saveSessionId:l,searchQuery:d}=this.state;r({event_type:101,clientTrackingParams:i,component:13282,element:36,object_id_str:t.id,view_type:91,view_parameter:3133,aux_data:{board_id:t.id,board_picker_surface_origin:n,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:t.gridIndex,image_signature:s,is_profile_save:!1,pin_id:o,save_session_id:l,search_query:d,section_id:e.id}}),a({boardId:t.id,url:e.slug?`${t.url}${e.slug}/`:t.url,sectionId:e.id,title:e.title||"",type:e.type,imageCoverUrl:t.image_cover_url,ownerUsername:t.owner&&t.owner.username||""})}),D(this,"getPinBuilderSuggestions",async()=>{let{clientTrackingParams:e,imageSignature:t,logContextEvent:i,pinId:s,surfaceOriginViewParameter:r}=this.props,{saveSessionId:a}=this.state;if(s){let o=await (0,l.Z)({url:`/v3/pins/${s}/board_title_suggestions/`,data:{pin_id:s}});if(o.resource_response.data){let n=o.resource_response.data.map(e=>({title:e.title,metadata:JSON.parse(e?.metadata??"{}")}))||[];this.setState({boardSuggestions:n}),i({aux_data:{board_picker_surface_origin:r,board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),image_signature:t,pin_id:s,save_session_id:a},component:13282,clientTrackingParams:e,event_type:13,view_parameter:3992,view_type:21})}}}),D(this,"getAllBoards",()=>{let{boardResource:e,advertiser_id:t}=this.props;return(e?.data?.all_boards||[]).filter(e=>!t||"secret"!==e.privacy)}),D(this,"getShortlist",()=>{let{suggestedBoardsShortListResource:e,displayShortlistMostRecentBoard:t,boardResource:i}=this.props,s=i?.data?.boards_shortlist||[];return t?s:e?.data||[]}),D(this,"getBoards",e=>e===M?this.getAllBoards():e===$?this.getShortlist():[]),D(this,"getSuggestedBoardsIds",()=>{let{showSaveToProfile:e}=this.props,t=(e?this.getShortlist().slice(0,2):this.getShortlist()).map(e=>e.id);return e&&t.unshift("PROFILE_PINS"),t}),D(this,"getTopChoiceBoardsAuxData",()=>{let{showSaveToProfile:e}=this.props;return(e?this.getShortlist().slice(0,2):[...this.getShortlist()]).map(e=>({board_title_id:String(e.id),board_title_kind:JSON.parse(e.recommendation_reason??"{}").reason,board_title:String(e.name),board_title_score:JSON.parse(e.recommendation_reason??"{}").score}))}),D(this,"getBoardTitleSuggestionsAuxData",()=>{let{boardSuggestions:e}=this.state;return e.map(e=>({board_title_id:String(e.metadata.value),board_title_kind:String(e.metadata.kind),board_title:String(e.title),board_title_score:String(e.metadata.confidence)}))}),D(this,"handleBoardWithSectionsClick",e=>{let{clientTrackingParams:t,logContextEvent:i,pinId:s,setBoardWithSection:r,surfaceOriginViewParameter:a}=this.props,{saveSessionId:o,searchQuery:n,selectedBoardId:l,selectedBoardCategory:d}=this.state,c=this.getBoards(e.category).find(({id:t})=>t===e.id),_=l===e.id&&d===e.category;i({event_type:13,clientTrackingParams:t,component:13282,element:36,object_id_str:e.id,view_type:275,aux_data:{board_id:e.id,board_picker_surface_origin:a,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:e.gridIndex,is_profile_save:!1,pin_id:s,save_session_id:o,search_query:n}}),c&&r&&r(c),this.setState({isSectionOpen:!0,selectedBoardId:_?"":e.id,selectedBoardCategory:_?"":e.category})}),D(this,"handleBoardClick",({board:e,toggleSections:t})=>{let{clientTrackingParams:i,imageSignature:s,logContextEvent:r,onItemChosen:a,pinId:o,surfaceOriginViewParameter:n}=this.props,{saveSessionId:l,searchQuery:d}=this.state;this.setState({searchBoxFocused:!1}),t?(r({event_type:101,component:13282,element:36,clientTrackingParams:i,object_id_str:e.id,view_type:91,view_parameter:e.category===$?3988:3989,aux_data:{board_id:e.id,board_component:e.category===$?3988:3989,board_picker_surface_origin:n,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:e.gridIndex,image_signature:s,is_profile_save:!1,pin_id:o,save_session_id:l,search_query:d}}),this.handleBoardWithSectionsClick({category:e.category,gridIndex:e.gridIndex,id:e.id})):(r("boardless"===e.type?{event_type:101,clientTrackingParams:i,component:13282,element:36,object_id_str:e.id,view_type:91,view_parameter:3990,aux_data:{board_id:e.id,board_component:3990,board_picker_surface_origin:n,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:e.gridIndex,image_signature:s,is_profile_save:!0,pin_id:o,save_session_id:l,search_query:d}}:{event_type:101,clientTrackingParams:i,component:13282,element:36,object_id_str:e.id,view_type:91,view_parameter:e.category===$?3988:3989,aux_data:{board_id:e.id,board_component:e.category===$?3988:3989,board_picker_surface_origin:n,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:e.gridIndex,image_signature:s,is_profile_save:"boardless"===e.type,pin_id:o,save_session_id:l,search_query:d}}),a({boardId:e.id,url:e.url,title:e.name||"",type:e.type,imageCoverUrl:e.image_cover_url,privacy:e.privacy}))}),D(this,"handleSearchQueryUpdate",e=>{this.setState(t=>({...t,searchQuery:e}))}),D(this,"handleCreateBoardClick",e=>{let{clientTrackingParams:t,imageSignature:i,logContextEvent:s,onBoardCreate:r,pinId:a,surfaceOriginViewParameter:o,surface:n}=this.props,{saveSessionId:l,searchQuery:d}=this.state;s({event_type:101,clientTrackingParams:t,component:13282,element:249,view_type:91,view_parameter:e?87:3132,aux_data:{board_component:e?87:3132,board_picker_surface_origin:o,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),image_signature:i,pin_id:a,save_session_id:l,search_query:d,source:n??f.Z.BOARD_PICKER}}),r({title:d})}),D(this,"handleBoardSuggestionClick",e=>{let{clientTrackingParams:t,imageSignature:i,logContextEvent:s,onBoardCreate:r,pinId:a,surfaceOriginViewParameter:o}=this.props,{saveSessionId:n}=this.state;s({event_type:101,clientTrackingParams:t,component:13282,element:23,view_type:91,view_parameter:3992,aux_data:{board_picker_surface_origin:o,board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),image_signature:i,pin_id:a,save_session_id:n}}),r(e)})}componentWillUnmount(){this.removeEventListeners()}componentDidMount(){let{clientTrackingParams:e,logContextEvent:t,pinId:i,setBoardWithSection:s,surfaceOriginViewParameter:r}=this.props,{saveSessionId:a}=this.state;s&&s(null),t({event_type:13,component:13282,clientTrackingParams:e,element:10960,aux_data:{board_picker_surface_origin:r,pin_id:i,save_session_id:a}})}componentDidUpdate(e){let{saveSessionId:t}=this.state,{clientTrackingParams:i}=this.props;!e.suggestedBoardsShortListResource?.isLoaded&&this.props.suggestedBoardsShortListResource?.isLoaded&&this.getSuggestedBoardsIds().length>0&&this.props.logContextEvent({event_type:13,clientTrackingParams:i,component:13282,element:1001,aux_data:{pin_id:this.props.pinId,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),save_session_id:t}})}removeEventListeners(){let{_container:e}=this;e&&e.removeEventListener("scroll",this.handleScroll)}render(){let{accessibilityLabelText:e,boardResource:t,buttonText:i,changeBoardModal:r,clientTrackingParams:a,customItem:n,headerText:l,hideAlreadySavedMsg:d,imageSignature:_,onButtonClick:h,paneHeight:u,paneWidth:g,pinAlreadySavedBoard:p,pinId:b,requestContext:x,sectionText:m,showSaveToProfile:f,showSearchField:v,showCreateBoardButton:A,showFlyoutSaveButton:B,showSections:w,showSectionSaveButton:C,suggestedBoardsShortListResource:z,surfaceOriginViewParameter:k,useStoryboardStyle:L,useLegoLayout:T,boardFlyoutStyle:R}=this.props,{boardSuggestions:O,isSectionOpen:Z,saveSessionId:D,searchBoxFocused:$,searchQuery:W}=this.state;if(!t)return null;let{isLoaded:q,error:Y}=t,G=[];(q&&!Y||z&&z.data&&!z.error)&&(G=this.getItems(!!T));let Q=G.filter(e=>e&&e.category===M).length;Q<=3&&0===O.length&&this.getPinBuilderSuggestions();let K=L?200:322,X=L?214:334,V=u||290,ee=JSON.stringify(this.getTopChoiceBoardsAuxData()),et=x.isRTL?"BoardsSlideRightRTL":"BoardsSlideLeft",ei="";null!==Z&&(ei=x.isRTL?"BoardsSlideLeftRTL":"BoardsSlideRight");let es=e=>(0,S.jsxs)(s.Fragment,{children:[!T&&(0,S.jsx)(o.iz,{}),(0,S.jsx)(o.xu,{borderStyle:T&&Q>=3&&G.length>1?"shadow":"none",dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:8,borderBottomLeftRadius:8}},height:J(T),overflow:"hidden",children:(0,S.jsx)(F,{isBoardCreate:e,onCreateBoardClick:()=>this.handleCreateBoardClick(e),useLegoLayout:T})})]});return(0,S.jsxs)(o.xu,{color:"default","data-test-id":"board-picker-flyout",height:L||r?"100%":N(T),overflow:"hidden",rounding:2,width:T&&!r?"100%":g,zIndex:y.lI,children:[(0,S.jsx)(c.Z,{unsafeCSS:U}),q?null:(0,S.jsx)(o.kC,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:T&&!r?360:g,children:(0,S.jsx)(o.xH,{accessibilityLabel:this.props.i18n.bt("보드 선택기를 불러오는 중", "loading board picker", "accessibility text for loading spinner", undefined, true),show:!0})}),(0,S.jsx)(o.kC,{direction:"row",children:q&&(0,S.jsx)("div",{className:Z?et:ei,children:(0,S.jsx)(o.xu,{position:"relative",children:(0,S.jsxs)(o.xu,{direction:"row",display:"flex",width:T&&!r?720:(g??0)*2,zIndex:new o.Ry(0),children:[(0,S.jsxs)(o.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",width:T&&!r?360:g,children:[T&&!r&&(0,S.jsx)(o.kC,{alignItems:"center",height:64,justifyContent:"center",children:(0,S.jsx)(o.xv,{align:"center",size:"300",weight:"bold",children:l||(f?this.props.i18n.bt("저장", "Save", "PinBetterSave.BoardFlyout.SavePlaceholder", undefined, true):this.props.i18n.bt("보드에 저장", "Save to board", "PinBetterSave.BoardFlyout.SaveToBoardPlaceholder", undefined, true))})}),(v??!r)&&(0,S.jsx)(o.xu,{"data-test-id":"search-boards-field-container",height:T?64:"auto",padding:R?.searchFieldStyle?.padding??(T?0:3),paddingX:R?.searchFieldStyle?.paddingX??(T?4:3),paddingY:R?.searchFieldStyle?.paddingY,children:(0,S.jsx)(H.Z,{accessibilityLabel:this.props.i18n.bt("보드에서 검색", "Search through your boards", "search bar placeholder text", undefined, true),focused:$,id:"pickerSearchField",onChange:({value:e})=>this.handleSearchQueryUpdate(e),placeholder:this.props.i18n.bt("검색", "Search", "search bar placeholder text", undefined, true),size:R?.searchFieldStyle?.size??"lg",value:W})}),(0,S.jsxs)(o.xu,{ref:this.refHandler,maxHeight:T?V:K,minHeight:T?290:K,overflow:"scrollY",children:[z&&!z.isLoaded?(0,S.jsx)(o.xu,{"data-test-id":"suggestedBoardsContainer",children:(0,S.jsx)(o.kC,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:128.5,width:"100%",children:(0,S.jsx)(o.xH,{accessibilityLabel:this.props.i18n.bt("보드 선택기를 불러오는 중", "loading board picker", "accessibility text for loading spinner", undefined, true),show:!0})})}):null,n,G.map((t,s)=>"header"===t.type?(0,S.jsx)(j,{boardPickerSuggestedBoards:ee,clientTrackingParams:a,imageSignature:_,index:s,item:t,pinId:b,saveSessionId:D,surfaceOriginViewParameter:k,useLegoLayout:T},`${t.title}`):(0,S.jsx)(o.xu,{children:(0,S.jsx)(P,{accessibilityLabelText:e,board:t,buttonText:i,clientTrackingParams:a,displayAlreadySavedMsg:p&&p.id===t.id&&!d,imageSignature:_,onButtonClick:h,onClick:e=>{this.handleBoardClick({board:e,toggleSections:w&&!!e.section_count})},pinId:b,saveSessionId:D,shouldOpenSections:w,showFlyoutSaveButton:B,showSaveToProfile:f,surfaceOriginViewParameter:k,useLegoLayout:T})},`${t.category}-${t.id}`)),Q<=3&&O.length>0&&(0,S.jsx)(E,{inWebRepinFlowExp:T,onClick:this.handleBoardSuggestionClick,pinBuilderSuggestions:O})]}),A&&es(!0)]}),Z&&(0,S.jsxs)(o.xu,{direction:"column",display:"flex",marginBottom:T?2:0,width:T&&!r?360:g,children:[(0,S.jsxs)(o.kC,{alignContent:"center",alignItems:"center",direction:"row",justifyContent:"center",children:[(0,S.jsx)(o.sg,{span:2,children:(0,S.jsx)(o.xu,{alignContent:"center",alignItems:"center",display:"flex",justifyContent:"start",marginStart:3,children:(0,S.jsx)(o.hU,{accessibilityLabel:"Back button",icon:"arrow-back",iconColor:"darkGray",onClick:this.handleBack,size:"sm"})})}),(0,S.jsx)(o.sg,{span:8,children:(0,S.jsx)(o.kC,{alignItems:"center",height:T?64:52,justifyContent:"center",children:(0,S.jsx)(o.xv,{weight:"bold",children:m||(T?this.props.i18n.bt("다음 보드에 핀 저장", "Save Pin to", "PinBetterSave.BoardFlyout.SectionHeader", undefined, true):this.props.i18n.bt("보드 섹션 선택", "Choose section", "Header for section header", undefined, true))})})}),(0,S.jsx)(o.sg,{span:2,children:(0,S.jsx)(o.xu,{})})]}),!T&&(0,S.jsx)(o.iz,{}),(0,S.jsx)(o.xu,{maxHeight:T?V:X,minHeight:T?354:X,overflow:"scrollY",children:G?(0,S.jsx)(s.Fragment,{children:G&&G.map(e=>"header"===e.type?null:(0,S.jsx)(o.xu,{children:e.isOpen&&(0,S.jsxs)(s.Fragment,{children:[T&&(0,S.jsx)(o.xu,{marginStart:4,marginTop:2,paddingY:1,children:(0,S.jsx)(o.xv,{size:"100",children:this.props.i18n.bt("보드", "Board", "PinBetterSave.BoardFlyout.BoardPickerTitle", undefined, true)})}),(0,S.jsx)(P,{board:e,buttonText:i,displayAlreadySavedMsg:p&&p.id===e.id,isSectionOpen:!0,onButtonClick:h,onClick:e=>{this.handleBoardClick({board:e,toggleSections:!1})},saveSessionId:D,shouldOpenSections:!1,showFlyoutSaveButton:B,useLegoLayout:T}),(0,S.jsx)(I,{board:e,buttonText:i,onButtonClick:h,onClick:this.handleSectionClick,showSectionSaveButton:C,useLegoLayout:T})]})},`${e.category}-${e.id}`))}):null}),A&&!r&&es(!1)]})]})})})})]})}}function q(e){let{logContextEvent:t}=(0,n.v)(),i=(0,d.ZP)(),{checkExperiment:s}=(0,_.F)();return(0,S.jsx)(W,{...e,checkExperiment:s,i18n:i,logContextEvent:t,requestContext:(0,h.B)()})}function Y(e,t,i){let{advertiser:s}=e,r={};if(i&&i.user&&i.user.username&&i.id!==t.id&&(r.orbacActingAs=i,r.username=i.user.username),t&&s){let i=e.advertiser;if(t.isAuth&&i.is_impersonation)return{hasMUA:i.owner_user_id!==t.id,advertiser_id:i.id,username:i.owner_user_id,...r};if(t.isAuth&&i.owner_user_id!==t.id)return{hasMUA:!0,advertiser_id:i.id,username:i.owner_user_id,...r};if(t.isAuth&&i.owner_user_id===t.id)return{hasMUA:!1,advertiser_id:i.id,username:"me"}}return{advertiser_id:void 0,hasMUA:void 0,...r}}function G(e){let{advertiser_id:t,hasMUA:i,boardFilter:s="all"}=e,{username:r}=e,a={field_set_key:"board_picker",filter:i?"protected":s,...r?{username:r}:Object.freeze({}),...t?{advertiser_id:t}:{}};return e.orbacActingAs&&e.orbacActingAs.user&&e.orbacActingAs.user.username&&(a={...a,username:e.orbacActingAs.user.username,orbac_subject_id:e.orbacActingAs.id,filter:s}),a}function Q(e,t){return(i,s)=>i((0,u.jB)("BoardPickerBoardsResource",G(Y(s(),e,t))))}function K(e){let t=(0,b.Z)(),i=(0,r.v9)(i=>Y(i,t,e.orbacActingAs)),s={...e,...i},a=(0,g.Z)({name:"BoardPickerBoardsResource",options:G(s)});return(0,S.jsx)(q,{...s,boardResource:a})}function X(e){let t=(0,x.Z)(),i=(0,b.Z)(),s=(0,m.lJ)(i,t);return(0,S.jsx)(K,{...e,orbacActingAs:s?t:void 0})}function V(e){let t=(0,g.Z)({name:"BoardPickerBoardsShortlistResource",options:{pin_id:e.pinId,shortlist_length:2,num_shortlist_suggestions:2}}),{data:i}=(0,g.Z)({name:"ApiResource",options:{url:`/v3/pins/${e.pinId}/`,field_sets:["pin.pinned_to_board()"]},noCache:!0});return(0,S.jsx)(q,{...e,pinAlreadySavedBoard:i?.pinned_to_board,suggestedBoardsShortListResource:t})}D(W,"defaultProps",{clientTrackingParams:void 0,paneWidth:320,showCreateBoardButton:!0,showFlyoutSaveButton:!0,showSections:!0,showSectionSaveButton:!0,useLegoLayout:!0})},912355:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(883119),r=i(990949),a=i(684860),o=i(785893);let n=({collaborator_count:e,useLegoLayout:t,type:i})=>t?(0,o.jsx)(s.xu,{marginEnd:e?2:0,children:(0,o.jsx)(a.Z,{type:i})}):(0,o.jsx)(a.Z,{type:i}),l=({board:e,showCollaborativeIcon:t,showPrivateIcon:i,showProtectedIcon:l,showSectionsIcon:d,useLegoLayout:c})=>{let _=e?.collaborating_users?.length||0;return t||i||l||d?(0,o.jsxs)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{paddingLeft:8}},"data-test-id":"board-picker-row-icon-list-box",direction:"row",display:"flex",marginEnd:c?0:5,children:[i&&(0,o.jsx)(n,{collaborator_count:_,type:"secret",useLegoLayout:c}),l&&(0,o.jsx)(n,{collaborator_count:_,type:"protected",useLegoLayout:c}),t&&(c?(0,o.jsx)(r.Z,{board:e,isCompact:!0,ownerOnly:!1}):(0,o.jsx)(a.Z,{type:"group"})),d&&(0,o.jsx)(a.Z,{type:"sections"})]}):null}},605244:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(883119),r=i(785893);let a=({image_url:e,naturalHeight:t,naturalWidth:i})=>(0,r.jsx)(s.xu,{"aria-hidden":"true",height:48,marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,children:(0,r.jsx)(s.zd,{height:48,rounding:2,wash:!0,width:48,children:(0,r.jsx)(s.Ee,{alt:"",naturalHeight:t,naturalWidth:i,src:e})})})},990949:(e,t,i)=>{i.d(t,{Z:()=>d});var s=i(883119),r=i(144326),a=i(240760),o=i(383399),n=i(785893);function l(e){let t=e?.imageMediumUrl??e?.image_medium_url??"",i=e?.avatar_color_index??void 0;return{name:e?.fullName??e?.full_name??"",color:i,src:"https://s.pinimg.com/images/user/default_75.png"===t?void 0:t}}function d({board:e,forceViewer:t,isCompact:i,ownerOnly:d}){let c=(0,r.ZP)(),_=(0,o.Z)(),h=d?[l(e?.owner)]:(function(e,t,i){let{collaborated_by_me:s,collaborating_users:r,owner:a}=e??{},o=r??[],n=[a];if(s||i){let e=o.findIndex(e=>t.isAuth&&e.id===t.id);if(-1!==e){let t=o.splice(e,1)[0];n.push(t)}else n.push(t)}return[...n,...[...o].sort((e,t)=>(e.full_name??"")>(t.full_name??"")?1:(t.full_name??"")>(e.full_name??"")?-1:0)]})(e,_,t).map(l),u=h.slice(0,3).map(e=>e.name),g="";switch(h.length){case 3:g=(0,a.Wc)(`${c.bt("{{ first }}, {{ second }} 및 {{ last }}", "{{ first }}, {{ second }}, and {{ last }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars", undefined, true)}`,{first:`${u[0]??""}`,second:`${u[1]??""}`,last:`${u[2]??""}`});break;case 2:g=(0,a.Wc)(`${c.bt("{{ first }} 님 및 {{ second }} 님", "{{ first }} and {{ second }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars", undefined, true)}`,{first:`${u[0]??""}`,second:`${u[1]??""}`});break;default:g=u.join(", ")}let p=h.length>3?(0,a.Wc)(`, ${c.nbt(["참여자: {{ userNames }} 님 외 {{ leftCount }}명 이상"], h.length - 3, "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree", true)}`,{userNames:g,leftCount:`${h.length-3}`}):(0,a.Wc)(`, ${c.bt("참여자: {{ userNames }}", "Collaborators: {{ userNames }}.", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree", undefined, true)}`,{userNames:g});return(0,n.jsx)(s.HE,{accessibilityLabel:p,collaborators:h,size:i?"xs":"sm"})}},633493:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(667294),r=i(883119),a=i(785893);function o(e){let{accessibilityLabel:t,focused:i,id:o,onBlur:n,onChange:l,onFocus:d,placeholder:c,value:_,size:h="lg"}=e,u=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(i){let e=u.current;window.requestAnimationFrame(()=>{let t=e&&e.querySelector("input");t instanceof HTMLInputElement&&t.focus()})}},[i]),(0,a.jsx)(r.xu,{ref:u,children:(0,a.jsx)(r.Um,{accessibilityLabel:t,id:o,onBlur:n,onChange:l,onFocus:d,placeholder:c,size:h,value:_})})}},684860:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(883119),r=i(144326),a=i(785893);let o=function({type:e}){let t=(0,r.ZP)(),i={group:{accessibilityLabel:t.bt("그룹 보드", "group board", "Board picker group board icon", undefined, true),icon:"people"},protected:{accessibilityLabel:t.bt("비공개 보드", "protected board", "Board picker protected board icon", undefined, true),icon:"protect"},secret:{accessibilityLabel:t.bt("비밀 보드", "secret board", "Board picker secret board icon", undefined, true),icon:"lock"},sections:{accessibilityLabel:t.bt("섹션 보드", "board with sections", "Board picker board with sections icon", undefined, true),icon:"arrow-forward"},sectionsInline:{accessibilityLabel:t.bt("섹션 보드", "board with sections", "Board picker board with sections icon", undefined, true),icon:"arrow-down"}}[e];return(0,a.jsx)(s.xu,{marginStart:1,children:(0,a.jsx)(s.xu,{marginStart:2,children:"sections"===e||"sectionsInline"===e?(0,a.jsx)(s.JO,{accessibilityLabel:i.accessibilityLabel,color:"default",icon:i.icon,size:"12"}):(0,a.jsx)(s.JO,{accessibilityLabel:i.accessibilityLabel,color:"default",icon:i.icon,size:16})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/40932.ko_KR-7941fbcc168dd747.mjs.map