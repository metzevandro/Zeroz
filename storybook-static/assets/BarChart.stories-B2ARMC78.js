/* empty css               */import{r as y,j as r}from"./iframe-CxNvl9BI.js";import{g as O,B as A,f as R,T as I,C as j,L as B,a as V,b as G}from"./Caption-tBpvOhwI.js";import{X as L,Y as H,C as K}from"./YAxis-DiZUHI8v.js";import"./preload-helper-PPVm8Dsz.js";var W=O({chartName:"BarChart",GraphicalChild:A,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:L},{axisType:"yAxis",AxisComp:H}],formatAxisMap:R});function $(e){return Object.keys(e).filter(a=>a!=="month")}function w(e,a,n){return n?e===0?[0,0,4,4]:e===a-1?[4,4,0,0]:[0,0,0,0]:[4,4,4,4]}function T(){return{month:"","":Math.floor(Math.random()*100)," ":Math.floor(Math.random()*100)}}const b=10,X=1500;function J(){const[e,a]=y.useState(()=>Array.from({length:b},T));return y.useEffect(()=>{const n=setInterval(()=>{a(Array.from({length:b},T))},X);return()=>clearInterval(n)},[]),e}const z="var(--s-color-fill-default-light)",v=({data:e,seriesStyles:a,height:n,width:_,stacked:E=!1,caption:C=!1,label:k=!1,skeleton:s=!1,tooltipFormatter:D,xAxisFormatter:N})=>{const M=J(),g=s?M:e;if(!s&&g.length===0)return null;const h=$(g[0]);return h.length===0?null:r.jsxs(W,{accessibilityLayer:!0,data:g,height:n,width:_,margin:{top:20,left:20,right:20},children:[r.jsx(K,{vertical:!1,stroke:"var(--s-color-border-default)"}),r.jsx(L,{dataKey:"month",tickLine:!1,tickMargin:10,axisLine:!1,tickFormatter:N,style:{font:"var(--s-typography-caption-regular)"},stroke:"var(--s-color-content-light)"}),!s&&r.jsx(I,{formatter:D,content:r.jsx(j,{})}),!s&&C&&r.jsx(B,{content:r.jsx(V,{})}),h.map((x,Y)=>{const F=w(Y,h.length,E),f=s?z:a[x]?.color??"black";return r.jsx(A,{dataKey:x,stackId:E?"a":void 0,fill:f,stroke:f,radius:F,children:!s&&k&&r.jsx(G,{position:"top",style:{font:"var(--s-typography-caption-regular)"},fill:"var(--s-color-content-light)",offset:12})},x)})]})};v.displayName="BarChart";const re={title:"Charts/BarChart",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Gráfico de barras com suporte a modo agrupado e empilhado, tooltip, legenda, labels e skeleton animado."}}},argTypes:{width:{control:{type:"number"},description:"Largura em pixels"},height:{control:{type:"number"},description:"Altura em pixels"},stacked:{control:"boolean",description:"Empilha as séries"},caption:{control:"boolean",description:"Exibe legenda"},label:{control:"boolean",description:"Exibe valor nas barras"},skeleton:{control:"boolean",description:"Modo skeleton animado"},data:{control:!1},seriesStyles:{control:!1}},args:{width:600,height:300,stacked:!1,caption:!1,label:!1,skeleton:!1}},t=[{month:"Jan",Vendas:120,Devoluções:30},{month:"Fev",Vendas:95,Devoluções:15},{month:"Mar",Vendas:140,Devoluções:40},{month:"Abr",Vendas:180,Devoluções:25},{month:"Mai",Vendas:160,Devoluções:35},{month:"Jun",Vendas:200,Devoluções:50}],o={Vendas:{color:"var(--s-color-chart-1)"},Devoluções:{color:"var(--s-color-chart-2)"}},U=t.map(({month:e,Vendas:a})=>({month:e,Vendas:a})),q={Vendas:{color:"var(--s-color-chart-3)"}},i={args:{data:t,seriesStyles:o}},c={args:{data:U,seriesStyles:q}},l={args:{data:t,seriesStyles:o,stacked:!0}},d={args:{data:t,seriesStyles:o,caption:!0}},p={args:{data:t,seriesStyles:o,label:!0}},m={args:{data:t,seriesStyles:o,stacked:!0,caption:!0,label:!0}},u={args:{data:[],seriesStyles:{},skeleton:!0}},S={args:{data:t,seriesStyles:o,xAxisFormatter:e=>e.toString(),tooltipFormatter:e=>`R$ ${Number(e).toFixed(2).toString().replace(".",",")}`}},te=["Default","SingleSeries","Stacked","WithCaption","WithLabels","FullFeatured","Skeleton","WithFormatters"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES
  }
}`,...i.parameters?.docs?.source},description:{story:"Barras agrupadas com duas séries.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: SINGLE_DATA,
    seriesStyles: SINGLE_STYLES
  }
}`,...c.parameters?.docs?.source},description:{story:"Série única.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    stacked: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Barras empilhadas — ideal para composição proporcional.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    caption: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Com legenda das séries abaixo do gráfico.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    label: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Com valor de cada barra exibido como label.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    stacked: true,
    caption: true,
    label: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Combinação completa: empilhado, legenda e labels.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    seriesStyles: {},
    skeleton: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Skeleton animado — exibido durante o carregamento dos dados.",...u.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    xAxisFormatter: (value: string) => value.toString(),
    tooltipFormatter: value => \`R$ \${Number(value).toFixed(2).toString().replace(".", ",")}\`
  }
}`,...S.parameters?.docs?.source},description:{story:"Formatação customizada no eixo X e no tooltip.",...S.parameters?.docs?.description}}};export{i as Default,m as FullFeatured,c as SingleSeries,u as Skeleton,l as Stacked,d as WithCaption,S as WithFormatters,p as WithLabels,te as __namedExportsOrder,re as default};
