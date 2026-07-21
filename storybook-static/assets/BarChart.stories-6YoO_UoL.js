/* empty css               */import{r as ne,j as r}from"./iframe-C_0AXUlQ.js";import{g as Ee,B as pe,f as be,T as Le,C as Te,L as ke,a as Ae,b as Ce}from"./Caption-DPGFCoSu.js";import{X as ue,Y as Fe,C as De}from"./YAxis-BjUFpNZ-.js";import"./preload-helper-PPVm8Dsz.js";var We=Ee({chartName:"BarChart",GraphicalChild:pe,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:ue},{axisType:"yAxis",AxisComp:Fe}],formatAxisMap:be});function Ne(e){return Object.keys(e).filter(a=>a!=="month")}function Me(e,a,i){return i?e===0?[0,0,4,4]:e===a-1?[4,4,0,0]:[0,0,0,0]:[4,4,4,4]}function de(){return{month:"","":Math.floor(Math.random()*100)," ":Math.floor(Math.random()*100)}}const ce=10,Ye=1500;function Oe(){const[e,a]=ne.useState(()=>Array.from({length:ce},de));return ne.useEffect(()=>{const i=setInterval(()=>{a(Array.from({length:ce},de))},Ye);return()=>clearInterval(i)},[]),e}const Re="var(--s-color-fill-default-light)",me=({data:e,seriesStyles:a,height:i,width:_e,stacked:ie=!1,caption:ve=!1,label:Se=!1,skeleton:o=!1,tooltipFormatter:ge,xAxisFormatter:he})=>{const fe=Oe(),v=o?fe:e;if(!o&&v.length===0)return null;const S=Ne(v[0]);return S.length===0?null:r.jsxs(We,{accessibilityLayer:!0,data:v,height:i,width:_e,margin:{top:20,left:20,right:20},children:[r.jsx(De,{vertical:!1,stroke:"var(--s-color-border-default)"}),r.jsx(ue,{dataKey:"month",tickLine:!1,tickMargin:10,axisLine:!1,tickFormatter:he,style:{font:"var(--s-typography-caption-regular)"},stroke:"var(--s-color-content-light)"}),!o&&r.jsx(Le,{formatter:ge,content:r.jsx(Te,{})}),!o&&ve&&r.jsx(ke,{content:r.jsx(Ae,{})}),S.map((g,ye)=>{var h;const xe=Me(ye,S.length,ie);var f;const le=o?Re:(f=(h=a[g])===null||h===void 0?void 0:h.color)!==null&&f!==void 0?f:"black";return r.jsx(pe,{dataKey:g,stackId:ie?"a":void 0,fill:le,stroke:le,radius:xe,children:!o&&Se&&r.jsx(Ce,{position:"top",style:{font:"var(--s-typography-caption-regular)"},fill:"var(--s-color-content-light)",offset:12})},g)})]})};me.displayName="BarChart";var y,x,E,b,L,T,k,A,C,F,D,W,N,M,Y,O,R,I,j,B,V,G,H,K,$,w,X,J,z,U,q,P,Q,Z,ee,ae,re,te,oe,se;const $e={title:"Charts/BarChart",component:me,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Gráfico de barras com suporte a modo agrupado e empilhado, tooltip, legenda, labels e skeleton animado."}}},argTypes:{width:{control:{type:"number"},description:"Largura em pixels"},height:{control:{type:"number"},description:"Altura em pixels"},stacked:{control:"boolean",description:"Empilha as séries"},caption:{control:"boolean",description:"Exibe legenda"},label:{control:"boolean",description:"Exibe valor nas barras"},skeleton:{control:"boolean",description:"Modo skeleton animado"},data:{control:!1},seriesStyles:{control:!1}},args:{width:600,height:300,stacked:!1,caption:!1,label:!1,skeleton:!1}},t=[{month:"Jan",Vendas:120,Devoluções:30},{month:"Fev",Vendas:95,Devoluções:15},{month:"Mar",Vendas:140,Devoluções:40},{month:"Abr",Vendas:180,Devoluções:25},{month:"Mai",Vendas:160,Devoluções:35},{month:"Jun",Vendas:200,Devoluções:50}],s={Vendas:{color:"var(--s-color-chart-1)"},Devoluções:{color:"var(--s-color-chart-2)"}},Ie=t.map(({month:e,Vendas:a})=>({month:e,Vendas:a})),je={Vendas:{color:"var(--s-color-chart-3)"}},l={args:{data:t,seriesStyles:s}},n={args:{data:Ie,seriesStyles:je}},d={args:{data:t,seriesStyles:s,stacked:!0}},c={args:{data:t,seriesStyles:s,caption:!0}},p={args:{data:t,seriesStyles:s,label:!0}},u={args:{data:t,seriesStyles:s,stacked:!0,caption:!0,label:!0}},m={args:{data:[],seriesStyles:{},skeleton:!0}},_={args:{data:t,seriesStyles:s,xAxisFormatter:e=>e.toString(),tooltipFormatter:e=>`R$ ${Number(e).toFixed(2).toString().replace(".",",")}`}};l.parameters={...l.parameters,docs:{...(y=l.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES
  }
}`,...(E=l.parameters)===null||E===void 0||(x=E.docs)===null||x===void 0?void 0:x.source},description:{story:"Barras agrupadas com duas séries.",...(L=l.parameters)===null||L===void 0||(b=L.docs)===null||b===void 0?void 0:b.description}}};n.parameters={...n.parameters,docs:{...(T=n.parameters)===null||T===void 0?void 0:T.docs,source:{originalSource:`{
  args: {
    data: SINGLE_DATA,
    seriesStyles: SINGLE_STYLES
  }
}`,...(A=n.parameters)===null||A===void 0||(k=A.docs)===null||k===void 0?void 0:k.source},description:{story:"Série única.",...(F=n.parameters)===null||F===void 0||(C=F.docs)===null||C===void 0?void 0:C.description}}};d.parameters={...d.parameters,docs:{...(D=d.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    stacked: true
  }
}`,...(N=d.parameters)===null||N===void 0||(W=N.docs)===null||W===void 0?void 0:W.source},description:{story:"Barras empilhadas — ideal para composição proporcional.",...(Y=d.parameters)===null||Y===void 0||(M=Y.docs)===null||M===void 0?void 0:M.description}}};c.parameters={...c.parameters,docs:{...(O=c.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    caption: true
  }
}`,...(I=c.parameters)===null||I===void 0||(R=I.docs)===null||R===void 0?void 0:R.source},description:{story:"Com legenda das séries abaixo do gráfico.",...(B=c.parameters)===null||B===void 0||(j=B.docs)===null||j===void 0?void 0:j.description}}};p.parameters={...p.parameters,docs:{...(V=p.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    label: true
  }
}`,...(H=p.parameters)===null||H===void 0||(G=H.docs)===null||G===void 0?void 0:G.source},description:{story:"Com valor de cada barra exibido como label.",...($=p.parameters)===null||$===void 0||(K=$.docs)===null||K===void 0?void 0:K.description}}};u.parameters={...u.parameters,docs:{...(w=u.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    stacked: true,
    caption: true,
    label: true
  }
}`,...(J=u.parameters)===null||J===void 0||(X=J.docs)===null||X===void 0?void 0:X.source},description:{story:"Combinação completa: empilhado, legenda e labels.",...(U=u.parameters)===null||U===void 0||(z=U.docs)===null||z===void 0?void 0:z.description}}};m.parameters={...m.parameters,docs:{...(q=m.parameters)===null||q===void 0?void 0:q.docs,source:{originalSource:`{
  args: {
    data: [],
    seriesStyles: {},
    skeleton: true
  }
}`,...(Q=m.parameters)===null||Q===void 0||(P=Q.docs)===null||P===void 0?void 0:P.source},description:{story:"Skeleton animado — exibido durante o carregamento dos dados.",...(ee=m.parameters)===null||ee===void 0||(Z=ee.docs)===null||Z===void 0?void 0:Z.description}}};_.parameters={..._.parameters,docs:{...(ae=_.parameters)===null||ae===void 0?void 0:ae.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    xAxisFormatter: (value: string) => value.toString(),
    tooltipFormatter: value => \`R$ \${Number(value).toFixed(2).toString().replace(".", ",")}\`
  }
}`,...(te=_.parameters)===null||te===void 0||(re=te.docs)===null||re===void 0?void 0:re.source},description:{story:"Formatação customizada no eixo X e no tooltip.",...(se=_.parameters)===null||se===void 0||(oe=se.docs)===null||oe===void 0?void 0:oe.description}}};const we=["Default","SingleSeries","Stacked","WithCaption","WithLabels","FullFeatured","Skeleton","WithFormatters"];export{l as Default,u as FullFeatured,n as SingleSeries,m as Skeleton,d as Stacked,c as WithCaption,_ as WithFormatters,p as WithLabels,we as __namedExportsOrder,$e as default};
